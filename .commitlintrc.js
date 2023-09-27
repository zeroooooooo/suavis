'use strict'

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'wip',
        'feat',
        'types',
        'fix',
        'perf',
        'refactor',
        'docs',
        'typo',
        'test',
        'chore',
        'assets',
        'style',
        'dx',
        'ci',
        'workflow',
        'build',
        'revert',
        'release'
      ],
    ],
    'type-case': [1, 'always', ['lower-case', 'upper-case']],
    'scope-case': [0, 'never'],
    'subject-case': [0, 'never'],
    'scope-empty': [0, 'never'],
  },
}
