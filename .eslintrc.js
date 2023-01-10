module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules : {
    'prettier/prettier':0,
    'react-native/no-inline-styles':0,
    'eol-last':0,
    'comma-dangle':0,
    'semi':0,
    'no-trailing-spaces':0,
    'jsx-quotes':0,
    'curly':0,
    'quotes':0,
    'react-hooks/exhaustive-deps':0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};


