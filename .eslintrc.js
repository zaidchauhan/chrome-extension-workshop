module.exports = {
  env: {
    browser: true,
    es6: true,
    webextensions: true,
  },
  plugins: [
    'lit'
  ],
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "content/",
    "webpack.config.js",
    "manifest.json"
  ],
  rules: {
  },
};
