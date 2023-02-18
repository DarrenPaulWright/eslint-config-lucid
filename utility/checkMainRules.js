import config from '../index.js';
// eslint-disable-next-line node/no-unpublished-import
import eslintRules from '../node_modules/eslint/lib/rules/index.js';
import cleanRules from './cleanRules.js';
import getAddedRules from './getAddedRules.js';
import mergeRules from './mergeRules.js';
import prettyPrint from './prettyPrint.js';
import printComments from './printComments.js';
import processRules from './processRules.js';

const argv = process.argv;
const existingRules = config[1].rules;
const isTest = argv.includes('--test');
const isComments = argv.includes('--comments');

const [rules, descriptions, deprecated] = processRules(
	eslintRules,
	'',
	isComments
);

const [removedRules, removedRuleCount] = mergeRules(
	rules,
	existingRules,
	deprecated,
	false
);

const [addedRules, addedRuleCount] = getAddedRules(
	rules,
	existingRules,
	descriptions
);

if (isComments) {
	await printComments(rules, descriptions, 'core');
	process.exit(0);
}
else if (addedRuleCount !== 0 || removedRuleCount !== 0) {
	if (isTest) {
		throw new Error(`Main ESLint rules out of date, added ${ addedRuleCount } and removed ${ removedRuleCount }`);
	}

	prettyPrint('Main ESLint rules:', cleanRules(rules));

	if (addedRuleCount !== 0) {
		prettyPrint('Added rules:', addedRules);
	}

	if (removedRuleCount !== 0) {
		prettyPrint('Removed rules:', removedRules);
	}
}
else {
	console.log('Main ESLint rules up to date.');
}
