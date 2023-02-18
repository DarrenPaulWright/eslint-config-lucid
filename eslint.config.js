import { lucidNode } from './index.js';

export default [
	...lucidNode,
	{
		files: [
			'**/*.js'
		],
		rules: {
			'node/no-process-exit': 'off'
		}
	}
];
