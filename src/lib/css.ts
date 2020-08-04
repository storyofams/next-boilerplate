import _css from '@styled-system/css';
import { transformAliasProps } from '~/lib';

export const css = (styleProps) => _css(transformAliasProps(styleProps));
