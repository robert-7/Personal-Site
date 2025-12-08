const { FlatCompat } = require('@eslint/eslintrc');
const globals = require('globals');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.extends('standard'),
  {
    files: ['assets/custom/js/**/*.js'],
    ignores: ['assets/custom/js/**/*.min.js'],
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
