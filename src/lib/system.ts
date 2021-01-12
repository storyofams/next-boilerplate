import { CSSProperties } from 'react';
import { css, DefaultTheme } from 'styled-components';
import {
  system as styledSystem,
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  ResponsiveValue,
  Config,
} from 'styled-system';

export const _customSystem: Config = {
  textDecoration: true,
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  objectFit: true,
  objectPosition: true,
  outline: true,
  float: true,
  willChange: true,
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
  backgroundAttachment: true,
};

const customSystem = styledSystem(_customSystem);

export const system = (p) => css`
  ${compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
    customSystem,
  )(p)}
`;
type CSS = CSSProperties;
export interface System
  extends LayoutProps,
    SpaceProps<DefaultTheme>,
    ColorProps<DefaultTheme>,
    TypographyProps<DefaultTheme>,
    FlexboxProps<DefaultTheme>,
    GridProps<DefaultTheme>,
    BackgroundProps<DefaultTheme>,
    BorderProps<DefaultTheme>,
    PositionProps<DefaultTheme>,
    ShadowProps<DefaultTheme> {
  color?: keyof DefaultTheme['colors'];
  // boxShadow?: ResponsiveValue<keyof DefaultTheme['shadows']>;
  // borderRadius?: ResponsiveValue<keyof DefaultTheme['radii']>;

  // CSS properties
  textDecoration?: ResponsiveValue<CSS['textDecoration']>;
  textTransform?: ResponsiveValue<CSS['textTransform']>;
  appearance?: ResponsiveValue<CSS['appearance']>;
  transform?: ResponsiveValue<CSS['transform']>;
  transformOrigin?: ResponsiveValue<CSS['transformOrigin']>;
  animation?: ResponsiveValue<CSS['animation']>;
  userSelect?: ResponsiveValue<CSS['userSelect']>;
  pointerEvents?: ResponsiveValue<CSS['pointerEvents']>;
  boxSizing?: ResponsiveValue<CSS['boxSizing']>;
  cursor?: ResponsiveValue<CSS['cursor']>;
  resize?: ResponsiveValue<CSS['resize']>;
  transition?: ResponsiveValue<CSS['transition']>;
  objectFit?: ResponsiveValue<CSS['objectFit']>;
  objectPosition?: ResponsiveValue<CSS['objectPosition']>;

  // Background
  backgroundAttachment?: ResponsiveValue<CSS['backgroundAttachment']>;

  // Ellipsis
  wordBreak?: ResponsiveValue<CSS['wordBreak']>;
  overflowWrap?: ResponsiveValue<CSS['overflowWrap']>;
  whiteSpace?: ResponsiveValue<CSS['whiteSpace']>;

  // SVG color properties
  fill?: ColorProps['color'];
  stroke?: ColorProps['color'];

  // List properties
  listStyleType?: ResponsiveValue<CSS['listStyleType']>;
  listStylePosition?: ResponsiveValue<CSS['listStylePosition']>;
  listStyleImage?: ResponsiveValue<CSS['listStyleImage']>;
  listStylePos?: ResponsiveValue<CSS['listStylePosition']>;

  // Outline prop
  outline?: ResponsiveValue<CSS['outline']>;
  float?: ResponsiveValue<CSS['float']>;
  willChange?: ResponsiveValue<CSS['willChange']>;

  //css
  css?: any;
  ref?: any;

  // override any that cause interference
  // @todo type this properly
  height?: any;
  size?: any;
  width?: any;
}

export type SystemProps<T = undefined> = T extends {}
  ? System & Omit<Omit<T, 'color'>, 'css' | 'ref'>
  : System;
