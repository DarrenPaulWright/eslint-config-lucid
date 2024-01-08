import unicornPlugin from 'eslint-plugin-unicorn';

/**
 * ESLint rules for [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn).
 *
 * @namespace unicorn
 * @property files .js, .jsx,, .mjs, .cjs .ts, .tsx
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
		unicorn: unicornPlugin
	},
	rules: {
		/**
		 * @property unicorn/better-regex=off - Covered by regexp plugin.
		 * @memberof unicorn
		 **/
		'unicorn/better-regex': 'off',

		/**
		 * @property unicorn/catch-error-name=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/catch-error-name': 'error',

		/**
		 * @property unicorn/consistent-destructuring=warn - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/consistent-destructuring': 'warn',

		/**
		 * @property unicorn/consistent-function-scoping=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/consistent-function-scoping': 'off',

		/**
		 * @property unicorn/custom-error-definition=warn - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/custom-error-definition': 'warn',

		/**
		 * @property unicorn/empty-brace-spaces=off - Covered by core rules.
		 * @memberof unicorn
		 **/
		'unicorn/empty-brace-spaces': 'off',

		/**
		 * @property unicorn/error-message=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/error-message': 'error',

		/**
		 * @property unicorn/escape-case=error - Readability.
		 * @memberof unicorn
		 **/
		'unicorn/escape-case': 'error',

		/**
		 * @property unicorn/expiring-todo-comments=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/expiring-todo-comments': 'off',

		/**
		 * @property unicorn/explicit-length-check=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/explicit-length-check': [
			'error',
			{
				'non-zero': 'not-equal'
			}
		],

		/**
		 * @property unicorn/filename-case=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
					pascalCase: true
				},
				ignore: [
					'^(?:[A-Z][a-z]*)+$'
				]
			}
		],

		/**
		 * @property unicorn/import-style=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/import-style': 'off',

		/**
		 * @property unicorn/new-for-builtins=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/new-for-builtins': 'error',

		/**
		 * @property unicorn/no-abusive-eslint-disable=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/no-abusive-eslint-disable': 'error',

		/**
		 * @property unicorn/no-array-callback-reference=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/no-array-callback-reference': 'off',

		/**
		 * @property unicorn/no-array-for-each=off - Problematic reasoning, forEach is more readable.
		 * @memberof unicorn
		 **/
		'unicorn/no-array-for-each': 'off',

		/**
		 * @property unicorn/no-array-method-this-argument=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/no-array-method-this-argument': 'off',

		/**
		 * @property unicorn/no-array-push-push=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-array-push-push': 'error',

		/**
		 * @property unicorn/no-array-reduce=off - Problematic reasoning, reduce is more readable.
		 * @memberof unicorn
		 **/
		'unicorn/no-array-reduce': 'off',

		/**
		 * @property unicorn/no-await-expression-member=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-await-expression-member': 'error',

		/**
		 * @property unicorn/no-console-spaces=warn - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-console-spaces': 'warn',

		/**
		 * @property unicorn/no-document-cookie=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-document-cookie': 'error',

		/**
		 * @property unicorn/no-empty-file=warn - Organization.
		 * @memberof unicorn
		 **/
		'unicorn/no-empty-file': 'warn',

		/**
		 * @property unicorn/no-for-loop=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/no-for-loop': 'off',

		/**
		 * @property unicorn/no-hex-escape=error - Consistency.
		 * @memberof unicorn
		 **/
		'unicorn/no-hex-escape': 'error',

		/**
		 * @property unicorn/no-instanceof-array=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/no-instanceof-array': 'error',

		/**
		 * @property unicorn/no-invalid-remove-event-listener=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/no-invalid-remove-event-listener': 'error',

		/**
		 * @property unicorn/no-keyword-prefix=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/no-keyword-prefix': 'off',

		/**
		 * @property unicorn/no-lonely-if=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-lonely-if': 'error',

		/**
		 * @property unicorn/no-negated-condition=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-negated-condition': 'error',

		/**
		 * @property unicorn/no-nested-ternary=error - Code quality and readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-nested-ternary': 'error',

		/**
		 * @property unicorn/no-new-array=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/no-new-array': 'off',

		/**
		 * @property unicorn/no-new-buffer=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/no-new-buffer': 'off',

		/**
		 * @property unicorn/no-null=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/no-null': 'off',

		/**
		 * @property unicorn/no-object-as-default-parameter=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/no-object-as-default-parameter': 'off',

		/**
		 * @property unicorn/no-process-exit=off - Covered in eslint-config-lucid-node.
		 * @memberof unicorn
		 **/
		'unicorn/no-process-exit': 'off',

		/**
		 * @property unicorn/no-static-only-class=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-static-only-class': 'error',

		/**
		 * @property unicorn/no-thenable=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/no-thenable': 'off',

		/**
		 * @property unicorn/no-this-assignment=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/no-this-assignment': 'off',

		/**
		 * @property unicorn/no-typeof-undefined=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-typeof-undefined': 'error',

		/**
		 * @property unicorn/no-unnecessary-await=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/no-unnecessary-await': 'error',

		/**
		 * @property unicorn/no-unnecessary-polyfills=off - Project specific.
		 * @memberof unicorn
		 **/
		'unicorn/no-unnecessary-polyfills': 'off',

		/**
		 * @property unicorn/no-unreadable-array-destructuring=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-unreadable-array-destructuring': 'error',

		/**
		 * @property unicorn/no-unreadable-iife=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-unreadable-iife': 'error',

		/**
		 * @property unicorn/no-unused-properties=warn - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/no-unused-properties': 'warn',

		/**
		 * @property unicorn/no-useless-fallback-in-spread=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/no-useless-fallback-in-spread': 'error',

		/**
		 * @property unicorn/no-useless-length-check=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-useless-length-check': 'error',

		/**
		 * @property unicorn/no-useless-promise-resolve-reject=off - Covered by promise/no-return-wrap.
		 * @memberof unicorn
		 **/
		'unicorn/no-useless-promise-resolve-reject': 'off',

		/**
		 * @property unicorn/no-useless-spread=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-useless-spread': 'error',

		/**
		 * @property unicorn/no-useless-switch-case=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/no-useless-switch-case': 'error',

		/**
		 * @property unicorn/no-useless-undefined=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-useless-undefined': 'error',

		/**
		 * @property unicorn/no-zero-fractions=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/no-zero-fractions': 'error',

		/**
		 * @property unicorn/number-literal-case=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/number-literal-case': 'error',

		/**
		 * @property unicorn/numeric-separators-style=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/numeric-separators-style': 'off',

		/**
		 * @property unicorn/prefer-add-event-listener=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-add-event-listener': 'off',

		/**
		 * @property unicorn/prefer-array-find=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-array-find': 'error',

		/**
		 * @property unicorn/prefer-array-flat=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-array-flat': 'off',

		/**
		 * @property unicorn/prefer-array-flat-map=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-array-flat-map': 'off',

		/**
		 * @property unicorn/prefer-array-index-of=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-array-index-of': 'error',

		/**
		 * @property unicorn/prefer-array-some=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-array-some': 'error',

		/**
		 * @property unicorn/prefer-at=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-at': 'off',

		/**
		 * @property unicorn/prefer-at=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-blob-reading-methods': 'error',

		/**
		 * @property unicorn/prefer-code-point=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-code-point': 'error',

		/**
		 * @property unicorn/prefer-date-now=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-date-now': 'error',

		/**
		 * @property unicorn/prefer-default-parameters=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-default-parameters': 'error',

		/**
		 * @property unicorn/prefer-dom-node-append=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-dom-node-append': 'error',

		/**
		 * @property unicorn/prefer-dom-node-dataset=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-dom-node-dataset': 'error',

		/**
		 * @property unicorn/prefer-dom-node-remove=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-dom-node-remove': 'error',

		/**
		 * @property unicorn/prefer-dom-node-text-content=warn - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-dom-node-text-content': 'warn',

		/**
		 * @property unicorn/prefer-event-target=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-event-target': 'error',

		/**
		 * @property unicorn/prefer-export-from=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-export-from': 'error',

		/**
		 * @property unicorn/prefer-includes=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-includes': 'error',

		/**
		 * @property unicorn/prefer-json-parse-buffer=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-json-parse-buffer': 'error',

		/**
		 * @property unicorn/prefer-keyboard-event-key=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-keyboard-event-key': 'error',

		/**
		 * @property unicorn/prefer-logical-operator-over-ternary=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-logical-operator-over-ternary': 'error',

		/**
		 * @property unicorn/prefer-math-trunc=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-math-trunc': 2,

		/**
		 * @property unicorn/prefer-modern-dom-apis=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-modern-dom-apis': 2,

		/**
		 * @property unicorn/prefer-modern-math-apis=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-modern-math-apis': 2,

		/**
		 * @property unicorn/prefer-module=error - Consistency.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-module': 2,

		/**
		 * @property unicorn/prefer-native-coercion-functions=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-native-coercion-functions': 'off',

		/**
		 * @property unicorn/prefer-negative-index=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-negative-index': 2,

		/**
		 * @property unicorn/prefer-node-protocol=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-node-protocol': 2,

		/**
		 * @property unicorn/prefer-number-properties=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-number-properties': 'off',

		/**
		 * @property unicorn/prefer-object-from-entries=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-object-from-entries': 'off',

		/**
		 * @property unicorn/prefer-optional-catch-binding=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-optional-catch-binding': 2,

		/**
		 * @property unicorn/prefer-prototype-methods=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-prototype-methods': 2,

		/**
		 * @property unicorn/prefer-query-selector=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-query-selector': 2,

		/**
		 * @property unicorn/prefer-reflect-apply=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-reflect-apply': 'off',

		/**
		 * @property unicorn/prefer-regexp-test=off - Covered by regexp/prefer-regexp-test.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-regexp-test': 'off',

		/**
		 * @property unicorn/prefer-set-has=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-set-has': 'off',

		/**
		 * @property unicorn/prefer-set-size=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-set-size': 'off',

		/**
		 * @property unicorn/prefer-spread=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-spread': 'off',

		/**
		 * @property unicorn/prefer-string-replace-all=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-string-replace-all': 2,

		/**
		 * @property unicorn/prefer-string-slice=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-string-slice': 2,

		/**
		 * @property unicorn/prefer-string-starts-ends-with=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-string-starts-ends-with': 2,

		/**
		 * @property unicorn/prefer-string-trim-start-end=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-string-trim-start-end': 2,

		/**
		 * @property unicorn/prefer-switch=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-switch': 2,

		/**
		 * @property unicorn/prefer-ternary=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-ternary': 2,

		/**
		 * @property unicorn/prefer-top-level-await=off - Covered by promise plugin.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-top-level-await': 'off',

		/**
		 * @property unicorn/prefer-type-error=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/prefer-type-error': 2,

		/**
		 * @property unicorn/prevent-abbreviations=error - Readability and simplicity. Removes ambiguity for future developers.
		 * @memberof unicorn
		 **/
		'unicorn/prevent-abbreviations': [
			2, {
				replacements: {
					arg: false,
					args: false,
					dev: false,
					prod: false,
					db: false,
					doc: false,
					docs: false,
					param: false,
					params: false,
					prop: false,
					props: false
				}
			}
		],

		/**
		 * @property unicorn/relative-url-style=error - Readability and simplicity. MAintains consistent url structure to imports.
		 * @memberof unicorn
		 **/
		'unicorn/relative-url-style': [2, 'always'],

		/**
		 * @property unicorn/require-array-join-separator=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/require-array-join-separator': 2,

		/**
		 * @property unicorn/require-number-to-fixed-digits-argument=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/require-number-to-fixed-digits-argument': 2,

		/**
		 * @property unicorn/require-post-message-target-origin=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/require-post-message-target-origin': 2,

		/**
		 * @property unicorn/string-content=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/string-content': 'off',

		/**
		 * @property unicorn/switch-case-braces=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/switch-case-braces': 2,

		/**
		 * @property unicorn/template-indent=off - Arbitrary.
		 * @memberof unicorn
		 **/
		'unicorn/template-indent': 'off',

		/**
		 * @property unicorn/text-encoding-identifier-case=error - Code quality.
		 * @memberof unicorn
		 **/
		'unicorn/text-encoding-identifier-case': 2,

		/**
		 * @property unicorn/throw-new-error=error - Readability and simplicity.
		 * @memberof unicorn
		 **/
		'unicorn/throw-new-error': 2
	}
};
