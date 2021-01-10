module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
