import babelPlugin from 'eslint-plugin-babel';

/**
 * ESLint rules for [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel). Each rule corresponds to a core eslint rule, and has the same options. These allow modern ES features without throwing false errors.
 *
 * @namespace babel
 * @property files .js, .jsx, .mjs, .cjs
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
		 * @memberof babel
		 **/
		'babel/camelcase': 'error',

		/**
		 * @property babel/new-cap=error - Maintains consistency and readability. Distinguishes instantiable items from instances.
		 * @memberof babel
		 **/
		'babel/new-cap': 'error',

		/**
		 * @property babel/no-invalid-this=error - Code quality.
		 * @memberof babel
		 **/
		'babel/no-invalid-this': 'error',

		/**
		 * @property babel/no-unused-expressions=error - Code quality.
		 * @memberof babel
		 **/
		'babel/no-unused-expressions': 'error',

		/**
		 * @property babel/object-curly-spacing=error - Provides whitespace to make object contents more readable. Gestalt Psychology.
		 * @memberof babel
		 **/
		'babel/object-curly-spacing': ['error', 'always'],

		/**
		 * @property babel/quotes=error - Maintains consistency. Single quotes are visually lighter weight and allow the text within them to be more visible therefor reducing cognitive load.
		 * @memberof babel
		 **/
		'babel/quotes': ['error', 'single'],

		/**
		 * @property babel/semi=error - Semicolons provide the developer with a visual indication of the end of a thought, much like a period in a sentence. Imagine reading a book without periods, the cognitive load is much higher if you have to figure out the end of each thought.
		 * @memberof babel
		 **/
		'babel/semi': [
			'error',
			'always',
			{ omitLastInOneLineBlock: false }
		],

		/**
		 * @property babel/valid-typeof=error - Error prevention.
		 * @memberof babel
		 **/
		'babel/valid-typeof': 'error'
	}
};
