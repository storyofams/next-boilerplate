module.exports = {
  refs: {
    ["react-ui"]: {
      title: "@storyofams/react-ui",
      url: "https://react-ui.storyofams.vercel.app/"
    }
  },
  stories: ['../src/docs/*.stories.@(mdx)', '../src/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
  ],
};
