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
    "semi": 2,
    "no-debugger": 1,
    "no-unused-vars": 1,
    "no-console": 1,
    "no-unused-vars": 1,
    "no-extra-semi": 2,
    "yoda": 2,
    "no-multi-spaces": 2,
    "quotes": 0
  },
  globals: {}
}
