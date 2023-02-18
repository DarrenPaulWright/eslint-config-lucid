import jsdocPlugin from 'eslint-plugin-jsdoc';

/**
 * ESLint rules for [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc). This plugin is broken in flat configs. When fixed it will be added to the exported config.
 *
 * @namespace jsdoc
 * @private
 * @property files .js, .jsx, .mjs, .cjs
 **/
export default {
	files: [
		'**/*.js',
		'**/*.jsx',
		'**/*.mjs',
		'**/*.cjs'
	],
	plugins: {
		jsdoc: jsdocPlugin
	},
	settings: {
		jsdoc: {
			tagNamePreference: {
				access: false,
				arg: 'param',
				return: 'returns',
				augments: 'extends',
				chainable: 'chainable',
				category: 'category',
				method: 'method',
				memberof: 'memberOf'
			}
		}
	},
	rules: {
		/**
		 * @property jsdoc/check-access=off - Prefer the use of @public, @private, @protected, or @package. Accordingly, @access tags are prohibited.
		 * @memberof jsdoc
		 **/
		'jsdoc/check-access': 'off',

		/**
		 * @property jsdoc/check-alignment=error - Readability.
		 * @memberof jsdoc
		 **/
		'jsdoc/check-alignment': 'error',

		/**
		 * @property jsdoc/check-examples=off - REASONS.
		 * @memberof jsdoc
		 **/
		'jsdoc/check-examples': 'off',

		/**
		 * @property jsdoc/check-indentation=error - Readability.
		 * @memberof jsdoc
		 **/
		'jsdoc/check-indentation': [
			'error',
			{
				excludeTags: [
					'example',
					'description',
					'summary'
				]
			}
		],

		/**
		 * @property jsdoc/check-line-alignment=off - Readability.
		 * @memberof jsdoc
		 **/
		'jsdoc/check-line-alignment': ['error', 'never'],

		/**
		 * @property jsdoc/check-param-names=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/check-param-names': 'error',

		/**
		 * @property jsdoc/check-property-names=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/check-property-names': 'error',

		/**
		 * @property jsdoc/check-syntax=error - Readability and simplicity.
		 * @memberof jsdoc
		 **/
		'jsdoc/check-syntax': 'error',

		/**
		 * @property jsdoc/check-tag-names=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/check-tag-names': 'error',

		/**
		 * @property jsdoc/check-types=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/check-types': 'error',

		/**
		 * @property jsdoc/check-values=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/check-values': 'error',

		/**
		 * @property jsdoc/empty-tags=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/empty-tags': 'error',

		/**
		 * @property jsdoc/implements-on-classes=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/implements-on-classes': 'error',

		/**
		 * @property jsdoc/match-description=error - Readability and simplicity. Must start with an upper case character and end with ., ?, or !.
		 * @memberof jsdoc
		 **/
		'jsdoc/match-description': ['error', {
			matchDescription: /^(?:[A-Z].+ (?:\.|\\n)+[!.?`]\n?)?$/,
			tags: {
				param: true,
				property: true,
				returns: true
			}
		}],

		/**
		 * @property jsdoc/match-name=off - Covered elsewhere.
		 * @memberof jsdoc
		 **/
		'jsdoc/match-name': 'off',

		/**
		 * @property jsdoc/multiline-blocks=error - Readability.
		 * @memberof jsdoc
		 **/
		'jsdoc/multiline-blocks': 'error',

		/**
		 * @property jsdoc/newline-after-description=error - Readability and simplicity.
		 * @memberof jsdoc
		 **/
		'jsdoc/newline-after-description': 'error',

		/**
		 * @property jsdoc/no-bad-blocks=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/no-bad-blocks': 'error',

		/**
		 * @property jsdoc/no-defaults=off - Project specific.
		 * @memberof jsdoc
		 **/
		'jsdoc/no-defaults': 'off',

		/**
		 * @property jsdoc/no-missing-syntax=off - Project specific.
		 * @memberof jsdoc
		 **/
		'jsdoc/no-missing-syntax': 'off',

		/**
		 * @property jsdoc/no-multi-asterisks=off - Arbitrary.
		 * @memberof jsdoc
		 **/
		'jsdoc/no-multi-asterisks': 'off',

		/**
		 * @property jsdoc/no-restricted-syntax=off - Covered by core rules.
		 * @memberof jsdoc
		 **/
		'jsdoc/no-restricted-syntax': 'off',

		/**
		 * @property jsdoc/no-types=off - Not needed.
		 * @memberof jsdoc
		 **/
		'jsdoc/no-types': 'off',

		/**
		 * @property jsdoc/no-undefined-types=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/no-undefined-types': 'error',

		/**
		 * @property jsdoc/require-asterisk-prefix=error - Readability and simplicity.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-asterisk-prefix': ['error', 'always'],

		/**
		 * @property jsdoc/require-description=off - Names should be self documenting.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-description': 'off',

		/**
		 * @property jsdoc/require-description-complete-sentence=off - Covered by jsdoc/match-description.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-description-complete-sentence': 'off',

		/**
		 * @property jsdoc/require-example=off - Project specific.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-example': 'off',

		/**
		 * @property jsdoc/require-file-overview=off - Arbitrary.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-file-overview': 'off',

		/**
		 * @property jsdoc/require-hyphen-before-param-description=error - Readability.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-hyphen-before-param-description': [
			'error',
			'always',
			{
				tags: {
					property: 'always'
				}
			}
		],

		/**
		 * @property jsdoc/require-jsdoc=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-jsdoc': [
			'error',
			{
				contexts: [
					'ClassDeclaration',
					'ClassExpression',
					'MethodDefinition'
				],
				publicOnly: true,
				checkConstructors: false,
				checkGetters: true,
				checkSetters: 'no-getter'
			}
		],

		/**
		 * @property jsdoc/require-param=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-param': 'error',

		/**
		 * @property jsdoc/require-param-description=off - Param names should be self documenting.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-param-description': 'off',

		/**
		 * @property jsdoc/require-param-name=error - Readability.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-param-name': 'error',

		/**
		 * @property jsdoc/require-param-type=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-param-type': 'error',

		/**
		 * @property jsdoc/require-property=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-property': 'error',

		/**
		 * @property jsdoc/require-property-description=off - Names should be self documenting.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-property-description': 'off',

		/**
		 * @property jsdoc/require-property-name=error - Readability.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-property-name': 'error',

		/**
		 * @property jsdoc/require-property-type=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-property-type': 'error',

		/**
		 * @property jsdoc/require-returns=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-returns': 'error',

		/**
		 * @property jsdoc/require-returns-check=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-returns-check': 'error',

		/**
		 * @property jsdoc/require-returns-description=off - Arbitrary.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-returns-description': 'off',

		/**
		 * @property jsdoc/require-returns-type=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-returns-type': 'error',

		/**
		 * @property jsdoc/require-throws=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-throws': 'error',

		/**
		 * @property jsdoc/require-yields=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-yields': 'error',

		/**
		 * @property jsdoc/require-yields-check=error - Code quality.
		 * @memberof jsdoc
		 **/
		'jsdoc/require-yields-check': 'error',

		/**
		 * @property jsdoc/sort-tags=off
		 * @memberof jsdoc
		 **/
		'jsdoc/sort-tags': 'off',

		/**
		 * @property jsdoc/tag-lines=off
		 * @memberof jsdoc
		 **/
		'jsdoc/tag-lines': 'off',

		/**
		 * @property jsdoc/text-escaping=off
		 * @memberof jsdoc
		 **/
		'jsdoc/text-escaping': 'off',

		/**
		 * @property jsdoc/valid-types=error
		 * @memberof jsdoc
		 **/
		'jsdoc/valid-types': 2
	}
};
