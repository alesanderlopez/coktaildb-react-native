module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'max-len': ['error', {code: 80}],
    indent: ['error', 2],
    //"semi": ["error", "always"],
    quotes: ['error', 'double'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'none'],
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    //"react-native/no-inline-styles": 0,
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': 0,
  },
};
