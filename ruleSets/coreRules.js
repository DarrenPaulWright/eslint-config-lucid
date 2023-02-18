/**
 * Core ESLint rules.
 *
 * @namespace core
 * @property files .js, .jsx, .mjs, .cjs, .ts, .tsx
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
	rules: {
		/**
		 * Enforce getter and setter pairs in objects and classes
		 * @see {@link https://eslint.org/docs/rules/accessor-pairs}}
		 *
		 * @property accessor-pairs=off - Arbitrary.
		 * @memberof core
		 **/
		'accessor-pairs': 'off',

		/**
		 * Enforce linebreaks after opening and before closing array brackets
		 * @see {@link https://eslint.org/docs/rules/array-bracket-newline}}
		 *
		 * @property array-bracket-newline=off - Incomplete implementation. Doesn't account for objects in multiline situations.
		 * @memberof core
		 **/
		'array-bracket-newline': 'off',

		/**
		 * Enforce consistent spacing inside array brackets
		 * @see {@link https://eslint.org/docs/rules/array-bracket-spacing}}
		 *
		 * @property array-bracket-spacing=error - Provides visual distinction from objects.
		 * @memberof core
		 **/
		'array-bracket-spacing': [
			'error',
			'never'
		],

		/**
		 * Enforce `return` statements in callbacks of array methods
		 * @see {@link https://eslint.org/docs/rules/array-callback-return}}
		 *
		 * @property array-callback-return=error - Code quality.
		 * @memberof core
		 **/
		'array-callback-return': 'error',

		/**
		 * Enforce line breaks after each array element
		 * @see {@link https://eslint.org/docs/rules/array-element-newline}}
		 *
		 * @property array-element-newline=error - Readability and simplicity.
		 * @memberof core
		 **/
		'array-element-newline': ['error', 'consistent'],

		/**
		 * Require braces around arrow function bodies
		 * @see {@link https://eslint.org/docs/rules/arrow-body-style}}
		 *
		 * @property arrow-body-style=off - Doesn't account for line length restrictions.
		 * @memberof core
		 **/
		'arrow-body-style': 'off',

		/**
		 * Require parentheses around arrow function arguments
		 * @see {@link https://eslint.org/docs/rules/arrow-parens}}
		 *
		 * @property arrow-parens=error - Readability and simplicity.
		 * @memberof core
		 **/
		'arrow-parens': ['error', 'always'],

		/**
		 * Enforce consistent spacing before and after the arrow in arrow functions
		 * @see {@link https://eslint.org/docs/rules/arrow-spacing}}
		 *
		 * @property arrow-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'arrow-spacing': 'error',

		/**
		 * Enforce the use of variables within the scope they are defined
		 * @see {@link https://eslint.org/docs/rules/block-scoped-var}}
		 *
		 * @property block-scoped-var=error - Readability and simplicity.
		 * @memberof core
		 **/
		'block-scoped-var': 'error',

		/**
		 * Disallow or enforce spaces inside of blocks after opening block and before closing block
		 * @see {@link https://eslint.org/docs/rules/block-spacing}}
		 *
		 * @property block-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'block-spacing': 'error',

		/**
		 * Enforce consistent brace style for blocks
		 * @see {@link https://eslint.org/docs/rules/brace-style}}
		 *
		 * @property brace-style=error - Readability and simplicity.
		 * @memberof core
		 **/
		'brace-style': ['error', 'stroustrup'],

		/**
		 * Enforce camelcase naming convention
		 * @see {@link https://eslint.org/docs/rules/camelcase}}
		 *
		 * @property camelcase=off - Covered by babel/camelcase.
		 * @memberof core
		 **/
		camelcase: 'off',

		/**
		 * Enforce or disallow capitalization of the first letter of a comment
		 * @see {@link https://eslint.org/docs/rules/capitalized-comments}}
		 *
		 * @property capitalized-comments=warn - Readability and simplicity.
		 * @memberof core
		 **/
		'capitalized-comments': 'warn',

		/**
		 * Enforce that class methods utilize `this`
		 * @see {@link https://eslint.org/docs/rules/class-methods-use-this}}
		 *
		 * @property class-methods-use-this=error - Readability and simplicity.
		 * @memberof core
		 **/
		'class-methods-use-this': 'error',

		/**
		 * Require or disallow trailing commas
		 * @see {@link https://eslint.org/docs/rules/comma-dangle}}
		 *
		 * @property comma-dangle=error - Readability and simplicity.
		 * @memberof core
		 **/
		'comma-dangle': ['error', 'never'],

		/**
		 * Enforce consistent spacing before and after commas
		 * @see {@link https://eslint.org/docs/rules/comma-spacing}}
		 *
		 * @property comma-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'comma-spacing': 'error',

		/**
		 * Enforce consistent comma style
		 * @see {@link https://eslint.org/docs/rules/comma-style}}
		 *
		 * @property comma-style=error - Readability and simplicity.
		 * @memberof core
		 **/
		'comma-style': ['error', 'last'],

		/**
		 * Enforce a maximum cyclomatic complexity allowed in a program
		 * @see {@link https://eslint.org/docs/rules/complexity}}
		 *
		 * @property complexity=warn - Readability and simplicity.
		 * @memberof core
		 **/
		complexity: ['warn', 10],

		/**
		 * Enforce consistent spacing inside computed property brackets
		 * @see {@link https://eslint.org/docs/rules/computed-property-spacing}}
		 *
		 * @property computed-property-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'computed-property-spacing': 'error',

		/**
		 * Require `return` statements to either always or never specify values
		 * @see {@link https://eslint.org/docs/rules/consistent-return}}
		 *
		 * @property consistent-return=error - Readability and simplicity.
		 * @memberof core
		 **/
		'consistent-return': 'error',

		/**
		 * Enforce consistent naming when capturing the current execution context
		 * @see {@link https://eslint.org/docs/rules/consistent-this}}
		 *
		 * @property consistent-this=error - Readability and simplicity.
		 * @memberof core
		 **/
		'consistent-this': ['error', 'self'],

		/**
		 * Require `super()` calls in constructors
		 * @see {@link https://eslint.org/docs/rules/constructor-super}}
		 *
		 * @property constructor-super=error - Code quality.
		 * @memberof core
		 **/
		'constructor-super': 'error',

		/**
		 * Enforce consistent brace style for all control statements
		 * @see {@link https://eslint.org/docs/rules/curly}}
		 *
		 * @property curly=error - Readability and simplicity.
		 * @memberof core
		 **/
		curly: 'error',

		/**
		 * Require `default` cases in `switch` statements
		 * @see {@link https://eslint.org/docs/rules/default-case}}
		 *
		 * @property default-case=off - Arbitrary.
		 * @memberof core
		 **/
		'default-case': 'off',

		/**
		 * Enforce default clauses in switch statements to be last
		 * @see {@link https://eslint.org/docs/rules/default-case-last}}
		 *
		 * @property default-case-last=error - Code quality.
		 * @memberof core
		 **/
		'default-case-last': 'error',

		/**
		 * Enforce default parameters to be last
		 * @see {@link https://eslint.org/docs/rules/default-param-last}}
		 *
		 * @property default-param-last=error - Readability and simplicity.
		 * @memberof core
		 **/
		'default-param-last': 'error',

		/**
		 * Enforce consistent newlines before and after dots
		 * @see {@link https://eslint.org/docs/rules/dot-location}}
		 *
		 * @property dot-location=error - Readability and simplicity.
		 * @memberof core
		 **/
		'dot-location': ['error', 'property'],

		/**
		 * Enforce dot notation whenever possible
		 * @see {@link https://eslint.org/docs/rules/dot-notation}}
		 *
		 * @property dot-notation=error - Readability and simplicity.
		 * @memberof core
		 **/
		'dot-notation': 'error',

		/**
		 * Require or disallow newline at the end of files
		 * @see {@link https://eslint.org/docs/rules/eol-last}}
		 *
		 * @property eol-last=error - Readability and simplicity.
		 * @memberof core
		 **/
		'eol-last': 'error',

		/**
		 * Require the use of `===` and `!==`
		 * @see {@link https://eslint.org/docs/rules/eqeqeq}}
		 *
		 * @property eqeqeq=error - Code quality.
		 * @memberof core
		 **/
		eqeqeq: 'error',

		/**
		 * Enforce "for" loop update clause moving the counter in the right direction.
		 * @see {@link https://eslint.org/docs/rules/for-direction}}
		 *
		 * @property for-direction=error - Code quality.
		 * @memberof core
		 **/
		'for-direction': 'error',

		/**
		 * Require or disallow spacing between function identifiers and their invocations
		 * @see {@link https://eslint.org/docs/rules/func-call-spacing}}
		 *
		 * @property func-call-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'func-call-spacing': 'error',

		/**
		 * Require function names to match the name of the variable or property to which they are assigned
		 * @see {@link https://eslint.org/docs/rules/func-name-matching}}
		 *
		 * @property func-name-matching=error - Readability and simplicity.
		 * @memberof core
		 **/
		'func-name-matching': 'error',

		/**
		 * Require or disallow named `function` expressions
		 * @see {@link https://eslint.org/docs/rules/func-names}}
		 *
		 * @property func-names=error - Readability and simplicity.
		 * @memberof core
		 **/
		'func-names': ['error', 'never'],

		/**
		 * Enforce the consistent use of either `function` declarations or expressions
		 * @see {@link https://eslint.org/docs/rules/func-style}}
		 *
		 * @property func-style=error - Readability and simplicity.
		 * @memberof core
		 **/
		'func-style': 'error',

		/**
		 * Enforce line breaks between arguments of a function call
		 * @see {@link https://eslint.org/docs/rules/function-call-argument-newline}}
		 *
		 * @property function-call-argument-newline=error - Readability and simplicity.
		 * @memberof core
		 **/
		'function-call-argument-newline': ['error', 'consistent'],

		/**
		 * Enforce consistent line breaks inside function parentheses
		 * @see {@link https://eslint.org/docs/rules/function-paren-newline}}
		 *
		 * @property function-paren-newline=error - Readability and simplicity.
		 * @memberof core
		 **/
		'function-paren-newline': ['error', 'consistent'],

		/**
		 * Enforce consistent spacing around `*` operators in generator functions
		 * @see {@link https://eslint.org/docs/rules/generator-star-spacing}}
		 *
		 * @property generator-star-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'generator-star-spacing': 'error',

		/**
		 * Enforce `return` statements in getters
		 * @see {@link https://eslint.org/docs/rules/getter-return}}
		 *
		 * @property getter-return=error - Code quality.
		 * @memberof core
		 **/
		'getter-return': 'error',

		/**
		 * Require grouped accessor pairs in object literals and classes
		 * @see {@link https://eslint.org/docs/rules/grouped-accessor-pairs}}
		 *
		 * @property grouped-accessor-pairs=error - Readability and simplicity.
		 * @memberof core
		 **/
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],

		/**
		 * Require `for-in` loops to include an `if` statement
		 * @see {@link https://eslint.org/docs/rules/guard-for-in}}
		 *
		 * @property guard-for-in=off - Arbitrary.
		 * @memberof core
		 **/
		'guard-for-in': 'off',

		/**
		 * Disallow specified identifiers
		 * @see {@link https://eslint.org/docs/rules/id-denylist}}
		 *
		 * @property id-denylist=off - Arbitrary.
		 * @memberof core
		 **/
		'id-denylist': 'off',

		/**
		 * Enforce minimum and maximum identifier lengths
		 * @see {@link https://eslint.org/docs/rules/id-length}}
		 *
		 * @property id-length=off - Arbitrary.
		 * @memberof core
		 **/
		'id-length': 'off',

		/**
		 * Require identifiers to match a specified regular expression
		 * @see {@link https://eslint.org/docs/rules/id-match}}
		 *
		 * @property id-match=off - Covered by camelcase.
		 * @memberof core
		 **/
		'id-match': 'off',

		/**
		 * Enforce the location of arrow function bodies
		 * @see {@link https://eslint.org/docs/rules/implicit-arrow-linebreak}}
		 *
		 * @property implicit-arrow-linebreak=off - Readability and simplicity.
		 * @memberof core
		 **/
		'implicit-arrow-linebreak': ['error', 'beside'],

		/**
		 * Enforce consistent indentation
		 * @see {@link https://eslint.org/docs/rules/indent}}
		 *
		 * @property indent=error - Tabs produce smaller file sizes and allow different developers to view the tabs as they wish.
		 * @memberof core
		 **/
		indent: [
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
		 * Require or disallow initialization in variable declarations
		 * @see {@link https://eslint.org/docs/rules/init-declarations}}
		 *
		 * @property init-declarations=warn - Readability and simplicity and performance.
		 * @memberof core
		 **/
		'init-declarations': 'warn',

		/**
		 * Enforce the consistent use of either double or single quotes in JSX attributes
		 * @see {@link https://eslint.org/docs/rules/jsx-quotes}}
		 *
		 * @property jsx-quotes=off - Beyond the scope of this config.
		 * @memberof core
		 **/
		'jsx-quotes': 'off',

		/**
		 * Enforce consistent spacing between keys and values in object literal properties
		 * @see {@link https://eslint.org/docs/rules/key-spacing}}
		 *
		 * @property key-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'key-spacing': 'error',

		/**
		 * Enforce consistent spacing before and after keywords
		 * @see {@link https://eslint.org/docs/rules/keyword-spacing}}
		 *
		 * @property keyword-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'keyword-spacing': 'error',

		/**
		 * Enforce position of line comments
		 * @see {@link https://eslint.org/docs/rules/line-comment-position}}
		 *
		 * @property line-comment-position=off - Arbitrary.
		 * @memberof core
		 **/
		'line-comment-position': 'off',

		/**
		 * Enforce consistent linebreak style
		 * @see {@link https://eslint.org/docs/rules/linebreak-style}}
		 *
		 * @property linebreak-style=error - Code quality.
		 * @memberof core
		 **/
		'linebreak-style': 'error',

		/**
		 * Require empty lines around comments
		 * @see {@link https://eslint.org/docs/rules/lines-around-comment}}
		 *
		 * @property lines-around-comment=error - Readability and simplicity.
		 * @memberof core
		 **/
		'lines-around-comment': [
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
		 * @see {@link https://eslint.org/docs/rules/lines-between-class-members}}
		 *
		 * @property lines-between-class-members=error - Readability and simplicity.
		 * @memberof core
		 **/
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		],

		/**
		 * Require or disallow logical assignment logical operator shorthand
		 * @see {@link https://eslint.org/docs/rules/logical-assignment-operators}}
		 *
		 * @property logical-assignment-operators=off - enforceForIfStatements.
		 * @memberof core
		 **/
		'logical-assignment-operators': [
			'error',
			'always',
			{
				enforceForIfStatements: true
			}
		],

		/**
		 * Enforce a maximum number of classes per file
		 * @see {@link https://eslint.org/docs/rules/max-classes-per-file}}
		 *
		 * @property max-classes-per-file=error - Readability and simplicity.
		 * @memberof core
		 **/
		'max-classes-per-file': 'error',

		/**
		 * Enforce a maximum depth that blocks can be nested
		 * @see {@link https://eslint.org/docs/rules/max-depth}}
		 *
		 * @property max-depth=error - Readability and simplicity.
		 * @memberof core
		 **/
		'max-depth': 'error',

		/**
		 * Enforce a maximum line length
		 * @see {@link https://eslint.org/docs/rules/max-len}}
		 *
		 * @property max-len=error - Readability and simplicity.
		 * @memberof core
		 **/
		'max-len': [
			'error',
			{
				code: 80,
				tabWidth: 4,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreStrings: false,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true
			}
		],

		/**
		 * Enforce a maximum number of lines per file
		 * @see {@link https://eslint.org/docs/rules/max-lines}}
		 *
		 * @property max-lines=off - Arbitrary.
		 * @memberof core
		 **/
		'max-lines': 'off',

		/**
		 * Enforce a maximum number of lines of code in a function
		 * @see {@link https://eslint.org/docs/rules/max-lines-per-function}}
		 *
		 * @property max-lines-per-function=off - Arbitrary, prefer complexity rule.
		 * @memberof core
		 **/
		'max-lines-per-function': 'off',

		/**
		 * Enforce a maximum depth that callbacks can be nested
		 * @see {@link https://eslint.org/docs/rules/max-nested-callbacks}}
		 *
		 * @property max-nested-callbacks=off - Arbitrary, prefer complexity rule.
		 * @memberof core
		 **/
		'max-nested-callbacks': 'off',

		/**
		 * Enforce a maximum number of parameters in function definitions
		 * @see {@link https://eslint.org/docs/rules/max-params}}
		 *
		 * @property max-params=error - Readability and simplicity.
		 * @memberof core
		 **/
		'max-params': [
			'error',
			{
				max: 5
			}
		],

		/**
		 * Enforce a maximum number of statements allowed in function blocks
		 * @see {@link https://eslint.org/docs/rules/max-statements}}
		 *
		 * @property max-statements=off - Arbitrary, prefer complexity rule.
		 * @memberof core
		 **/
		'max-statements': 'off',

		/**
		 * Enforce a maximum number of statements allowed per line
		 * @see {@link https://eslint.org/docs/rules/max-statements-per-line}}
		 *
		 * @property max-statements-per-line=error - Readability and simplicity.
		 * @memberof core
		 **/
		'max-statements-per-line': 'error',

		/**
		 * Enforce a particular style for multiline comments
		 * @see {@link https://eslint.org/docs/rules/multiline-comment-style}}
		 *
		 * @property multiline-comment-style=off - Covered by jsdoc.
		 * @memberof core
		 **/
		'multiline-comment-style': 'off',

		/**
		 * Enforce newlines between operands of ternary expressions
		 * @see {@link https://eslint.org/docs/rules/multiline-ternary}}
		 *
		 * @property multiline-ternary=error - Readability and simplicity.
		 * @memberof core
		 **/
		'multiline-ternary': ['error', 'always-multiline'],

		/**
		 * Require constructor names to begin with a capital letter
		 * @see {@link https://eslint.org/docs/rules/new-cap}}
		 *
		 * @property new-cap=off - Covered by babel/new-cap.
		 * @memberof core
		 **/
		'new-cap': 'off',

		/**
		 * Enforce or disallow parentheses when invoking a constructor with no arguments
		 * @see {@link https://eslint.org/docs/rules/new-parens}}
		 *
		 * @property new-parens=error - Readability and simplicity.
		 * @memberof core
		 **/
		'new-parens': 'error',

		/**
		 * Require a newline after each call in a method chain
		 * @see {@link https://eslint.org/docs/rules/newline-per-chained-call}}
		 *
		 * @property newline-per-chained-call=error - Readability and simplicity.
		 * @memberof core
		 **/
		'newline-per-chained-call': [
			'error',
			{ ignoreChainWithDepth: 2 }
		],

		/**
		 * Disallow the use of `alert`, `confirm`, and `prompt`
		 * @see {@link https://eslint.org/docs/rules/no-alert}}
		 *
		 * @property no-alert=off - Arbitrary.
		 * @memberof core
		 **/
		'no-alert': 'off',

		/**
		 * Disallow `Array` constructors
		 * @see {@link https://eslint.org/docs/rules/no-array-constructor}}
		 *
		 * @property no-array-constructor=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-array-constructor': 'error',

		/**
		 * Disallow using an async function as a Promise executor
		 * @see {@link https://eslint.org/docs/rules/no-async-promise-executor}}
		 *
		 * @property no-async-promise-executor=error - Code quality.
		 * @memberof core
		 **/
		'no-async-promise-executor': 'error',

		/**
		 * Disallow `await` inside of loops
		 * @see {@link https://eslint.org/docs/rules/no-await-in-loop}}
		 *
		 * @property no-await-in-loop=off - Arbitrary.
		 * @memberof core
		 **/
		'no-await-in-loop': 'off',

		/**
		 * Disallow bitwise operators
		 * @see {@link https://eslint.org/docs/rules/no-bitwise}}
		 *
		 * @property no-bitwise=off - Arbitrary.
		 * @memberof core
		 **/
		'no-bitwise': 'off',

		/**
		 * Disallow the use of `arguments.caller` or `arguments.callee`
		 * @see {@link https://eslint.org/docs/rules/no-caller}}
		 *
		 * @property no-caller=error - Code quality.
		 * @memberof core
		 **/
		'no-caller': 'error',

		/**
		 * Disallow lexical declarations in case clauses
		 * @see {@link https://eslint.org/docs/rules/no-case-declarations}}
		 *
		 * @property no-case-declarations=error - Code quality.
		 * @memberof core
		 **/
		'no-case-declarations': 'error',

		/**
		 * Disallow reassigning class members
		 * @see {@link https://eslint.org/docs/rules/no-class-assign}}
		 *
		 * @property no-class-assign=error - Code quality.
		 * @memberof core
		 **/
		'no-class-assign': 'error',

		/**
		 * Disallow comparing against -0
		 * @see {@link https://eslint.org/docs/rules/no-compare-neg-zero}}
		 *
		 * @property no-compare-neg-zero=error - Code quality.
		 * @memberof core
		 **/
		'no-compare-neg-zero': 'error',

		/**
		 * Disallow assignment operators in conditional expressions
		 * @see {@link https://eslint.org/docs/rules/no-cond-assign}}
		 *
		 * @property no-cond-assign=error - Code quality.
		 * @memberof core
		 **/
		'no-cond-assign': 'error',

		/**
		 * Disallow arrow functions where they could be confused with comparisons
		 * @see {@link https://eslint.org/docs/rules/no-confusing-arrow}}
		 *
		 * @property no-confusing-arrow=off - Arbitrary.
		 * @memberof core
		 **/
		'no-confusing-arrow': 'off',

		/**
		 * Disallow the use of `console`
		 * @see {@link https://eslint.org/docs/rules/no-console}}
		 *
		 * @property no-console=off - Code quality.
		 * @memberof core
		 **/
		'no-console': [
			'warn',
			{
				allow: ['warn', 'error']
			}
		],

		/**
		 * Disallow reassigning `const` variables
		 * @see {@link https://eslint.org/docs/rules/no-const-assign}}
		 *
		 * @property no-const-assign=error - Code quality.
		 * @memberof core
		 **/
		'no-const-assign': 'error',

		/**
		 * Disallow expressions where the operation doesn't affect the value
		 * @see {@link https://eslint.org/docs/rules/no-constant-binary-expression}}
		 *
		 * @property no-constant-binary-expression=error - Code quality.
		 * @memberof core
		 **/
		'no-constant-binary-expression': 'error',

		/**
		 * Disallow constant expressions in conditions
		 * @see {@link https://eslint.org/docs/rules/no-constant-condition}}
		 *
		 * @property no-constant-condition=error - Code quality.
		 * @memberof core
		 **/
		'no-constant-condition': 'error',

		/**
		 * Disallow returning value from constructor
		 * @see {@link https://eslint.org/docs/rules/no-constructor-return}}
		 *
		 * @property no-constructor-return=error - Code quality.
		 * @memberof core
		 **/
		'no-constructor-return': 'error',

		/**
		 * Disallow `continue` statements
		 * @see {@link https://eslint.org/docs/rules/no-continue}}
		 *
		 * @property no-continue=error - Code quality.
		 * @memberof core
		 **/
		'no-continue': 'error',

		/**
		 * Disallow control characters in regular expressions
		 * @see {@link https://eslint.org/docs/rules/no-control-regex}}
		 *
		 * @property no-control-regex=off - Covered by regexp/no-control-character.
		 * @memberof core
		 **/
		'no-control-regex': 'off',

		/**
		 * Disallow the use of `debugger`
		 * @see {@link https://eslint.org/docs/rules/no-debugger}}
		 *
		 * @property no-debugger=error - Code quality.
		 * @memberof core
		 **/
		'no-debugger': 'error',

		/**
		 * Disallow deleting variables
		 * @see {@link https://eslint.org/docs/rules/no-delete-var}}
		 *
		 * @property no-delete-var=error - Code quality.
		 * @memberof core
		 **/
		'no-delete-var': 'error',

		/**
		 * Disallow division operators explicitly at the beginning of regular expressions
		 * @see {@link https://eslint.org/docs/rules/no-div-regex}}
		 *
		 * @property no-div-regex=error - Code quality.
		 * @memberof core
		 **/
		'no-div-regex': 'error',

		/**
		 * Disallow duplicate arguments in `function` definitions
		 * @see {@link https://eslint.org/docs/rules/no-dupe-args}}
		 *
		 * @property no-dupe-args=error - Code quality.
		 * @memberof core
		 **/
		'no-dupe-args': 'error',

		/**
		 * Disallow duplicate class members
		 * @see {@link https://eslint.org/docs/rules/no-dupe-class-members}}
		 *
		 * @property no-dupe-class-members=error - Code quality.
		 * @memberof core
		 **/
		'no-dupe-class-members': 'error',

		/**
		 * Disallow duplicate conditions in if-else-if chains
		 * @see {@link https://eslint.org/docs/rules/no-dupe-else-if}}
		 *
		 * @property no-dupe-else-if=error - Code quality.
		 * @memberof core
		 **/
		'no-dupe-else-if': 'error',

		/**
		 * Disallow duplicate keys in object literals
		 * @see {@link https://eslint.org/docs/rules/no-dupe-keys}}
		 *
		 * @property no-dupe-keys=error - Code quality.
		 * @memberof core
		 **/
		'no-dupe-keys': 'error',

		/**
		 * Disallow duplicate case labels
		 * @see {@link https://eslint.org/docs/rules/no-duplicate-case}}
		 *
		 * @property no-duplicate-case=error - Code quality.
		 * @memberof core
		 **/
		'no-duplicate-case': 'error',

		/**
		 * Disallow duplicate module imports
		 * @see {@link https://eslint.org/docs/rules/no-duplicate-imports}}
		 *
		 * @property no-duplicate-imports=error - Code quality.
		 * @memberof core
		 **/
		'no-duplicate-imports': 'error',

		/**
		 * Disallow `else` blocks after `return` statements in `if` statements
		 * @see {@link https://eslint.org/docs/rules/no-else-return}}
		 *
		 * @property no-else-return=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-else-return': 'error',

		/**
		 * Disallow empty block statements
		 * @see {@link https://eslint.org/docs/rules/no-empty}}
		 *
		 * @property no-empty=error - Code quality.
		 * @memberof core
		 **/
		'no-empty': 'error',

		/**
		 * Disallow empty character classes in regular expressions
		 * @see {@link https://eslint.org/docs/rules/no-empty-character-class}}
		 *
		 * @property no-empty-character-class=error - Code quality.
		 * @memberof core
		 **/
		'no-empty-character-class': 'error',

		/**
		 * Disallow empty functions
		 * @see {@link https://eslint.org/docs/rules/no-empty-function}}
		 *
		 * @property no-empty-function=error - Code quality.
		 * @memberof core
		 **/
		'no-empty-function': 'error',

		/**
		 * Disallow empty destructuring patterns
		 * @see {@link https://eslint.org/docs/rules/no-empty-pattern}}
		 *
		 * @property no-empty-pattern=error - Code quality.
		 * @memberof core
		 **/
		'no-empty-pattern': 'error',

		/**
		 * Disallow empty static blocks
		 * @see {@link https://eslint.org/docs/rules/no-empty-static-block}}
		 *
		 * @property no-empty-static-block=error - Code quality.
		 * @memberof core
		 **/
		'no-empty-static-block': 'error',

		/**
		 * Disallow `null` comparisons without type-checking operators
		 * @see {@link https://eslint.org/docs/rules/no-eq-null}}
		 *
		 * @property no-eq-null=off - Covered by eqeqeq.
		 * @memberof core
		 **/
		'no-eq-null': 'off',

		/**
		 * Disallow the use of `eval()`
		 * @see {@link https://eslint.org/docs/rules/no-eval}}
		 *
		 * @property no-eval=error - Code quality and security.
		 * @memberof core
		 **/
		'no-eval': 'error',

		/**
		 * Disallow reassigning exceptions in `catch` clauses
		 * @see {@link https://eslint.org/docs/rules/no-ex-assign}}
		 *
		 * @property no-ex-assign=error - Code quality.
		 * @memberof core
		 **/
		'no-ex-assign': 'error',

		/**
		 * Disallow extending native types
		 * @see {@link https://eslint.org/docs/rules/no-extend-native}}
		 *
		 * @property no-extend-native=error - Code quality.
		 * @memberof core
		 **/
		'no-extend-native': 'error',

		/**
		 * Disallow unnecessary calls to `.bind()`
		 * @see {@link https://eslint.org/docs/rules/no-extra-bind}}
		 *
		 * @property no-extra-bind=error - Code quality.
		 * @memberof core
		 **/
		'no-extra-bind': 'error',

		/**
		 * Disallow unnecessary boolean casts
		 * @see {@link https://eslint.org/docs/rules/no-extra-boolean-cast}}
		 *
		 * @property no-extra-boolean-cast=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-extra-boolean-cast': 'error',

		/**
		 * Disallow unnecessary labels
		 * @see {@link https://eslint.org/docs/rules/no-extra-label}}
		 *
		 * @property no-extra-label=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-extra-label': 'error',

		/**
		 * Disallow unnecessary parentheses
		 * @see {@link https://eslint.org/docs/rules/no-extra-parens}}
		 *
		 * @property no-extra-parens=off - Readability and simplicity.
		 * @memberof core
		 **/
		'no-extra-parens': 'off',

		/**
		 * Disallow unnecessary semicolons
		 * @see {@link https://eslint.org/docs/rules/no-extra-semi}}
		 *
		 * @property no-extra-semi=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-extra-semi': 'error',

		/**
		 * Disallow fallthrough of `case` statements
		 * @see {@link https://eslint.org/docs/rules/no-fallthrough}}
		 *
		 * @property no-fallthrough=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-fallthrough': 'error',

		/**
		 * Disallow leading or trailing decimal points in numeric literals
		 * @see {@link https://eslint.org/docs/rules/no-floating-decimal}}
		 *
		 * @property no-floating-decimal=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-floating-decimal': 'error',

		/**
		 * Disallow reassigning `function` declarations
		 * @see {@link https://eslint.org/docs/rules/no-func-assign}}
		 *
		 * @property no-func-assign=error - Code quality.
		 * @memberof core
		 **/
		'no-func-assign': 'error',

		/**
		 * Disallow assignments to native objects or read-only global variables
		 * @see {@link https://eslint.org/docs/rules/no-global-assign}}
		 *
		 * @property no-global-assign=error - Code quality.
		 * @memberof core
		 **/
		'no-global-assign': 'error',

		/**
		 * Disallow shorthand type conversions
		 * @see {@link https://eslint.org/docs/rules/no-implicit-coercion}}
		 *
		 * @property no-implicit-coercion=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-implicit-coercion': 'error',

		/**
		 * Disallow declarations in the global scope
		 * @see {@link https://eslint.org/docs/rules/no-implicit-globals}}
		 *
		 * @property no-implicit-globals=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-implicit-globals': 'error',

		/**
		 * Disallow the use of `eval()`-like methods
		 * @see {@link https://eslint.org/docs/rules/no-implied-eval}}
		 *
		 * @property no-implied-eval=error - Code quality.
		 * @memberof core
		 **/
		'no-implied-eval': 'error',

		/**
		 * Disallow assigning to imported bindings
		 * @see {@link https://eslint.org/docs/rules/no-import-assign}}
		 *
		 * @property no-import-assign=error - Code quality.
		 * @memberof core
		 **/
		'no-import-assign': 'error',

		/**
		 * Disallow inline comments after code
		 * @see {@link https://eslint.org/docs/rules/no-inline-comments}}
		 *
		 * @property no-inline-comments=off - Arbitrary.
		 * @memberof core
		 **/
		'no-inline-comments': 'off',

		/**
		 * Disallow variable or `function` declarations in nested blocks
		 * @see {@link https://eslint.org/docs/rules/no-inner-declarations}}
		 *
		 * @property no-inner-declarations=error - Code quality.
		 * @memberof core
		 **/
		'no-inner-declarations': 'error',

		/**
		 * Disallow invalid regular expression strings in `RegExp` constructors
		 * @see {@link https://eslint.org/docs/rules/no-invalid-regexp}}
		 *
		 * @property no-invalid-regexp=off - Covered by regexp/no-invalid-regexp.
		 * @memberof core
		 **/
		'no-invalid-regexp': 'off',

		/**
		 * Disallow use of `this` in contexts where the value of `this` is `undefined`
		 * @see {@link https://eslint.org/docs/rules/no-invalid-this}}
		 *
		 * @property no-invalid-this=off - Covered by babel/no-invalid-this.
		 * @memberof core
		 **/
		'no-invalid-this': 'off',

		/**
		 * Disallow irregular whitespace
		 * @see {@link https://eslint.org/docs/rules/no-irregular-whitespace}}
		 *
		 * @property no-irregular-whitespace=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-irregular-whitespace': 'error',

		/**
		 * Disallow the use of the `__iterator__` property
		 * @see {@link https://eslint.org/docs/rules/no-iterator}}
		 *
		 * @property no-iterator=error - Code quality.
		 * @memberof core
		 **/
		'no-iterator': 'error',

		/**
		 * Disallow labels that share a name with a variable
		 * @see {@link https://eslint.org/docs/rules/no-label-var}}
		 *
		 * @property no-label-var=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-label-var': 'error',

		/**
		 * Disallow labeled statements
		 * @see {@link https://eslint.org/docs/rules/no-labels}}
		 *
		 * @property no-labels=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-labels': 'error',

		/**
		 * Disallow unnecessary nested blocks
		 * @see {@link https://eslint.org/docs/rules/no-lone-blocks}}
		 *
		 * @property no-lone-blocks=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-lone-blocks': 'error',

		/**
		 * Disallow `if` statements as the only statement in `else` blocks
		 * @see {@link https://eslint.org/docs/rules/no-lonely-if}}
		 *
		 * @property no-lonely-if=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-lonely-if': 'error',

		/**
		 * Disallow function declarations that contain unsafe references inside loop statements
		 * @see {@link https://eslint.org/docs/rules/no-loop-func}}
		 *
		 * @property no-loop-func=error - Code quality.
		 * @memberof core
		 **/
		'no-loop-func': 'error',

		/**
		 * Disallow literal numbers that lose precision
		 * @see {@link https://eslint.org/docs/rules/no-loss-of-precision}}
		 *
		 * @property no-loss-of-precision=error - Code quality.
		 * @memberof core
		 **/
		'no-loss-of-precision': 'error',

		/**
		 * Disallow magic numbers
		 * @see {@link https://eslint.org/docs/rules/no-magic-numbers}}
		 *
		 * @property no-magic-numbers=off - Too many false positives.
		 * @memberof core
		 **/
		'no-magic-numbers': 'off',

		/**
		 * Disallow characters which are made with multiple code points in character class syntax  * @see {@link https://eslint.org/docs/rules/no-misleading-character-class}}
		 *
		 * @property no-misleading-character-class=error - Code quality.
		 * @memberof core
		 **/
		'no-misleading-character-class': 'error',

		/**
		 * Disallow mixed binary operators
		 * @see {@link https://eslint.org/docs/rules/no-mixed-operators}}
		 *
		 * @property no-mixed-operators=error - Readability and simplicity and code quality.
		 * @memberof core
		 **/
		'no-mixed-operators': 'error',

		/**
		 * Disallow mixed spaces and tabs for indentation
		 * @see {@link https://eslint.org/docs/rules/no-mixed-spaces-and-tabs}}
		 *
		 * @property no-mixed-spaces-and-tabs=error - Clean formatting.
		 * @memberof core
		 **/
		'no-mixed-spaces-and-tabs': 'error',

		/**
		 * Disallow use of chained assignment expressions
		 * @see {@link https://eslint.org/docs/rules/no-multi-assign}}
		 *
		 * @property no-multi-assign=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-multi-assign': 'error',

		/**
		 * Disallow multiple spaces
		 * @see {@link https://eslint.org/docs/rules/no-multi-spaces}}
		 *
		 * @property no-multi-spaces=error - Clean formatting.
		 * @memberof core
		 **/
		'no-multi-spaces': 'error',

		/**
		 * Disallow multiline strings
		 * @see {@link https://eslint.org/docs/rules/no-multi-str}}
		 *
		 * @property no-multi-str=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-multi-str': 'error',

		/**
		 * Disallow multiple empty lines
		 * @see {@link https://eslint.org/docs/rules/no-multiple-empty-lines}}
		 *
		 * @property no-multiple-empty-lines=error - Clean formatting.
		 * @memberof core
		 **/
		'no-multiple-empty-lines': 'error',

		/**
		 * Disallow negated conditions
		 * @see {@link https://eslint.org/docs/rules/no-negated-condition}}
		 *
		 * @property no-negated-condition=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-negated-condition': 'error',

		/**
		 * Disallow nested ternary expressions
		 * @see {@link https://eslint.org/docs/rules/no-nested-ternary}}
		 *
		 * @property no-nested-ternary=off - Covered by unicorn/no-nested-ternary.
		 * @memberof core
		 **/
		'no-nested-ternary': 'off',

		/**
		 * Disallow `new` operators outside of assignments or comparisons
		 * @see {@link https://eslint.org/docs/rules/no-new}}
		 *
		 * @property no-new=error - Code quality.
		 * @memberof core
		 **/
		'no-new': 'error',

		/**
		 * Disallow `new` operators with the `Function` object
		 * @see {@link https://eslint.org/docs/rules/no-new-func}}
		 *
		 * @property no-new-func=error - Code quality.
		 * @memberof core
		 **/
		'no-new-func': 'error',

		/**
		 * Disallow `new` operators with global non-constructor functions
		 * @see {@link https://eslint.org/docs/rules/no-new-native-nonconstructor}}
		 *
		 * @property no-new-native-nonconstructor=off - Covered by unicorn/new-for-builtins.
		 * @memberof core
		 **/
		'no-new-native-nonconstructor': 'off',

		/**
		 * Disallow `Object` constructors
		 * @see {@link https://eslint.org/docs/rules/no-new-object}}
		 *
		 * @property no-new-object=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-new-object': 'error',

		/**
		 * Disallow `new` operators with the `Symbol` object
		 * @see {@link https://eslint.org/docs/rules/no-new-symbol}}
		 *
		 * @property no-new-symbol=off - Covered by unicorn/new-for-builtins.
		 * @memberof core
		 **/
		'no-new-symbol': 'off',

		/**
		 * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
		 * @see {@link https://eslint.org/docs/rules/no-new-wrappers}}
		 *
		 * @property no-new-wrappers=off - Covered by unicorn/new-for-builtins.
		 * @memberof core
		 **/
		'no-new-wrappers': 'off',

		/**
		 * Disallow `\8` and `\9` escape sequences in string literals
		 * @see {@link https://eslint.org/docs/rules/no-nonoctal-decimal-escape}}
		 *
		 * @property no-nonoctal-decimal-escape=error - Code quality.
		 * @memberof core
		 **/
		'no-nonoctal-decimal-escape': 'error',

		/**
		 * Disallow calling global object properties as functions
		 * @see {@link https://eslint.org/docs/rules/no-obj-calls}}
		 *
		 * @property no-obj-calls=error - Code quality.
		 * @memberof core
		 **/
		'no-obj-calls': 'error',

		/**
		 * Disallow octal literals
		 * @see {@link https://eslint.org/docs/rules/no-octal}}
		 *
		 * @property no-octal=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-octal': 'error',

		/**
		 * Disallow octal escape sequences in string literals
		 * @see {@link https://eslint.org/docs/rules/no-octal-escape}}
		 *
		 * @property no-octal-escape=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-octal-escape': 'error',

		/**
		 * Disallow reassigning `function` parameters
		 * @see {@link https://eslint.org/docs/rules/no-param-reassign}}
		 *
		 * @property no-param-reassign=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-param-reassign': 'error',

		/**
		 * Disallow the unary operators `++` and `--`
		 * @see {@link https://eslint.org/docs/rules/no-plusplus}}
		 *
		 * @property no-plusplus=off - Arbitrary.
		 * @memberof core
		 **/
		'no-plusplus': 'off',

		/**
		 * Disallow returning values from Promise executor functions
		 * @see {@link https://eslint.org/docs/rules/no-promise-executor-return}}
		 *
		 * @property no-promise-executor-return=error - Code quality.
		 * @memberof core
		 **/
		'no-promise-executor-return': 'error',

		/**
		 * Disallow the use of the `__proto__` property
		 * @see {@link https://eslint.org/docs/rules/no-proto}}
		 *
		 * @property no-proto=error - Code quality.
		 * @memberof core
		 **/
		'no-proto': 'error',

		/**
		 * Disallow calling some `Object.prototype` methods directly on objects
		 * @see {@link https://eslint.org/docs/rules/no-prototype-builtins}}
		 *
		 * @property no-prototype-builtins=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-prototype-builtins': 'error',

		/**
		 * Disallow variable redeclaration
		 * @see {@link https://eslint.org/docs/rules/no-redeclare}}
		 *
		 * @property no-redeclare=error - Code quality.
		 * @memberof core
		 **/
		'no-redeclare': 'error',

		/**
		 * Disallow multiple spaces in regular expressions
		 * @see {@link https://eslint.org/docs/rules/no-regex-spaces}}
		 *
		 * @property no-regex-spaces=error - Code quality.
		 * @memberof core
		 **/
		'no-regex-spaces': 'error',

		/**
		 * Disallow specified names in exports
		 * @see {@link https://eslint.org/docs/rules/no-restricted-exports}}
		 *
		 * @property no-restricted-exports=off - Arbitrary.
		 * @memberof core
		 **/
		'no-restricted-exports': 'off',

		/**
		 * Disallow specified global variables
		 * @see {@link https://eslint.org/docs/rules/no-restricted-globals}}
		 *
		 * @property no-restricted-globals=off - Project specific.
		 * @memberof core
		 **/
		'no-restricted-globals': 'off',

		/**
		 * Disallow specified modules when loaded by `import`
		 * @see {@link https://eslint.org/docs/rules/no-restricted-imports}}
		 *
		 * @property no-restricted-imports=off - Project specific.
		 * @memberof core
		 **/
		'no-restricted-imports': 'off',

		/**
		 * Disallow certain properties on certain objects
		 * @see {@link https://eslint.org/docs/rules/no-restricted-properties}}
		 *
		 * @property no-restricted-properties=off - Project specific.
		 * @memberof core
		 **/
		'no-restricted-properties': 'off',

		/**
		 * Disallow specified syntax
		 * @see {@link https://eslint.org/docs/rules/no-restricted-syntax}}
		 *
		 * @property no-restricted-syntax=off - Project specific.
		 * @memberof core
		 **/
		'no-restricted-syntax': 'off',

		/**
		 * Disallow assignment operators in `return` statements
		 * @see {@link https://eslint.org/docs/rules/no-return-assign}}
		 *
		 * @property no-return-assign=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-return-assign': 'error',

		/**
		 * Disallow unnecessary `return await`
		 * @see {@link https://eslint.org/docs/rules/no-return-await}}
		 *
		 * @property no-return-await=error - Code quality.
		 * @memberof core
		 **/
		'no-return-await': 'error',

		/**
		 * Disallow `javascript:` urls
		 * @see {@link https://eslint.org/docs/rules/no-script-url}}
		 *
		 * @property no-script-url=error - Code quality.
		 * @memberof core
		 **/
		'no-script-url': 'error',

		/**
		 * Disallow assignments where both sides are exactly the same
		 * @see {@link https://eslint.org/docs/rules/no-self-assign}}
		 *
		 * @property no-self-assign=error - Code quality.
		 * @memberof core
		 **/
		'no-self-assign': 'error',

		/**
		 * Disallow comparisons where both sides are exactly the same
		 * @see {@link https://eslint.org/docs/rules/no-self-compare}}
		 *
		 * @property no-self-compare=error - Code quality.
		 * @memberof core
		 **/
		'no-self-compare': 'error',

		/**
		 * Disallow comma operators
		 * @see {@link https://eslint.org/docs/rules/no-sequences}}
		 *
		 * @property no-sequences=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-sequences': 'error',

		/**
		 * Disallow returning values from setters
		 * @see {@link https://eslint.org/docs/rules/no-setter-return}}
		 *
		 * @property no-setter-return=error - Code quality.
		 * @memberof core
		 **/
		'no-setter-return': 'error',

		/**
		 * Disallow variable declarations from shadowing variables declared in the outer scope
		 * @see {@link https://eslint.org/docs/rules/no-shadow}}
		 *
		 * @property no-shadow=error - Code quality.
		 * @memberof core
		 **/
		'no-shadow': 'error',

		/**
		 * Disallow identifiers from shadowing restricted names
		 * @see {@link https://eslint.org/docs/rules/no-shadow-restricted-names}}
		 *
		 * @property no-shadow-restricted-names=error - Code quality.
		 * @memberof core
		 **/
		'no-shadow-restricted-names': 'error',

		/**
		 * Disallow sparse arrays
		 * @see {@link https://eslint.org/docs/rules/no-sparse-arrays}}
		 *
		 * @property no-sparse-arrays=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-sparse-arrays': 'error',

		/**
		 * Disallow all tabs
		 * @see {@link https://eslint.org/docs/rules/no-tabs}}
		 *
		 * @property no-tabs=off - Arbitrary.
		 * @memberof core
		 **/
		'no-tabs': 'off',

		/**
		 * Disallow template literal placeholder syntax in regular strings
		 * @see {@link https://eslint.org/docs/rules/no-template-curly-in-string}}
		 *
		 * @property no-template-curly-in-string=error - Code quality.
		 * @memberof core
		 **/
		'no-template-curly-in-string': 'error',

		/**
		 * Disallow ternary operators
		 * @see {@link https://eslint.org/docs/rules/no-ternary}}
		 *
		 * @property no-ternary=off - Arbitrary.
		 * @memberof core
		 **/
		'no-ternary': 'off',

		/**
		 * Disallow `this`/`super` before calling `super()` in constructors
		 * @see {@link https://eslint.org/docs/rules/no-this-before-super}}
		 *
		 * @property no-this-before-super=error - Code quality.
		 * @memberof core
		 **/
		'no-this-before-super': 'error',

		/**
		 * Disallow throwing literals as exceptions
		 * @see {@link https://eslint.org/docs/rules/no-throw-literal}}
		 *
		 * @property no-throw-literal=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-throw-literal': 'error',

		/**
		 * Disallow trailing whitespace at the end of lines
		 * @see {@link https://eslint.org/docs/rules/no-trailing-spaces}}
		 *
		 * @property no-trailing-spaces=error - Clean formatting.
		 * @memberof core
		 **/
		'no-trailing-spaces': 'error',

		/**
		 * Disallow the use of undeclared variables unless mentioned in global comments
		 * @see {@link https://eslint.org/docs/rules/no-undef}}
		 *
		 * @property no-undef=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-undef': 'error',

		/**
		 * Disallow initializing variables to `undefined`
		 * @see {@link https://eslint.org/docs/rules/no-undef-init}}
		 *
		 * @property no-undef-init=off - Covered by unicorn/no-useless-undefined.
		 * @memberof core
		 **/
		'no-undef-init': 'off',

		/**
		 * Disallow the use of `undefined` as an identifier
		 * @see {@link https://eslint.org/docs/rules/no-undefined}}
		 *
		 * @property no-undefined=off - Arbitrary.
		 * @memberof core
		 **/
		'no-undefined': 'off',

		/**
		 * Disallow dangling underscores in identifiers
		 * @see {@link https://eslint.org/docs/rules/no-underscore-dangle}}
		 *
		 * @property no-underscore-dangle=off - Arbitrary.
		 * @memberof core
		 **/
		'no-underscore-dangle': 'off',

		/**
		 * Disallow confusing multiline expressions
		 * @see {@link https://eslint.org/docs/rules/no-unexpected-multiline}}
		 *
		 * @property no-unexpected-multiline=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-unexpected-multiline': 'error',

		/**
		 * Disallow unmodified loop conditions
		 * @see {@link https://eslint.org/docs/rules/no-unmodified-loop-condition}}
		 *
		 * @property no-unmodified-loop-condition=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-unmodified-loop-condition': 'error',

		/**
		 * Disallow ternary operators when simpler alternatives exist
		 * @see {@link https://eslint.org/docs/rules/no-unneeded-ternary}}
		 *
		 * @property no-unneeded-ternary=off - Covered by unicorn/prefer-logical-operator-over-ternary.
		 * @memberof core
		 **/
		'no-unneeded-ternary': 'off',

		/**
		 * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
		 * @see {@link https://eslint.org/docs/rules/no-unreachable}}
		 *
		 * @property no-unreachable=error - Code quality.
		 * @memberof core
		 **/
		'no-unreachable': 'error',

		/**
		 * Disallow loops with a body that allows only one iteration
		 * @see {@link https://eslint.org/docs/rules/no-unreachable-loop}}
		 *
		 * @property no-unreachable-loop=error - Code quality.
		 * @memberof core
		 **/
		'no-unreachable-loop': 'error',

		/**
		 * Disallow control flow statements in `finally` blocks
		 * @see {@link https://eslint.org/docs/rules/no-unsafe-finally}}
		 *
		 * @property no-unsafe-finally=error - Code quality.
		 * @memberof core
		 **/
		'no-unsafe-finally': 'error',

		/**
		 * Disallow negating the left operand of relational operators
		 * @see {@link https://eslint.org/docs/rules/no-unsafe-negation}}
		 *
		 * @property no-unsafe-negation=error - Code quality.
		 * @memberof core
		 **/
		'no-unsafe-negation': 'error',

		/**
		 * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
		 * @see {@link https://eslint.org/docs/rules/no-unsafe-optional-chaining}}
		 *
		 * @property no-unsafe-optional-chaining=error - Code quality.
		 * @memberof core
		 **/
		'no-unsafe-optional-chaining': 'error',

		/**
		 * Disallow unused expressions
		 * @see {@link https://eslint.org/docs/rules/no-unused-expressions}}
		 *
		 * @property no-unused-expressions=off - Covered by babel/no-unused-expressions.
		 * @memberof core
		 **/
		'no-unused-expressions': 'off',

		/**
		 * Disallow unused labels
		 * @see {@link https://eslint.org/docs/rules/no-unused-labels}}
		 *
		 * @property no-unused-labels=error - Code quality.
		 * @memberof core
		 **/
		'no-unused-labels': 'error',

		/**
		 * Disallow unused private class members
		 * @see {@link https://eslint.org/docs/rules/no-unused-private-class-members}}
		 *
		 * @property no-unused-private-class-members=error - Code quality.
		 * @memberof core
		 **/
		'no-unused-private-class-members': 'error',

		/**
		 * Disallow unused variables
		 * @see {@link https://eslint.org/docs/rules/no-unused-vars}}
		 *
		 * @property no-unused-vars=error - Code quality.
		 * @memberof core
		 **/
		'no-unused-vars': 'error',

		/**
		 * Disallow the use of variables before they are defined
		 * @see {@link https://eslint.org/docs/rules/no-use-before-define}}
		 *
		 * @property no-use-before-define=error - Code quality.
		 * @memberof core
		 **/
		'no-use-before-define': 'error',

		/**
		 * Disallow useless backreferences in regular expressions
		 * @see {@link https://eslint.org/docs/rules/no-useless-backreference}}
		 *
		 * @property no-useless-backreference=off - Covered by regexp/no-useless-backreference.
		 * @memberof core
		 **/
		'no-useless-backreference': 'off',

		/**
		 * Disallow unnecessary calls to `.call()` and `.apply()`
		 * @see {@link https://eslint.org/docs/rules/no-useless-call}}
		 *
		 * @property no-useless-call=error - Code quality.
		 * @memberof core
		 **/
		'no-useless-call': 'error',

		/**
		 * Disallow unnecessary `catch` clauses
		 * @see {@link https://eslint.org/docs/rules/no-useless-catch}}
		 *
		 * @property no-useless-catch=error - Code quality.
		 * @memberof core
		 **/
		'no-useless-catch': 'error',

		/**
		 * Disallow unnecessary computed property keys in objects and classes
		 * @see {@link https://eslint.org/docs/rules/no-useless-computed-key}}
		 *
		 * @property no-useless-computed-key=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-useless-computed-key': 'error',

		/**
		 * Disallow unnecessary concatenation of literals or template literals
		 * @see {@link https://eslint.org/docs/rules/no-useless-concat}}
		 *
		 * @property no-useless-concat=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-useless-concat': 'error',

		/**
		 * Disallow unnecessary constructors
		 * @see {@link https://eslint.org/docs/rules/no-useless-constructor}}
		 *
		 * @property no-useless-constructor=error - Code quality.
		 * @memberof core
		 **/
		'no-useless-constructor': 'error',

		/**
		 * Disallow unnecessary escape characters
		 * @see {@link https://eslint.org/docs/rules/no-useless-escape}}
		 *
		 * @property no-useless-escape=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-useless-escape': 'error',

		/**
		 * Disallow renaming import, export, and destructured assignments to the same name
		 * @see {@link https://eslint.org/docs/rules/no-useless-rename}}
		 *
		 * @property no-useless-rename=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-useless-rename': 'error',

		/**
		 * Disallow redundant return statements
		 * @see {@link https://eslint.org/docs/rules/no-useless-return}}
		 *
		 * @property no-useless-return=error - Code quality.
		 * @memberof core
		 **/
		'no-useless-return': 'error',

		/**
		 * Require `let` or `const` instead of `var`
		 * @see {@link https://eslint.org/docs/rules/no-var}}
		 *
		 * @property no-var=error - Code quality.
		 * @memberof core
		 **/
		'no-var': 'error',

		/**
		 * Disallow `void` operators
		 * @see {@link https://eslint.org/docs/rules/no-void}}
		 *
		 * @property no-void=error - Code quality.
		 * @memberof core
		 **/
		'no-void': 'error',

		/**
		 * Disallow specified warning terms in comments
		 * @see {@link https://eslint.org/docs/rules/no-warning-comments}}
		 *
		 * @property no-warning-comments=off - Arbitrary.
		 * @memberof core
		 **/
		'no-warning-comments': 'off',

		/**
		 * Disallow whitespace before properties
		 * @see {@link https://eslint.org/docs/rules/no-whitespace-before-property}}
		 *
		 * @property no-whitespace-before-property=error - Readability and simplicity.
		 * @memberof core
		 **/
		'no-whitespace-before-property': 'error',

		/**
		 * Disallow `with` statements
		 * @see {@link https://eslint.org/docs/rules/no-with}}
		 *
		 * @property no-with=error - Code quality.
		 * @memberof core
		 **/
		'no-with': 'error',

		/**
		 * Enforce the location of single-line statements
		 * @see {@link https://eslint.org/docs/rules/nonblock-statement-body-position}}
		 *
		 * @property nonblock-statement-body-position=off - Covered by curly.
		 * @memberof core
		 **/
		'nonblock-statement-body-position': 'off',

		/**
		 * Enforce consistent line breaks after opening and before closing braces
		 * @see {@link https://eslint.org/docs/rules/object-curly-newline}}
		 *
		 * @property object-curly-newline=error - Readability and simplicity.
		 * @memberof core
		 **/
		'object-curly-newline': [
			'error',
			{
				multiline: true,
				consistent: true
			}
		],

		/**
		 * Enforce consistent spacing inside braces
		 * @see {@link https://eslint.org/docs/rules/object-curly-spacing}}
		 *
		 * @property object-curly-spacing=off - Covered by babel/object-curly-spacing.
		 * @memberof core
		 **/
		'object-curly-spacing': 'off',

		/**
		 * Enforce placing object properties on separate lines
		 * @see {@link https://eslint.org/docs/rules/object-property-newline}}
		 *
		 * @property object-property-newline=error - Readability and simplicity.
		 * @memberof core
		 **/
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true
			}
		],

		/**
		 * Require or disallow method and property shorthand syntax for object literals
		 * @see {@link https://eslint.org/docs/rules/object-shorthand}}
		 *
		 * @property object-shorthand=error - Readability and simplicity.
		 * @memberof core
		 **/
		'object-shorthand': 'error',

		/**
		 * Enforce variables to be declared either together or separately in functions
		 * @see {@link https://eslint.org/docs/rules/one-var}}
		 *
		 * @property one-var=error - Readability and simplicity.
		 * @memberof core
		 **/
		'one-var': ['error', 'never'],

		/**
		 * Require or disallow newlines around variable declarations
		 * @see {@link https://eslint.org/docs/rules/one-var-declaration-per-line}}
		 *
		 * @property one-var-declaration-per-line=off - Covered by one-var.
		 * @memberof core
		 **/
		'one-var-declaration-per-line': 'off',

		/**
		 * Require or disallow assignment operator shorthand where possible
		 * @see {@link https://eslint.org/docs/rules/operator-assignment}}
		 *
		 * @property operator-assignment=error - Readability and simplicity.
		 * @memberof core
		 **/
		'operator-assignment': 'error',

		/**
		 * Enforce consistent linebreak style for operators
		 * @see {@link https://eslint.org/docs/rules/operator-linebreak}}
		 *
		 * @property operator-linebreak=error - Readability and simplicity.
		 * @memberof core
		 **/
		'operator-linebreak': ['error', 'after'],

		/**
		 * Require or disallow padding within blocks
		 * @see {@link https://eslint.org/docs/rules/padded-blocks}}
		 *
		 * @property padded-blocks=error - Clean formatting.
		 * @memberof core
		 **/
		'padded-blocks': ['error', 'never'],

		/**
		 * Require or disallow padding lines between statements
		 * @see {@link https://eslint.org/docs/rules/padding-line-between-statements}}
		 *
		 * @property padding-line-between-statements=error - Readability and simplicity.
		 * @memberof core
		 **/
		'padding-line-between-statements': [
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
		 * Require using arrow functions for callbacks
		 * @see {@link https://eslint.org/docs/rules/prefer-arrow-callback}}
		 *
		 * @property prefer-arrow-callback=off - Covered by prefer-arrow-functions/prefer-arrow-functions.
		 * @memberof core
		 **/
		'prefer-arrow-callback': 'off',

		/**
		 * Require `const` declarations for variables that are never reassigned after declared
		 * @see {@link https://eslint.org/docs/rules/prefer-const}}
		 *
		 * @property prefer-const=error - Readability and simplicity.
		 * @memberof core
		 **/
		'prefer-const': 'error',

		/**
		 * Require destructuring from arrays and/or objects
		 * @see {@link https://eslint.org/docs/rules/prefer-destructuring}}
		 *
		 * @property prefer-destructuring=off - Arbitrary.
		 * @memberof core
		 **/
		'prefer-destructuring': 'off',

		/**
		 * Disallow the use of `Math.pow` in favor of the `**` operator
		 * @see {@link https://eslint.org/docs/rules/prefer-exponentiation-operator}}
		 *
		 * @property prefer-exponentiation-operator=off - Readability and simplicity.
		 * @memberof core
		 **/
		'prefer-exponentiation-operator': 'off',

		/**
		 * Enforce using named capture group in regular expression
		 * @see {@link https://eslint.org/docs/rules/prefer-named-capture-group}}
		 *
		 * @property prefer-named-capture-group=off - Covered by regexp/prefer-named-capture-group.
		 * @memberof core
		 **/
		'prefer-named-capture-group': 'off',

		/**
		 * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
		 * @see {@link https://eslint.org/docs/rules/prefer-numeric-literals}}
		 *
		 * @property prefer-numeric-literals=off - Readability and simplicity.
		 * @memberof core
		 **/
		'prefer-numeric-literals': 'off',

		/**
		 * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
		 * @see {@link https://eslint.org/docs/rules/prefer-object-has-own}}
		 *
		 * @property prefer-object-has-own=error - Readability and simplicity.
		 * @memberof core
		 **/
		'prefer-object-has-own': 'error',

		/**
		 * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
		 * @see {@link https://eslint.org/docs/rules/prefer-object-spread}}
		 *
		 * @property prefer-object-spread=off - Arbitrary.
		 * @memberof core
		 **/
		'prefer-object-spread': 'off',

		/**
		 * Require using Error objects as Promise rejection reasons
		 * @see {@link https://eslint.org/docs/rules/prefer-promise-reject-errors}}
		 *
		 * @property prefer-promise-reject-errors=error - Code quality.
		 * @memberof core
		 **/
		'prefer-promise-reject-errors': 'error',

		/**
		 * Disallow use of the `RegExp` constructor in favor of regular expression literals
		 * @see {@link https://eslint.org/docs/rules/prefer-regex-literals}}
		 *
		 * @property prefer-regex-literals=error - Readability and simplicity.
		 * @memberof core
		 **/
		'prefer-regex-literals': 'error',

		/**
		 * Require rest parameters instead of `arguments`
		 * @see {@link https://eslint.org/docs/rules/prefer-rest-params}}
		 *
		 * @property prefer-rest-params=error - Readability and simplicity.
		 * @memberof core
		 **/
		'prefer-rest-params': 'error',

		/**
		 * Require spread operators instead of `.apply()`
		 * @see {@link https://eslint.org/docs/rules/prefer-spread}}
		 *
		 * @property prefer-spread=error - Readability and simplicity.
		 * @memberof core
		 **/
		'prefer-spread': 'error',

		/**
		 * Require template literals instead of string concatenation
		 * @see {@link https://eslint.org/docs/rules/prefer-template}}
		 *
		 * @property prefer-template=error - Readability and simplicity.
		 * @memberof core
		 **/
		'prefer-template': 'error',

		/**
		 * Require quotes around object literal property names
		 * @see {@link https://eslint.org/docs/rules/quote-props}}
		 *
		 * @property quote-props=error - Readability and simplicity.
		 * @memberof core
		 **/
		'quote-props': ['error', 'as-needed'],

		/**
		 * Enforce the consistent use of either backticks, double, or single quotes
		 * @see {@link https://eslint.org/docs/rules/quotes}}
		 *
		 * @property quotes=off - Covered by babel/quotes.
		 * @memberof core
		 **/
		quotes: 'off',

		/**
		 * Enforce the consistent use of the radix argument when using `parseInt()`
		 * @see {@link https://eslint.org/docs/rules/radix}}
		 *
		 * @property radix=error - Code quality.
		 * @memberof core
		 **/
		radix: 'error',

		/**
		 * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
		 * @see {@link https://eslint.org/docs/rules/require-atomic-updates}}
		 *
		 * @property require-atomic-updates=error - Code quality.
		 * @memberof core
		 **/
		'require-atomic-updates': 'error',

		/**
		 * Disallow async functions which have no `await` expression
		 * @see {@link https://eslint.org/docs/rules/require-await}}
		 *
		 * @property require-await=off - Doesn't consider functions that return a Promise.
		 * @memberof core
		 **/
		'require-await': 'off',

		/**
		 * Enforce the use of `u` flag on RegExp
		 * @see {@link https://eslint.org/docs/rules/require-unicode-regexp}}
		 *
		 * @property require-unicode-regexp=off - Covered by regexp/no-misleading-unicode-character.
		 * @memberof core
		 **/
		'require-unicode-regexp': 'off',

		/**
		 * Require generator functions to contain `yield`
		 * @see {@link https://eslint.org/docs/rules/require-yield}}
		 *
		 * @property require-yield=error - Code quality.
		 * @memberof core
		 **/
		'require-yield': 'error',

		/**
		 * Enforce spacing between rest and spread operators and their expressions
		 * @see {@link https://eslint.org/docs/rules/rest-spread-spacing}}
		 *
		 * @property rest-spread-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'rest-spread-spacing': 'error',

		/**
		 * Require or disallow semicolons instead of ASI
		 * @see {@link https://eslint.org/docs/rules/semi}}
		 *
		 * @property semi=off - Covered by babel/semi.
		 * @memberof core
		 **/
		semi: 'off',

		/**
		 * Enforce consistent spacing before and after semicolons
		 * @see {@link https://eslint.org/docs/rules/semi-spacing}}
		 *
		 * @property semi-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'semi-spacing': 'error',

		/**
		 * Enforce location of semicolons
		 * @see {@link https://eslint.org/docs/rules/semi-style}}
		 *
		 * @property semi-style=error - Readability and simplicity.
		 * @memberof core
		 **/
		'semi-style': ['error', 'last'],

		/**
		 * Enforce sorted import declarations within modules
		 * @see {@link https://eslint.org/docs/rules/sort-imports}}
		 *
		 * @property sort-imports=error - Too simple. Doesn't account for grouping adequately.
		 * @memberof core
		 **/
		'sort-imports': 'off',

		/**
		 * Require object keys to be sorted
		 * @see {@link https://eslint.org/docs/rules/sort-keys}}
		 *
		 * @property sort-keys=off - Arbitrary.
		 * @memberof core
		 **/
		'sort-keys': 'off',

		/**
		 * Require variables within the same declaration block to be sorted
		 * @see {@link https://eslint.org/docs/rules/sort-vars}}
		 *
		 * @property sort-vars=off - Arbitrary.
		 * @memberof core
		 **/
		'sort-vars': 'off',

		/**
		 * Enforce consistent spacing before blocks
		 * @see {@link https://eslint.org/docs/rules/space-before-blocks}}
		 *
		 * @property space-before-blocks=error - Readability and simplicity.
		 * @memberof core
		 **/
		'space-before-blocks': 'error',

		/**
		 * Enforce consistent spacing before `function` definition opening parenthesis
		 * @see {@link https://eslint.org/docs/rules/space-before-function-paren}}
		 *
		 * @property space-before-function-paren=error - Readability and simplicity.
		 * @memberof core
		 **/
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'ignore'
		}],

		/**
		 * Enforce consistent spacing inside parentheses
		 * @see {@link https://eslint.org/docs/rules/space-in-parens}}
		 *
		 * @property space-in-parens=error - Readability and simplicity.
		 * @memberof core
		 **/
		'space-in-parens': ['error', 'never'],

		/**
		 * Require spacing around infix operators
		 * @see {@link https://eslint.org/docs/rules/space-infix-ops}}
		 *
		 * @property space-infix-ops=error - Readability and simplicity.
		 * @memberof core
		 **/
		'space-infix-ops': 'error',

		/**
		 * Enforce consistent spacing before or after unary operators
		 * @see {@link https://eslint.org/docs/rules/space-unary-ops}}
		 *
		 * @property space-unary-ops=error - Readability and simplicity.
		 * @memberof core
		 **/
		'space-unary-ops': 'error',

		/**
		 * Enforce consistent spacing after the `//` or `/*` in a comment
		 * @see {@link https://eslint.org/docs/rules/spaced-comment}}
		 *
		 * @property spaced-comment=error - Readability and simplicity.
		 * @memberof core
		 **/
		'spaced-comment': ['error', 'always'],

		/**
		 * Require or disallow strict mode directives
		 * @see {@link https://eslint.org/docs/rules/strict}}
		 *
		 * @property strict=error - Code quality.
		 * @memberof core
		 **/
		strict: 'error',

		/**
		 * Enforce spacing around colons of switch statements
		 * @see {@link https://eslint.org/docs/rules/switch-colon-spacing}}
		 *
		 * @property switch-colon-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'switch-colon-spacing': 'error',

		/**
		 * Require symbol descriptions
		 * @see {@link https://eslint.org/docs/rules/symbol-description}}
		 *
		 * @property symbol-description=off - Arbitrary.
		 * @memberof core
		 **/
		'symbol-description': 'off',

		/**
		 * Require or disallow spacing around embedded expressions of template strings
		 * @see {@link https://eslint.org/docs/rules/template-curly-spacing}}
		 *
		 * @property template-curly-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'template-curly-spacing': ['error', 'always'],

		/**
		 * Require or disallow spacing between template tags and their literals
		 * @see {@link https://eslint.org/docs/rules/template-tag-spacing}}
		 *
		 * @property template-tag-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'template-tag-spacing': 'error',

		/**
		 * Require or disallow Unicode byte order mark (BOM)
		 * @see {@link https://eslint.org/docs/rules/unicode-bom}}
		 *
		 * @property unicode-bom=off
		 * @memberof core
		 **/
		'unicode-bom': 'off',

		/**
		 * Require calls to `isNaN()` when checking for `NaN`
		 * @see {@link https://eslint.org/docs/rules/use-isnan}}
		 *
		 * @property use-isnan=error - Readability and simplicity.
		 * @memberof core
		 **/
		'use-isnan': 'error',

		/**
		 * Enforce comparing `typeof` expressions against valid strings
		 * @see {@link https://eslint.org/docs/rules/valid-typeof}}
		 *
		 * @property valid-typeof=off - Covered by babel/valid-typeof.
		 * @memberof core
		 **/
		'valid-typeof': 'off',

		/**
		 * Require `var` declarations be placed at the top of their containing scope
		 * @see {@link https://eslint.org/docs/rules/vars-on-top}}
		 *
		 * @property vars-on-top=off - Unnecessary.
		 * @memberof core
		 **/
		'vars-on-top': 'off',

		/**
		 * Require parentheses around immediate `function` invocations
		 * @see {@link https://eslint.org/docs/rules/wrap-iife}}
		 *
		 * @property wrap-iife=error - Readability and simplicity.
		 * @memberof core
		 **/
		'wrap-iife': ['error', 'inside'],

		/**
		 * Require parenthesis around regex literals
		 * @see {@link https://eslint.org/docs/rules/wrap-regex}}
		 *
		 * @property wrap-regex=off - Arbitrary.
		 * @memberof core
		 **/
		'wrap-regex': 'off',

		/**
		 * Require or disallow spacing around the `*` in `yield*` expressions
		 * @see {@link https://eslint.org/docs/rules/yield-star-spacing}}
		 *
		 * @property yield-star-spacing=error - Readability and simplicity.
		 * @memberof core
		 **/
		'yield-star-spacing': 'error',

		/**
		 * Require or disallow "Yoda" conditions
		 * @see {@link https://eslint.org/docs/rules/yoda}}
		 *
		 * @property yoda=error - Readability and simplicity.
		 * @memberof core
		 **/
		yoda: [
			'error',
			'never',
			{
				onlyEquality: true
			}
		]
	}
};