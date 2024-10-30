import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  { rules: 
    { "react/jsx-uses-vars": "off", 
      "jsx-a11y/img-redundant-alt": "off",
      "no-unused-vars": "off",
      "react/react-in-jsx-scope" : "off"
    } },
];