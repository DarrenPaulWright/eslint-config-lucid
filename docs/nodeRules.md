# Eslint Config Lucid

> A collection of eslint plugins with settings focused on reducing cognitive load and improving readability.


<br><a name="node"></a>

## node : <code>object</code>> ESLint rules for [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n). Not that .js files are set up for es module syntax just like .cjs.

**Properties**

| Name | Description |
| --- | --- |
| files | .js, .mjs, .cjs except where stated. |

| Rule | Value | Description |
| --- | --- | --- |
| node/callback-return | off |   **Reasoning**:Arbitrary. |
| no-console | off |   **Reasoning**:Console is needed in node. |
| node/exports-style | off |   **Reasoning**:Irrelevant in es module syntax. Set to error for .cjs files. |
| node/file-extension-in-import | error |   **Reasoning**:Code quality. |
| node/global-require | off |   **Reasoning**:Arbitrary. |
| node/handle-callback-err | error |   **Reasoning**:Code quality. |
| node/no-callback-literal | error |   **Reasoning**:Code quality. |
| node/no-deprecated-api | error |   **Reasoning**:Code quality. |
| node/no-exports-assign | error |   **Reasoning**:Code quality. |
| node/no-extraneous-import | error |   **Reasoning**:Code quality. |
| node/no-extraneous-require | error |   **Reasoning**:Code quality. |
| node/no-missing-import | error |   **Reasoning**:Code quality. |
| node/no-missing-require | error |   **Reasoning**:Code quality. |
| node/no-mixed-requires | error |   **Reasoning**:Code quality. |
| node/no-new-require | error |   **Reasoning**:Readability and simplicity. |
| node/no-path-concat | error |   **Reasoning**:Code quality. |
| node/no-process-env | error |   **Reasoning**:Code quality. |
| node/no-process-exit | error |   **Reasoning**:Code quality. If your building a CLI app then this can be turned off. |
| node/no-restricted-import | off |   **Reasoning**:Project specific. |
| node/no-restricted-require | off |   **Reasoning**:Project specific. |
| node/no-sync | error |   **Reasoning**:Performance. |
| node/no-unpublished-bin | error |   **Reasoning**:Code quality. |
| node/no-unpublished-import | error |   **Reasoning**:REASON. |
| node/no-unpublished-require | error |   **Reasoning**:REASON. |
| node/no-unsupported-features/es-builtins | error |   **Reasoning**:Code quality. |
| node/no-unsupported-features/es-syntax | error |   **Reasoning**:Code quality. |
| node/no-unsupported-features/node-builtins | error |   **Reasoning**:Code quality. |
| node/prefer-global/buffer | error |   **Reasoning**:Readability and simplicity. |
| node/prefer-global/console | error |   **Reasoning**:Readability and simplicity. |
| node/prefer-global/process | error |   **Reasoning**:Readability and simplicity. |
| node/prefer-global/text-decoder | error |   **Reasoning**:Readability and simplicity. |
| node/prefer-global/text-encoder | error |   **Reasoning**:Readability and simplicity. |
| node/prefer-global/url | error |   **Reasoning**:Readability and simplicity. |
| node/prefer-global/url-search-params | error |   **Reasoning**:Readability and simplicity. |
| node/prefer-promises/dns | error |   **Reasoning**:Code quality. |
| node/prefer-promises/fs | error |   **Reasoning**:Code quality. |
| node/process-exit-as-throw | error |   **Reasoning**:Fixes consistent-return rule. |
| node/shebang | warn |   **Reasoning**:Code quality. |
