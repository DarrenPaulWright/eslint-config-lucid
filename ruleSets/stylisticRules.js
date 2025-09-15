import stylisticPlugin from '@stylistic/eslint-plugin';

/**
 * ESLint rules for [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin).
 *
 * @namespace @stylistic
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
		'@stylistic': stylisticPlugin
	},
	rules: {
		/**
		 * This rule requires or disallows a line break between { and its following token, and between } and its preceding token of block-like structures.
		 * @see {@link https://eslint.style/rules/curly-newline}
		 *
		 * @property @stylistic/curly-newline=error - Readability.
		 * @memberOf @stylistic
		 **/
		'@stylistic/curly-newline': ['error', {
			multiline: true,
			minElements: 2,
			consistent: true
		}],

		/**
		 * Enforce linebreaks after opening and before closing array brackets
		 * @see {@link https://eslint.style/rules/array-bracket-newline}
		 *
		 * @property @stylistic/array-bracket-newline=off - Incomplete implementation. Doesn't account for objects in multiline situations.
		 * @memberOf @stylistic
		 **/
		'@stylistic/array-bracket-newline': 'off',

		/**
		 * Enforce consistent spacing inside array brackets
		 * @see {@link https://eslint.style/rules/array-bracket-spacing}
		 *
		 * @property @stylistic/array-bracket-spacing=error - Provides visual distinction from objects.
		 * @memberOf @stylistic
		 **/
		'@stylistic/array-bracket-spacing': [
			'error',
			'never'
		],

		/**
		 * Enforce line breaks after each array element
		 * @see {@link https://eslint.style/rules/array-element-newline}
		 *
		 * @property @stylistic/array-element-newline=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/array-element-newline': ['error', 'consistent'],

		/**
		 * Require parentheses around arrow function arguments
		 * @see {@link https://eslint.style/rules/arrow-parens}
		 *
		 * @property @stylistic/arrow-parens=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/arrow-parens': ['error', 'always'],

		/**
		 * Enforce consistent spacing before and after the arrow in arrow functions
		 * @see {@link https://eslint.style/rules/arrow-spacing}
		 *
		 * @property @stylistic/arrow-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/arrow-spacing': 'error',

		/**
		 * Disallow or enforce spaces inside of blocks after opening block and before closing block
		 * @see {@link https://eslint.style/rules/block-spacing}
		 *
		 * @property @stylistic/block-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/block-spacing': 'error',

		/**
		 * Enforce consistent brace style for blocks
		 * @see {@link https://eslint.style/rules/brace-style}
		 *
		 * @property @stylistic/brace-style=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/brace-style': ['error', 'stroustrup'],

		/**
		 * Require or disallow trailing commas
		 * @see {@link https://eslint.style/rules/comma-dangle}
		 *
		 * @property @stylistic/comma-dangle=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/comma-dangle': ['error', 'never'],

		/**
		 * Enforce consistent spacing before and after commas
		 * @see {@link https://eslint.style/rules/comma-spacing}
		 *
		 * @property @stylistic/comma-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/comma-spacing': 'error',

		/**
		 * Enforce consistent comma style
		 * @see {@link https://eslint.style/rules/comma-style}
		 *
		 * @property @stylistic/comma-style=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/comma-style': ['error', 'last'],

		/**
		 * Enforce consistent spacing inside computed property brackets
		 * @see {@link https://eslint.style/rules/computed-property-spacing}
		 *
		 * @property @stylistic/computed-property-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/computed-property-spacing': 'error',

		/**
		 * Enforce consistent newlines before and after dots
		 * @see {@link https://eslint.style/rules/dot-location}
		 *
		 * @property @stylistic/dot-location=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/dot-location': ['error', 'property'],

		/**
		 * Require or disallow newline at the end of files
		 * @see {@link https://eslint.style/rules/eol-last}
		 *
		 * @property @stylistic/eol-last=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/eol-last': 'error',

		/**
		 * Enforce line breaks between arguments of a function call
		 * @see {@link https://eslint.style/rules/function-call-argument-newline}
		 *
		 * @property @stylistic/function-call-argument-newline=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/function-call-argument-newline': ['error', 'consistent'],

		/**
		 * Require or disallow spacing between function identifiers and their invocations
		 * @see {@link https://eslint.style/rules/function-call-spacing}
		 *
		 * @property @stylistic/function-call-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/function-call-spacing': 'error',

		/**
		 * Enforce consistent line breaks inside function parentheses
		 * @see {@link https://eslint.style/rules/function-paren-newline}
		 *
		 * @property @stylistic/function-paren-newline=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/function-paren-newline': ['error', 'consistent'],

		/**
		 * Enforce consistent spacing around `*` operators in generator functions
		 * @see {@link https://eslint.style/rules/generator-star-spacing}
		 *
		 * @property @stylistic/generator-star-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/generator-star-spacing': 'error',

		/**
		 * Enforce the location of arrow function bodies
		 * @see {@link https://eslint.style/rules/implicit-arrow-linebreak}
		 *
		 * @property @stylistic/implicit-arrow-linebreak=off - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

		/**
		 * Enforce consistent indentation
		 * @see {@link https://eslint.style/rules/indent}
		 *
		 * @property @stylistic/indent=error - Tabs produce smaller file sizes and allow different developers to view the tabs as they wish.
		 * @memberOf @stylistic
		 **/
		'@stylistic/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
				MemberExpression: 'off',
				ignoredNodes: [
					'JSXElement *',
					'JSXElement',
					'CallExpression > MemberExpression *'
				]
			}
		],

		/**
		 * Enforce linebreaks after opening and before closing array brackets
		 * @see {@link https://eslint.style/rules/indent-binary-ops}
		 *
		 * @property @stylistic/indent-binary-ops=error - Readability.
		 * @memberOf @stylistic
		 **/
		'@stylistic/indent-binary-ops': ['error', 'tab'],

		/**
		 * @see {@link https://eslint.style/rules/jsx-child-element-spacing}
		 *
		 * @property @stylistic/jsx-child-element-spacing=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-child-element-spacing': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-closing-bracket-location}
		 *
		 * @property @stylistic/jsx-closing-bracket-location=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-closing-bracket-location': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-closing-tag-location}
		 *
		 * @property @stylistic/jsx-closing-tag-location=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-closing-tag-location': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-curly-brace-presence}
		 *
		 * @property @stylistic/jsx-curly-brace-presence=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-curly-brace-presence': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-curly-newline}
		 *
		 * @property @stylistic/jsx-curly-newline=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-curly-newline': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-curly-spacing}
		 *
		 * @property @stylistic/jsx-curly-spacing=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-curly-spacing': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-equals-spacing}
		 *
		 * @property @stylistic/jsx-equals-spacing=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-equals-spacing': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-first-prop-new-line}
		 *
		 * @property @stylistic/jsx-first-prop-new-line=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-first-prop-new-line': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-function-call-newline}
		 *
		 * @property @stylistic/jsx-function-call-newline=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-function-call-newline': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-indent-props}
		 *
		 * @property @stylistic/jsx-indent-props=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-indent-props': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-max-props-per-line}
		 *
		 * @property @stylistic/jsx-max-props-per-line=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-max-props-per-line': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-newline}
		 *
		 * @property @stylistic/jsx-newline=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-newline': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-one-expression-per-line}
		 *
		 * @property @stylistic/jsx-one-expression-per-line=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-one-expression-per-line': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-pascal-case}
		 *
		 * @property @stylistic/jsx-pascal-case=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-pascal-case': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-self-closing}
		 *
		 * @property @stylistic/jsx-self-closing=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-self-closing-comp': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-sort-props}
		 *
		 * @property @stylistic/jsx-sort-props=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-sort-props': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-tag-spacing}
		 *
		 * @property @stylistic/jsx-tag-spacing=error - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-tag-spacing': 'off',

		/**
		 * @see {@link https://eslint.style/rules/jsx-wrap-multilines}
		 *
		 * @property @stylistic/jsx-wrap-multilines=off - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-wrap-multilines': 'off',

		/**
		 * Enforce the consistent use of either double or single quotes in JSX attributes
		 * @see {@link https://eslint.style/rules/jsx-quotes}
		 *
		 * @property @stylistic/jsx-quotes=off - Beyond the scope of this config.
		 * @memberOf @stylistic
		 **/
		'@stylistic/jsx-quotes': 'off',

		/**
		 * Enforce consistent spacing between keys and values in object literal properties
		 * @see {@link https://eslint.style/rules/key-spacing}
		 *
		 * @property @stylistic/key-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/key-spacing': 'error',

		/**
		 * Enforce consistent spacing before and after keywords
		 * @see {@link https://eslint.style/rules/keyword-spacing}
		 *
		 * @property @stylistic/keyword-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/keyword-spacing': 'error',

		/**
		 * Line comments can be positioned above or beside code. This rule helps teams maintain a consistent style.
		 * @see {@link https://eslint.style/rules/line-comment-position}
		 *
		 * @property @stylistic/line-comment-position=off - Arbitrary.
		 * @memberOf @stylistic
		 **/
		'@stylistic/line-comment-position': 'off',

		/**
		 * Enforce consistent linebreak style
		 * @see {@link https://eslint.style/rules/linebreak-style}
		 *
		 * @property @stylistic/linebreak-style=error - Code quality.
		 * @memberOf @stylistic
		 **/
		'@stylistic/linebreak-style': 'error',

		/**
		 * Require empty lines around comments
		 * @see {@link https://eslint.style/rules/lines-around-comment}
		 *
		 * @property @stylistic/lines-around-comment=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/lines-around-comment': [
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
		 * @see {@link https://eslint.style/rules/lines-between-class-members}
		 *
		 * @property @stylistic/lines-between-class-members=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		],

		/**
		 * Enforce a maximum line length
		 * @see {@link https://eslint.style/rules/max-len}
		 *
		 * @property @stylistic/max-len=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/max-len': [
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
		 * @see {@link https://eslint.style/rules/max-statements-per-line}
		 *
		 * @property @stylistic/max-statements-per-line=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/max-statements-per-line': 'error',

		/**
		 * @see {@link https://eslint.style/rules/member-delimiter-style}
		 *
		 * @property @stylistic/member-delimiter-style=off - Handled by eslint-plugin-lucid-typescript.
		 * @memberOf @stylistic
		 **/
		'@stylistic/member-delimiter-style': 'off',

		/**
		 * Many style guides require a particular style for comments that span multiple lines. For example, some style guides prefer the use of a single block comment for multiline comments, whereas other style guides prefer consecutive line comments.
		 * @see {@link https://eslint.style/rules/multiline-comment-style}
		 *
		 * @property @stylistic/multiline-comment-style=off - Arbitrary.
		 * @memberOf @stylistic
		 **/
		'@stylistic/multiline-comment-style': 'off',

		/**
		 * Enforce newlines between operands of ternary expressions
		 * @see {@link https://eslint.style/rules/multiline-ternary}
		 *
		 * @property @stylistic/multiline-ternary=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/multiline-ternary': ['error', 'always-multiline'],

		/**
		 * Enforce or disallow parentheses when invoking a constructor with no arguments
		 * @see {@link https://eslint.style/rules/new-parens}
		 *
		 * @property @stylistic/new-parens=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/new-parens': 'error',

		/**
		 * Require a newline after each call in a method chain
		 * @see {@link https://eslint.style/rules/newline-per-chained-call}
		 *
		 * @property @stylistic/newline-per-chained-call=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/newline-per-chained-call': [
			'error',
			{ ignoreChainWithDepth: 2 }
		],

		/**
		 * Disallow arrow functions where they could be confused with comparisons
		 * @see {@link https://eslint.style/rules/no-confusing-arrow}
		 *
		 * @property @stylistic/no-confusing-arrow=off - Arbitrary.
		 * @memberOf @stylistic
		 **/
		'@stylistic/no-confusing-arrow': 'off',

		/**
		 * Disallow unnecessary parentheses
		 * @see {@link https://eslint.style/rules/no-extra-parens}
		 *
		 * @property @stylistic/no-extra-parens=off - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/no-extra-parens': 'off',

		/**
		 * Disallow unnecessary semicolons
		 * @see {@link https://eslint.style/rules/no-extra-semi}
		 *
		 * @property @stylistic/no-extra-semi=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/no-extra-semi': 'error',

		/**
		 * Disallow leading or trailing decimal points in numeric literals
		 * @see {@link https://eslint.style/rules/no-floating-decimal}
		 *
		 * @property @stylistic/no-floating-decimal=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/no-floating-decimal': 'error',

		/**
		 * Disallow mixed binary operators
		 * @see {@link https://eslint.style/rules/no-mixed-operators}
		 *
		 * @property @stylistic/no-mixed-operators=error - Readability and simplicity and code quality.
		 * @memberOf @stylistic
		 **/
		'@stylistic/no-mixed-operators': 'error',

		/**
		 * Disallow mixed spaces and tabs for indentation
		 * @see {@link https://eslint.style/rules/no-mixed-spaces-and-tabs}
		 *
		 * @property @stylistic/no-mixed-spaces-and-tabs=error - Clean formatting.
		 * @memberOf @stylistic
		 **/
		'@stylistic/no-mixed-spaces-and-tabs': 'error',

		/**
		 * Disallow multiple spaces
		 * @see {@link https://eslint.style/rules/no-multi-spaces}
		 *
		 * @property @stylistic/no-multi-spaces=error - Clean formatting.
		 * @memberOf @stylistic
		 **/
		'@stylistic/no-multi-spaces': 'error',

		/**
		 * Disallow multiple empty lines
		 * @see {@link https://eslint.style/rules/no-multiple-empty-lines}
		 *
		 * @property @stylistic/no-multiple-empty-lines=error - Clean formatting.
		 * @memberOf @stylistic
		 **/
		'@stylistic/no-multiple-empty-lines': 'error',

		/**
		 * Disallow all tabs
		 * @see {@link https://eslint.style/rules/no-tabs}
		 *
		 * @property @stylistic/no-tabs=off - Arbitrary.
		 * @memberOf @stylistic
		 **/
		'@stylistic/no-tabs': 'off',

		/**
		 * Disallow trailing whitespace at the end of lines
		 * @see {@link https://eslint.style/rules/no-trailing-spaces}
		 *
		 * @property @stylistic/no-trailing-spaces=error - Clean formatting.
		 * @memberOf @stylistic
		 **/
		'@stylistic/no-trailing-spaces': 'error',

		/**
		 * Disallow whitespace before properties
		 * @see {@link https://eslint.style/rules/no-whitespace-before-property}
		 *
		 * @property @stylistic/no-whitespace-before-property=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/no-whitespace-before-property': 'error',

		/**
		 * Enforce the location of single-line statements
		 * @see {@link https://eslint.style/rules/nonblock-statement-body-position}
		 *
		 * @property @stylistic/nonblock-statement-body-position=off - Covered by curly.
		 * @memberOf @stylistic
		 **/
		'@stylistic/nonblock-statement-body-position': 'off',

		/**
		 * Enforce consistent line breaks after opening and before closing braces
		 * @see {@link https://eslint.style/rules/object-curly-newline}
		 *
		 * @property @stylistic/object-curly-newline=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/object-curly-newline': [
			'error',
			{
				multiline: true,
				consistent: true
			}
		],

		/**
		 * Enforce consistent spacing inside braces
		 * @see {@link https://eslint.style/rules/object-curly-spacing}
		 *
		 * @property @stylistic/object-curly-spacing=error - Provides whitespace to make object contents more readable. Gestalt Psychology.
		 * @memberOf @stylistic
		 **/
		'@stylistic/object-curly-spacing': ['error', 'always'],

		/**
		 * Enforce placing object properties on separate lines
		 * @see {@link https://eslint.style/rules/object-property-newline}
		 *
		 * @property @stylistic/object-property-newline=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true
			}
		],

		/**
		 * Require or disallow newlines around variable declarations
		 * @see {@link https://eslint.style/rules/one-var-declaration-per-line}
		 *
		 * @property @stylistic/one-var-declaration-per-line=off - Covered by one-var.
		 * @memberOf @stylistic
		 **/
		'@stylistic/one-var-declaration-per-line': 'off',

		/**
		 * Enforce consistent linebreak style for operators
		 * @see {@link https://eslint.style/rules/operator-linebreak}
		 *
		 * @property @stylistic/operator-linebreak=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/operator-linebreak': ['error', 'after'],

		/**
		 * Require or disallow padding within blocks
		 * @see {@link https://eslint.style/rules/padded-blocks}
		 *
		 * @property @stylistic/padded-blocks=error - Clean formatting.
		 * @memberOf @stylistic
		 **/
		'@stylistic/padded-blocks': ['error', 'never'],

		/**
		 * Require or disallow padding lines between statements
		 * @see {@link https://eslint.style/rules/padding-line-between-statements}
		 *
		 * @property @stylistic/padding-line-between-statements=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/padding-line-between-statements': [
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
		 * @see {@link https://eslint.style/rules/quote-props}
		 *
		 * @property @stylistic/quote-props=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/quote-props': ['error', 'as-needed'],

		/**
		 * Enforce the consistent use of either backticks, double, or single quotes
		 * @see {@link https://eslint.style/rules/quotes}
		 *
		 * @property @stylistic/quotes=error - Maintains consistency. Single quotes are visually lighter weight and allow the text within them to be more visible therefor reducing cognitive load.
		 * @memberOf @stylistic
		 **/
		'@stylistic/quotes': ['error', 'single'],

		/**
		 * Enforce spacing between rest and spread operators and their expressions
		 * @see {@link https://eslint.style/rules/rest-spread-spacing}
		 *
		 * @property @stylistic/rest-spread-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/rest-spread-spacing': 'error',

		/**
		 * Require or disallow semicolons instead of ASI
		 * @see {@link https://eslint.style/rules/semi}
		 *
		 * @property @stylistic/semi=off - Covered by babel/semi.
		 * @memberOf @stylistic
		 **/
		'@stylistic/semi': 'off',

		/**
		 * Enforce consistent spacing before and after semicolons
		 * @see {@link https://eslint.style/rules/semi-spacing}
		 *
		 * @property @stylistic/semi-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/semi-spacing': 'error',

		/**
		 * Enforce location of semicolons
		 * @see {@link https://eslint.style/rules/semi-style}
		 *
		 * @property @stylistic/semi-style=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/semi-style': ['error', 'last'],

		/**
		 * Enforce consistent spacing before blocks
		 * @see {@link https://eslint.style/rules/space-before-blocks}
		 *
		 * @property @stylistic/space-before-blocks=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/space-before-blocks': 'error',

		/**
		 * Enforce consistent spacing before `function` definition opening parenthesis
		 * @see {@link https://eslint.style/rules/space-before-function-paren}
		 *
		 * @property @stylistic/space-before-function-paren=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'ignore'
		}],

		/**
		 * Enforce consistent spacing inside parentheses
		 * @see {@link https://eslint.style/rules/space-in-parens}
		 *
		 * @property @stylistic/space-in-parens=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/space-in-parens': ['error', 'never'],

		/**
		 * Require spacing around infix operators
		 * @see {@link https://eslint.style/rules/space-infix-ops}
		 *
		 * @property @stylistic/space-infix-ops=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/space-infix-ops': 'error',

		/**
		 * Enforce consistent spacing before or after unary operators
		 * @see {@link https://eslint.style/rules/space-unary-ops}
		 *
		 * @property @stylistic/space-unary-ops=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/space-unary-ops': 'error',

		/**
		 * Enforce consistent spacing after the `//` or `/*` in a comment
		 * @see {@link https://eslint.style/rules/spaced-comment}
		 *
		 * @property @stylistic/spaced-comment=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/spaced-comment': ['error', 'always'],

		/**
		 * Enforce spacing around colons of switch statements
		 * @see {@link https://eslint.style/rules/switch-colon-spacing}
		 *
		 * @property @stylistic/switch-colon-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/switch-colon-spacing': 'error',

		/**
		 * Require or disallow spacing around embedded expressions of template strings
		 * @see {@link https://eslint.style/rules/template-curly-spacing}
		 *
		 * @property @stylistic/template-curly-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/template-curly-spacing': ['error', 'always'],

		/**
		 * Require or disallow spacing between template tags and their literals
		 * @see {@link https://eslint.style/rules/template-tag-spacing}
		 *
		 * @property @stylistic/template-tag-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/template-tag-spacing': 'error',

		/**
		 * @see {@link https://eslint.style/rules/type-annotation-spacing}
		 *
		 * @property @stylistic/type-annotation-spacing=off - Handled by eslint-plugin-lucid-typescript.
		 * @memberOf @stylistic
		 **/
		'@stylistic/type-annotation-spacing': 'off',

		/**
		 * Enforces consistent spacing inside TypeScript type generics.
		 * @see {@link https://eslint.style/rules/type-generic-spacing}
		 *
		 * @property @stylistic/type-generic-spacing=error - Readability.
		 * @memberOf @stylistic
		 **/
		'@stylistic/type-generic-spacing': 'off',

		/**
		 * Expect space before the type declaration in the named tuple.
		 * @see {@link https://eslint.style/rules/type-named-tuple-spacing}
		 *
		 * @property @stylistic/type-named-tuple-spacing=error - Readability.
		 * @memberOf @stylistic
		 **/
		'@stylistic/type-named-tuple-spacing': 'off',

		/**
		 * Require parentheses around immediate `function` invocations
		 * @see {@link https://eslint.style/rules/wrap-iife}
		 *
		 * @property @stylistic/wrap-iife=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/wrap-iife': ['error', 'inside'],

		/**
		 * Require parenthesis around regex literals
		 * @see {@link https://eslint.style/rules/wrap-regex}
		 *
		 * @property @stylistic/wrap-regex=off - Arbitrary.
		 * @memberOf @stylistic
		 **/
		'@stylistic/wrap-regex': 'off',

		/**
		 * Require or disallow spacing around the `*` in `yield*` expressions
		 * @see {@link https://eslint.style/rules/yield-star-spacing}
		 *
		 * @property @stylistic/yield-star-spacing=error - Readability and simplicity.
		 * @memberOf @stylistic
		 **/
		'@stylistic/yield-star-spacing': 'error'
	}
};
