'use strict'

module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended',

    'turbo',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'html', 'prettier'],
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
  ignorePatterns: [
    // # dependencies
    'node_modules',
    '.pnp',
    '.pnp.js',

    // # testing
    'coverage',
    '__snapshots__',

    // # output
    '.next/',
    'out/',
    'output',
    'build',
    'dist',
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',

    // # lock
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',

    // # turbo
    '.turbo',

    // # Editor directories and files
    '.idea',
    '.vscode',

    // other directories and files
    'public',
    'temp',
    'LICENSE*',
  ],
}
