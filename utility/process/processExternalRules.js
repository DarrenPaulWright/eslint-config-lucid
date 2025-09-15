const NEWLINE = '\n        ';

const buildDeprecationMessage = (meta) => {
	let output = 'Deprecated';

	if (meta.replacedBy) {
		output += `${ NEWLINE }Replaced by ${ meta.replacedBy.join(', ') }`;
	}

	if (meta.docs?.url) {
		output += NEWLINE + meta.docs.url;
	}

	return output;
};

const buildDescription = (value, isComments) => {
	let description = value.meta?.docs?.description || '';

	if (value.meta?.docs?.url) {
		if (isComments) {
			if (description) {
				description += '\n';
			}

			description += `@see {@link ${ value.meta?.docs?.url }}`;
		}
		else {
			if (description) {
				description += NEWLINE;
			}

			description += value.meta?.docs?.url;
		}
	}

	return description;
};

const processExternalRules = (externalRules, name, isComments) => {
	const rules = {};
	const descriptions = {};
	const deprecated = {};
	const nameBase = name ? `${ name }/` : '';

	const processRule = (value, rule) => {
		if (value.meta?.deprecated) {
			deprecated[nameBase + rule] = buildDeprecationMessage(value.meta);
		}
		else {
			descriptions[rule] = buildDescription(value, isComments);

			rules[nameBase + rule] = value.meta?.docs?.recommended ?
				'error' :
				'off';
		}
	};

	if (externalRules.forEach) {
		externalRules.forEach(processRule);
	}
	else {
		Object.entries(externalRules).forEach(([rule, value]) => {
			processRule(value, rule);
		});
	}

	return [rules, descriptions, deprecated];
};

export default processExternalRules;
