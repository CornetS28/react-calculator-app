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
      "no-nested-ternary": 0,
      'react/jsx-filename-extension': 0,
      'no-shadow': 0,
      'import/no-extraneous-dependencies': 0,
      'camelcase': 0,
      "react/destructuring-assignment": 0,
      "import/no-unresolved": 0,
      "import/extensions": "off",
      "no-trailing-spaces": [2, { "skipBlankLines": true }]
    },
  };