import stylisticJsPlugin from '@stylistic/eslint-plugin-js';

/**
 * ESLint rules for [@stylistic/eslint-plugin-js](https://www.npmjs.com/package/@stylistic/eslint-plugin-js).
 *
 * @namespace @stylistic/js
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
		'@stylistic/js': stylisticJsPlugin
	},
	rules: {
		/**
		 * Enforce linebreaks after opening and before closing array brackets
		 * @see {@link https://eslint.style/rules/js/array-bracket-newline}
		 *
		 * @property @stylistic/js/array-bracket-newline=off - Incomplete implementation. Doesn't account for objects in multiline situations.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/array-bracket-newline': 'off',

		/**
		 * Enforce consistent spacing inside array brackets
		 * @see {@link https://eslint.style/rules/js/array-bracket-spacing}
		 *
		 * @property @stylistic/js/array-bracket-spacing=error - Provides visual distinction from objects.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/array-bracket-spacing': [
			'error',
			'never'
		],

		/**
		 * Enforce line breaks after each array element
		 * @see {@link https://eslint.style/rules/js/array-element-newline}
		 *
		 * @property @stylistic/js/array-element-newline=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/array-element-newline': ['error', 'consistent'],

		/**
		 * Require parentheses around arrow function arguments
		 * @see {@link https://eslint.style/rules/js/arrow-parens}
		 *
		 * @property @stylistic/js/arrow-parens=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/arrow-parens': ['error', 'always'],

		/**
		 * Enforce consistent spacing before and after the arrow in arrow functions
		 * @see {@link https://eslint.style/rules/js/arrow-spacing}
		 *
		 * @property @stylistic/js/arrow-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/arrow-spacing': 'error',

		/**
		 * Disallow or enforce spaces inside of blocks after opening block and before closing block
		 * @see {@link https://eslint.style/rules/js/block-spacing}
		 *
		 * @property @stylistic/js/block-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/block-spacing': 'error',

		/**
		 * Enforce consistent brace style for blocks
		 * @see {@link https://eslint.style/rules/js/brace-style}
		 *
		 * @property @stylistic/js/brace-style=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/brace-style': ['error', 'stroustrup'],

		/**
		 * Require or disallow trailing commas
		 * @see {@link https://eslint.style/rules/js/comma-dangle}
		 *
		 * @property @stylistic/js/comma-dangle=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/comma-dangle': ['error', 'never'],

		/**
		 * Enforce consistent spacing before and after commas
		 * @see {@link https://eslint.style/rules/js/comma-spacing}
		 *
		 * @property @stylistic/js/comma-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/comma-spacing': 'error',

		/**
		 * Enforce consistent comma style
		 * @see {@link https://eslint.style/rules/js/comma-style}
		 *
		 * @property @stylistic/js/comma-style=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/comma-style': ['error', 'last'],

		/**
		 * Enforce consistent spacing inside computed property brackets
		 * @see {@link https://eslint.style/rules/js/computed-property-spacing}
		 *
		 * @property @stylistic/js/computed-property-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/computed-property-spacing': 'error',

		/**
		 * Enforce consistent newlines before and after dots
		 * @see {@link https://eslint.style/rules/js/dot-location}
		 *
		 * @property @stylistic/js/dot-location=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/dot-location': ['error', 'property'],

		/**
		 * Require or disallow newline at the end of files
		 * @see {@link https://eslint.style/rules/js/eol-last}
		 *
		 * @property @stylistic/js/eol-last=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/eol-last': 'error',

		/**
		 * Enforce line breaks between arguments of a function call
		 * @see {@link https://eslint.style/rules/js/function-call-argument-newline}
		 *
		 * @property @stylistic/js/function-call-argument-newline=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/function-call-argument-newline': ['error', 'consistent'],

		// Renamed to function-call-spacing, but still exported in @stylistic/js
		'@stylistic/js/func-call-spacing': 'off',

		/**
		 * Require or disallow spacing between function identifiers and their invocations
		 * @see {@link https://eslint.style/rules/js/function-call-spacing}
		 *
		 * @property @stylistic/js/function-call-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/function-call-spacing': 'error',

		/**
		 * Enforce consistent line breaks inside function parentheses
		 * @see {@link https://eslint.style/rules/js/function-paren-newline}
		 *
		 * @property @stylistic/js/function-paren-newline=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/function-paren-newline': ['error', 'consistent'],

		/**
		 * Enforce consistent spacing around `*` operators in generator functions
		 * @see {@link https://eslint.style/rules/js/generator-star-spacing}
		 *
		 * @property @stylistic/js/generator-star-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/generator-star-spacing': 'error',

		/**
		 * Enforce the location of arrow function bodies
		 * @see {@link https://eslint.style/rules/js/implicit-arrow-linebreak}
		 *
		 * @property @stylistic/js/implicit-arrow-linebreak=off - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/implicit-arrow-linebreak': ['error', 'beside'],

		/**
		 * Enforce consistent indentation
		 * @see {@link https://eslint.style/rules/js/indent}
		 *
		 * @property @stylistic/js/indent=error - Tabs produce smaller file sizes and allow different developers to view the tabs as they wish.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
				MemberExpression: 'off',
				ignoredNodes: [
					'CallExpression > MemberExpression *'
				]
			}
		],

		/**
		 * Enforce the consistent use of either double or single quotes in JSX attributes
		 * @see {@link https://eslint.style/rules/js/jsx-quotes}
		 *
		 * @property @stylistic/js/jsx-quotes=off - Beyond the scope of this config.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/jsx-quotes': 'off',

		/**
		 * Enforce consistent spacing between keys and values in object literal properties
		 * @see {@link https://eslint.style/rules/js/key-spacing}
		 *
		 * @property @stylistic/js/key-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/key-spacing': 'error',

		/**
		 * Enforce consistent spacing before and after keywords
		 * @see {@link https://eslint.style/rules/js/keyword-spacing}
		 *
		 * @property @stylistic/js/keyword-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/keyword-spacing': 'error',

		/**
		 * Line comments can be positioned above or beside code. This rule helps teams maintain a consistent style.
		 * @see {@link https://eslint.style/rules/js/line-comment-position}
		 *
		 * @property @stylistic/js/line-comment-position=off - Arbitrary.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/line-comment-position': 'off',

		/**
		 * Enforce consistent linebreak style
		 * @see {@link https://eslint.style/rules/js/linebreak-style}
		 *
		 * @property @stylistic/js/linebreak-style=error - Code quality.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/linebreak-style': 'error',

		/**
		 * Require empty lines around comments
		 * @see {@link https://eslint.style/rules/js/lines-around-comment}
		 *
		 * @property @stylistic/js/lines-around-comment=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/lines-around-comment': [
			'error',
			{
				beforeBlockComment: true,
				beforeLineComment: true,
				allowBlockStart: true,
				allowObjectStart: true,
				allowArrayStart: true
			}
		],

		/**
		 * Require or disallow an empty line between class members
		 * @see {@link https://eslint.style/rules/js/lines-between-class-members}
		 *
		 * @property @stylistic/js/lines-between-class-members=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		],

		/**
		 * Enforce a maximum line length
		 * @see {@link https://eslint.style/rules/js/max-len}
		 *
		 * @property @stylistic/js/max-len=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/max-len': [
			'error',
			{
				code: 100,
				tabWidth: 4,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true
			}
		],

		/**
		 * Enforce a maximum number of statements allowed per line
		 * @see {@link https://eslint.style/rules/js/max-statements-per-line}
		 *
		 * @property @stylistic/js/max-statements-per-line=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/max-statements-per-line': 'error',

		/**
		 * Many style guides require a particular style for comments that span multiple lines. For example, some style guides prefer the use of a single block comment for multiline comments, whereas other style guides prefer consecutive line comments.
		 * @see {@link https://eslint.style/rules/js/multiline-comment-style}
		 *
		 * @property @stylistic/js/multiline-comment-style=off - Arbitrary.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/multiline-comment-style': 'off',

		/**
		 * Enforce newlines between operands of ternary expressions
		 * @see {@link https://eslint.style/rules/js/multiline-ternary}
		 *
		 * @property @stylistic/js/multiline-ternary=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/multiline-ternary': ['error', 'always-multiline'],

		/**
		 * Enforce or disallow parentheses when invoking a constructor with no arguments
		 * @see {@link https://eslint.style/rules/js/new-parens}
		 *
		 * @property @stylistic/js/new-parens=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/new-parens': 'error',

		/**
		 * Require a newline after each call in a method chain
		 * @see {@link https://eslint.style/rules/js/newline-per-chained-call}
		 *
		 * @property @stylistic/js/newline-per-chained-call=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/newline-per-chained-call': [
			'error',
			{ ignoreChainWithDepth: 2 }
		],

		/**
		 * Disallow arrow functions where they could be confused with comparisons
		 * @see {@link https://eslint.style/rules/js/no-confusing-arrow}
		 *
		 * @property @stylistic/js/no-confusing-arrow=off - Arbitrary.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/no-confusing-arrow': 'off',

		/**
		 * Disallow unnecessary parentheses
		 * @see {@link https://eslint.style/rules/js/no-extra-parens}
		 *
		 * @property @stylistic/js/no-extra-parens=off - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/no-extra-parens': 'off',

		/**
		 * Disallow unnecessary semicolons
		 * @see {@link https://eslint.style/rules/js/no-extra-semi}
		 *
		 * @property @stylistic/js/no-extra-semi=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/no-extra-semi': 'error',

		/**
		 * Disallow leading or trailing decimal points in numeric literals
		 * @see {@link https://eslint.style/rules/js/no-floating-decimal}
		 *
		 * @property @stylistic/js/no-floating-decimal=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/no-floating-decimal': 'error',

		/**
		 * Disallow mixed binary operators
		 * @see {@link https://eslint.style/rules/js/no-mixed-operators}
		 *
		 * @property @stylistic/js/no-mixed-operators=error - Readability and simplicity and code quality.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/no-mixed-operators': 'error',

		/**
		 * Disallow mixed spaces and tabs for indentation
		 * @see {@link https://eslint.style/rules/js/no-mixed-spaces-and-tabs}
		 *
		 * @property @stylistic/js/no-mixed-spaces-and-tabs=error - Clean formatting.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/no-mixed-spaces-and-tabs': 'error',

		/**
		 * Disallow multiple spaces
		 * @see {@link https://eslint.style/rules/js/no-multi-spaces}
		 *
		 * @property @stylistic/js/no-multi-spaces=error - Clean formatting.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/no-multi-spaces': 'error',

		/**
		 * Disallow multiple empty lines
		 * @see {@link https://eslint.style/rules/js/no-multiple-empty-lines}
		 *
		 * @property @stylistic/js/no-multiple-empty-lines=error - Clean formatting.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/no-multiple-empty-lines': 'error',

		/**
		 * Disallow all tabs
		 * @see {@link https://eslint.style/rules/js/no-tabs}
		 *
		 * @property @stylistic/js/no-tabs=off - Arbitrary.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/no-tabs': 'off',

		/**
		 * Disallow trailing whitespace at the end of lines
		 * @see {@link https://eslint.style/rules/js/no-trailing-spaces}
		 *
		 * @property @stylistic/js/no-trailing-spaces=error - Clean formatting.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/no-trailing-spaces': 'error',

		/**
		 * Disallow whitespace before properties
		 * @see {@link https://eslint.style/rules/js/no-whitespace-before-property}
		 *
		 * @property @stylistic/js/no-whitespace-before-property=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/no-whitespace-before-property': 'error',

		/**
		 * Enforce the location of single-line statements
		 * @see {@link https://eslint.style/rules/js/nonblock-statement-body-position}
		 *
		 * @property @stylistic/js/nonblock-statement-body-position=off - Covered by curly.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/nonblock-statement-body-position': 'off',

		/**
		 * Enforce consistent line breaks after opening and before closing braces
		 * @see {@link https://eslint.style/rules/js/object-curly-newline}
		 *
		 * @property @stylistic/js/object-curly-newline=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/object-curly-newline': [
			'error',
			{
				multiline: true,
				consistent: true
			}
		],

		/**
		 * Enforce consistent spacing inside braces
		 * @see {@link https://eslint.style/rules/js/object-curly-spacing}
		 *
		 * @property @stylistic/js/object-curly-spacing=error - Provides whitespace to make object contents more readable. Gestalt Psychology.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/object-curly-spacing': ['error', 'always'],

		/**
		 * Enforce placing object properties on separate lines
		 * @see {@link https://eslint.style/rules/js/object-property-newline}
		 *
		 * @property @stylistic/js/object-property-newline=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true
			}
		],

		/**
		 * Require or disallow newlines around variable declarations
		 * @see {@link https://eslint.style/rules/js/one-var-declaration-per-line}
		 *
		 * @property @stylistic/js/one-var-declaration-per-line=off - Covered by one-var.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/one-var-declaration-per-line': 'off',

		/**
		 * Enforce consistent linebreak style for operators
		 * @see {@link https://eslint.style/rules/js/operator-linebreak}
		 *
		 * @property @stylistic/js/operator-linebreak=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/operator-linebreak': ['error', 'after'],

		/**
		 * Require or disallow padding within blocks
		 * @see {@link https://eslint.style/rules/js/padded-blocks}
		 *
		 * @property @stylistic/js/padded-blocks=error - Clean formatting.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/padded-blocks': ['error', 'never'],

		/**
		 * Require or disallow padding lines between statements
		 * @see {@link https://eslint.style/rules/js/padding-line-between-statements}
		 *
		 * @property @stylistic/js/padding-line-between-statements=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: 'multiline-const', next: '*' },
			{ blankLine: 'always', prev: 'multiline-let', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'class' },
			{ blankLine: 'always', prev: '*', next: 'switch' },
			{ blankLine: 'always', prev: '*', next: 'while' },
			{ blankLine: 'always', prev: '*', next: 'function' },
			{ blankLine: 'always', prev: '*', next: 'do' },
			{ blankLine: 'always', prev: '*', next: 'export' },
			{ blankLine: 'always', prev: 'multiline-block-like', next: '*' }
		],

		/**
		 * Require quotes around object literal property names
		 * @see {@link https://eslint.style/rules/js/quote-props}
		 *
		 * @property @stylistic/js/quote-props=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/quote-props': ['error', 'as-needed'],

		/**
		 * Enforce the consistent use of either backticks, double, or single quotes
		 * @see {@link https://eslint.style/rules/js/quotes}
		 *
		 * @property @stylistic/js/quotes=error - Maintains consistency. Single quotes are visually lighter weight and allow the text within them to be more visible therefor reducing cognitive load.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/quotes': ['error', 'single'],

		/**
		 * Enforce spacing between rest and spread operators and their expressions
		 * @see {@link https://eslint.style/rules/js/rest-spread-spacing}
		 *
		 * @property @stylistic/js/rest-spread-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/rest-spread-spacing': 'error',

		/**
		 * Require or disallow semicolons instead of ASI
		 * @see {@link https://eslint.style/rules/js/semi}
		 *
		 * @property @stylistic/js/semi=off - Covered by babel/semi.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/semi': 'off',

		/**
		 * Enforce consistent spacing before and after semicolons
		 * @see {@link https://eslint.style/rules/js/semi-spacing}
		 *
		 * @property @stylistic/js/semi-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/semi-spacing': 'error',

		/**
		 * Enforce location of semicolons
		 * @see {@link https://eslint.style/rules/js/semi-style}
		 *
		 * @property @stylistic/js/semi-style=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/semi-style': ['error', 'last'],

		/**
		 * Enforce consistent spacing before blocks
		 * @see {@link https://eslint.style/rules/js/space-before-blocks}
		 *
		 * @property @stylistic/js/space-before-blocks=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/space-before-blocks': 'error',

		/**
		 * Enforce consistent spacing before `function` definition opening parenthesis
		 * @see {@link https://eslint.style/rules/js/space-before-function-paren}
		 *
		 * @property @stylistic/js/space-before-function-paren=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'ignore'
		}],

		/**
		 * Enforce consistent spacing inside parentheses
		 * @see {@link https://eslint.style/rules/js/space-in-parens}
		 *
		 * @property @stylistic/js/space-in-parens=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/space-in-parens': ['error', 'never'],

		/**
		 * Require spacing around infix operators
		 * @see {@link https://eslint.style/rules/js/space-infix-ops}
		 *
		 * @property @stylistic/js/space-infix-ops=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/space-infix-ops': 'error',

		/**
		 * Enforce consistent spacing before or after unary operators
		 * @see {@link https://eslint.style/rules/js/space-unary-ops}
		 *
		 * @property @stylistic/js/space-unary-ops=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/space-unary-ops': 'error',

		/**
		 * Enforce consistent spacing after the `//` or `/*` in a comment
		 * @see {@link https://eslint.style/rules/js/spaced-comment}
		 *
		 * @property @stylistic/js/spaced-comment=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/spaced-comment': ['error', 'always'],

		/**
		 * Enforce spacing around colons of switch statements
		 * @see {@link https://eslint.style/rules/js/switch-colon-spacing}
		 *
		 * @property @stylistic/js/switch-colon-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/switch-colon-spacing': 'error',

		/**
		 * Require or disallow spacing around embedded expressions of template strings
		 * @see {@link https://eslint.style/rules/js/template-curly-spacing}
		 *
		 * @property @stylistic/js/template-curly-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/template-curly-spacing': ['error', 'always'],

		/**
		 * Require or disallow spacing between template tags and their literals
		 * @see {@link https://eslint.style/rules/js/template-tag-spacing}
		 *
		 * @property @stylistic/js/template-tag-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/template-tag-spacing': 'error',

		/**
		 * Require parentheses around immediate `function` invocations
		 * @see {@link https://eslint.style/rules/js/wrap-iife}
		 *
		 * @property @stylistic/js/wrap-iife=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/wrap-iife': ['error', 'inside'],

		/**
		 * Require parenthesis around regex literals
		 * @see {@link https://eslint.style/rules/js/wrap-regex}
		 *
		 * @property @stylistic/js/wrap-regex=off - Arbitrary.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/wrap-regex': 'off',

		/**
		 * Require or disallow spacing around the `*` in `yield*` expressions
		 * @see {@link https://eslint.style/rules/js/yield-star-spacing}
		 *
		 * @property @stylistic/js/yield-star-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic/js
		 **/
		'@stylistic/js/yield-star-spacing': 'error'
	}
};
