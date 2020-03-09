import {variant as _variant} from 'styled-system'
import {transformAliasProps} from '@lib'

export const variant = styleProps => _variant(transformAliasProps(styleProps))

export default variant
