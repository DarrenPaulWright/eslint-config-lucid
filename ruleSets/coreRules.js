/**
 * Core ESLint rules.
 *
 * @namespace core
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
	rules: {
		/**
		 * Enforce getter and setter pairs in objects and classes
		 * @see {@link https://eslint.org/docs/rules/accessor-pairs}
		 *
		 * @property accessor-pairs=off - Arbitrary.
		 * @memberOf core
		 **/
		'accessor-pairs': 'off',

		/**
		 * Enforce `return` statements in callbacks of array methods
		 * @see {@link https://eslint.org/docs/rules/array-callback-return}
		 *
		 * @property array-callback-return=error - Code quality.
		 * @memberOf core
		 **/
		'array-callback-return': 'error',

		/**
		 * Require braces around arrow function bodies
		 * @see {@link https://eslint.org/docs/rules/arrow-body-style}
		 *
		 * @property arrow-body-style=off - Doesn't account for line length restrictions.
		 * @memberOf core
		 **/
		'arrow-body-style': 'off',

		/**
		 * Enforce the use of variables within the scope they are defined
		 * @see {@link https://eslint.org/docs/rules/block-scoped-var}
		 *
		 * @property block-scoped-var=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'block-scoped-var': 'error',

		/**
		 * Enforce camelcase naming convention
		 * @see {@link https://eslint.org/docs/rules/camelcase}
		 *
		 * @property camelcase=off - Covered by babel/camelcase.
		 * @memberOf core
		 **/
		camelcase: 'off',

		/**
		 * Enforce or disallow capitalization of the first letter of a comment
		 * @see {@link https://eslint.org/docs/rules/capitalized-comments}
		 *
		 * @property capitalized-comments=off - Arbitrary.
		 * @memberOf core
		 **/
		'capitalized-comments': 'off',

		/**
		 * Enforce that class methods utilize `this`
		 * @see {@link https://eslint.org/docs/rules/class-methods-use-this}
		 *
		 * @property class-methods-use-this=warn - Readability and simplicity.
		 * @memberOf core
		 **/
		'class-methods-use-this': 'warn',

		/**
		 * Enforce a maximum cyclomatic complexity allowed in a program
		 * @see {@link https://eslint.org/docs/rules/complexity}
		 *
		 * @property complexity=warn - Readability and simplicity.
		 * @memberOf core
		 **/
		complexity: ['warn', 15],

		/**
		 * Require `return` statements to either always or never specify values
		 * @see {@link https://eslint.org/docs/rules/consistent-return}
		 *
		 * @property consistent-return=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'consistent-return': 'error',

		/**
		 * Enforce consistent naming when capturing the current execution context
		 * @see {@link https://eslint.org/docs/rules/consistent-this}
		 *
		 * @property consistent-this=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'consistent-this': ['error', 'self'],

		/**
		 * Require `super()` calls in constructors
		 * @see {@link https://eslint.org/docs/rules/constructor-super}
		 *
		 * @property constructor-super=error - Code quality.
		 * @memberOf core
		 **/
		'constructor-super': 'error',

		/**
		 * Enforce consistent brace style for all control statements
		 * @see {@link https://eslint.org/docs/rules/curly}
		 *
		 * @property curly=error - Readability and simplicity.
		 * @memberOf core
		 **/
		curly: 'error',

		/**
		 * Require `default` cases in `switch` statements
		 * @see {@link https://eslint.org/docs/rules/default-case}
		 *
		 * @property default-case=off - Arbitrary.
		 * @memberOf core
		 **/
		'default-case': 'off',

		/**
		 * Enforce default clauses in switch statements to be last
		 * @see {@link https://eslint.org/docs/rules/default-case-last}
		 *
		 * @property default-case-last=error - Code quality.
		 * @memberOf core
		 **/
		'default-case-last': 'error',

		/**
		 * Enforce default parameters to be last
		 * @see {@link https://eslint.org/docs/rules/default-param-last}
		 *
		 * @property default-param-last=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'default-param-last': 'error',

		/**
		 * Enforce dot notation whenever possible
		 * @see {@link https://eslint.org/docs/rules/dot-notation}
		 *
		 * @property dot-notation=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'dot-notation': 'error',

		/**
		 * Require the use of `===` and `!==`
		 * @see {@link https://eslint.org/docs/rules/eqeqeq}
		 *
		 * @property eqeqeq=error - Code quality.
		 * @memberOf core
		 **/
		eqeqeq: 'error',

		/**
		 * Enforce "for" loop update clause moving the counter in the right direction.
		 * @see {@link https://eslint.org/docs/rules/for-direction}
		 *
		 * @property for-direction=error - Code quality.
		 * @memberOf core
		 **/
		'for-direction': 'error',

		/**
		 * Require function names to match the name of the variable or property to which they are assigned
		 * @see {@link https://eslint.org/docs/rules/func-name-matching}
		 *
		 * @property func-name-matching=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'func-name-matching': 'error',

		/**
		 * Require or disallow named `function` expressions
		 * @see {@link https://eslint.org/docs/rules/func-names}
		 *
		 * @property func-names=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'func-names': ['error', 'never'],

		/**
		 * Enforce the consistent use of either `function` declarations or expressions
		 * @see {@link https://eslint.org/docs/rules/func-style}
		 *
		 * @property func-style=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'func-style': 'error',

		/**
		 * Enforce `return` statements in getters
		 * @see {@link https://eslint.org/docs/rules/getter-return}
		 *
		 * @property getter-return=error - Code quality.
		 * @memberOf core
		 **/
		'getter-return': 'error',

		/**
		 * Require grouped accessor pairs in object literals and classes
		 * @see {@link https://eslint.org/docs/rules/grouped-accessor-pairs}
		 *
		 * @property grouped-accessor-pairs=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],

		/**
		 * Require `for-in` loops to include an `if` statement
		 * @see {@link https://eslint.org/docs/rules/guard-for-in}
		 *
		 * @property guard-for-in=off - Arbitrary.
		 * @memberOf core
		 **/
		'guard-for-in': 'off',

		/**
		 * Disallow specified identifiers
		 * @see {@link https://eslint.org/docs/rules/id-denylist}
		 *
		 * @property id-denylist=off - Arbitrary.
		 * @memberOf core
		 **/
		'id-denylist': 'off',

		/**
		 * Enforce minimum and maximum identifier lengths
		 * @see {@link https://eslint.org/docs/rules/id-length}
		 *
		 * @property id-length=off - Arbitrary.
		 * @memberOf core
		 **/
		'id-length': 'off',

		/**
		 * Require identifiers to match a specified regular expression
		 * @see {@link https://eslint.org/docs/rules/id-match}
		 *
		 * @property id-match=off - Covered by camelcase.
		 * @memberOf core
		 **/
		'id-match': 'off',

		/**
		 * Require or disallow initialization in variable declarations
		 * @see {@link https://eslint.org/docs/rules/init-declarations}
		 *
		 * @property init-declarations=warn - Readability and simplicity and performance.
		 * @memberOf core
		 **/
		'init-declarations': 'warn',

		/**
		 * Enforce position of line comments
		 * @see {@link https://eslint.org/docs/rules/line-comment-position}
		 *
		 * @property line-comment-position=off - Arbitrary.
		 * @memberOf core
		 **/
		'line-comment-position': 'off',

		/**
		 * Require or disallow logical assignment logical operator shorthand
		 * @see {@link https://eslint.org/docs/rules/logical-assignment-operators}
		 *
		 * @property logical-assignment-operators=off - enforceForIfStatements.
		 * @memberOf core
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
		 * @see {@link https://eslint.org/docs/rules/max-classes-per-file}
		 *
		 * @property max-classes-per-file=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'max-classes-per-file': 'error',

		/**
		 * Enforce a maximum depth that blocks can be nested
		 * @see {@link https://eslint.org/docs/rules/max-depth}
		 *
		 * @property max-depth=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'max-depth': 'error',

		/**
		 * Enforce a maximum number of lines per file
		 * @see {@link https://eslint.org/docs/rules/max-lines}
		 *
		 * @property max-lines=off - Arbitrary.
		 * @memberOf core
		 **/
		'max-lines': 'off',

		/**
		 * Enforce a maximum number of lines of code in a function
		 * @see {@link https://eslint.org/docs/rules/max-lines-per-function}
		 *
		 * @property max-lines-per-function=off - Arbitrary, prefer complexity rule.
		 * @memberOf core
		 **/
		'max-lines-per-function': 'off',

		/**
		 * Enforce a maximum depth that callbacks can be nested
		 * @see {@link https://eslint.org/docs/rules/max-nested-callbacks}
		 *
		 * @property max-nested-callbacks=warn - Readability and simplicity.
		 * @memberOf core
		 **/
		'max-nested-callbacks': ['warn', { max: 5 }],

		/**
		 * Enforce a maximum number of parameters in function definitions
		 * @see {@link https://eslint.org/docs/rules/max-params}
		 *
		 * @property max-params=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'max-params': ['error', { max: 5 }],

		/**
		 * Enforce a maximum number of statements allowed in function blocks
		 * @see {@link https://eslint.org/docs/rules/max-statements}
		 *
		 * @property max-statements=off - Arbitrary, prefer complexity rule.
		 * @memberOf core
		 **/
		'max-statements': 'off',

		/**
		 * Enforce a particular style for multiline comments
		 * @see {@link https://eslint.org/docs/rules/multiline-comment-style}
		 *
		 * @property multiline-comment-style=off - Covered by jsdoc.
		 * @memberOf core
		 **/
		'multiline-comment-style': 'off',

		/**
		 * Require constructor names to begin with a capital letter
		 * @see {@link https://eslint.org/docs/rules/new-cap}
		 *
		 * @property new-cap=off - Covered by babel/new-cap.
		 * @memberOf core
		 **/
		'new-cap': 'off',

		/**
		 * Disallow the use of `alert`, `confirm`, and `prompt`
		 * @see {@link https://eslint.org/docs/rules/no-alert}
		 *
		 * @property no-alert=off - Arbitrary.
		 * @memberOf core
		 **/
		'no-alert': 'off',

		/**
		 * Disallow `Array` constructors
		 * @see {@link https://eslint.org/docs/rules/no-array-constructor}
		 *
		 * @property no-array-constructor=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-array-constructor': 'error',

		/**
		 * Disallow using an async function as a Promise executor
		 * @see {@link https://eslint.org/docs/rules/no-async-promise-executor}
		 *
		 * @property no-async-promise-executor=error - Code quality.
		 * @memberOf core
		 **/
		'no-async-promise-executor': 'error',

		/**
		 * Disallow `await` inside of loops
		 * @see {@link https://eslint.org/docs/rules/no-await-in-loop}
		 *
		 * @property no-await-in-loop=off - Arbitrary.
		 * @memberOf core
		 **/
		'no-await-in-loop': 'off',

		/**
		 * Disallow bitwise operators
		 * @see {@link https://eslint.org/docs/rules/no-bitwise}
		 *
		 * @property no-bitwise=off - Arbitrary.
		 * @memberOf core
		 **/
		'no-bitwise': 'off',

		/**
		 * Disallow the use of `arguments.caller` or `arguments.callee`
		 * @see {@link https://eslint.org/docs/rules/no-caller}
		 *
		 * @property no-caller=error - Code quality.
		 * @memberOf core
		 **/
		'no-caller': 'error',

		/**
		 * Disallow lexical declarations in case clauses
		 * @see {@link https://eslint.org/docs/rules/no-case-declarations}
		 *
		 * @property no-case-declarations=error - Code quality.
		 * @memberOf core
		 **/
		'no-case-declarations': 'error',

		/**
		 * Disallow reassigning class members
		 * @see {@link https://eslint.org/docs/rules/no-class-assign}
		 *
		 * @property no-class-assign=error - Code quality.
		 * @memberOf core
		 **/
		'no-class-assign': 'error',

		/**
		 * Disallow comparing against -0
		 * @see {@link https://eslint.org/docs/rules/no-compare-neg-zero}
		 *
		 * @property no-compare-neg-zero=error - Code quality.
		 * @memberOf core
		 **/
		'no-compare-neg-zero': 'error',

		/**
		 * Disallow assignment operators in conditional expressions
		 * @see {@link https://eslint.org/docs/rules/no-cond-assign}
		 *
		 * @property no-cond-assign=error - Code quality.
		 * @memberOf core
		 **/
		'no-cond-assign': 'error',

		/**
		 * Disallow the use of `console`
		 * @see {@link https://eslint.org/docs/rules/no-console}
		 *
		 * @property no-console=off - Code quality.
		 * @memberOf core
		 **/
		'no-console': [
			'warn',
			{
				allow: ['warn', 'error']
			}
		],

		/**
		 * Disallow reassigning `const` variables
		 * @see {@link https://eslint.org/docs/rules/no-const-assign}
		 *
		 * @property no-const-assign=error - Code quality.
		 * @memberOf core
		 **/
		'no-const-assign': 'error',

		/**
		 * Disallow expressions where the operation doesn't affect the value
		 * @see {@link https://eslint.org/docs/rules/no-constant-binary-expression}
		 *
		 * @property no-constant-binary-expression=error - Code quality.
		 * @memberOf core
		 **/
		'no-constant-binary-expression': 'error',

		/**
		 * Disallow constant expressions in conditions
		 * @see {@link https://eslint.org/docs/rules/no-constant-condition}
		 *
		 * @property no-constant-condition=error - Code quality.
		 * @memberOf core
		 **/
		'no-constant-condition': 'error',

		/**
		 * Disallow returning value from constructor
		 * @see {@link https://eslint.org/docs/rules/no-constructor-return}
		 *
		 * @property no-constructor-return=error - Code quality.
		 * @memberOf core
		 **/
		'no-constructor-return': 'error',

		/**
		 * Disallow `continue` statements
		 * @see {@link https://eslint.org/docs/rules/no-continue}
		 *
		 * @property no-continue=error - Code quality.
		 * @memberOf core
		 **/
		'no-continue': 'error',

		/**
		 * Disallow control characters in regular expressions
		 * @see {@link https://eslint.org/docs/rules/no-control-regex}
		 *
		 * @property no-control-regex=off - Covered by regexp/no-control-character.
		 * @memberOf core
		 **/
		'no-control-regex': 'off',

		/**
		 * Disallow the use of `debugger`
		 * @see {@link https://eslint.org/docs/rules/no-debugger}
		 *
		 * @property no-debugger=error - Code quality.
		 * @memberOf core
		 **/
		'no-debugger': 'error',

		/**
		 * Disallow deleting variables
		 * @see {@link https://eslint.org/docs/rules/no-delete-var}
		 *
		 * @property no-delete-var=error - Code quality.
		 * @memberOf core
		 **/
		'no-delete-var': 'error',

		/**
		 * Disallow division operators explicitly at the beginning of regular expressions
		 * @see {@link https://eslint.org/docs/rules/no-div-regex}
		 *
		 * @property no-div-regex=error - Code quality.
		 * @memberOf core
		 **/
		'no-div-regex': 'error',

		/**
		 * Disallow duplicate arguments in `function` definitions
		 * @see {@link https://eslint.org/docs/rules/no-dupe-args}
		 *
		 * @property no-dupe-args=error - Code quality.
		 * @memberOf core
		 **/
		'no-dupe-args': 'error',

		/**
		 * Disallow duplicate class members
		 * @see {@link https://eslint.org/docs/rules/no-dupe-class-members}
		 *
		 * @property no-dupe-class-members=error - Code quality.
		 * @memberOf core
		 **/
		'no-dupe-class-members': 'error',

		/**
		 * Disallow duplicate conditions in if-else-if chains
		 * @see {@link https://eslint.org/docs/rules/no-dupe-else-if}
		 *
		 * @property no-dupe-else-if=error - Code quality.
		 * @memberOf core
		 **/
		'no-dupe-else-if': 'error',

		/**
		 * Disallow duplicate keys in object literals
		 * @see {@link https://eslint.org/docs/rules/no-dupe-keys}
		 *
		 * @property no-dupe-keys=error - Code quality.
		 * @memberOf core
		 **/
		'no-dupe-keys': 'error',

		/**
		 * Disallow duplicate case labels
		 * @see {@link https://eslint.org/docs/rules/no-duplicate-case}
		 *
		 * @property no-duplicate-case=error - Code quality.
		 * @memberOf core
		 **/
		'no-duplicate-case': 'error',

		/**
		 * Disallow duplicate module imports
		 * @see {@link https://eslint.org/docs/rules/no-duplicate-imports}
		 *
		 * @property no-duplicate-imports=error - Code quality.
		 * @memberOf core
		 **/
		'no-duplicate-imports': 'error',

		/**
		 * Disallow `else` blocks after `return` statements in `if` statements
		 * @see {@link https://eslint.org/docs/rules/no-else-return}
		 *
		 * @property no-else-return=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-else-return': 'error',

		/**
		 * Disallow empty block statements
		 * @see {@link https://eslint.org/docs/rules/no-empty}
		 *
		 * @property no-empty=error - Code quality.
		 * @memberOf core
		 **/
		'no-empty': 'error',

		/**
		 * Disallow empty character classes in regular expressions
		 * @see {@link https://eslint.org/docs/rules/no-empty-character-class}
		 *
		 * @property no-empty-character-class=error - Code quality.
		 * @memberOf core
		 **/
		'no-empty-character-class': 'error',

		/**
		 * Disallow empty functions
		 * @see {@link https://eslint.org/docs/rules/no-empty-function}
		 *
		 * @property no-empty-function=error - Code quality.
		 * @memberOf core
		 **/
		'no-empty-function': 'error',

		/**
		 * Disallow empty destructuring patterns
		 * @see {@link https://eslint.org/docs/rules/no-empty-pattern}
		 *
		 * @property no-empty-pattern=error - Code quality.
		 * @memberOf core
		 **/
		'no-empty-pattern': 'error',

		/**
		 * Disallow empty static blocks
		 * @see {@link https://eslint.org/docs/rules/no-empty-static-block}
		 *
		 * @property no-empty-static-block=error - Code quality.
		 * @memberOf core
		 **/
		'no-empty-static-block': 'error',

		/**
		 * Disallow `null` comparisons without type-checking operators
		 * @see {@link https://eslint.org/docs/rules/no-eq-null}
		 *
		 * @property no-eq-null=off - Covered by eqeqeq.
		 * @memberOf core
		 **/
		'no-eq-null': 'off',

		/**
		 * Disallow the use of `eval()`
		 * @see {@link https://eslint.org/docs/rules/no-eval}
		 *
		 * @property no-eval=error - Code quality and security.
		 * @memberOf core
		 **/
		'no-eval': 'error',

		/**
		 * Disallow reassigning exceptions in `catch` clauses
		 * @see {@link https://eslint.org/docs/rules/no-ex-assign}
		 *
		 * @property no-ex-assign=error - Code quality.
		 * @memberOf core
		 **/
		'no-ex-assign': 'error',

		/**
		 * Disallow extending native types
		 * @see {@link https://eslint.org/docs/rules/no-extend-native}
		 *
		 * @property no-extend-native=error - Code quality.
		 * @memberOf core
		 **/
		'no-extend-native': 'error',

		/**
		 * Disallow unnecessary calls to `.bind()`
		 * @see {@link https://eslint.org/docs/rules/no-extra-bind}
		 *
		 * @property no-extra-bind=error - Code quality.
		 * @memberOf core
		 **/
		'no-extra-bind': 'error',

		/**
		 * Disallow unnecessary boolean casts
		 * @see {@link https://eslint.org/docs/rules/no-extra-boolean-cast}
		 *
		 * @property no-extra-boolean-cast=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-extra-boolean-cast': 'error',

		/**
		 * Disallow unnecessary labels
		 * @see {@link https://eslint.org/docs/rules/no-extra-label}
		 *
		 * @property no-extra-label=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-extra-label': 'error',

		/**
		 * Disallow fallthrough of `case` statements
		 * @see {@link https://eslint.org/docs/rules/no-fallthrough}
		 *
		 * @property no-fallthrough=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-fallthrough': 'error',

		/**
		 * Disallow reassigning `function` declarations
		 * @see {@link https://eslint.org/docs/rules/no-func-assign}
		 *
		 * @property no-func-assign=error - Code quality.
		 * @memberOf core
		 **/
		'no-func-assign': 'error',

		/**
		 * Disallow assignments to native objects or read-only global variables
		 * @see {@link https://eslint.org/docs/rules/no-global-assign}
		 *
		 * @property no-global-assign=error - Code quality.
		 * @memberOf core
		 **/
		'no-global-assign': 'error',

		/**
		 * Disallow shorthand type conversions
		 * @see {@link https://eslint.org/docs/rules/no-implicit-coercion}
		 *
		 * @property no-implicit-coercion=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-implicit-coercion': 'error',

		/**
		 * Disallow declarations in the global scope
		 * @see {@link https://eslint.org/docs/rules/no-implicit-globals}
		 *
		 * @property no-implicit-globals=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-implicit-globals': 'error',

		/**
		 * Disallow the use of `eval()`-like methods
		 * @see {@link https://eslint.org/docs/rules/no-implied-eval}
		 *
		 * @property no-implied-eval=error - Code quality.
		 * @memberOf core
		 **/
		'no-implied-eval': 'error',

		/**
		 * Disallow assigning to imported bindings
		 * @see {@link https://eslint.org/docs/rules/no-import-assign}
		 *
		 * @property no-import-assign=error - Code quality.
		 * @memberOf core
		 **/
		'no-import-assign': 'error',

		/**
		 * Disallow inline comments after code
		 * @see {@link https://eslint.org/docs/rules/no-inline-comments}
		 *
		 * @property no-inline-comments=off - Arbitrary.
		 * @memberOf core
		 **/
		'no-inline-comments': 'off',

		/**
		 * Disallow variable or `function` declarations in nested blocks
		 * @see {@link https://eslint.org/docs/rules/no-inner-declarations}
		 *
		 * @property no-inner-declarations=error - Code quality.
		 * @memberOf core
		 **/
		'no-inner-declarations': 'error',

		/**
		 * Disallow invalid regular expression strings in `RegExp` constructors
		 * @see {@link https://eslint.org/docs/rules/no-invalid-regexp}
		 *
		 * @property no-invalid-regexp=off - Covered by regexp/no-invalid-regexp.
		 * @memberOf core
		 **/
		'no-invalid-regexp': 'off',

		/**
		 * Disallow use of `this` in contexts where the value of `this` is `undefined`
		 * @see {@link https://eslint.org/docs/rules/no-invalid-this}
		 *
		 * @property no-invalid-this=off - Covered by babel/no-invalid-this.
		 * @memberOf core
		 **/
		'no-invalid-this': 'off',

		/**
		 * Disallow irregular whitespace
		 * @see {@link https://eslint.org/docs/rules/no-irregular-whitespace}
		 *
		 * @property no-irregular-whitespace=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-irregular-whitespace': 'error',

		/**
		 * Disallow the use of the `__iterator__` property
		 * @see {@link https://eslint.org/docs/rules/no-iterator}
		 *
		 * @property no-iterator=error - Code quality.
		 * @memberOf core
		 **/
		'no-iterator': 'error',

		/**
		 * Disallow labels that share a name with a variable
		 * @see {@link https://eslint.org/docs/rules/no-label-var}
		 *
		 * @property no-label-var=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-label-var': 'error',

		/**
		 * Disallow labeled statements
		 * @see {@link https://eslint.org/docs/rules/no-labels}
		 *
		 * @property no-labels=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-labels': 'error',

		/**
		 * Disallow unnecessary nested blocks
		 * @see {@link https://eslint.org/docs/rules/no-lone-blocks}
		 *
		 * @property no-lone-blocks=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-lone-blocks': 'error',

		/**
		 * Disallow `if` statements as the only statement in `else` blocks
		 * @see {@link https://eslint.org/docs/rules/no-lonely-if}
		 *
		 * @property no-lonely-if=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-lonely-if': 'error',

		/**
		 * Disallow function declarations that contain unsafe references inside loop statements
		 * @see {@link https://eslint.org/docs/rules/no-loop-func}
		 *
		 * @property no-loop-func=error - Code quality.
		 * @memberOf core
		 **/
		'no-loop-func': 'error',

		/**
		 * Disallow literal numbers that lose precision
		 * @see {@link https://eslint.org/docs/rules/no-loss-of-precision}
		 *
		 * @property no-loss-of-precision=error - Code quality.
		 * @memberOf core
		 **/
		'no-loss-of-precision': 'error',

		/**
		 * Disallow magic numbers
		 * @see {@link https://eslint.org/docs/rules/no-magic-numbers}
		 *
		 * @property no-magic-numbers=off - Too many false positives.
		 * @memberOf core
		 **/
		'no-magic-numbers': 'off',

		/**
		 * Disallow characters which are made with multiple code points in character class syntax
		 * @see {@link https://eslint.org/docs/rules/no-misleading-character-class}
		 *
		 * @property no-misleading-character-class=error - Code quality.
		 * @memberOf core
		 **/
		'no-misleading-character-class': 'error',

		/**
		 * Disallow use of chained assignment expressions
		 * @see {@link https://eslint.org/docs/rules/no-multi-assign}
		 *
		 * @property no-multi-assign=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-multi-assign': 'error',

		/**
		 * Disallow multiline strings
		 * @see {@link https://eslint.org/docs/rules/no-multi-str}
		 *
		 * @property no-multi-str=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-multi-str': 'error',

		/**
		 * Disallow negated conditions
		 * @see {@link https://eslint.org/docs/rules/no-negated-condition}
		 *
		 * @property no-negated-condition=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-negated-condition': 'error',

		/**
		 * Disallow nested ternary expressions
		 * @see {@link https://eslint.org/docs/rules/no-nested-ternary}
		 *
		 * @property no-nested-ternary=off - Covered by unicorn/no-nested-ternary.
		 * @memberOf core
		 **/
		'no-nested-ternary': 'off',

		/**
		 * Disallow `new` operators outside of assignments or comparisons
		 * @see {@link https://eslint.org/docs/rules/no-new}
		 *
		 * @property no-new=error - Code quality.
		 * @memberOf core
		 **/
		'no-new': 'error',

		/**
		 * Disallow `new` operators with the `Function` object
		 * @see {@link https://eslint.org/docs/rules/no-new-func}
		 *
		 * @property no-new-func=error - Code quality.
		 * @memberOf core
		 **/
		'no-new-func': 'error',

		/**
		 * Disallow `new` operators with global non-constructor functions
		 * @see {@link https://eslint.org/docs/rules/no-new-native-nonconstructor}
		 *
		 * @property no-new-native-nonconstructor=off - Covered by unicorn/new-for-builtins.
		 * @memberOf core
		 **/
		'no-new-native-nonconstructor': 'off',

		/**
		 * Disallow `new` operators with the `Symbol` object
		 * @see {@link https://eslint.org/docs/rules/no-new-symbol}
		 *
		 * @property no-new-symbol=off - Covered by unicorn/new-for-builtins.
		 * @memberOf core
		 **/
		'no-new-symbol': 'off',

		/**
		 * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
		 * @see {@link https://eslint.org/docs/rules/no-new-wrappers}
		 *
		 * @property no-new-wrappers=off - Covered by unicorn/new-for-builtins.
		 * @memberOf core
		 **/
		'no-new-wrappers': 'off',

		/**
		 * Disallow `\8` and `\9` escape sequences in string literals
		 * @see {@link https://eslint.org/docs/rules/no-nonoctal-decimal-escape}
		 *
		 * @property no-nonoctal-decimal-escape=error - Code quality.
		 * @memberOf core
		 **/
		'no-nonoctal-decimal-escape': 'error',

		/**
		 * Disallow calling global object properties as functions
		 * @see {@link https://eslint.org/docs/rules/no-obj-calls}
		 *
		 * @property no-obj-calls=error - Code quality.
		 * @memberOf core
		 **/
		'no-obj-calls': 'error',

		/**
		 * Disallow `Object` constructors
		 * @see {@link https://eslint.org/docs/rules/no-object-constructor}
		 *
		 * @property no-object-constructor=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-object-constructor': 'error',

		/**
		 * Disallow octal literals
		 * @see {@link https://eslint.org/docs/rules/no-octal}
		 *
		 * @property no-octal=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-octal': 'error',

		/**
		 * Disallow octal escape sequences in string literals
		 * @see {@link https://eslint.org/docs/rules/no-octal-escape}
		 *
		 * @property no-octal-escape=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-octal-escape': 'error',

		/**
		 * Disallow reassigning `function` parameters
		 * @see {@link https://eslint.org/docs/rules/no-param-reassign}
		 *
		 * @property no-param-reassign=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-param-reassign': 'error',

		/**
		 * Disallow the unary operators `++` and `--`
		 * @see {@link https://eslint.org/docs/rules/no-plusplus}
		 *
		 * @property no-plusplus=off - Arbitrary.
		 * @memberOf core
		 **/
		'no-plusplus': 'off',

		/**
		 * Disallow returning values from Promise executor functions
		 * @see {@link https://eslint.org/docs/rules/no-promise-executor-return}
		 *
		 * @property no-promise-executor-return=error - Code quality.
		 * @memberOf core
		 **/
		'no-promise-executor-return': 'error',

		/**
		 * Disallow the use of the `__proto__` property
		 * @see {@link https://eslint.org/docs/rules/no-proto}
		 *
		 * @property no-proto=error - Code quality.
		 * @memberOf core
		 **/
		'no-proto': 'error',

		/**
		 * Disallow calling some `Object.prototype` methods directly on objects
		 * @see {@link https://eslint.org/docs/rules/no-prototype-builtins}
		 *
		 * @property no-prototype-builtins=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-prototype-builtins': 'error',

		/**
		 * Disallow variable redeclaration
		 * @see {@link https://eslint.org/docs/rules/no-redeclare}
		 *
		 * @property no-redeclare=error - Code quality.
		 * @memberOf core
		 **/
		'no-redeclare': 'error',

		/**
		 * Disallow multiple spaces in regular expressions
		 * @see {@link https://eslint.org/docs/rules/no-regex-spaces}
		 *
		 * @property no-regex-spaces=error - Code quality.
		 * @memberOf core
		 **/
		'no-regex-spaces': 'error',

		/**
		 * Disallow specified names in exports
		 * @see {@link https://eslint.org/docs/rules/no-restricted-exports}
		 *
		 * @property no-restricted-exports=off - Arbitrary.
		 * @memberOf core
		 **/
		'no-restricted-exports': 'off',

		/**
		 * Disallow specified global variables
		 * @see {@link https://eslint.org/docs/rules/no-restricted-globals}
		 *
		 * @property no-restricted-globals=off - Project specific.
		 * @memberOf core
		 **/
		'no-restricted-globals': 'off',

		/**
		 * Disallow specified modules when loaded by `import`
		 * @see {@link https://eslint.org/docs/rules/no-restricted-imports}
		 *
		 * @property no-restricted-imports=off - Project specific.
		 * @memberOf core
		 **/
		'no-restricted-imports': 'off',

		/**
		 * Disallow certain properties on certain objects
		 * @see {@link https://eslint.org/docs/rules/no-restricted-properties}
		 *
		 * @property no-restricted-properties=off - Project specific.
		 * @memberOf core
		 **/
		'no-restricted-properties': 'off',

		/**
		 * Disallow specified syntax
		 * @see {@link https://eslint.org/docs/rules/no-restricted-syntax}
		 *
		 * @property no-restricted-syntax=off - Project specific.
		 * @memberOf core
		 **/
		'no-restricted-syntax': 'off',

		/**
		 * Disallow assignment operators in `return` statements
		 * @see {@link https://eslint.org/docs/rules/no-return-assign}
		 *
		 * @property no-return-assign=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-return-assign': 'error',

		/**
		 * Disallow `javascript:` urls
		 * @see {@link https://eslint.org/docs/rules/no-script-url}
		 *
		 * @property no-script-url=error - Code quality.
		 * @memberOf core
		 **/
		'no-script-url': 'error',

		/**
		 * Disallow assignments where both sides are exactly the same
		 * @see {@link https://eslint.org/docs/rules/no-self-assign}
		 *
		 * @property no-self-assign=error - Code quality.
		 * @memberOf core
		 **/
		'no-self-assign': 'error',

		/**
		 * Disallow comparisons where both sides are exactly the same
		 * @see {@link https://eslint.org/docs/rules/no-self-compare}
		 *
		 * @property no-self-compare=error - Code quality.
		 * @memberOf core
		 **/
		'no-self-compare': 'error',

		/**
		 * Disallow comma operators
		 * @see {@link https://eslint.org/docs/rules/no-sequences}
		 *
		 * @property no-sequences=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-sequences': 'error',

		/**
		 * Disallow returning values from setters
		 * @see {@link https://eslint.org/docs/rules/no-setter-return}
		 *
		 * @property no-setter-return=error - Code quality.
		 * @memberOf core
		 **/
		'no-setter-return': 'error',

		/**
		 * Disallow variable declarations from shadowing variables declared in the outer scope
		 * @see {@link https://eslint.org/docs/rules/no-shadow}
		 *
		 * @property no-shadow=error - Code quality.
		 * @memberOf core
		 **/
		'no-shadow': 'error',

		/**
		 * Disallow identifiers from shadowing restricted names
		 * @see {@link https://eslint.org/docs/rules/no-shadow-restricted-names}
		 *
		 * @property no-shadow-restricted-names=error - Code quality.
		 * @memberOf core
		 **/
		'no-shadow-restricted-names': 'error',

		/**
		 * Disallow sparse arrays
		 * @see {@link https://eslint.org/docs/rules/no-sparse-arrays}
		 *
		 * @property no-sparse-arrays=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-sparse-arrays': 'error',

		/**
		 * Disallow template literal placeholder syntax in regular strings
		 * @see {@link https://eslint.org/docs/rules/no-template-curly-in-string}
		 *
		 * @property no-template-curly-in-string=error - Code quality.
		 * @memberOf core
		 **/
		'no-template-curly-in-string': 'error',

		/**
		 * Disallow ternary operators
		 * @see {@link https://eslint.org/docs/rules/no-ternary}
		 *
		 * @property no-ternary=off - Arbitrary.
		 * @memberOf core
		 **/
		'no-ternary': 'off',

		/**
		 * Disallow `this`/`super` before calling `super()` in constructors
		 * @see {@link https://eslint.org/docs/rules/no-this-before-super}
		 *
		 * @property no-this-before-super=error - Code quality.
		 * @memberOf core
		 **/
		'no-this-before-super': 'error',

		/**
		 * Disallow throwing literals as exceptions
		 * @see {@link https://eslint.org/docs/rules/no-throw-literal}
		 *
		 * @property no-throw-literal=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-throw-literal': 'error',

		/**
		 * Disallow the use of undeclared variables unless mentioned in global comments
		 * @see {@link https://eslint.org/docs/rules/no-undef}
		 *
		 * @property no-undef=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-undef': 'error',

		/**
		 * Disallow initializing variables to `undefined`
		 * @see {@link https://eslint.org/docs/rules/no-undef-init}
		 *
		 * @property no-undef-init=off - Covered by unicorn/no-useless-undefined.
		 * @memberOf core
		 **/
		'no-undef-init': 'off',

		/**
		 * Disallow the use of `undefined` as an identifier
		 * @see {@link https://eslint.org/docs/rules/no-undefined}
		 *
		 * @property no-undefined=off - Arbitrary.
		 * @memberOf core
		 **/
		'no-undefined': 'off',

		/**
		 * Disallow dangling underscores in identifiers
		 * @see {@link https://eslint.org/docs/rules/no-underscore-dangle}
		 *
		 * @property no-underscore-dangle=off - Arbitrary.
		 * @memberOf core
		 **/
		'no-underscore-dangle': 'off',

		/**
		 * Disallow confusing multiline expressions
		 * @see {@link https://eslint.org/docs/rules/no-unexpected-multiline}
		 *
		 * @property no-unexpected-multiline=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-unexpected-multiline': 'error',

		/**
		 * Disallow unmodified loop conditions
		 * @see {@link https://eslint.org/docs/rules/no-unmodified-loop-condition}
		 *
		 * @property no-unmodified-loop-condition=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-unmodified-loop-condition': 'error',

		/**
		 * Disallow ternary operators when simpler alternatives exist
		 * @see {@link https://eslint.org/docs/rules/no-unneeded-ternary}
		 *
		 * @property no-unneeded-ternary=off - Covered by unicorn/prefer-logical-operator-over-ternary.
		 * @memberOf core
		 **/
		'no-unneeded-ternary': 'off',

		/**
		 * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
		 * @see {@link https://eslint.org/docs/rules/no-unreachable}
		 *
		 * @property no-unreachable=error - Code quality.
		 * @memberOf core
		 **/
		'no-unreachable': 'error',

		/**
		 * Disallow loops with a body that allows only one iteration
		 * @see {@link https://eslint.org/docs/rules/no-unreachable-loop}
		 *
		 * @property no-unreachable-loop=error - Code quality.
		 * @memberOf core
		 **/
		'no-unreachable-loop': 'error',

		/**
		 * Disallow control flow statements in `finally` blocks
		 * @see {@link https://eslint.org/docs/rules/no-unsafe-finally}
		 *
		 * @property no-unsafe-finally=error - Code quality.
		 * @memberOf core
		 **/
		'no-unsafe-finally': 'error',

		/**
		 * Disallow negating the left operand of relational operators
		 * @see {@link https://eslint.org/docs/rules/no-unsafe-negation}
		 *
		 * @property no-unsafe-negation=error - Code quality.
		 * @memberOf core
		 **/
		'no-unsafe-negation': 'error',

		/**
		 * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
		 * @see {@link https://eslint.org/docs/rules/no-unsafe-optional-chaining}
		 *
		 * @property no-unsafe-optional-chaining=error - Code quality.
		 * @memberOf core
		 **/
		'no-unsafe-optional-chaining': 'error',

		/**
		 * Disallow unused expressions
		 * @see {@link https://eslint.org/docs/rules/no-unused-expressions}
		 *
		 * @property no-unused-expressions=off - Covered by babel/no-unused-expressions.
		 * @memberOf core
		 **/
		'no-unused-expressions': 'off',

		/**
		 * Disallow unused labels
		 * @see {@link https://eslint.org/docs/rules/no-unused-labels}
		 *
		 * @property no-unused-labels=error - Code quality.
		 * @memberOf core
		 **/
		'no-unused-labels': 'error',

		/**
		 * Disallow unused private class members
		 * @see {@link https://eslint.org/docs/rules/no-unused-private-class-members}
		 *
		 * @property no-unused-private-class-members=error - Code quality.
		 * @memberOf core
		 **/
		'no-unused-private-class-members': 'error',

		/**
		 * Disallow unused variables
		 * @see {@link https://eslint.org/docs/rules/no-unused-vars}
		 *
		 * @property no-unused-vars=error - Code quality.
		 * @memberOf core
		 **/
		'no-unused-vars': 'error',

		/**
		 * Disallow the use of variables before they are defined
		 * @see {@link https://eslint.org/docs/rules/no-use-before-define}
		 *
		 * @property no-use-before-define=error - Code quality.
		 * @memberOf core
		 **/
		'no-use-before-define': 'error',

		/**
		 * Disallow useless backreferences in regular expressions
		 * @see {@link https://eslint.org/docs/rules/no-useless-backreference}
		 *
		 * @property no-useless-backreference=off - Covered by regexp/no-useless-backreference.
		 * @memberOf core
		 **/
		'no-useless-backreference': 'off',

		/**
		 * Disallow unnecessary calls to `.call()` and `.apply()`
		 * @see {@link https://eslint.org/docs/rules/no-useless-call}
		 *
		 * @property no-useless-call=error - Code quality.
		 * @memberOf core
		 **/
		'no-useless-call': 'error',

		/**
		 * Disallow unnecessary `catch` clauses
		 * @see {@link https://eslint.org/docs/rules/no-useless-catch}
		 *
		 * @property no-useless-catch=error - Code quality.
		 * @memberOf core
		 **/
		'no-useless-catch': 'error',

		/**
		 * Disallow unnecessary computed property keys in objects and classes
		 * @see {@link https://eslint.org/docs/rules/no-useless-computed-key}
		 *
		 * @property no-useless-computed-key=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-useless-computed-key': 'error',

		/**
		 * Disallow unnecessary concatenation of literals or template literals
		 * @see {@link https://eslint.org/docs/rules/no-useless-concat}
		 *
		 * @property no-useless-concat=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-useless-concat': 'error',

		/**
		 * Disallow unnecessary constructors
		 * @see {@link https://eslint.org/docs/rules/no-useless-constructor}
		 *
		 * @property no-useless-constructor=error - Code quality.
		 * @memberOf core
		 **/
		'no-useless-constructor': 'error',

		/**
		 * Disallow unnecessary escape characters
		 * @see {@link https://eslint.org/docs/rules/no-useless-escape}
		 *
		 * @property no-useless-escape=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-useless-escape': 'error',

		/**
		 * Disallow renaming import, export, and destructured assignments to the same name
		 * @see {@link https://eslint.org/docs/rules/no-useless-rename}
		 *
		 * @property no-useless-rename=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'no-useless-rename': 'error',

		/**
		 * Disallow redundant return statements
		 * @see {@link https://eslint.org/docs/rules/no-useless-return}
		 *
		 * @property no-useless-return=error - Code quality.
		 * @memberOf core
		 **/
		'no-useless-return': 'error',

		/**
		 * Require `let` or `const` instead of `var`
		 * @see {@link https://eslint.org/docs/rules/no-var}
		 *
		 * @property no-var=error - Code quality.
		 * @memberOf core
		 **/
		'no-var': 'error',

		/**
		 * Disallow `void` operators
		 * @see {@link https://eslint.org/docs/rules/no-void}
		 *
		 * @property no-void=error - Code quality.
		 * @memberOf core
		 **/
		'no-void': 'error',

		/**
		 * Disallow specified warning terms in comments
		 * @see {@link https://eslint.org/docs/rules/no-warning-comments}
		 *
		 * @property no-warning-comments=off - Arbitrary.
		 * @memberOf core
		 **/
		'no-warning-comments': 'off',

		/**
		 * Disallow `with` statements
		 * @see {@link https://eslint.org/docs/rules/no-with}
		 *
		 * @property no-with=error - Code quality.
		 * @memberOf core
		 **/
		'no-with': 'error',

		/**
		 * Require or disallow method and property shorthand syntax for object literals
		 * @see {@link https://eslint.org/docs/rules/object-shorthand}
		 *
		 * @property object-shorthand=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'object-shorthand': 'error',

		/**
		 * Enforce variables to be declared either together or separately in functions
		 * @see {@link https://eslint.org/docs/rules/one-var}
		 *
		 * @property one-var=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'one-var': ['error', 'never'],

		/**
		 * Require or disallow assignment operator shorthand where possible
		 * @see {@link https://eslint.org/docs/rules/operator-assignment}
		 *
		 * @property operator-assignment=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'operator-assignment': 'error',

		/**
		 * Require using arrow functions for callbacks
		 * @see {@link https://eslint.org/docs/rules/prefer-arrow-callback}
		 *
		 * @property prefer-arrow-callback=off - Covered by prefer-arrow-functions/prefer-arrow-functions.
		 * @memberOf core
		 **/
		'prefer-arrow-callback': 'off',

		/**
		 * Require `const` declarations for variables that are never reassigned after declared
		 * @see {@link https://eslint.org/docs/rules/prefer-const}
		 *
		 * @property prefer-const=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'prefer-const': 'error',

		/**
		 * Require destructuring from arrays and/or objects
		 * @see {@link https://eslint.org/docs/rules/prefer-destructuring}
		 *
		 * @property prefer-destructuring=off - Arbitrary.
		 * @memberOf core
		 **/
		'prefer-destructuring': 'off',

		/**
		 * Disallow the use of `Math.pow` in favor of the `**` operator
		 * @see {@link https://eslint.org/docs/rules/prefer-exponentiation-operator}
		 *
		 * @property prefer-exponentiation-operator=off - Readability and simplicity.
		 * @memberOf core
		 **/
		'prefer-exponentiation-operator': 'off',

		/**
		 * Enforce using named capture group in regular expression
		 * @see {@link https://eslint.org/docs/rules/prefer-named-capture-group}
		 *
		 * @property prefer-named-capture-group=off - Covered by regexp/prefer-named-capture-group.
		 * @memberOf core
		 **/
		'prefer-named-capture-group': 'off',

		/**
		 * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
		 * @see {@link https://eslint.org/docs/rules/prefer-numeric-literals}
		 *
		 * @property prefer-numeric-literals=off - Readability and simplicity.
		 * @memberOf core
		 **/
		'prefer-numeric-literals': 'off',

		/**
		 * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
		 * @see {@link https://eslint.org/docs/rules/prefer-object-has-own}
		 *
		 * @property prefer-object-has-own=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'prefer-object-has-own': 'error',

		/**
		 * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
		 * @see {@link https://eslint.org/docs/rules/prefer-object-spread}
		 *
		 * @property prefer-object-spread=off - Arbitrary.
		 * @memberOf core
		 **/
		'prefer-object-spread': 'off',

		/**
		 * Require using Error objects as Promise rejection reasons
		 * @see {@link https://eslint.org/docs/rules/prefer-promise-reject-errors}
		 *
		 * @property prefer-promise-reject-errors=error - Code quality.
		 * @memberOf core
		 **/
		'prefer-promise-reject-errors': 'error',

		/**
		 * Disallow use of the `RegExp` constructor in favor of regular expression literals
		 * @see {@link https://eslint.org/docs/rules/prefer-regex-literals}
		 *
		 * @property prefer-regex-literals=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'prefer-regex-literals': 'error',

		/**
		 * Require rest parameters instead of `arguments`
		 * @see {@link https://eslint.org/docs/rules/prefer-rest-params}
		 *
		 * @property prefer-rest-params=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'prefer-rest-params': 'error',

		/**
		 * Require spread operators instead of `.apply()`
		 * @see {@link https://eslint.org/docs/rules/prefer-spread}
		 *
		 * @property prefer-spread=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'prefer-spread': 'error',

		/**
		 * Require template literals instead of string concatenation
		 * @see {@link https://eslint.org/docs/rules/prefer-template}
		 *
		 * @property prefer-template=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'prefer-template': 'error',

		/**
		 * Enforce the consistent use of the radix argument when using `parseInt()`
		 * @see {@link https://eslint.org/docs/rules/radix}
		 *
		 * @property radix=error - Code quality.
		 * @memberOf core
		 **/
		radix: 'error',

		/**
		 * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
		 * @see {@link https://eslint.org/docs/rules/require-atomic-updates}
		 *
		 * @property require-atomic-updates=error - Code quality.
		 * @memberOf core
		 **/
		'require-atomic-updates': 'error',

		/**
		 * Disallow async functions which have no `await` expression
		 * @see {@link https://eslint.org/docs/rules/require-await}
		 *
		 * @property require-await=off - Doesn't consider functions that return a Promise.
		 * @memberOf core
		 **/
		'require-await': 'off',

		/**
		 * Enforce the use of `u` flag on RegExp
		 * @see {@link https://eslint.org/docs/rules/require-unicode-regexp}
		 *
		 * @property require-unicode-regexp=off - Covered by regexp/no-misleading-unicode-character.
		 * @memberOf core
		 **/
		'require-unicode-regexp': 'off',

		/**
		 * Require generator functions to contain `yield`
		 * @see {@link https://eslint.org/docs/rules/require-yield}
		 *
		 * @property require-yield=error - Code quality.
		 * @memberOf core
		 **/
		'require-yield': 'error',

		/**
		 * Enforce sorted import declarations within modules
		 * @see {@link https://eslint.org/docs/rules/sort-imports}
		 *
		 * @property sort-imports=error - Too simple. Doesn't account for grouping adequately.
		 * @memberOf core
		 **/
		'sort-imports': 'off',

		/**
		 * Require object keys to be sorted
		 * @see {@link https://eslint.org/docs/rules/sort-keys}
		 *
		 * @property sort-keys=off - Arbitrary.
		 * @memberOf core
		 **/
		'sort-keys': 'off',

		/**
		 * Require variables within the same declaration block to be sorted
		 * @see {@link https://eslint.org/docs/rules/sort-vars}
		 *
		 * @property sort-vars=off - Arbitrary.
		 * @memberOf core
		 **/
		'sort-vars': 'off',

		/**
		 * Require or disallow strict mode directives
		 * @see {@link https://eslint.org/docs/rules/strict}
		 *
		 * @property strict=error - Code quality.
		 * @memberOf core
		 **/
		strict: 'error',

		/**
		 * Require symbol descriptions
		 * @see {@link https://eslint.org/docs/rules/symbol-description}
		 *
		 * @property symbol-description=off - Arbitrary.
		 * @memberOf core
		 **/
		'symbol-description': 'off',

		/**
		 * Require or disallow Unicode byte order mark (BOM)
		 * @see {@link https://eslint.org/docs/rules/unicode-bom}
		 *
		 * @property unicode-bom=off
		 * @memberOf core
		 **/
		'unicode-bom': 'off',

		/**
		 * Require calls to `isNaN()` when checking for `NaN`
		 * @see {@link https://eslint.org/docs/rules/use-isnan}
		 *
		 * @property use-isnan=error - Readability and simplicity.
		 * @memberOf core
		 **/
		'use-isnan': 'error',

		/**
		 * Enforce comparing `typeof` expressions against valid strings
		 * @see {@link https://eslint.org/docs/rules/valid-typeof}
		 *
		 * @property valid-typeof=off - Covered by babel/valid-typeof.
		 * @memberOf core
		 **/
		'valid-typeof': 'off',

		/**
		 * Require `var` declarations be placed at the top of their containing scope
		 * @see {@link https://eslint.org/docs/rules/vars-on-top}
		 *
		 * @property vars-on-top=off - Unnecessary.
		 * @memberOf core
		 **/
		'vars-on-top': 'off',

		/**
		 * Require or disallow "Yoda" conditions
		 * @see {@link https://eslint.org/docs/rules/yoda}
		 *
		 * @property yoda=error - Readability and simplicity.
		 * @memberOf core
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
