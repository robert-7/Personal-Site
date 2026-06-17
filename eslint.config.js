module.exports = [
  {
    ignores: ['assets/custom/js/**/*.min.js'],
  },
  {
    files: ['assets/custom/js/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        jQuery: 'readonly',
        $: 'readonly',
      },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': ['warn', { args: 'none', varsIgnorePattern: '^_' }],
      'no-redeclare': 'error',
      'no-unreachable': 'error',
      'no-cond-assign': 'error',
      'no-constant-condition': 'warn',
      'no-empty': 'warn',
      'no-self-assign': 'error',
      'no-sparse-arrays': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
    },
  },
];
