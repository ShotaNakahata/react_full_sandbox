import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];

// import globals from "globals";
// import js from "@eslint/js";
// import react from "eslint-plugin-react";

// /** @type {import("eslint").Linter.FlatConfig[]} */
// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"], // 対象ファイルの指定
//     languageOptions: {
//       globals: {
//         ...globals.browser, // ブラウザ環境のグローバル変数
//       },
//     },
//     rules: {
//       // PropTypesを無効化
//       "react/prop-types": "off",

//       // React 17以降で不要なルールを無効化
//       "react/react-in-jsx-scope": "off",
//     },
//   },
//   js.configs.recommended, // 標準のJavaScriptルール
//   react.configs.recommended, // 標準のReactルール
// ];
