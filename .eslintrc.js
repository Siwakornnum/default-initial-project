const baseRules = require('./rules/base.js')
const reactRules = require('./rules/react.js')
const importRules = require('./rules/import.js')
const typescriptRule = require('./rules/typescriptEslint.js')

module.exports = {
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'import',
    'sort-keys',
  ],
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:eslint-comments/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...baseRules,
    ...importRules,
    ...typescriptRule,
    ...reactRules,
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    project: './tsconfig.json',
  },
}
