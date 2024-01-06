import chalk from 'chalk';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import eslintRules from '../node_modules/eslint/lib/rules/index.js';
import cleanRules from './clean/cleanRules.js';
import getAddedRules from './process/getAddedRules.js';
import mergeRules from './process/mergeRules.js';
import onEnterContinue from './output/onEnterContinue.js';
import prettyPrint from './output/prettyPrint.js';
import printComments from './output/printComments.js';
import processExternalRules from './process/processExternalRules.js';
import ruleLabel from './process/ruleLabel.js';

const argv = process.argv;
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const isTest = argv.includes('--test');
const isComments = argv.includes('--comments');
const commentsData = {};
const errors = [];
const initialPath = argv[1].includes('node_modules') ?
	argv[1].slice(0, argv[1].indexOf('node_modules') - 1) :
	join(__dirname, '..');

const lucid = await import(`file://${ join(initialPath, 'index.js') }`);

// eslint-disable-next-line no-unused-vars
const [coreRules, _, coreDeprecated] = processExternalRules(eslintRules, '');
const allRules = { ...coreRules };

const processPluginRules = (config) => {
	const rules = {};
	const descriptions = {};
	const deprecated = {};

	if ('plugins' in config) {
		Object.entries(config.plugins)
			.forEach(([name, plugin]) => {
				const [subRules, subDescriptions, subDeprecated] =
					processExternalRules(plugin.rules, name);

				Object.assign(rules, subRules);
				Object.assign(descriptions, subDescriptions);
				Object.assign(deprecated, subDeprecated);
			});
	}

	return [rules, descriptions, deprecated];
};

const purgeDeprecatedCoreRules = (rules, removedRules) => {
	for (const rule in rules) {
		if (ruleLabel.isCore(rule) && !(rule in coreRules)) {
			delete rules[rule];

			removedRules[rule] = coreDeprecated[rule];
		}
	}
};

const processConfig = (config, index, configName) => {
	const localRules = config.rules ?? {};
	const pluginNames = Object.keys(config.plugins ?? {});

	const [externalRules, descriptions, deprecated] =
		processPluginRules(config);

	const [removedRules, removedRuleCount] =
		mergeRules(externalRules, localRules, deprecated, pluginNames, allRules);

	const [addedRules, addedRuleCount] =
		getAddedRules(externalRules, localRules, descriptions);

	purgeDeprecatedCoreRules(externalRules, removedRules);

	Object.assign(allRules, externalRules);

	if (isComments) {
		commentsData[pluginNames.join(', ')] = {
			externalRules,
			descriptions,
			configName
		};
	}
	else if (addedRuleCount !== 0 || removedRuleCount !== 0) {
		const name = config.plugins ?
			`${ chalk.yellow(configName) } in ${ chalk.cyan(Object.keys(config.plugins).join(' and ')) }` :
			`${ chalk.yellow(configName) } at index ${ chalk.cyan(index) }`;

		errors.push(`ESLint plugin rules for ${ name } are out of date, added ${ addedRuleCount } and removed ${ removedRuleCount }`);

		if (addedRuleCount !== 0) {
			prettyPrint(
				`${ chalk.green('+ Added') } rules for ${ name }:`,
				addedRules
			);
		}

		if (removedRuleCount !== 0) {
			prettyPrint(
				`${ chalk.redBright('- Removed') } rules for ${ name }:`,
				cleanRules(removedRules)
			);
		}
	}
};

lucid.default.forEach((config, index) => {
	processConfig(config, index, 'lucid');
});

lucid.lucidNode?.forEach((config, index) => {
	processConfig(config, index, 'lucidNode');
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
	console.log('');
	errors.forEach((error) => {
		console.log(error);
	});
	throw new Error('ESLint plugin rules out of date');
}
