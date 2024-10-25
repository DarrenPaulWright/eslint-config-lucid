import jsdocPlugin from 'eslint-plugin-jsdoc';

/**
 * ESLint rules for [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc). This plugin is broken in flat configs. When fixed it will be added to the exported config.
 *
 * @namespace jsdoc
 * @private
 * @property files - .js, .jsx, .mjs, .cjs
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
		 * @memberOf jsdoc
		 **/
		'jsdoc/check-access': 'off',

		/**
		 * @property jsdoc/check-alignment=error - Readability.
		 * @memberOf jsdoc
		 **/
		'jsdoc/check-alignment': 'error',

		/**
		 * @property jsdoc/check-examples=off - REASONS.
		 * @memberOf jsdoc
		 **/
		'jsdoc/check-examples': 'off',

		/**
		 * @property jsdoc/check-indentation=error - Readability.
		 * @memberOf jsdoc
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
		 * @memberOf jsdoc
		 **/
		'jsdoc/check-line-alignment': ['error', 'never'],

		/**
		 * @property jsdoc/check-param-names=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/check-param-names': 'error',

		/**
		 * @property jsdoc/check-property-names=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/check-property-names': 'error',

		/**
		 * @property jsdoc/check-syntax=error - Readability and simplicity.
		 * @memberOf jsdoc
		 **/
		'jsdoc/check-syntax': 'error',

		/**
		 * @property jsdoc/check-tag-names=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/check-tag-names': 'error',

		/**
		 * @property jsdoc/check-template-names=off
		 * @memberOf jsdoc
		 **/
		'jsdoc/check-template-names': 'off',

		/**
		 * @property jsdoc/check-types=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/check-types': 'error',

		/**
		 * @property jsdoc/check-values=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/check-values': 'error',

		/**
		 * @property jsdoc/convert-to-jsdoc-comments=off
		 * @memberOf jsdoc
		 **/
		'jsdoc/convert-to-jsdoc-comments': 'off',

		/**
		 * @property jsdoc/empty-tags=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/empty-tags': 'error',

		/**
		 * @property jsdoc/imports-as-dependencies=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/imports-as-dependencies': 'error',

		/**
		 * @property jsdoc/implements-on-classes=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/implements-on-classes': 'error',

		/**
		 * @property jsdoc/informative-docs=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/informative-docs': 'error',

		/**
		 * @property jsdoc/lines-before-block=off
		 * @memberOf jsdoc
		 **/
		'jsdoc/lines-before-block': 'off',

		/**
		 * @property jsdoc/match-description=error - Readability and simplicity. Must start with an upper case character and end with ., ?, or !.
		 * @memberOf jsdoc
		 **/
		'jsdoc/match-description': ['error', {
			matchDescription: '^(?:[A-Z].+ (?:.|\\n)+[!.?`]\n?)?$',
			tags: {
				param: true,
				property: true,
				returns: true
			}
		}],

		/**
		 * @property jsdoc/match-name=off - Covered elsewhere.
		 * @memberOf jsdoc
		 **/
		'jsdoc/match-name': 'off',

		/**
		 * @property jsdoc/multiline-blocks=error - Readability.
		 * @memberOf jsdoc
		 **/
		'jsdoc/multiline-blocks': 'error',

		/**
		 * @property jsdoc/no-bad-blocks=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/no-bad-blocks': 'error',

		/**
		 * @property jsdoc/no-blank-blocks=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/no-blank-blocks': 'error',

		/**
		 * @property jsdoc/no-blank-block-descriptions=off - Poor implementation.
		 * @memberOf jsdoc
		 **/
		'jsdoc/no-blank-block-descriptions': 'off',

		/**
		 * @property jsdoc/no-defaults=off - Project specific.
		 * @memberOf jsdoc
		 **/
		'jsdoc/no-defaults': 'off',

		/**
		 * @property jsdoc/no-missing-syntax=off - Project specific.
		 * @memberOf jsdoc
		 **/
		'jsdoc/no-missing-syntax': 'off',

		/**
		 * @property jsdoc/no-multi-asterisks=off - Arbitrary.
		 * @memberOf jsdoc
		 **/
		'jsdoc/no-multi-asterisks': 'off',

		/**
		 * @property jsdoc/no-restricted-syntax=off - Covered by core rules.
		 * @memberOf jsdoc
		 **/
		'jsdoc/no-restricted-syntax': 'off',

		/**
		 * @property jsdoc/no-types=off - Not needed.
		 * @memberOf jsdoc
		 **/
		'jsdoc/no-types': 'off',

		/**
		 * @property jsdoc/no-undefined-types=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/no-undefined-types': 'error',

		/**
		 * @property jsdoc/require-asterisk-prefix=error - Readability and simplicity.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-asterisk-prefix': ['error', 'always'],

		/**
		 * @property jsdoc/require-description=off - Names should be self documenting.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-description': 'off',

		/**
		 * @property jsdoc/require-description-complete-sentence=off - Covered by jsdoc/match-description.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-description-complete-sentence': 'off',

		/**
		 * @property jsdoc/require-example=off - Project specific.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-example': 'off',

		/**
		 * @property jsdoc/require-file-overview=off - Arbitrary.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-file-overview': 'off',

		/**
		 * @property jsdoc/require-hyphen-before-param-description=error - Readability.
		 * @memberOf jsdoc
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
		 * @memberOf jsdoc
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
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-param': 'error',

		/**
		 * @property jsdoc/require-param-description=off - Param names should be self documenting.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-param-description': 'off',

		/**
		 * @property jsdoc/require-param-name=error - Readability.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-param-name': 'error',

		/**
		 * @property jsdoc/require-param-type=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-param-type': 'error',

		/**
		 * @property jsdoc/require-property=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-property': 'error',

		/**
		 * @property jsdoc/require-property-description=off - Names should be self documenting.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-property-description': 'off',

		/**
		 * @property jsdoc/require-property-name=error - Readability.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-property-name': 'error',

		/**
		 * @property jsdoc/require-property-type=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-property-type': 'error',

		/**
		 * @property jsdoc/require-returns=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-returns': 'error',

		/**
		 * @property jsdoc/require-returns-check=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-returns-check': 'error',

		/**
		 * @property jsdoc/require-returns-description=off - Arbitrary.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-returns-description': 'off',

		/**
		 * @property jsdoc/require-returns-type=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-returns-type': 'error',

		/**
		 * @property jsdoc/require-template=error
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-template': 'off',

		/**
		 * @property jsdoc/require-throws=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-throws': 'error',

		/**
		 * @property jsdoc/require-yields=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-yields': 'error',

		/**
		 * @property jsdoc/require-yields-check=error - Code quality.
		 * @memberOf jsdoc
		 **/
		'jsdoc/require-yields-check': 'error',

		/**
		 * @property jsdoc/sort-tags=off
		 * @memberOf jsdoc
		 **/
		'jsdoc/sort-tags': 'off',

		/**
		 * @property jsdoc/tag-lines=off
		 * @memberOf jsdoc
		 **/
		'jsdoc/tag-lines': 'off',

		/**
		 * @property jsdoc/text-escaping=off
		 * @memberOf jsdoc
		 **/
		'jsdoc/text-escaping': 'off',

		/**
		 * @property jsdoc/valid-types=error
		 * @memberOf jsdoc
		 **/
		'jsdoc/valid-types': 'error'
	}
};
