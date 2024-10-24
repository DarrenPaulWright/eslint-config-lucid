import promisePlugin from 'eslint-plugin-promise';

/**
 * ESLint rules for [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise).
 *
 * @namespace promise
 * @property files - .js, .jsx, .mjs, .cjs, .ts, .tsx
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
		promise: promisePlugin
	},
	rules: {
		/**
		 * @property promise/always-return=off - Arbitrary.
		 * @memberOf promise
		 **/
		'promise/always-return': 'off',

		/**
		 * @property promise/avoid-new=off - Arbitrary.
		 * @memberOf promise
		 **/
		'promise/avoid-new': 'off',

		/**
		 * @property promise/catch-or-return=error - Code quality.
		 * @memberOf promise
		 **/
		'promise/catch-or-return': 'error',

		/**
		 * @property promise/no-callback-in-promise=warn - Arbitrary.
		 * @memberOf promise
		 **/
		'promise/no-callback-in-promise': 'off',

		/**
		 * @property promise/no-multiple-resolved=error - Code quality.
		 * @memberOf promise
		 **/
		'promise/no-multiple-resolved': 'error',

		/**
		 * @property promise/no-native=off - Arbitrary.
		 * @memberOf promise
		 **/
		'promise/no-native': 'off',

		/**
		 * @property promise/no-nesting=error - Readability and simplicity.
		 * @memberOf promise
		 **/
		'promise/no-nesting': 'error',

		/**
		 * @property promise/no-new-statics=error - Code quality.
		 * @memberOf promise
		 **/
		'promise/no-new-statics': 'error',

		/**
		 * @property promise/no-promise-in-callback=warn - Code quality.
		 * @memberOf promise
		 **/
		'promise/no-promise-in-callback': 'warn',

		/**
		 * @property promise/no-return-in-finally=error - Code quality.
		 * @memberOf promise
		 **/
		'promise/no-return-in-finally': 'error',

		/**
		 * @property promise/no-return-wrap=error - Readability and simplicity.
		 * @memberOf promise
		 **/
		'promise/no-return-wrap': 'error',

		/**
		 * @property promise/param-names=error - Readability and simplicity.
		 * @memberOf promise
		 **/
		'promise/param-names': [
			'error',
			{
				resolvePattern: '^resolve$',
				rejectPattern: '^reject$'
			}
		],

		/**
		 * @property promise/prefer-await-to-callbacks=off - Arbitrary.
		 * @memberOf promise
		 **/
		'promise/prefer-await-to-callbacks': 'off',

		/**
		 * @property promise/prefer-await-to-then=off - Arbitrary.
		 * @memberOf promise
		 **/
		'promise/prefer-await-to-then': 'off',

		/**
		 * @property promise/valid-params=error - Code quality.
		 * @memberOf promise
		 **/
		'promise/valid-params': 'error'
	}
};
