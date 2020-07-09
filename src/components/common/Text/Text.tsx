import styled from 'styled-components'
import {Box} from '../Box'
import {variant} from 'styled-system'

const variants = {
  ellipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}

export interface TextProps {
  variant?: keyof typeof variants
}

const Text = styled(Box)<TextProps>`
  ${variant({variants})}
`

export default Text
