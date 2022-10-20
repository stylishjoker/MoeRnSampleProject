const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));
module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
    node: 1,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'arrow-body-style': ['error', 'never'],
        'no-console': 0,
        'prettier/prettier': ['error', prettierOptions],
        'linebreak-style': 0,
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],
        'react/jsx-filename-extension': ['off'],
        'react/prefer-stateless-function': ['off'],
        'arrow-body-style': ['error', 'always'],
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: false,
          },
        ],
      },
    },
  ],
};
