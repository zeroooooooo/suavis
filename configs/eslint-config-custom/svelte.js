'use strict'

module.exports = {
  extends: ['./basic'],
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    // ...
  },
  settings: {
    'svelte3/typescript': true, // load TypeScript as peer dependency
  },
}
