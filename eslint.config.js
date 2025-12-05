const { FlatCompat } = require('@eslint/eslintrc');
const globals = require('globals');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.extends('standard'),
  {
    files: ['assets/js/custom/**/*.js'],
    ignores: ['assets/js/custom/**/*.min.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jquery,
        ...globals.node,
      },
    },
    rules: {},
  },
];
