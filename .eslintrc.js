const baseRules = require('./rules/base.js')
const reactRules = require('./rules/react.js')
const importRules = require('./rules/import.js')
const typescriptRule = require('./rules/typescriptEslint.js')

module.exports = {
  ignorePatterns: ['.eslintrc.js', 'jest.config.js'],
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
    'plugin:react/recommended',
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
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 'latest',
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
  },
}
