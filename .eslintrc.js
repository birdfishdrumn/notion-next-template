module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'eslint:recommended',
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    React: "writable",
  },
  ignorePatterns: ["build"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "react-hooks", "unused-imports"],
  rules: {
    // "unused-imports/no-unused-imports": "on",
    //不要なimportの削除
    "unused-imports/no-unused-vars": [
      //unused-importsでno-unused-varsのルールを再定義
      "off",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "react/display-name": "off",
    quotes: ["off", "single"],
    "no-unused-vars": [
      "off",
      {
        vars: "all",
        args: "none",
      },
    ],

    "no-console": ["off"],
    "react/prop-types": ["off"],
  },
  settings: { react: { version: "detect" } },
};
