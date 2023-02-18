# Eslint Config Lucid

> A collection of eslint plugins with settings focused on reducing cognitive load and improving readability.


<br><a name="regexp"></a>

## regexp : <code>object</code>> ESLint rules for [eslint-plugin-regexp](https://www.npmjs.com/package/eslint-plugin-regexp).

**Properties**

| Name | Description |
| --- | --- |
| files | .js, .jsx, .mjs, .cjs, .ts, .tsx |

| Rule | Value | Description |
| --- | --- | --- |
| regexp/confusing-quantifier | error |   **Reasoning**:Code quality. |
| regexp/control-character-escape | error |   **Reasoning**:Readability and simplicity. |
| regexp/hexadecimal-escape | error |   **Reasoning**:Readability and simplicity. |
| regexp/letter-case | error |   **Reasoning**:Readability and simplicity. |
| regexp/match-any | error |   **Reasoning**:Readability and simplicity. |
| regexp/negation | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-contradiction-with-assertion | error |   **Reasoning**:Code quality. |
| regexp/no-control-character | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-dupe-characters-character-class | error |   **Reasoning**:Code quality. |
| regexp/no-dupe-disjunctions | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-empty-alternative | error |   **Reasoning**:Code quality. |
| regexp/no-empty-capturing-group | error |   **Reasoning**:Code quality. |
| regexp/no-empty-character-class | error |   **Reasoning**:Code quality. |
| regexp/no-empty-group | error |   **Reasoning**:Code quality. |
| regexp/no-empty-lookarounds-assertion | error |   **Reasoning**:Code quality. |
| regexp/no-escape-backspace | error |   **Reasoning**:Readability. |
| regexp/no-extra-lookaround-assertions | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-invalid-regexp | error |   **Reasoning**:Code quality. |
| regexp/no-invisible-character | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-lazy-ends | error |   **Reasoning**:Code quality. |
| regexp/no-legacy-features | error |   **Reasoning**:Code quality. |
| regexp/no-misleading-capturing-group | warn |   **Reasoning**:Readability and simplicity. |
| regexp/no-misleading-unicode-character | error |   **Reasoning**:Code quality. |
| regexp/no-missing-g-flag | error |   **Reasoning**:Code quality. |
| regexp/no-non-standard-flag | error |   **Reasoning**:Code quality. |
| regexp/no-obscure-range | error |   **Reasoning**:Code quality. |
| regexp/no-octal | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-optional-assertion | error |   **Reasoning**:Code quality. |
| regexp/no-potentially-useless-backreference | error |   **Reasoning**:Code quality. |
| regexp/no-standalone-backslash | error |   **Reasoning**:Code quality. |
| regexp/no-super-linear-backtracking | error |   **Reasoning**:Code quality. |
| regexp/no-super-linear-move | error |   **Reasoning**:Code quality. |
| regexp/no-trivially-nested-assertion | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-trivially-nested-quantifier | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-unused-capturing-group | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-useless-assertions | error |   **Reasoning**:Code quality. |
| regexp/no-useless-backreference | error |   **Reasoning**:Code quality. |
| regexp/no-useless-character-class | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-useless-dollar-replacements | error |   **Reasoning**:Code quality. |
| regexp/no-useless-escape | error |   **Reasoning**:Code quality. |
| regexp/no-useless-flag | error |   **Reasoning**:Code quality. |
| regexp/no-useless-lazy | error |   **Reasoning**:Code quality. |
| regexp/no-useless-non-capturing-group | error |   **Reasoning**:Code quality. |
| regexp/no-useless-quantifier | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-useless-range | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-useless-two-nums-quantifier | error |   **Reasoning**:Readability and simplicity. |
| regexp/no-zero-quantifier | error |   **Reasoning**:Readability and simplicity. |
| regexp/optimal-lookaround-quantifier | error |   **Reasoning**:Readability and simplicity. |
| regexp/optimal-quantifier-concatenation | error |   **Reasoning**:Code quality. |
| regexp/prefer-character-class | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-d | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-escape-replacement-dollar-char | error |   **Reasoning**:Code quality. |
| regexp/prefer-lookaround | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-named-backreference | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-named-capture-group | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-named-replacement | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-plus-quantifier | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-predefined-assertion | error |   **Reasoning**:Code quality. |
| regexp/prefer-quantifier | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-question-quantifier | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-range | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-regexp-exec | error |   **Reasoning**:Performance. |
| regexp/prefer-regexp-test | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-result-array-groups | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-star-quantifier | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-unicode-codepoint-escapes | error |   **Reasoning**:Readability and simplicity. |
| regexp/prefer-w | error |   **Reasoning**:Readability and simplicity. |
| regexp/require-unicode-regexp | off |   **Reasoning**:Covered by regexp/no-misleading-unicode-character. |
| regexp/sort-alternatives | error |   **Reasoning**:Readability and simplicity. |
| regexp/sort-character-class-elements | error |   **Reasoning**:Readability and simplicity. |
| regexp/sort-flags | error |   **Reasoning**:Readability and simplicity. |
| regexp/strict | error |   **Reasoning**:Code quality. |
| regexp/unicode-escape | error |   **Reasoning**:Readability and simplicity. |
| regexp/use-ignore-case | error |   **Reasoning**:Readability and simplicity. |
