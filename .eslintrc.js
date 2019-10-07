module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    "parser": "babel-eslint",
    extends: [
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'react/jsx-filename-extension': 0,
      'no-shadow': 0,
      'import/no-extraneous-dependencies': 0,
      'camelcase': 0,
    },
  };