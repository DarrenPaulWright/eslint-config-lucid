# eslint-config-lucid

> A collection of eslint plugins with settings focused on reducing cognitive load and improving readability.

## Disclaimer

- Lucid only supports the new flat config that shipped with Eslint v8.21.0 which
  is still considered experimental.
- Lucid is still in its early stages. More plugins will be added as they add
  support for the new config structure.

## Installation

You'll first need to install [ESLint](https://eslint.org/) >=8.21.0:

```sh
npm i eslint --save-dev
```

Next, install `eslint-config-lucid`:

```sh
npm i eslint-config-lucid --save-dev
```

## Usage

Add `lucid` to your `eslint.config.js` configuration file.

```javascript
import lucid from 'eslint-config-lucid';

export default [
	...lucid,
	// ... other rule sets.
];
```

Although Lucid is set up to apply rules to typescript and react files, you will
need to add those plugins yourself. An example for typescript:

```javascript
import lucid from 'eslint-config-lucid';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
	...lucid,
	{
		files: ['**/*.ts'],
		plugins: {
			'@typescript-eslint': typescriptPlugin
		},
		languageOptions: {
			parser: typescriptParser
		},
		rules: {
			'semi': 0,
			'@typescript-eslint/semi': 2
		}
	}
];
```

Finally, Lucid has slightly relaxed rules for test files `**/*.test.js`
and `**/*.test.ts`, as well as benchmark files `**/*.bench.js`
and `**/*.bench.js`.

## Details

Lucid starts from the eslint recommended settings. These rules are modified to
support the intent of Lucid (see below), and other plugins are added as follows:

- [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

### Intent

Reducing [cognitive load](https://en.wikipedia.org/wiki/Cognitive_load) is the
primary intent of Lucid. Unlike so many code linters and formatters, I endeavor
to base all my decisions on researched psychological principals. Some principles
considered are:

- [Gestalt psychology](https://en.wikipedia.org/wiki/Gestalt_psychology)

    - Many of the rule decisions regarding code formatting are grounded in
      Gestalt Psychology, particularly around the use of whitespace to group
      like things and separate unlike things.

- [Programming complexity](https://en.wikipedia.org/wiki/Programming_complexity)

If you want to propose a change to a rule or suggest additional plugins, please
include researched psychological principals in your issue or pull request. 
