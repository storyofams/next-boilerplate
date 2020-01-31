import 'styled-components'

type ObjectOfStrings = {
  [key: string]: any
  [key: number]: any
}

interface Breakpoints extends Array<string> {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ObjectOfStrings
    fontWeights: {
      regular: string | number
      medium: string | number
      bold: string | number
    }
    fonts: {
      heading: string
      body: string
      mono: string
    }
    fontSizes: ObjectOfStrings
    space: ObjectOfStrings
    sizes: ObjectOfStrings
    breakpoints: Breakpoints
    zIndices: ObjectOfStrings
    radii: {
      none: string
      sm: string
      md: string
      lg: string
      full: string
    }
    borders: ObjectOfStrings
    shadows: ObjectOfStrings
  }
}
