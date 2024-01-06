import onEnterContinue from './onEnterContinue.js';
import { pretty } from './prettyPrint.js';

const valueMap = {
	0: 'off',
	1: 'warn',
	2: 'error'
};

const getMappedValue = (value) => {
	if (Array.isArray(value)) {
		return valueMap[value[0]] || value[0] || 'off';
	}

	return valueMap[value] || value || 'off';
};

export default async (rules, descriptions, pluginName) => {
	const total = Object.keys(rules).length;
	const increment = 50;
	let count = 0;
	let end = increment;

	for (const name in rules) {
		console.log('');
		console.log('/**');

		if (descriptions[name]) {
			console.log(` * ${ descriptions[name].replaceAll('\n', '\n * ') }`);
			console.log(' *');
		}

		console.log(` * @property ${ name }=${ getMappedValue(rules[name]) } - REASON.`);
		console.log(` * @memberof ${ pluginName }`);
		console.log(' **/');
		console.log(` '${ name }': ${ pretty(rules[name]) },`);

		count++;
		const label = `${ Math.max(1, count - increment) }-${ count } of ${ total } for ${ pluginName }.`;

		if (count >= end) {
			await onEnterContinue(label);
			end += increment;
		}
		else if (count >= total) {
			console.log('');
			console.log(label);
		}
	}
};
