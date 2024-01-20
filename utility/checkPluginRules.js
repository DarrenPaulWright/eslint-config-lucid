import chalk from 'chalk';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import cleanRules from './clean/cleanRules.js';
import printMain from './output/printMain.js';
import printResults from './output/printResults.js';
import checkValues from './process/checkValues.js';
import getAddedRules from './process/getAddedRules.js';
import mergeRules from './process/mergeRules.js';
import onEnterContinue from './output/onEnterContinue.js';
import printComments from './output/printComments.js';
import processExternalRules from './process/processExternalRules.js';
import ruleLabel from './process/ruleLabel.js';
import lucid, { lucidNode } from '../index.js';

const argv = process.argv;
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const isTest = argv.includes('--test');
const isComments = argv.includes('--comments');
const commentsData = {};
const errors = [];
const initialPath = argv[1].includes('node_modules') ?
	argv[1].slice(0, argv[1].indexOf('node_modules') - 1) :
	join(__dirname, '..');

const eslintRules = await import(`file://${ join(initialPath, 'node_modules/eslint/lib/rules/index.js') }`);
const main = await import(`file://${ join(initialPath, 'index.js') }`);

// eslint-disable-next-line no-unused-vars
const [coreRules, _, coreDeprecated] = processExternalRules(eslintRules, '');
const allRules = { ...coreRules };

const processPluginRules = (config) => {
	const rules = {};
	const descriptions = {};
	const deprecated = {};
	const badValues = {};

	if ('plugins' in config) {
		Object.entries(config.plugins)
			.forEach(([name, plugin]) => {
				const [subRules, subDescriptions, subDeprecated] =
					processExternalRules(plugin.rules, name);

				const subBadValues = checkValues(config.rules, plugin.rules);

				Object.assign(rules, subRules);
				Object.assign(descriptions, subDescriptions);
				Object.assign(deprecated, subDeprecated);
				Object.assign(badValues, subBadValues);
			});
	}

	return [rules, descriptions, deprecated, badValues];
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

	const [externalRules, descriptions, deprecated, badValues] =
		processPluginRules(config);

	const badValuesCount = Object.keys(badValues).length;

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
	else if (
		addedRuleCount !== 0 ||
		removedRuleCount !== 0 ||
		badValuesCount !== 0
	) {
		const name = config.plugins ?
			`${ chalk.yellow(configName) } in ${ chalk.cyan(Object.keys(config.plugins).join(' and ')) }` :
			`${ chalk.yellow(configName) } at index ${ chalk.cyan(index) }`;

		errors.push(printMain(name, addedRules, removedRules, badValues));
	}
};

lucid.forEach((config, index) => {
	processConfig(config, index, 'main');
});

lucidNode.forEach((config, index) => {
	processConfig(config, index, 'lucidNode');
});

if (!main.lucidNode) {
	main.default.forEach((config, index) => {
		processConfig(config, index, 'main');
	});
}

if (isComments) {
	const entries = Object.entries(commentsData);
	let count = 0;

	for (const [name, data] of entries) {
		const rules = data.externalRules;

		await printComments(cleanRules(rules), data.descriptions, name);

		count++;

		if (count < entries.length) {
			await onEnterContinue(`${ name } is ${ count } of ${ entries.length } plugins.`);
		}
	}

	process.exit(0);
}
else {
	printResults(errors, isTest);
}
