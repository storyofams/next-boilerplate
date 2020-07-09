import _css from '@styled-system/css'
import {transformAliasProps} from './transformAliasProps'

export const css = styleProps => _css(transformAliasProps(styleProps))
