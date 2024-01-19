import { lucidNode } from './index.js';

export default [
	...lucidNode,
	{
		files: [
			'**/*.js'
		],
		rules: {
			'node/no-process-exit': 'off',
			'node/no-unpublished-import': 'off',
			'jsdoc/require-property-type': 'off',
			'jsdoc/valid-types': 'off'
		}
	}
];
