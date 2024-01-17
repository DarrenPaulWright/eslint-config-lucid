import lodashPlugin from 'eslint-plugin-you-dont-need-lodash-underscore';

/**
 * ESLint rules for [eslint-plugin-you-dont-need-lodash-underscore](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore).
 *
 * @namespace you-dont-need-lodash-underscore
 * @property files .js, .jsx, .mjs, .cjs, .ts, .tsx
 **/
const lodashRules = {
	files: [
		'**/*.js',
		'**/*.jsx',
		'**/*.mjs',
		'**/*.cjs',
		'**/*.ts',
		'**/*.tsx'
	],
	plugins: {
		'you-dont-need-lodash-underscore': lodashPlugin
	},
	rules: {
		'you-dont-need-lodash-underscore/concat': 'off',
		'you-dont-need-lodash-underscore/drop': 'off',
		'you-dont-need-lodash-underscore/drop-right': 'off',
		'you-dont-need-lodash-underscore/index-of': 'off',
		'you-dont-need-lodash-underscore/join': 'off',
		'you-dont-need-lodash-underscore/last': 'off',
		'you-dont-need-lodash-underscore/last-index-of': 'off',
		'you-dont-need-lodash-underscore/reverse': 'off',
		'you-dont-need-lodash-underscore/fill': 'off',
		'you-dont-need-lodash-underscore/find': 'off',
		'you-dont-need-lodash-underscore/detect': 'off',
		'you-dont-need-lodash-underscore/first': 'off',
		'you-dont-need-lodash-underscore/find-index': 'off',
		'you-dont-need-lodash-underscore/is-array': 'off',
		'you-dont-need-lodash-underscore/each': 'off',
		'you-dont-need-lodash-underscore/for-each': 'off',
		'you-dont-need-lodash-underscore/every': 'off',

		/**
		 * All lodash and underscore functions that can be replaced with native
		 * functions will return an error.
		 * @see {@link https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore?tab=readme-ov-file#quick-links}
		 *
		 * @property you-dont-need-lodash-underscore/all=error - Code quality and simplicity.
		 * @memberof you-dont-need-lodash-underscore
		 **/
		'you-dont-need-lodash-underscore/all': 'error',

		'you-dont-need-lodash-underscore/filter': 'off',
		'you-dont-need-lodash-underscore/select': 'off',
		'you-dont-need-lodash-underscore/map': 'off',
		'you-dont-need-lodash-underscore/collect': 'off',
		'you-dont-need-lodash-underscore/reduce': 'off',
		'you-dont-need-lodash-underscore/inject': 'off',
		'you-dont-need-lodash-underscore/foldl': 'off',
		'you-dont-need-lodash-underscore/reduce-right': 'off',
		'you-dont-need-lodash-underscore/foldr': 'off',
		'you-dont-need-lodash-underscore/size': 'off',
		'you-dont-need-lodash-underscore/some': 'off',
		'you-dont-need-lodash-underscore/any': 'off',
		'you-dont-need-lodash-underscore/includes': 'off',
		'you-dont-need-lodash-underscore/contains': 'off',
		'you-dont-need-lodash-underscore/slice': 'off',
		'you-dont-need-lodash-underscore/take-right': 'off',
		'you-dont-need-lodash-underscore/bind': 'off',
		'you-dont-need-lodash-underscore/is-finite': 'off',
		'you-dont-need-lodash-underscore/is-integer': 'off',
		'you-dont-need-lodash-underscore/is-nan': 'off',
		'you-dont-need-lodash-underscore/is-nil': 'off',
		'you-dont-need-lodash-underscore/is-null': 'off',
		'you-dont-need-lodash-underscore/is-undefined': 'off',
		'you-dont-need-lodash-underscore/keys': 'off',
		'you-dont-need-lodash-underscore/extend-own': 'off',
		'you-dont-need-lodash-underscore/assign': 'off',
		'you-dont-need-lodash-underscore/values': 'off',
		'you-dont-need-lodash-underscore/entries': 'off',
		'you-dont-need-lodash-underscore/to-pairs': 'off',
		'you-dont-need-lodash-underscore/pairs': 'off',
		'you-dont-need-lodash-underscore/get': 'off',
		'you-dont-need-lodash-underscore/split': 'off',
		'you-dont-need-lodash-underscore/starts-with': 'off',
		'you-dont-need-lodash-underscore/ends-with': 'off',
		'you-dont-need-lodash-underscore/to-lower': 'off',
		'you-dont-need-lodash-underscore/to-upper': 'off',
		'you-dont-need-lodash-underscore/trim': 'off',
		'you-dont-need-lodash-underscore/pad-start': 'off',
		'you-dont-need-lodash-underscore/pad-end': 'off',
		'you-dont-need-lodash-underscore/repeat': 'off',
		'you-dont-need-lodash-underscore/uniq': 'off',
		'you-dont-need-lodash-underscore/replace': 'off',
		'you-dont-need-lodash-underscore/omit': 'off',
		'you-dont-need-lodash-underscore/flatten': 'off',
		'you-dont-need-lodash-underscore/throttle': 'off',
		'you-dont-need-lodash-underscore/is-string': 'off',
		'you-dont-need-lodash-underscore/cast-array': 'off',
		'you-dont-need-lodash-underscore/is-function': 'off',
		'you-dont-need-lodash-underscore/union-by': 'off',
		'you-dont-need-lodash-underscore/capitalize': 'off',
		'you-dont-need-lodash-underscore/is-date': 'off',
		'you-dont-need-lodash-underscore/defaults': 'off',
		'you-dont-need-lodash-underscore/is-array-buffer': 'off',
		'you-dont-need-lodash-underscore/head': 'off'
	}
};

export default lodashRules;
