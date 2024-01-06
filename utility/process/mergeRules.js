import ruleLabel from './ruleLabel.js';

const isOverride = (pluginNames, label, previousRules, otherRules, otherRuleNameMap) => {
	if (ruleLabel.isCore(label)) {
		return true;
	}

	if (label in previousRules) {
		return true;
	}

	return !pluginNames.includes(ruleLabel.getPluginName(label)) &&
		otherRules[label] === 'off' &&
		otherRuleNameMap[ruleLabel.getName(label)];
};

const mergeRules = (
	baseRules,
	otherRules,
	deprecated,
	pluginNames,
	previousRules = {}
) => {
	const isPlugin = Boolean(pluginNames);
	const removedRules = {};
	let removedRuleCount = 0;
	const otherRuleNameMap = Object.keys(otherRules)
		.reduce((result, label) => {
			if (pluginNames.includes(ruleLabel.getPluginName(label))) {
				result[ruleLabel.getName(label)] = true;
			}

			return result;
		}, {});

	for (const label in otherRules) {
		if (
			label in baseRules ||
			(
				isPlugin &&
				isOverride(pluginNames, label, previousRules, otherRules, otherRuleNameMap)
			)
		) {
			baseRules[label] = otherRules[label];
		}
		else {
			removedRules[label] = deprecated[label] ?? '';
			++removedRuleCount;
		}
	}

	return [removedRules, removedRuleCount];
};

export default mergeRules;
