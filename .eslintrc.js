module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "moon",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "unicorn", "import"],
  env: { node: true },
  rules: {
    "unicorn/prefer-node-protocol": "error",
    "import/extensions": ["error", "always"],
  },
};
