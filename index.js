import babelPlugin from 'eslint-plugin-babel';
import unicornPlugin from 'eslint-plugin-unicorn';

const OFF = 0;
const WARN = 1;
const ERROR = 2;

export default [
	'eslint:recommended',
	{
		files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
		plugins: {
			unicorn: unicornPlugin
		},
		rules: {
			'curly': ERROR,
			'default-param-last': ERROR,
			'dot-notation': ERROR,
			'eqeqeq': ERROR,
			'no-else-return': ERROR,
			'no-lone-blocks': ERROR,
			'no-labels': ERROR,
			'no-eval': ERROR,
			'no-implied-eval': ERROR,
			'no-implicit-globals': ERROR,
			'no-multi-spaces': ERROR,
			'no-loop-func': ERROR,
			'no-new': ERROR,
			'no-new-func': ERROR,
			'no-new-wrappers': ERROR,
			'no-octal-escape': ERROR,
			'no-script-url': ERROR,
			'no-self-compare': ERROR,
			'no-sequences': ERROR,
			'no-throw-literal': ERROR,
			'no-unused-expressions': ERROR,
			'no-useless-call': ERROR,
			'no-useless-concat': ERROR,
			'no-useless-return': ERROR,
			'no-void': ERROR,
			'radix': ERROR,
			'require-unicode-regexp': ERROR,
			'wrap-iife': ERROR,
			'no-shadow': ERROR,
			'camelcase': ERROR,
			'comma-spacing': ERROR,
			'block-spacing': ERROR,
			'eol-last': ERROR,
			'func-call-spacing': ERROR,
			'computed-property-spacing': ERROR,
			'key-spacing': ERROR,
			'linebreak-style': ERROR,
			'lines-between-class-members': [ERROR,
				'always',
				{ exceptAfterSingleLine: true }],
			'max-depth': ERROR,
			'new-cap': [ERROR, { 'capIsNewExceptionPattern': '$.*' }],
			'new-parens': ERROR,
			'no-lonely-if': ERROR,
			'no-mixed-operators': ERROR,
			'no-mixed-spaces-and-tabs': ERROR,
			'no-multiple-empty-lines': ERROR,
			'no-negated-condition': ERROR,
			'no-new-object': ERROR,
			'no-trailing-spaces': ERROR,
			'no-unneeded-ternary': ERROR,
			'no-whitespace-before-property': ERROR,
			'semi-spacing': ERROR,
			'space-before-blocks': ERROR,
			'space-unary-ops': ERROR,
			'arrow-spacing': ERROR,
			'generator-star-spacing': ERROR,
			'no-duplicate-imports': ERROR,
			'no-useless-computed-key': ERROR,
			'no-useless-constructor': ERROR,
			'no-var': ERROR,
			'func-name-matching': ERROR,
			'prefer-const': ERROR,
			'prefer-spread': ERROR,
			'prefer-rest-params': ERROR,
			'rest-spread-spacing': ERROR,
			'object-shorthand': ERROR,
			'consistent-this': [ERROR, 'self'],
			'space-before-function-paren': [ERROR, 'never'],
			'space-in-parens': [ERROR, 'never'],
			'semi-style': [ERROR, 'last'],
			'arrow-parens': [ERROR, 'always'],
			'semi': [ERROR, 'always', { 'omitLastInOneLineBlock': false }],
			'object-curly-spacing': [ERROR, 'always'],
			'one-var': [ERROR, 'never'],
			'padded-blocks': [ERROR, 'never'],
			'quotes': [ERROR, 'single'],
			'indent': [ERROR, 'tab', {
				SwitchCase: 1,
				MemberExpression: 'off',
				ignoredNodes: [
					'CallExpression > MemberExpression *'
				]
			}],
			'function-paren-newline': OFF,
			'object-curly-newline': [ERROR, {
				multiline: true,
				consistent: true
			}],
			'comma-style': [ERROR, 'last'],
			'brace-style': [ERROR, 'stroustrup'],
			'comma-dangle': [ERROR, 'never'],
			'grouped-accessor-pairs': [ERROR, 'getBeforeSet'],
			'yoda': [ERROR, 'never', { onlyEquality: true }],
			'max-params': [ERROR, { 'max': 5 }],
			'no-console': OFF,
			'no-useless-escape': OFF,
			'no-fallthrough': OFF,
			'no-multi-assign': OFF,
			'func-names': OFF,
			'prefer-destructuring': OFF,
			'prefer-template': OFF,
			'no-undefined': OFF,
			'arrow-body-style': OFF,
			'complexity': WARN,
			'accessor-pairs': WARN,
			'no-warning-comments': WARN,
			'capitalized-comments': WARN,
			'init-declarations': WARN,

			'unicorn/better-regex': ERROR,
			'unicorn/catch-error-name': ERROR,
			'unicorn/consistent-function-scoping': OFF,
			'unicorn/custom-error-definition': OFF,
			'unicorn/error-message': ERROR,
			'unicorn/escape-case': ERROR,
			'unicorn/expiring-todo-comments': OFF,
			'unicorn/explicit-length-check': [ERROR, {
				'non-zero': 'not-equal'
			}],
			'unicorn/filename-case': [ERROR, {
				'cases': {
					camelCase: true,
					pascalCase: true
				},
				ignore: ['^I([A-Z][a-z]+)+']
			}],
			'unicorn/import-index': OFF,
			'unicorn/new-for-builtins': OFF,
			'unicorn/no-abusive-eslint-disable': ERROR,
			'unicorn/no-array-instanceof': ERROR,
			'unicorn/no-console-spaces': OFF,
			'unicorn/no-fn-reference-in-iterator': OFF,
			'unicorn/no-for-loop': OFF,
			'unicorn/no-hex-escape': ERROR,
			'unicorn/no-keyword-prefix': OFF,
			'no-nested-ternary': OFF,
			'unicorn/no-nested-ternary': ERROR,
			'unicorn/no-new-buffer': ERROR,
			'unicorn/no-process-exit': ERROR,
			'unicorn/no-unreadable-array-destructuring': OFF,
			'unicorn/no-unsafe-regex': ERROR,
			'unicorn/no-unused-properties': OFF,
			'unicorn/no-zero-fractions': ERROR,
			'unicorn/number-literal-case': ERROR,
			'unicorn/prefer-add-event-listener': OFF,
			'unicorn/prefer-dataset': OFF,
			'unicorn/prefer-event-key': OFF,
			'unicorn/prefer-flat-map': OFF,
			'unicorn/prefer-includes': ERROR,
			'unicorn/prefer-modern-dom-apis': ERROR,
			'unicorn/prefer-negative-index': ERROR,
			'unicorn/prefer-node-append': ERROR,
			'unicorn/prefer-node-remove': ERROR,
			'unicorn/prefer-query-selector': ERROR,
			'unicorn/prefer-reflect-apply': ERROR,
			'unicorn/prefer-replace-all': OFF,
			'unicorn/prefer-spread': OFF,
			'unicorn/prefer-starts-ends-with': ERROR,
			'unicorn/prefer-string-slice': ERROR,
			'unicorn/prefer-text-content': ERROR,
			'unicorn/prefer-trim-start-end': ERROR,
			'unicorn/prefer-type-error': ERROR,
			'unicorn/prevent-abbreviations': [ERROR, {
				replacements: {
					arg: false,
					args: false,
					conf: false,
					dev: false,
					prod: false,
					doc: false,
					docs: false,
					param: false,
					params: false,
					props: false
				}
			}],
			'unicorn/string-content': OFF,
			'unicorn/throw-new-error': ERROR
		}
	}, {
		files: ['**/*.js', '**/*.jsx'],
		plugins: {
			babel: babelPlugin
		}
	}, {
		files: ['**/*.test.js', '**/*.test.ts'],
		rules: {
			'consistent-this': OFF,
			'init-declarations': OFF,
			'no-new': OFF,
			'unicorn/prevent-abbreviations': OFF
		}
	}, {
		files: ['**/*.bench.js', '**/*.bench.ts'],
		rules: {
			'no-unused-vars': OFF
		}
	}];
