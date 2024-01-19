import babelRules from './ruleSets/babelRules.js';
import coreRules from './ruleSets/coreRules.js';
import jsdocRules from './ruleSets/jsdocRules.js';
import lodashRules from './ruleSets/lodashRules.js';
import nodeRules, {
	nodeScriptRules,
	nodeTypescriptRules
} from './ruleSets/nodeRules.js';
import preferArrowFunctionsRules from './ruleSets/preferArrowFunctionsRules.js';
import promiseRules from './ruleSets/promiseRules.js';
import regexpRules from './ruleSets/regexpRules.js';
import securityRules from './ruleSets/securityRules.js';
import stylisticJsRules from './ruleSets/stylisticJsRules.js';
import stylisticPlusRules from './ruleSets/stylisticPlusRules.js';
import unicornRules from './ruleSets/unicornRules.js';

/**
 * @name Disclaimer
 * @private
 * @summary
 *
 * Lucid only supports the new flat config that shipped with ESLint v8.21.0
 */

/**
 * @name Installation
 * @private
 * @summary
 *
 * Add Lucid to your eslint.config.js configuration file.
 *
 * @example
 * ```javascript
 * import lucid from 'eslint-config-lucid';
 *
 * export default [
 * 	...lucid,
 * 	// ... other rule sets.
 * ];
 *
 * // Or for node
 * import { lucidNode } from 'eslint-config-lucid';
 *
 * export default [
 * 	...lucidNode,
 * 	// ... other rule sets.
 * ];
 * ```
 */

/**
 * @name About
 * @private
 * @summary
 *
 * Lucid starts from the eslint recommended settings. These rules are modified to
 * support the intent of Lucid (see below), and other plugins are added as listed
 * in the Rules section below.
 *
 * ### Intent
 *
 * When it comes to formatting and syntax rules, reducing [cognitive load](https://en.wikipedia.org/wiki/Cognitive_load) is the
 * primary intent of Lucid. Unlike so many code linters and formatters, I endeavor
 * to base all my decisions on researched psychological principals. Some principles
 * considered are:
 *
 * - [Gestalt psychology](https://en.wikipedia.org/wiki/Gestalt_psychology)
 *
 *     - Many of the rule decisions regarding code formatting are grounded in
 *       Gestalt Psychology, particularly around the use of whitespace to group
 *       like things and separate unlike things.
 *
 * - [Programming complexity](https://en.wikipedia.org/wiki/Programming_complexity)
 *
 * If you want to propose a change to a rule or suggest additional plugins, please
 * include researched psychological principals in your issue or pull request.
 */

const lucid = [
	{
		linterOptions: {
			reportUnusedDisableDirectives: true
		}
	},
	coreRules,
	stylisticJsRules,
	stylisticPlusRules,
	promiseRules,
	regexpRules,
	unicornRules,
	babelRules,
	preferArrowFunctionsRules,
	lodashRules,
	jsdocRules,
	{
		files: [
			'**/*.test.js',
			'**/*.test.ts',
			'**/*.test.mjs',
			'**/*.spec.js',
			'**/*.spec.ts',
			'**/*.spec.mjs'
		],
		rules: {
			'consistent-this': 'off',
			'init-declarations': 'off',
			'max-nested-callbacks': 'off',
			'no-new': 'off',
			'unicorn/prevent-abbreviations': 'off'
		}
	},
	{
		files: [
			'**/*.bench.js',
			'**/*.bench.ts',
			'**/*.bench.mjs'
		],
		rules: {
			'no-unused-vars': 'off'
		}
	}
];

export const lucidNode = [
	...lucid,
	nodeRules,
	nodeScriptRules,
	nodeTypescriptRules,
	securityRules
];

export default lucid;
