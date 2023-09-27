'use strict'

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-recommended-vue',
    'stylelint-config-clean-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.(js|ts|jsx|tsx)'],
      customSyntax: require('postcss-lit'),
    },
    {
      files: ['**/*.(scss|sass)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/*.md'],
      customSyntax: 'postcss-markdown',
    },
  ],
  rules: {
    'prettier/prettier': true,
  },
}
