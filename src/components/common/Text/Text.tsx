import styled from 'styled-components'
import {Box} from '@components'
import {variant} from 'styled-system'

export type TextProps = {
  variant?: 'ellipsis'
}

const Text = styled(Box)<TextProps>`
  ${variant({
    variants: {
      ellipsis: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  })}
`

export default Text
