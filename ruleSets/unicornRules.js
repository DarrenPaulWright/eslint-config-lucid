import unicornPlugin from 'eslint-plugin-unicorn';

/**
 * ESLint rules for [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn).
 *
 * @namespace unicorn
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
		unicorn: unicornPlugin
	},
	rules: {
		/**
		 * @property unicorn/better-regex=off - Covered by regexp plugin.
		 * @memberOf unicorn
		 **/
		'unicorn/better-regex': 'off',

		/**
		 * @property unicorn/catch-error-name=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/catch-error-name': 'error',

		/**
		 * @property unicorn/consistent-assert=error - Readability.
		 * @memberOf unicorn
		 **/
		'unicorn/consistent-assert': 'error',

		/**
		 * @property unicorn/consistent-date-clone=error - Code quality and readability.
		 * @memberOf unicorn
		 **/
		'unicorn/consistent-date-clone': 'error',

		/**
		 * @property unicorn/consistent-destructuring=warn - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/consistent-destructuring': 'warn',

		/**
		 * @property unicorn/consistent-empty-array-spread=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/consistent-empty-array-spread': 'error',

		/**
		 * @property unicorn/consistent-existence-index-check=error - Readability and simplicity, performance.
		 * @memberOf unicorn
		 **/
		'unicorn/consistent-existence-index-check': 'error',

		/**
		 * @property unicorn/consistent-function-scoping=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/consistent-function-scoping': 'off',

		/**
		 * @property unicorn/custom-error-definition=warn - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/custom-error-definition': 'warn',

		/**
		 * @property unicorn/empty-brace-spaces=off - Covered by core rules.
		 * @memberOf unicorn
		 **/
		'unicorn/empty-brace-spaces': 'off',

		/**
		 * @property unicorn/error-message=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/error-message': 'error',

		/**
		 * @property unicorn/escape-case=error - Readability.
		 * @memberOf unicorn
		 **/
		'unicorn/escape-case': 'error',

		/**
		 * @property unicorn/expiring-todo-comments=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/expiring-todo-comments': 'off',

		/**
		 * @property unicorn/explicit-length-check=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/explicit-length-check': [
			'error',
			{
				'non-zero': 'not-equal'
			}
		],

		/**
		 * @property unicorn/filename-case=error - Readability and simplicity.
		 * @memberOf unicorn
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
		 * @memberOf unicorn
		 **/
		'unicorn/import-style': 'off',

		/**
		 * @property unicorn/new-for-builtins=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/new-for-builtins': 'error',

		/**
		 * @property unicorn/no-abusive-eslint-disable=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/no-abusive-eslint-disable': 'error',

		/**
		 * @property unicorn/no-accessor-recursion=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/no-accessor-recursion': 'error',

		/**
		 * @property unicorn/no-anonymous-default-export=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-anonymous-default-export': 'off',

		/**
		 * @property unicorn/no-array-callback-reference=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-array-callback-reference': 'off',

		/**
		 * @property unicorn/no-array-for-each=off - Problematic reasoning, forEach is more readable.
		 * @memberOf unicorn
		 **/
		'unicorn/no-array-for-each': 'off',

		/**
		 * @property unicorn/no-array-method-this-argument=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-array-method-this-argument': 'off',

		/**
		 * @property unicorn/no-array-reduce=off - Problematic reasoning, reduce is more readable.
		 * @memberOf unicorn
		 **/
		'unicorn/no-array-reduce': 'off',

		/**
		 * @property unicorn/no-array-reverse=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-array-reverse': 'off',

		/**
		 * @property unicorn/no-array-sort=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-array-sort': 'off',

		/**
		 * @property unicorn/no-await-expression-member=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-await-expression-member': 'error',

		/**
		 * @property unicorn/no-await-in-promise-methods=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/no-await-in-promise-methods': 'error',

		/**
		 * @property unicorn/no-console-spaces=warn - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-console-spaces': 'warn',

		/**
		 * @property unicorn/no-document-cookie=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-document-cookie': 'error',

		/**
		 * @property unicorn/no-empty-file=warn - Organization.
		 * @memberOf unicorn
		 **/
		'unicorn/no-empty-file': 'warn',

		/**
		 * @property unicorn/no-for-loop=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-for-loop': 'off',

		/**
		 * @property unicorn/no-hex-escape=error - Consistency.
		 * @memberOf unicorn
		 **/
		'unicorn/no-hex-escape': 'error',

		/**
		 * @property unicorn/no-instanceof-builtins=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/no-instanceof-builtins': 'error',

		/**
		 * @property unicorn/no-invalid-fetch-options=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/no-invalid-fetch-options': 'error',

		/**
		 * @property unicorn/no-invalid-remove-event-listener=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/no-invalid-remove-event-listener': 'error',

		/**
		 * @property unicorn/no-keyword-prefix=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-keyword-prefix': 'off',

		/**
		 * @property unicorn/no-lonely-if=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-lonely-if': 'error',

		/**
		 * @property unicorn/no-magic-array-flat-depth=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-magic-array-flat-depth': 'error',

		/**
		 * @property unicorn/no-named-default=error - Code consistency.
		 * @memberOf unicorn
		 **/
		'unicorn/no-named-default': 'error',

		/**
		 * @property unicorn/no-negated-condition=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-negated-condition': 'error',

		/**
		 * @property unicorn/no-negation-in-equality-check=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-negation-in-equality-check': 'error',

		/**
		 * @property unicorn/no-nested-ternary=error - Code quality and readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-nested-ternary': 'error',

		/**
		 * @property unicorn/no-new-array=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-new-array': 'off',

		/**
		 * @property unicorn/no-new-buffer=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-new-buffer': 'off',

		/**
		 * @property unicorn/no-null=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-null': 'off',

		/**
		 * @property unicorn/no-object-as-default-parameter=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-object-as-default-parameter': 'off',

		/**
		 * @property unicorn/no-process-exit=off - Covered in eslint-config-lucid-node.
		 * @memberOf unicorn
		 **/
		'unicorn/no-process-exit': 'off',

		/**
		 * @property unicorn/no-single-promise-in-promise-methods=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-single-promise-in-promise-methods': 'error',

		/**
		 * @property unicorn/no-static-only-class=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-static-only-class': 'error',

		/**
		 * @property unicorn/no-thenable=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-thenable': 'off',

		/**
		 * @property unicorn/no-this-assignment=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/no-this-assignment': 'off',

		/**
		 * @property unicorn/no-typeof-undefined=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-typeof-undefined': 'error',

		/**
		 * @property unicorn/no-unnecessary-array-flat-depth=error - Simplicity and readability.
		 * @memberOf unicorn
		 **/
		'unicorn/no-unnecessary-array-flat-depth': 'error',

		/**
		 * @property unicorn/no-unnecessary-array-splice-count=error - Simplicity and readability.
		 * @memberOf unicorn
		 **/
		'unicorn/no-unnecessary-array-splice-count': 'error',

		/**
		 * @property unicorn/no-unnecessary-await=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/no-unnecessary-await': 'error',

		/**
		 * @property unicorn/no-unnecessary-polyfills=off - Project specific.
		 * @memberOf unicorn
		 **/
		'unicorn/no-unnecessary-polyfills': 'off',

		/**
		 * @property unicorn/no-unnecessary-slice-end=off - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-unnecessary-slice-end': 'off',

		/**
		 * @property unicorn/no-unreadable-array-destructuring=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-unreadable-array-destructuring': 'error',

		/**
		 * @property unicorn/no-unreadable-iife=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-unreadable-iife': 'error',

		/**
		 * @property unicorn/no-unused-properties=warn - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/no-unused-properties': 'warn',

		/**
		 * @property unicorn/no-useless-error-capture-stack-trace=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/no-useless-error-capture-stack-trace': 'error',

		/**
		 * @property unicorn/no-useless-fallback-in-spread=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/no-useless-fallback-in-spread': 'error',

		/**
		 * @property unicorn/no-useless-length-check=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-useless-length-check': 'error',

		/**
		 * @property unicorn/no-useless-promise-resolve-reject=off - Covered by promise/no-return-wrap.
		 * @memberOf unicorn
		 **/
		'unicorn/no-useless-promise-resolve-reject': 'off',

		/**
		 * @property unicorn/no-useless-spread=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-useless-spread': 'error',

		/**
		 * @property unicorn/no-useless-switch-case=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/no-useless-switch-case': 'error',

		/**
		 * @property unicorn/no-useless-undefined=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-useless-undefined': 'error',

		/**
		 * @property unicorn/no-zero-fractions=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/no-zero-fractions': 'error',

		/**
		 * @property unicorn/number-literal-case=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/number-literal-case': 'error',

		/**
		 * @property unicorn/numeric-separators-style=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/numeric-separators-style': 'off',

		/**
		 * @property unicorn/prefer-add-event-listener=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-add-event-listener': 'off',

		/**
		 * @property unicorn/prefer-array-find=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-array-find': 'error',

		/**
		 * @property unicorn/prefer-array-flat=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-array-flat': 'off',

		/**
		 * @property unicorn/prefer-array-flat-map=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-array-flat-map': 'off',

		/**
		 * @property unicorn/prefer-array-index-of=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-array-index-of': 'error',

		/**
		 * @property unicorn/prefer-array-some=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-array-some': 'error',

		/**
		 * @property unicorn/prefer-at=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-at': 'off',

		/**
		 * @property unicorn/prefer-bigint-literals=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-bigint-literals': 'off',

		/**
		 * @property unicorn/prefer-at=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-blob-reading-methods': 'error',

		/**
		 * @property unicorn/prefer-class-fields=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-class-fields': 'error',

		/**
		 * @property unicorn/prefer-classlist-toggle=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-classlist-toggle': 'error',

		/**
		 * @property unicorn/prefer-code-point=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-code-point': 'error',

		/**
		 * @property unicorn/prefer-date-now=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-date-now': 'error',

		/**
		 * @property unicorn/prefer-default-parameters=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-default-parameters': 'error',

		/**
		 * @property unicorn/prefer-dom-node-append=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-dom-node-append': 'error',

		/**
		 * @property unicorn/prefer-dom-node-dataset=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-dom-node-dataset': 'error',

		/**
		 * @property unicorn/prefer-dom-node-remove=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-dom-node-remove': 'error',

		/**
		 * @property unicorn/prefer-dom-node-text-content=warn - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-dom-node-text-content': 'warn',

		/**
		 * @property unicorn/prefer-event-target=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-event-target': 'error',

		/**
		 * @property unicorn/prefer-export-from=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-export-from': 'error',

		/**
		 * @property unicorn/prefer-global-this=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-global-this': 'off',

		/**
		 * @property unicorn/prefer-import-meta-properties=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-import-meta-properties': 'error',

		/**
		 * @property unicorn/prefer-includes=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-includes': 'error',

		/**
		 * @property unicorn/prefer-json-parse-buffer=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-json-parse-buffer': 'error',

		/**
		 * @property unicorn/prefer-keyboard-event-key=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-keyboard-event-key': 'error',

		/**
		 * @property unicorn/prefer-logical-operator-over-ternary=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-logical-operator-over-ternary': 'error',

		/**
		 * @property unicorn/prefer-math-min-max=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-math-min-max': 'error',

		/**
		 * @property unicorn/prefer-math-trunc=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-math-trunc': 'error',

		/**
		 * @property unicorn/prefer-modern-dom-apis=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-modern-dom-apis': 'error',

		/**
		 * @property unicorn/prefer-modern-math-apis=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-modern-math-apis': 'error',

		/**
		 * @property unicorn/prefer-module=error - Consistency.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-module': 'error',

		/**
		 * @property unicorn/prefer-native-coercion-functions=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-native-coercion-functions': 'off',

		/**
		 * @property unicorn/prefer-negative-index=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-negative-index': 'error',

		/**
		 * @property unicorn/prefer-node-protocol=off - Covered by node plugin.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-node-protocol': 'off',

		/**
		 * @property unicorn/prefer-number-properties=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-number-properties': 'off',

		/**
		 * @property unicorn/prefer-object-from-entries=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-object-from-entries': 'off',

		/**
		 * @property unicorn/prefer-optional-catch-binding=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-optional-catch-binding': 'error',

		/**
		 * @property unicorn/prefer-prototype-methods=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-prototype-methods': 'error',

		/**
		 * @property unicorn/prefer-query-selector=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-query-selector': 'error',

		/**
		 * @property unicorn/prefer-reflect-apply=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-reflect-apply': 'off',

		/**
		 * @property unicorn/prefer-regexp-test=off - Covered by regexp/prefer-regexp-test.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-regexp-test': 'off',

		/**
		 * @property unicorn/prefer-set-has=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-set-has': 'off',

		/**
		 * @property unicorn/prefer-set-size=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-set-size': 'off',

		/**
		 * @property unicorn/prefer-single-call=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-single-call': 'error',

		/**
		 * @property unicorn/prefer-spread=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-spread': 'off',

		/**
		 * @property unicorn/prefer-string-raw=off - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-string-raw': 'off',

		/**
		 * @property unicorn/prefer-string-replace-all=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-string-replace-all': 'error',

		/**
		 * @property unicorn/prefer-string-slice=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-string-slice': 'error',

		/**
		 * @property unicorn/prefer-string-starts-ends-with=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-string-starts-ends-with': 'error',

		/**
		 * @property unicorn/prefer-string-trim-start-end=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-string-trim-start-end': 'error',

		/**
		 * @property unicorn/prefer-structured-clone=off - StrucutredClone still has some limitations that other solutions handle, though this could change in the future.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-structured-clone': 'off',

		/**
		 * @property unicorn/prefer-switch=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-switch': 'error',

		/**
		 * @property unicorn/prefer-ternary=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-ternary': 'error',

		/**
		 * @property unicorn/prefer-top-level-await=off - Covered by promise plugin.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-top-level-await': 'off',

		/**
		 * @property unicorn/prefer-type-error=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/prefer-type-error': 'error',

		/**
		 * @property unicorn/prevent-abbreviations=error - Readability and simplicity. Removes ambiguity for future developers.
		 * @memberOf unicorn
		 **/
		'unicorn/prevent-abbreviations': [
			'error', {
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
		 * @memberOf unicorn
		 **/
		'unicorn/relative-url-style': ['error', 'always'],

		/**
		 * @property unicorn/require-array-join-separator=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/require-array-join-separator': 'error',

		/**
		 * @property unicorn/require-module-attributes=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/require-module-attributes': 'error',

		/**
		 * @property unicorn/require-module-specifiers=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/require-module-specifiers': 'error',

		/**
		 * @property unicorn/require-number-to-fixed-digits-argument=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/require-number-to-fixed-digits-argument': 'error',

		/**
		 * @property unicorn/require-post-message-target-origin=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/require-post-message-target-origin': 'error',

		/**
		 * @property unicorn/string-content=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/string-content': 'off',

		/**
		 * @property unicorn/switch-case-braces=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/switch-case-braces': 'error',

		/**
		 * @property unicorn/template-indent=off - Arbitrary.
		 * @memberOf unicorn
		 **/
		'unicorn/template-indent': 'off',

		/**
		 * @property unicorn/text-encoding-identifier-case=error - Code quality.
		 * @memberOf unicorn
		 **/
		'unicorn/text-encoding-identifier-case': 'error',

		/**
		 * @property unicorn/throw-new-error=error - Readability and simplicity.
		 * @memberOf unicorn
		 **/
		'unicorn/throw-new-error': 'error'
	}
};
