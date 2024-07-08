const roles = {
  '@typescript-eslint/no-unused-vars': 'off',
  'arrow-parens': 'off'
}

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'l-lint'],
  rules: {
    'l-lint/no-var': [2],
    ...roles
  }
}
