const valueMap = {
	0: 'off',
	1: 'warn',
	2: 'error'
};

const cleanRuleDefinition = (value) => {
	if (typeof value === 'number') {
		return value in valueMap ? valueMap[value] : value;
	}

	if (Array.isArray(value)) {
		value[0] = cleanRuleDefinition(value[0]);
	}

	return value;
};

export default cleanRuleDefinition;
