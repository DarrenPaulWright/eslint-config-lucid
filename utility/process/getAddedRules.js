export default (base, rules, descriptions) => {
	const addedRules = {};
	let ruleCount = 0;

	for (const rule in base) {
		if (!(rule in rules)) {
			addedRules[rule] = descriptions[rule] ?? '';
			++ruleCount;
		}
	}

	return [addedRules, ruleCount];
};
