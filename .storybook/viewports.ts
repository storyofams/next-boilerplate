import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import theme from '../src/styles/theme'

const viewportByBreakpoint = () => {
  const viewPorts = {}

  theme.breakpoints.forEach((breakpoint, key) =>
    Object.assign(viewPorts, {
      [key]: {
        name: `Breakpoint: ${breakpoint}`,
        styles: {
          width: breakpoint,
          height: '963px',
        },
      },
    }),
  )

  return viewPorts
}

const customViewPorts = {
  ...viewportByBreakpoint(),
}

export const viewPorts  = {
  ...customViewPorts,
  ...INITIAL_VIEWPORTS,
}
