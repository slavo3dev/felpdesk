/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    // Add the following 'react' environment
    react: true,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: false, tabWidth: 2 }],
  },
};
