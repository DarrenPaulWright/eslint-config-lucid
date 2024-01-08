const checkValue = (value) => {
	if (Array.isArray(value)) {
		return checkValue(value[0]);
	}

	return value === 'off' || value === 'warn' || value === 'error';
}

const checkValues = (rules) => {
	const output = {};

	Object.entries(rules)
		.forEach(([label, value]) => {
			if (!checkValue(value)) {
				output[label] = value;
			}
		});

	return output;
}

export default checkValues;
