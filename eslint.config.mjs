import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "max-len": OFF,
      "no-unused-vars": [ERROR, { args: "none", ignoreRestSiblings: true }],
      "no-undef": "warn",
      "no-var": ERROR,
      "react/jsx-boolean-value": [ERROR, "always"],
      "react/jsx-no-undef": ERROR,
      "react/jsx-sort-prop-types": OFF,
      "react/jsx-space-before-closing": ERROR,
      "react/jsx-uses-react": ERROR,
      "react/jsx-wrap-multilines": [
        ERROR,
        { declaration: false, assignment: false },
      ],
      "space-before-blocks": ERROR,
      "space-before-function-paren": OFF,
      strict: ERROR,
    },
  },
];
