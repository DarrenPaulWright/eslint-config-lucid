import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
// eslint-disable-next-line node/no-unpublished-import
import eslintRules from '../node_modules/eslint/lib/rules/index.js';
import cleanRules from './cleanRules.js';
import getAddedRules from './getAddedRules.js';
import mergeRules from './mergeRules.js';
import onEnterContinue from './onEnterContinue.js';
import prettyPrint from './prettyPrint.js';
import printComments from './printComments.js';
import processRules from './processRules.js';

const argv = process.argv;
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const isTest = argv.includes('--test');
const isComments = argv.includes('--comments');
const commentsData = {};
const errors = [];
const extendConfigs = ['strict'];
const initialPath = argv[1].includes('node_modules') ?
	argv[1].slice(0, argv[1].indexOf('node_modules') - 1) :
	join(__dirname, '..');

const lucid = await import(`file://${ join(initialPath, 'index.js') }`);

const processPluginRules = (data, pluginNames) => {
	const rules = {};
	const descriptions = {};
	const deprecated = {};

	if ('plugins' in data) {
		Object.entries(data.plugins)
			.forEach(([name, plugin]) => {
				const [subRules, subDescriptions, subDeprecated] =
					processRules(plugin.rules, name);

				pluginNames.push(name);

				extendConfigs.forEach((configName) => {
					if (plugin.configs?.[configName]) {
						mergeRules(
							subRules,
							plugin.configs?.[configName]?.rules,
							subDeprecated
						);
					}
				});

				Object.assign(rules, subRules);
				Object.assign(descriptions, subDescriptions);
				Object.assign(deprecated, subDeprecated);
			});
	}

	return [rules, descriptions, deprecated];
};

// eslint-disable-next-line no-unused-vars
const [coreRules, _, coreDeprecated] = processRules(eslintRules, '');
const allRules = { ...coreRules };

const purgeDeprecatedCoreRules = (rules, removedRules) => {
	for (const rule in rules) {
		if (!rule.includes('/') && !(rule in coreRules)) {
			delete rules[rule];

			removedRules[rule] = coreDeprecated[rule];
		}
	}
};

const processConfig = (data, index, configName) => {
	const existingRules = data.rules ?? {};
	const pluginNames = [];
	const [rules, descriptions, deprecated] =
		processPluginRules(data, pluginNames);

	const [removedRules, removedRuleCount] =
		mergeRules(rules, existingRules, deprecated, true, allRules);

	const [addedRules, addedRuleCount] =
		getAddedRules(rules, existingRules, descriptions);

	purgeDeprecatedCoreRules(rules, removedRules);

	Object.assign(allRules, rules);

	if (isComments) {
		commentsData[pluginNames.join(', ')] = {
			rules,
			descriptions,
			configName
		};
	}
	else if (addedRuleCount !== 0 || removedRuleCount !== 0) {
		errors.push(`ESLint plugin rules for ${ configName } at ${ index } are out of date, added ${ addedRuleCount } and removed ${ removedRuleCount }`);

		prettyPrint(`Rules for ${ configName } at ${ index }:`, cleanRules(rules));

		if (addedRuleCount !== 0) {
			prettyPrint(`Added rules for ${ configName } at ${ index }:`, addedRules);
		}

		if (removedRuleCount !== 0) {
			prettyPrint(`Removed rules for ${ configName } at ${ index }:`, cleanRules(removedRules));
		}
	}
};

lucid.default.forEach((data, index) => {
	processConfig(data, index, 'lucid');
});
lucid.lucidNode.forEach((data, index) => {
	processConfig(data, index, 'lucidNode');
});

if (isComments) {
	const entries = Object.entries(commentsData);
	let count = 0;

	for (const [name, data] of entries) {
		const rules = data.rules;

		await printComments(cleanRules(rules), data.descriptions, name);

		count++;

		if (count < entries.length) {
			await onEnterContinue(`${ name } is ${ count } of ${ entries.length } plugins.`);
		}
	}

	process.exit(0);
}
else if (errors.length === 0) {
	console.log('ESLint plugin rules up to date.');
}
else if (isTest) {
	errors.forEach((error) => {
		console.log(error);
	});
	throw new Error('ESLint plugin rules out of date');
}
