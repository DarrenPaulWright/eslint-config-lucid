import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';

/**
 * ESLint rules for [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n). Note that .js files are set up for es module syntax just like .cjs.
 *
 * @namespace node
 * @property files - .js, .mjs, .cjs except where stated.
 **/
const nodeRules = {
	files: [
		'**/*.js',
		'**/*.mjs',
		'**/*.ts',
		'**/*.tsx'
	],
	plugins: {
		node: nodePlugin
	},
	languageOptions: {
		globals: Object.entries(globals.node)
			.reduce((result, [key, value]) => {
				result[key.trim()] = value;

				return result;
			}, {})
	},
	rules: {
		/**
		 * @property node/callback-return=off - Arbitrary.
		 * @memberOf node
		 **/
		'node/callback-return': 'off',

		/**
		 * @property node/exports-style=off - Irrelevant in es module syntax. Set to error for .cjs files.
		 * @memberOf node
		 **/
		'node/exports-style': 'off',

		/**
		 * @property node/file-extension-in-import=error - Code quality. This is turned off in typescript files.
		 * @memberOf node
		 **/
		'node/file-extension-in-import': [
			'error',
			'always'
		],

		/**
		 * @property node/global-require=off - Arbitrary.
		 * @memberOf node
		 **/
		'node/global-require': 'off',

		/**
		 * @property node/handle-callback-err=error - Code quality.
		 * @memberOf node
		 **/
		'node/handle-callback-err': ['error', 'error'],

		/**
		 * @property node/hashbang=warn - Code quality.
		 * @memberOf node
		 **/
		'node/hashbang': 'warn',

		/**
		 * @property node/no-callback-literal=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-callback-literal': 'error',

		/**
		 * @property node/no-deprecated-api=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-deprecated-api': 'error',

		/**
		 * @property node/no-exports-assign=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-exports-assign': 'error',

		/**
		 * @property node/no-extraneous-import=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-extraneous-import': 'error',

		/**
		 * @property node/no-extraneous-require=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-extraneous-require': 'error',

		/**
		 * @property node/no-missing-import=error - Code quality. This is turned off in typescript files.
		 * @memberOf node
		 **/
		'node/no-missing-import': 'error',

		/**
		 * @property node/no-missing-require=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-missing-require': 'error',

		/**
		 * @property node/no-mixed-requires=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-mixed-requires': 'error',

		/**
		 * @property node/no-new-require=error - Readability and simplicity.
		 * @memberOf node
		 **/
		'node/no-new-require': 'error',

		/**
		 * @property node/no-path-concat=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-path-concat': 'error',

		/**
		 * @property node/no-process-env=off - Arbitrary.
		 * @memberOf node
		 **/
		'node/no-process-env': 'off',

		/**
		 * @property node/no-process-exit=error - Code quality. If your building a CLI app then this can be turned off.
		 * @memberOf node
		 **/
		'node/no-process-exit': 'error',

		/**
		 * @property node/no-restricted-import=off - Project specific.
		 * @memberOf node
		 **/
		'node/no-restricted-import': 'off',

		/**
		 * @property node/no-restricted-require=off - Project specific.
		 * @memberOf node
		 **/
		'node/no-restricted-require': 'off',

		/**
		 * @property node/no-sync=error - Performance.
		 * @memberOf node
		 **/
		'node/no-sync': 'error',

		/**
		 * @property node/node/no-top-level-await=error - Performance.
		 * @memberOf node
		 **/
		'node/no-top-level-await': 'error',

		/**
		 * @property node/no-unpublished-bin=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-unpublished-bin': 'error',

		/**
		 * @property node/no-unpublished-import=off - False positives.
		 * @memberOf node
		 **/
		'node/no-unpublished-import': 'off',

		/**
		 * @property node/no-unpublished-require=off - False positives.
		 * @memberOf node
		 **/
		'node/no-unpublished-require': 'off',

		/**
		 * @property node/no-unsupported-features/es-builtins=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-unsupported-features/es-builtins': 'error',

		/**
		 * @property node/no-unsupported-features/es-syntax=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-unsupported-features/es-syntax': [
			'error',
			{
				ignores: [
					'modules'
				]
			}
		],

		/**
		 * @property node/no-unsupported-features/node-builtins=error - Code quality.
		 * @memberOf node
		 **/
		'node/no-unsupported-features/node-builtins': 'error',

		/**
		 * @property node/prefer-global/buffer=error - Readability and simplicity.
		 * @memberOf node
		 **/
		'node/prefer-global/buffer': ['error', 'always'],

		/**
		 * @property node/prefer-global/console=error - Readability and simplicity.
		 * @memberOf node
		 **/
		'node/prefer-global/console': ['error', 'always'],

		/**
		 * @property node/prefer-global/process=error - Readability and simplicity.
		 * @memberOf node
		 **/
		'node/prefer-global/process': ['error', 'always'],

		/**
		 * @property node/prefer-global/text-decoder=error - Readability and simplicity.
		 * @memberOf node
		 **/
		'node/prefer-global/text-decoder': 'error',

		/**
		 * @property node/prefer-global/text-encoder=error - Readability and simplicity.
		 * @memberOf node
		 **/
		'node/prefer-global/text-encoder': 'error',

		/**
		 * @property node/prefer-global/url=error - Readability and simplicity.
		 * @memberOf node
		 **/
		'node/prefer-global/url': ['error', 'always'],

		/**
		 * @property node/prefer-global/url-search-params=error - Readability and simplicity.
		 * @memberOf node
		 **/
		'node/prefer-global/url-search-params': ['error', 'always'],

		/**
		 * @property node/prefer-node-protocol=error - Readability and simplicity.
		 * @memberOf node
		 **/
		'node/prefer-node-protocol': 'error',

		/**
		 * @property node/prefer-promises/dns=error - Code quality.
		 * @memberOf node
		 **/
		'node/prefer-promises/dns': 'error',

		/**
		 * @property node/prefer-promises/fs=error - Code quality.
		 * @memberOf node
		 **/
		'node/prefer-promises/fs': 'error',

		/**
		 * @property node/process-exit-as-throw=error - Fixes consistent-return rule.
		 * @memberOf node
		 **/
		'node/process-exit-as-throw': 'error'
	}
};

export default nodeRules;

export const nodeScriptRules = {
	files: [
		'**/*.cjs'
	],
	plugins: {
		node: nodePlugin
	},
	languageOptions: {
		globals: nodePlugin.configs['recommended-script'].globals
	},
	rules: {
		...nodeRules.rules,
		'node/exports-style': 'error'
	}
};

export const nodeTypescriptRules = {
	files: [
		'**/*.ts',
		'**/*.tsx'
	],
	rules: {
		'node/no-missing-import': 'off',
		'node/file-extension-in-import': 'off'
	}
};
