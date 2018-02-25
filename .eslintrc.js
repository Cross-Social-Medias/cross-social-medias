module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "space-before-function-paren": 0,
    "semi": 0,
    "quotes": 0,
    "prefer-promise-reject-errors": 1,
    "space-before-blocks": 1,
    "indent": 1,
    "no-debugger": 1,
    "no-unused-vars": 1,
    "no-console": 1,
    "no-unused-vars": 1,
    "no-extra-semi": 2,
    "yoda": 2,
    "no-multi-spaces": 2
  },
  globals: {}
}
