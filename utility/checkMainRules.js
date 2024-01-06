import config from '../index.js';
// eslint-disable-next-line node/no-unpublished-import
import eslintRules from '../node_modules/eslint/lib/rules/index.js';
import cleanRules from './clean/cleanRules.js';
import getAddedRules from './process/getAddedRules.js';
import mergeRules from './process/mergeRules.js';
import prettyPrint from './output/prettyPrint.js';
import printComments from './output/printComments.js';
import processExternalRules from './process/processExternalRules.js';

const argv = process.argv;
const localRules = config[1].rules;
const isTest = argv.includes('--test');
const isComments = argv.includes('--comments');

const [externalRules, descriptions, deprecated] =
	processExternalRules(eslintRules, '', isComments);

const [removedRules, removedRuleCount] =
	mergeRules(externalRules, localRules, deprecated);

const [addedRules, addedRuleCount] =
	getAddedRules(externalRules, localRules, descriptions);

if (isComments) {
	await printComments(externalRules, descriptions, 'core');
	process.exit(0);
}
else if (addedRuleCount !== 0 || removedRuleCount !== 0) {
	if (isTest) {
		throw new Error(`Main ESLint rules out of date, added ${ addedRuleCount } and removed ${ removedRuleCount }`);
	}

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
