export default (
	base,
	rules,
	deprecated,
	isPlugin = true,
	previousRules = {}
) => {
	const removedRules = {};
	let ruleCount = 0;

	for (const rule in rules) {
		if (
			rule in base ||
			(isPlugin && !rule.includes('/')) ||
			(isPlugin && rule in previousRules)
		) {
			base[rule] = rules[rule];
		}
		else {
			removedRules[rule] = deprecated[rule] ?? '';
			++ruleCount;
		}
	}

	return [removedRules, ruleCount];
};
