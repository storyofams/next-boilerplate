import {create} from '@storybook/theming/create'
import theme from '../src/styles/theme'

// import _LOGO from '../public/static/ams.png'

export default create({
  base: 'light',

  colorPrimary: theme.colors.primary500,
  colorSecondary: theme.colors.secondary500,

  // UI
  appBg: theme.colors.white,
  appBorderColor: theme.colors.grey200,

  // Typography
  // fontBase: theme.fonts.body,
  // fontCode: theme.fonts.mono,

  // Text colors
  textColor: theme.colors.grey800,

  // Toolbar default and active colors
  barTextColor: theme.colors.grey700,

  inputTextColor: theme.colors.grey800,

  brandTitle: 'Story of AMS | Next Boilerplate',
  brandUrl: 'https://github.com/storyofams/next-boilerplates',
  // brandImage: _LOGO,
})
