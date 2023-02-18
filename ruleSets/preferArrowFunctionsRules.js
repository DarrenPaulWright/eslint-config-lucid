import preferArrowFunctionsPlugin from 'eslint-plugin-prefer-arrow-functions';

/**
 * ESLint rules for [eslint-plugin-prefer-arrow-functions](https://www.npmjs.com/package/eslint-plugin-prefer-arrow-functions).
 *
 * @namespace prefer-arrow-functions
 * @property files .js, .jsx, .mjs, .cjs, .ts, .tsx
 **/
export default {
	files: [
		'**/*.js',
		'**/*.jsx',
		'**/*.mjs',
		'**/*.cjs',
		'**/*.ts',
		'**/*.tsx'
	],
	plugins: {
		'prefer-arrow-functions': preferArrowFunctionsPlugin
	},
	rules: {
		/**
		 * @property prefer-arrow-functions/prefer-arrow-functions=error - Readability and simplicity.
		 * @memberof prefer-arrow-functions
		 **/
		'prefer-arrow-functions/prefer-arrow-functions': [
			'error',
			{
				classPropertiesAllowed: false,
				disallowPrototype: false,
				returnStyle: 'unchanged',
				singleReturnOnly: false
			}
		]
	}
};
