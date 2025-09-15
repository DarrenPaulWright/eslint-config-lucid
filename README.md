# Eslint Config Lucid

> A collection of eslint plugins with settings focused on reducing cognitive load and improving readability.
>
> 
<br><a name="Disclaimer"></a>

## Disclaimer
Lucid only supports the new flat config that shipped with ESLint v8.21.0

<br><a name="Installation"></a>

## Installation
First install peer dependencies:
- [eslint](https://www.npmjs.com/package/eslint) 9.x
```
npm i eslint 
```
Next, install eslint-config-lucid:
```
npm i eslint-config-lucid
```
Add Lucid to your eslint.config.js configuration file.

```javascript
import lucid, { lucidBrowser } from 'eslint-config-lucid';

export default [
	...lucid,
	lucidBrowser,
	// ... other rule sets.
];

// Or for node
import { lucidNode } from 'eslint-config-lucid';

export default [
	...lucidNode,
	// ... other rule sets.
];
```

<br><a name="About"></a>

## About
Lucid starts from the eslint recommended settings. These rules are modified to
support the intent of Lucid (see below), and other plugins are added as listed
in the Rules section below.

### Intent

When it comes to formatting and syntax rules, reducing [cognitive load](https://en.wikipedia.org/wiki/Cognitive_load) is the
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


<br>

## Rules

<dl>
<dt><a href="docs/babel.md">babel</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/@babel/eslint-plugin">@babel/eslint-plugin</a>. Each rule corresponds to a core eslint rule, and has the same options. These allow modern ES features without throwing false errors.</p>
</dd>
<dt><a href="docs/core.md">core</a> : <code>object</code></dt>
<dd><p>Core ESLint rules.</p>
</dd>
<dt><a href="docs/you-dont-need-lodash-underscore.md">you-dont-need-lodash-underscore</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore">eslint-plugin-you-dont-need-lodash-underscore</a>.</p>
</dd>
<dt><a href="docs/node.md">node</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/eslint-plugin-n">eslint-plugin-n</a>. Note that .js files are set up for es module syntax just like .cjs.</p>
</dd>
<dt><a href="docs/prefer-arrow-functions.md">prefer-arrow-functions</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/eslint-plugin-prefer-arrow-functions">eslint-plugin-prefer-arrow-functions</a>.</p>
</dd>
<dt><a href="docs/promise.md">promise</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/eslint-plugin-promise">eslint-plugin-promise</a>.</p>
</dd>
<dt><a href="docs/regexp.md">regexp</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/eslint-plugin-regexp">eslint-plugin-regexp</a>.</p>
</dd>
<dt><a href="docs/security.md">security</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/eslint-plugin-security">eslint-plugin-security</a>.</p>
</dd>
<dt><a href="docs/@stylistic.md">@stylistic</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/@stylistic/eslint-plugin">@stylistic/eslint-plugin</a>.</p>
</dd>
<dt><a href="docs/unicorn.md">unicorn</a> : <code>object</code></dt>
<dd><p>ESLint rules for <a href="https://www.npmjs.com/package/eslint-plugin-unicorn">eslint-plugin-unicorn</a>.</p>
</dd>
</dl>

