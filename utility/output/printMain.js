import chalk from 'chalk';
import cleanRules from '../clean/cleanRules.js';
import prettyPrint from './prettyPrint.js';

const printMain = (name, addedRules, removedRules, badValues) => {
	const addedRuleCount = Object.keys(addedRules).length;
	const removedRuleCount = Object.keys(removedRules).length;
	const badValuesCount = Object.keys(badValues).length;

	if (addedRuleCount !== 0) {
		prettyPrint(
			`${ chalk.green('+ Added') } rules for ${ name }:`,
			addedRules
		);
	}

	if (removedRuleCount !== 0) {
		prettyPrint(
			`${ chalk.yellow('- Removed') } rules for ${ name }:`,
			cleanRules(removedRules)
		);
	}

	if (badValuesCount) {
		prettyPrint(
			`${ chalk.redBright('- Bad values') } for ${ name }:`,
			badValues
		);
	}

	return `ESLint rules for ${ name } are out of date, added ${ chalk.green(addedRuleCount) }, removed ${ chalk.yellow(removedRuleCount) }, bad ${ chalk.redBright(badValuesCount) }`;
};

export default printMain;
