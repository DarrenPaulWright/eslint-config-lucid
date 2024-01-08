# Eslint Config Lucid

> A collection of eslint plugins with settings focused on reducing cognitive load and improving readability.


<br><a name="unicorn"></a>

## unicorn : <code>object</code>> ESLint rules for [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn).

**Properties**

| Name | Description |
| --- | --- |
| files | .js, .jsx,, .mjs, .cjs .ts, .tsx |

| Rule | Value | Description |
| --- | --- | --- |
| unicorn/better-regex | off |   **Reasoning**:Covered by regexp plugin. |
| unicorn/catch-error-name | error |   **Reasoning**:Readability and simplicity. |
| unicorn/consistent-destructuring | warn |   **Reasoning**:Readability and simplicity. |
| unicorn/consistent-function-scoping | off |   **Reasoning**:Arbitrary. |
| unicorn/custom-error-definition | warn |   **Reasoning**:Code quality. |
| unicorn/empty-brace-spaces | off |   **Reasoning**:Covered by core rules. |
| unicorn/error-message | error |   **Reasoning**:Readability and simplicity. |
| unicorn/escape-case | error |   **Reasoning**:Readability. |
| unicorn/expiring-todo-comments | off |   **Reasoning**:Arbitrary. |
| unicorn/explicit-length-check | error |   **Reasoning**:Readability and simplicity. |
| unicorn/filename-case | error |   **Reasoning**:Readability and simplicity. |
| unicorn/import-style | off |   **Reasoning**:Arbitrary. |
| unicorn/new-for-builtins | error |   **Reasoning**:Code quality. |
| unicorn/no-abusive-eslint-disable | error |   **Reasoning**:Code quality. |
| unicorn/no-array-callback-reference | off |   **Reasoning**:Arbitrary. |
| unicorn/no-array-for-each | off |   **Reasoning**:Problematic reasoning, forEach is more readable. |
| unicorn/no-array-method-this-argument | off |   **Reasoning**:Arbitrary. |
| unicorn/no-array-push-push | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-array-reduce | off |   **Reasoning**:Problematic reasoning, reduce is more readable. |
| unicorn/no-await-expression-member | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-console-spaces | warn |   **Reasoning**:Readability and simplicity. |
| unicorn/no-document-cookie | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-empty-file | warn |   **Reasoning**:Organization. |
| unicorn/no-for-loop | off |   **Reasoning**:Arbitrary. |
| unicorn/no-hex-escape | error |   **Reasoning**:Consistency. |
| unicorn/no-instanceof-array | error |   **Reasoning**:Code quality. |
| unicorn/no-invalid-remove-event-listener | error |   **Reasoning**:Code quality. |
| unicorn/no-keyword-prefix | off |   **Reasoning**:Arbitrary. |
| unicorn/no-lonely-if | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-negated-condition | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-nested-ternary | error |   **Reasoning**:Code quality and readability and simplicity. |
| unicorn/no-new-array | off |   **Reasoning**:Arbitrary. |
| unicorn/no-new-buffer | off |   **Reasoning**:Arbitrary. |
| unicorn/no-null | off |   **Reasoning**:Arbitrary. |
| unicorn/no-object-as-default-parameter | off |   **Reasoning**:Arbitrary. |
| unicorn/no-process-exit | off |   **Reasoning**:Covered in eslint-config-lucid-node. |
| unicorn/no-static-only-class | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-thenable | off |   **Reasoning**:Arbitrary. |
| unicorn/no-this-assignment | off |   **Reasoning**:Arbitrary. |
| unicorn/no-typeof-undefined | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-unnecessary-await | error |   **Reasoning**:Code quality. |
| unicorn/no-unnecessary-polyfills | off |   **Reasoning**:Project specific. |
| unicorn/no-unreadable-array-destructuring | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-unreadable-iife | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-unused-properties | warn |   **Reasoning**:Code quality. |
| unicorn/no-useless-fallback-in-spread | error |   **Reasoning**:Code quality. |
| unicorn/no-useless-length-check | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-useless-promise-resolve-reject | off |   **Reasoning**:Covered by promise/no-return-wrap. |
| unicorn/no-useless-spread | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-useless-switch-case | error |   **Reasoning**:Code quality. |
| unicorn/no-useless-undefined | error |   **Reasoning**:Readability and simplicity. |
| unicorn/no-zero-fractions | error |   **Reasoning**:Readability and simplicity. |
| unicorn/number-literal-case | error |   **Reasoning**:Code quality. |
| unicorn/numeric-separators-style | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-add-event-listener | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-array-find | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-array-flat | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-array-flat-map | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-array-index-of | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-array-some | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-at | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-blob-reading-methods | error |   **Reasoning**:Code quality. |
| unicorn/prefer-code-point | error |   **Reasoning**:Code quality. |
| unicorn/prefer-date-now | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-default-parameters | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-dom-node-append | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-dom-node-dataset | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-dom-node-remove | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-dom-node-text-content | warn |   **Reasoning**:Code quality. |
| unicorn/prefer-event-target | error |   **Reasoning**:Code quality. |
| unicorn/prefer-export-from | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-includes | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-json-parse-buffer | error |   **Reasoning**:Code quality. |
| unicorn/prefer-keyboard-event-key | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-logical-operator-over-ternary | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-math-trunc | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-modern-dom-apis | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-modern-math-apis | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-module | error |   **Reasoning**:Consistency. |
| unicorn/prefer-native-coercion-functions | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-negative-index | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-node-protocol | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-number-properties | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-object-from-entries | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-optional-catch-binding | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-prototype-methods | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-query-selector | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-reflect-apply | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-regexp-test | off |   **Reasoning**:Covered by regexp/prefer-regexp-test. |
| unicorn/prefer-set-has | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-set-size | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-spread | off |   **Reasoning**:Arbitrary. |
| unicorn/prefer-string-replace-all | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-string-slice | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-string-starts-ends-with | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-string-trim-start-end | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-switch | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-ternary | error |   **Reasoning**:Readability and simplicity. |
| unicorn/prefer-top-level-await | off |   **Reasoning**:Covered by promise plugin. |
| unicorn/prefer-type-error | error |   **Reasoning**:Code quality. |
| unicorn/prevent-abbreviations | error |   **Reasoning**:Readability and simplicity. Removes ambiguity for future developers. |
| unicorn/relative-url-style | error |   **Reasoning**:Readability and simplicity. MAintains consistent url structure to imports. |
| unicorn/require-array-join-separator | error |   **Reasoning**:Readability and simplicity. |
| unicorn/require-number-to-fixed-digits-argument | error |   **Reasoning**:Readability and simplicity. |
| unicorn/require-post-message-target-origin | error |   **Reasoning**:Code quality. |
| unicorn/string-content | off |   **Reasoning**:Arbitrary. |
| unicorn/switch-case-braces | error |   **Reasoning**:Readability and simplicity. |
| unicorn/template-indent | off |   **Reasoning**:Arbitrary. |
| unicorn/text-encoding-identifier-case | error |   **Reasoning**:Code quality. |
| unicorn/throw-new-error | error |   **Reasoning**:Readability and simplicity. |
