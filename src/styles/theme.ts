import {Breakpoints} from './styled'

const theme = {
  // colors
  colors: {
    primary500: '#3461eb',
    primaryAlpha40: 'rgba(52, 97, 235,0.4)',
    white: '#fff',
    grey100: '#F9F9F8',
    grey200: '#E2E2E0',
    grey300: '#bdbdbd',
    grey400: '#A8A8A8',
    grey600: '#969696',
    grey700: '#737373',
    grey800: '#343434',
    grey900: '#1B1B1B',
    warning500: '#F0BB00',
    warning100: '#FFF0BD',
    success100: '#DBFFE3',
    success500: '#0C9151',
    error100: '#FFD1D1',
    error500: '#CA1818',
    transparent: 'rgba(255, 255, 255, 0);',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  fonts: {
    heading: `Domaine Disp`,
    body: `Inter`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  fontSizes: {
    root: `calc(14px + 0.2vw)`,
    0: '0.7rem', // 12px
    1: '0.8rem', // 14px
    2: '0.925rem', //16px
    3: '1.025rem', //18px
    4: '1.15rem', //20px
    5: '1.4rem', //24px
    6: '1.85rem', //32px
    7: '2.3rem', //40px
    8: '2.75rem', //48px
    heading: '1.85rem',
  },
  lineHeights: {
    normal: 100,
  },
  // sizes
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
    6: 32,
    7: 48,
    8: 64,
    9: 80,
    10: 120,
    11: 160,
    mobileGutter: 16,
  },
  sizes: {
    maxWidth: 1140,
  },
  breakpoints: ['768px', '1024px', '1280px'] as Breakpoints,
  zIndices: {
    hide: -1,
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '18px',
    full: '9999px',
  },
  borders: {
    none: 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
  },
  shadows: {
    sm: '0px 2px 0px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.05)',
    normal: '0px 2px 0px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.05)',
    big: '0px 2px 4px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1)',
    primary: '0px 10px 16px rgba(240, 96, 57, 0.16), 0px 4px 6px rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
}

theme.breakpoints.sm = theme.breakpoints[0]
theme.breakpoints.md = theme.breakpoints[1]
theme.breakpoints.lg = theme.breakpoints[2]
theme.breakpoints.xl = '1440px'

export default theme
