const valueMap = {
	0: 'off',
	1: 'warn',
	2: 'error'
};

const ruleCompare = (a, b) => {
	const aName = a.slice(a.indexOf('/') + 1);
	const bName = b.slice(b.indexOf('/') + 1);

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
	const convert = (value) => {
		if (typeof value === 'number') {
			return value in valueMap ? valueMap[value] : value;
		}

		if (Array.isArray(value)) {
			value[0] = convert(value[0]);
		}

		return value;
	};

	return Object.keys(rules)
		.sort(ruleCompare)
		.reduce((result, key) => {
			result[key] = convert(rules[key]);

			return result;
		}, {});
};
