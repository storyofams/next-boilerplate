import { Breakpoints } from '../styled';
import colors from './colors';
import space from './space';

const theme = {
  colors,
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fonts: {
    heading: `Recoleta, Georgia, serif`,
    body: `InternationalPro, Arial, Helvetica, sans-serif`,
    mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
  fontSizes: {
    1.25: space['1.25'],
    1.5: space['1.5'],
    1.75: space['1.75'],
    2: space['2'],
    2.25: space['2.25'],
    2.5: space['2.5'],
    3: space['3'],
    4: space['4'],
    5: space['5'],
    6: space['6'],
    7: space['7'],
    8: space['8'],
    10: space['9'],
    12: space['12'],
    18: space['18'],
    20: space['20'],
    root: space['1.75'],
    heading: space['4'],
  },
  lineHeights: {
    normal: 1,
    heading: 1.1,
    medium: 1.25,
    high: 1.6,
  },
  space: {
    ...space,
    mobileGutter: space['2'],
  },
  sizes: {
    maxWidth: 1232,
  },
  breakpoints: ['768px', '1024px', '1280px', '1440px'] as Breakpoints,
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
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '16px',
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
    md: '0px 2px 0px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.05)',
    lg: '0px 2px 4px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1)',
    nav: '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    toast:
      '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    none: 'none',
  },
};

theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];
theme.breakpoints.xl = theme.breakpoints[3];

export default theme;
