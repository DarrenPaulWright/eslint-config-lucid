import babelPlugin from '@babel/eslint-plugin';

/**
 * ESLint rules for [@babel/eslint-plugin](https://www.npmjs.com/package/@babel/eslint-plugin). Each rule corresponds to a core eslint rule, and has the same options. These allow modern ES features without throwing false errors.
 *
 * @namespace babel
 * @property files - .js, .jsx, .mjs, .cjs
 **/
export default {
	files: [
		'**/*.js',
		'**/*.jsx',
		'**/*.ts',
		'**/*.tsx',
		'**/*.mjs',
		'**/*.cjs'
	],
	plugins: {
		babel: babelPlugin
	},
	rules: {
		/**
		 * @property babel/new-cap=error - Maintains consistency and readability. Distinguishes instantiable items from instances.
		 * @memberOf babel
		 **/
		'babel/new-cap': 'error',

		/**
		 * @property babel/no-invalid-this=error - Code quality.
		 * @memberOf babel
		 **/
		'babel/no-invalid-this': 'error',

		/**
		 * @property babel/no-undef=error - Code quality.
		 * @memberOf babel
		 **/
		'babel/no-undef': 'error',

		/**
		 * @property babel/no-unused-expressions=error - Code quality.
		 * @memberOf babel
		 **/
		'babel/no-unused-expressions': 'error'
	}
};
