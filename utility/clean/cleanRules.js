import ruleLabel from '../process/ruleLabel.js';
import cleanRuleDefinition from './cleanRuleDefinition.js';

const ruleCompare = (a, b) => {
	const aName = ruleLabel.getName(a);
	const bName = ruleLabel.getName(b);

	if (aName < bName) {
		return -1;
	}

	if (bName < aName) {
		return 1;
	}

	if (aName !== a && bName !== b) {
		return 0;
	}

	if (aName !== a) {
		return 1;
	}

	if (bName !== b) {
		return -1;
	}

	return 0;
};

export default (rules) => {
	return Object.keys(rules)
		.sort(ruleCompare)
		.reduce((result, key) => {
			result[key] = cleanRuleDefinition(rules[key]);

			return result;
		}, {});
};
