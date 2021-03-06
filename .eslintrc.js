module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'max-len': 'off',
    'object-curly-newline': 'off',
    'no-useless-escape': 'off',
  },
};
