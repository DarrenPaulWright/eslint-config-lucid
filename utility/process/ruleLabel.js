const ruleLabel = {
	isCore: (label) => !label.includes('/'),
	getPluginName: (label) => {
		const index = label.lastIndexOf('/');

		return index === -1 ? '' : label.slice(0, index);
	},
	getName: (label) => label.slice(label.lastIndexOf('/') + 1)
};

export default ruleLabel;
