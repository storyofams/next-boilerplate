import _css from '@styled-system/css'
import {transformAliasProps} from '@lib'

const css = styleProps => _css(transformAliasProps(styleProps))

export default css
