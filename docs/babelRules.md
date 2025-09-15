# Eslint Config Lucid

> A collection of eslint plugins with settings focused on reducing cognitive load and improving readability.


<br><a name="babel"></a>

## babel : <code>object</code>> ESLint rules for [@babel/eslint-plugin](https://www.npmjs.com/package/@babel/eslint-plugin). Each rule corresponds to a core eslint rule, and has the same options. These allow modern ES features without throwing false errors.

**Properties**

| Name | Description |
| --- | --- |
| files | .js, .jsx, .mjs, .cjs |

| Rule | Value | Description |
| --- | --- | --- |
| babel/new-cap | error |   **Reasoning**:Maintains consistency and readability. Distinguishes instantiable items from instances. |
| babel/no-invalid-this | error |   **Reasoning**:Code quality. |
| babel/no-undef | error |   **Reasoning**:Code quality. |
| babel/no-unused-expressions | error |   **Reasoning**:Code quality. |
