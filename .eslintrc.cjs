/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // your custom rules here
  }
}
