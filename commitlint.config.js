module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './commitlint.config.js'],
    createDefaultProgram: true,
  },
  rules: {
    'header-max-length': [2, 'always', 72],
    'scope-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],
    'type-case': [2, 'always', 'lower-case'],
  },
};
