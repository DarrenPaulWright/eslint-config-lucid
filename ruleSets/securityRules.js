import securityPlugin from 'eslint-plugin-security';

/**
 * ESLint rules for [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security).
 *
 * @namespace security
 * @property files .js, .mjs, .cjs
 **/
export default {
	files: [
		'**/*.js',
		'**/*.mjs',
		'**/*.cjs'
	],
	plugins: {
		security: securityPlugin
	},
	rules: {
		/**
		 * @property security/detect-bidi-characters=error - Code quality.
		 * @memberof security
		 **/
		'security/detect-bidi-characters': 'error',

		/**
		 * @property security/detect-buffer-noassert=error - Code quality.
		 * @memberof security
		 **/
		'security/detect-buffer-noassert': 'error',

		/**
		 * @property security/detect-child-process=error - Code quality.
		 * @memberof security
		 **/
		'security/detect-child-process': 'error',

		/**
		 * @property security/detect-disable-mustache-escape=error - Security.
		 * @memberof security
		 **/
		'security/detect-disable-mustache-escape': 'error',

		/**
		 * @property security/detect-eval-with-expression=off - Covered by no-eval.
		 * @memberof security
		 **/
		'security/detect-eval-with-expression': 'off',

		/**
		 * @property security/detect-new-buffer=warn - Code quality.
		 * @memberof security
		 **/
		'security/detect-new-buffer': 'warn',

		/**
		 * @property security/detect-no-csrf-before-method-override=warn - Security.
		 * @memberof security
		 **/
		'security/detect-no-csrf-before-method-override': 'warn',

		/**
		 * @property security/detect-non-literal-fs-filename=warn - Security.
		 * @memberof security
		 **/
		'security/detect-non-literal-fs-filename': 'warn',

		/**
		 * @property security/detect-non-literal-regexp=warn - Security.
		 * @memberof security
		 **/
		'security/detect-non-literal-regexp': 'warn',

		/**
		 * @property security/detect-non-literal-require=warn - Security.
		 * @memberof security
		 **/
		'security/detect-non-literal-require': 'warn',

		/**
		 * @property security/detect-object-injection=off - Arbitrary.
		 * @memberof security
		 **/
		'security/detect-object-injection': 'off',

		/**
		 * @property security/detect-possible-timing-attacks=warn - Security.
		 * @memberof security
		 **/
		'security/detect-possible-timing-attacks': 'warn',

		/**
		 * @property security/detect-pseudoRandomBytes=warn - Code quality.
		 * @memberof security
		 **/
		'security/detect-pseudoRandomBytes': 'warn',

		/**
		 * @property security/detect-unsafe-regex=off - Covered by regexp plugin.
		 * @memberof security
		 **/
		'security/detect-unsafe-regex': 'off'
	}
};
