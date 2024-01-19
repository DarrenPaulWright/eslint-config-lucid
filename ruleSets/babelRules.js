import babelPlugin from 'eslint-plugin-babel';

/**
 * ESLint rules for [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel). Each rule corresponds to a core eslint rule, and has the same options. These allow modern ES features without throwing false errors.
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
		 * @property babel/camelcase=error - Maintains consistency and readability.
		 * @memberOf babel
		 **/
		'babel/camelcase': 'error',

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
		 * @property babel/no-unused-expressions=error - Code quality.
		 * @memberOf babel
		 **/
		'babel/no-unused-expressions': 'error',

		/**
		 * @property babel/semi=error - Semicolons provide the developer with a visual indication of the end of a thought, much like a period in a sentence. Imagine reading a book without periods, the cognitive load is much higher if you have to figure out the end of each thought.
		 * @memberOf babel
		 **/
		'babel/semi': [
			'error',
			'always',
			{ omitLastInOneLineBlock: false }
		],

		/**
		 * @property babel/valid-typeof=error - Error prevention.
		 * @memberOf babel
		 **/
		'babel/valid-typeof': 'error'
	}
};
