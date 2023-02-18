import regexpPlugin from 'eslint-plugin-regexp';

/**
 * ESLint rules for [eslint-plugin-regexp](https://www.npmjs.com/package/eslint-plugin-regexp).
 *
 * @namespace regexp
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
	plugins: {
		regexp: regexpPlugin
	},
	rules: {
		/**
		 * @property regexp/confusing-quantifier=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/confusing-quantifier': 'error',

		/**
		 * @property regexp/control-character-escape=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/control-character-escape': 'error',

		/**
		 * @property regexp/hexadecimal-escape=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/hexadecimal-escape': 'error',

		/**
		 * @property regexp/letter-case=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/letter-case': 'error',

		/**
		 * @property regexp/match-any=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/match-any': 'error',

		/**
		 * @property regexp/negation=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/negation': 'error',

		/**
		 * @property regexp/no-contradiction-with-assertion=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-contradiction-with-assertion': 'error',

		/**
		 * @property regexp/no-control-character=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-control-character': 'error',

		/**
		 * @property regexp/no-dupe-characters-character-class=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-dupe-characters-character-class': 'error',

		/**
		 * @property regexp/no-dupe-disjunctions=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-dupe-disjunctions': 'error',

		/**
		 * @property regexp/no-empty-alternative=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-empty-alternative': 'error',

		/**
		 * @property regexp/no-empty-capturing-group=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-empty-capturing-group': 'error',

		/**
		 * @property regexp/no-empty-character-class=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-empty-character-class': 'error',

		/**
		 * @property regexp/no-empty-group=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-empty-group': 'error',

		/**
		 * @property regexp/no-empty-lookarounds-assertion=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-empty-lookarounds-assertion': 'error',

		/**
		 * @property regexp/no-escape-backspace=error - Readability.
		 * @memberof regexp
		 **/
		'regexp/no-escape-backspace': 'error',

		/**
		 * @property regexp/no-extra-lookaround-assertions=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-extra-lookaround-assertions': 'error',

		/**
		 * @property regexp/no-invalid-regexp=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-invalid-regexp': 'error',

		/**
		 * @property regexp/no-invisible-character=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-invisible-character': 'error',

		/**
		 * @property regexp/no-lazy-ends=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-lazy-ends': 'error',

		/**
		 * @property regexp/no-legacy-features=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-legacy-features': 'error',

		/**
		 * @property regexp/no-misleading-capturing-group=warn - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-misleading-capturing-group': 'warn',

		/**
		 * @property regexp/no-misleading-unicode-character=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-misleading-unicode-character': 'error',

		/**
		 * @property regexp/no-missing-g-flag=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-missing-g-flag': 'error',

		/**
		 * @property regexp/no-non-standard-flag=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-non-standard-flag': 'error',

		/**
		 * @property regexp/no-obscure-range=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-obscure-range': 'error',

		/**
		 * @property regexp/no-octal=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-octal': 'error',

		/**
		 * @property regexp/no-optional-assertion=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-optional-assertion': 'error',

		/**
		 * @property regexp/no-potentially-useless-backreference=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-potentially-useless-backreference': 'error',

		/**
		 * @property regexp/no-standalone-backslash=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-standalone-backslash': 'error',

		/**
		 * @property regexp/no-super-linear-backtracking=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-super-linear-backtracking': 'error',

		/**
		 * @property regexp/no-super-linear-move=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-super-linear-move': 'error',

		/**
		 * @property regexp/no-trivially-nested-assertion=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-trivially-nested-assertion': 'error',

		/**
		 * @property regexp/no-trivially-nested-quantifier=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-trivially-nested-quantifier': 'error',

		/**
		 * @property regexp/no-unused-capturing-group=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-unused-capturing-group': 'error',

		/**
		 * @property regexp/no-useless-assertions=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-useless-assertions': 'error',

		/**
		 * @property regexp/no-useless-backreference=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-useless-backreference': 'error',

		/**
		 * @property regexp/no-useless-character-class=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-useless-character-class': 'error',

		/**
		 * @property regexp/no-useless-dollar-replacements=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-useless-dollar-replacements': 'error',

		/**
		 * @property regexp/no-useless-escape=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-useless-escape': 'error',

		/**
		 * @property regexp/no-useless-flag=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-useless-flag': 'error',

		/**
		 * @property regexp/no-useless-lazy=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-useless-lazy': 'error',

		/**
		 * @property regexp/no-useless-non-capturing-group=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/no-useless-non-capturing-group': 'error',

		/**
		 * @property regexp/no-useless-quantifier=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-useless-quantifier': 'error',

		/**
		 * @property regexp/no-useless-range=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-useless-range': 'error',

		/**
		 * @property regexp/no-useless-two-nums-quantifier=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-useless-two-nums-quantifier': 'error',

		/**
		 * @property regexp/no-zero-quantifier=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/no-zero-quantifier': 'error',

		/**
		 * @property regexp/optimal-lookaround-quantifier=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/optimal-lookaround-quantifier': 'error',

		/**
		 * @property regexp/optimal-quantifier-concatenation=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/optimal-quantifier-concatenation': 'error',

		/**
		 * @property regexp/prefer-character-class=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-character-class': 'error',

		/**
		 * @property regexp/prefer-d=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-d': 2,

		/**
		 * @property regexp/prefer-escape-replacement-dollar-char=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/prefer-escape-replacement-dollar-char': 2,

		/**
		 * @property regexp/prefer-lookaround=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-lookaround': 2,

		/**
		 * @property regexp/prefer-named-backreference=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-named-backreference': 2,

		/**
		 * @property regexp/prefer-named-capture-group=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-named-capture-group': 2,

		/**
		 * @property regexp/prefer-named-replacement=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-named-replacement': 2,

		/**
		 * @property regexp/prefer-plus-quantifier=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-plus-quantifier': 2,

		/**
		 * @property regexp/prefer-predefined-assertion=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/prefer-predefined-assertion': 2,

		/**
		 * @property regexp/prefer-quantifier=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-quantifier': 2,

		/**
		 * @property regexp/prefer-question-quantifier=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-question-quantifier': 2,

		/**
		 * @property regexp/prefer-range=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-range': 2,

		/**
		 * @property regexp/prefer-regexp-exec=error - Performance.
		 * @memberof regexp
		 **/
		'regexp/prefer-regexp-exec': 2,

		/**
		 * @property regexp/prefer-regexp-test=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-regexp-test': 2,

		/**
		 * @property regexp/prefer-result-array-groups=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-result-array-groups': 2,

		/**
		 * @property regexp/prefer-star-quantifier=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-star-quantifier': 2,

		/**
		 * @property regexp/prefer-unicode-codepoint-escapes=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-unicode-codepoint-escapes': 2,

		/**
		 * @property regexp/prefer-w=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/prefer-w': 2,

		/**
		 * @property regexp/require-unicode-regexp=off - Covered by regexp/no-misleading-unicode-character.
		 * @memberof regexp
		 **/
		'regexp/require-unicode-regexp': 'off',

		/**
		 * @property regexp/sort-alternatives=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/sort-alternatives': 2,

		/**
		 * @property regexp/sort-character-class-elements=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/sort-character-class-elements': 2,

		/**
		 * @property regexp/sort-flags=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/sort-flags': 2,

		/**
		 * @property regexp/strict=error - Code quality.
		 * @memberof regexp
		 **/
		'regexp/strict': 2,

		/**
		 * @property regexp/unicode-escape=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/unicode-escape': 2,

		/**
		 * @property regexp/use-ignore-case=error - Readability and simplicity.
		 * @memberof regexp
		 **/
		'regexp/use-ignore-case': 2
	}
};
