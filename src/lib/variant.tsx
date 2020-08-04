import { variant as _variant, VariantArgs } from 'styled-system';
import { transformAliasProps } from '~/lib';

export const variant = (styleProps: VariantArgs) =>
  _variant(transformAliasProps(styleProps));

export default variant;
