module.exports = {
  root: true,
  plugins: ['eslint-plugin-cypress'],
  extends: ['@storyofams/eslint-config-ams/web', 'plugin:cypress/recommended'],
  env: { 'cypress/globals': true },
};
