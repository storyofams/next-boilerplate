import styled from 'styled-components'
import {Box} from '@components'
import {ResponsiveValue} from 'styled-system'
import {variant} from '@lib'

type CSS = React.CSSProperties
type Variant = 'center'

const Flex = styled(Box)<{variant?: Variant; space?: ResponsiveValue<CSS['margin']>}>`
  display: flex;
  ${p =>
    variant({
      variants: {
        center: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    })(p)}
`

Flex.displayName = 'Flex'

export default Flex
