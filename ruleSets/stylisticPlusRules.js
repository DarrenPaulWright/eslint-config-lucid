import stylisticPlusPlugin from '@stylistic/eslint-plugin-plus';

/**
 * ESLint rules for [@stylistic/eslint-plugin-plus](https://www.npmjs.com/package/@stylistic/eslint-plugin-plus).
 *
 * @namespace @stylistic/plus
 * @property files - .js, .jsx, .mjs, .cjs .ts, .tsx
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
		'@stylistic/plus': stylisticPlusPlugin
	},
	rules: {
		/**
		 * Enforce linebreaks after opening and before closing array brackets
		 * @see {@link https://eslint.style/rules/plus/indent-binary-ops}
		 *
		 * @property @stylistic/plus/indent-binary-ops=error - Readability.
		 * @memberOf @stylistic/plus
		 **/
		'@stylistic/plus/indent-binary-ops': ['error', 'tab'],

		'@stylistic/plus/type-generic-spacing': 'off',

		'@stylistic/plus/type-named-tuple-spacing': 'off',

		'@stylistic/plus/curly-newline': ['error', {
			multiline: true,
			minElements: 2,
			consistent: true
		}]
	}
};
