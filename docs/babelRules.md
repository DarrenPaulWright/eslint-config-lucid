# Eslint Config Lucid

> A collection of eslint plugins with settings focused on reducing cognitive load and improving readability.


<br><a name="babel"></a>

## babel : <code>object</code>> ESLint rules for [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel). Each rule corresponds to a core eslint rule, and has the same options. These allow modern ES features without throwing false errors.

**Properties**

| Name | Description |
| --- | --- |
| files | .js, .jsx, .mjs, .cjs |

| Rule | Value | Description |
| --- | --- | --- |
| babel/camelcase | error |   **Reasoning**:Maintains consistency and readability. |
| babel/new-cap | error |   **Reasoning**:Maintains consistency and readability. Distinguishes instantiable items from instances. |
| babel/no-invalid-this | error |   **Reasoning**:Code quality. |
| babel/no-unused-expressions | error |   **Reasoning**:Code quality. |
| babel/semi | error |   **Reasoning**:Semicolons provide the developer with a visual indication of the end of a thought, much like a period in a sentence. Imagine reading a book without periods, the cognitive load is much higher if you have to figure out the end of each thought. |
| babel/valid-typeof | error |   **Reasoning**:Error prevention. |
