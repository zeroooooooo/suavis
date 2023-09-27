'use strict'

const fs = require('fs')
const path = require('path')
const apps = fs.readdirSync(path.resolve(__dirname, 'apps'))
const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))
const examples = fs.readdirSync(path.resolve(__dirname, 'examples'))
const configs = fs.readdirSync(path.resolve(__dirname, 'configs'))
const plugins = fs.readdirSync(path.resolve(__dirname, 'plugins'))
const scripts = fs.readdirSync(path.resolve(__dirname, 'scripts'))
const tests = fs.readdirSync(path.resolve(__dirname, 'tests'))
const docs = fs.readdirSync(path.resolve(__dirname, 'docs'))
const playground = fs.readdirSync(path.resolve(__dirname, 'playground'))
const bench = fs.readdirSync(path.resolve(__dirname, 'bench'))

module.exports = {
  types: [
    {
      value: 'wip',
      name: '💪      wip:  Work in progress',
    },
    {
      value: 'feat',
      name: '✨     feat:  A new feature',
    },
    {
      value: 'types',
      name: '📝    types:  Define or update definition',
    },
    {
      value: 'fix',
      name: '🐞      fix:  A bug fix',
    },
    {
      value: 'perf',
      name: '👍     perf:  Improve performance',
    },
    {
      value: 'refactor',
      name: '🛠  refactor:  A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'docs',
      name: '📚     docs:  Documentation only changes',
    },
    {
      value: 'typo',
      name: '🧐     typo:  Correct some typing miss',
    },

    {
      value: 'test',
      name: '🏁     test:  Add missing tests or correcting existing tests',
    },
    {
      value: 'chore',
      name: "🗯     chore:  Changes that don't modify src or test files. Such as updating build tasks, package manager",
    },
    {
      value: 'assets',
      name: '🪵    assets:  Add some assets',
    },
    {
      value: 'style',
      name: '💅    style:  Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'dx',
      name: '🤗       dx:  Development experience',
    },
    {
      value: 'ci',
      name: '🛺       ci:  Continuous integration',
    },
    {
      value: 'workflow',
      name: '🧊 workflow:  A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'build',
      name: '🏗️     build:  Build job',
    },
    {
      value: 'revert',
      name: '⏪   revert:  Revert to a commit',
    },
    {
      value: 'release',
      name: '🍻  release:  Release a version',
    },
  ],
  scopes: [
    ...apps,
    ...packages,
    ...examples,
    ...configs,
    ...plugins,
    ...scripts,
    ...tests,
    ...docs,
    ...playground,
    ...bench,
  ],
  enableMultipleScopes: true,
  scopeEnumSeparator: ',',
  allowCustomScopes: true,
  allowEmptyScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
}
