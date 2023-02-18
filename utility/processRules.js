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

export default (base, name, isComments) => {
	const rules = {};
	const descriptions = {};
	const deprecated = {};
	const nameBase = name ? `${ name }/` : '';
	const process = (value, rule) => {
		if (value.meta.deprecated) {
			deprecated[nameBase + rule] = buildDeprecationMessage(value.meta);
		}
		else {
			descriptions[rule] = value.meta.docs?.description || '';

			if (value.meta.docs?.url) {
				if (isComments) {
					if (descriptions[rule]) {
						descriptions[rule] += '\n';
					}

					descriptions[rule] += `@see {@link ${ value.meta.docs?.url }}`;
				}
				else {
					if (descriptions[rule]) {
						descriptions[rule] += NEWLINE;
					}

					descriptions[rule] += value.meta.docs?.url;
				}
			}

			rules[nameBase + rule] = value.meta.docs?.recommended ?
				'error' :
				'off';
		}
	};

	if (base.forEach) {
		base.forEach(process);
	}
	else {
		Object.entries(base).forEach(([rule, value]) => {
			process(value, rule);
		});
	}

	return [rules, descriptions, deprecated];
};
