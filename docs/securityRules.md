# Eslint Config Lucid

> A collection of eslint plugins with settings focused on reducing cognitive load and improving readability.


<br><a name="security"></a>

## security : <code>object</code>> ESLint rules for [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security).

**Properties**

| Name | Description |
| --- | --- |
| files | .js, .mjs, .cjs |

| Rule | Value | Description |
| --- | --- | --- |
| security/detect-bidi-characters | error |   **Reasoning**:Code quality. |
| security/detect-buffer-noassert | error |   **Reasoning**:Code quality. |
| security/detect-child-process | error |   **Reasoning**:Code quality. |
| security/detect-disable-mustache-escape | error |   **Reasoning**:Security. |
| security/detect-eval-with-expression | off |   **Reasoning**:Covered by no-eval. |
| security/detect-new-buffer | warn |   **Reasoning**:Code quality. |
| security/detect-no-csrf-before-method-override | warn |   **Reasoning**:Security. |
| security/detect-non-literal-fs-filename | warn |   **Reasoning**:Security. |
| security/detect-non-literal-regexp | warn |   **Reasoning**:Security. |
| security/detect-non-literal-require | warn |   **Reasoning**:Security. |
| security/detect-object-injection | off |   **Reasoning**:Arbitrary. |
| security/detect-possible-timing-attacks | warn |   **Reasoning**:Security. |
| security/detect-pseudoRandomBytes | warn |   **Reasoning**:Code quality. |
| security/detect-unsafe-regex | off |   **Reasoning**:Covered by regexp plugin. |
