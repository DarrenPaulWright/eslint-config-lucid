// eslint-disable-next-line node/no-unpublished-import
import displayValue from 'display-value';

export const pretty = (value) => displayValue(value, {
	beautify: true,
	preferJson: false,
	preferSingleQuote: true
});

export default (...args) => {
	console.log('');
	console.log(...args.map((arg) => {
		return typeof arg === 'object' ?
			pretty(arg) :
			arg;
	}));
};
