export type Breakpoints = {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

type StyledTheme = typeof import('./theme').default;

declare module 'styled-components' {
  export interface DefaultTheme extends StyledTheme {}
}

declare module 'system-props' {
  export interface Theme extends StyledTheme {}
}
