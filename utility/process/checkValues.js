import ruleLabel from './ruleLabel.js';
import { Validator } from 'jsonschema';

const validator = new Validator();

const checkValue = (value) => {
	if (Array.isArray(value)) {
		return checkValue(value[0]);
	}

	return value === 'off' || value === 'warn' || value === 'error';
};

const checkSchema = (value, config, label) => {
	if (
		typeof value === 'string' ||
		(
			Array.isArray(value) &&
			(value[0] === 'off' || value.length === 1)
		)
	) {
		return true;
	}

	const configValue = config instanceof Map ?
		config.get(label) :
		config[ruleLabel.getName(label)];

	if (!configValue?.meta?.schema) {
		return true;
	}

	const result = validator.validate(
		Array.isArray(value) ? value.slice(1) : [value],
		configValue.meta.schema
	);

	if (result.errors.length !== 0) {
		console.log('');
		console.log('Schema errors in', label, result.errors);
	}

	return result.errors.length === 0;
};

const checkValues = (rules, config) => {
	const output = {};

	Object.entries(rules)
		.forEach(([label, value]) => {
			if (!checkValue(value, config[label])) {
				output[label] = value;
			}

			if (!checkSchema(value, config, label)) {
				output[label] = value;
			}
		});

	return output;
};

export default checkValues;
