module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: ['airbnb-base', 'plugin:node/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['core', 'shared'],
      },
    },
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prefer-const': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'node/no-unpublished-require': 'off',
    'node/no-missing-import': 'error',
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'node/no-sync': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'error',
    'import/newline-after-import': 'error',
    'import/no-cycle': 'warn',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        printWidth: 120,
      },
    ],
  },
  overrides: [
    {
      files: ['core/**/*.js', 'shared/**/*.js'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: ['../*'],
          },
        ],
      },
    },
    {
      files: ['**/*.test.js', '**/__tests__/**/*.js'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        'no-unused-expressions': 'off',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
      },
    },
  ],
};
