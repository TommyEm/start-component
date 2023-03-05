module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "react"],
  env: {
    browser: true,
    node: true
  },
  extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "@typescript-eslint/quotes": ["error", "single", {
      allowTemplateLiterals: true
    }],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};