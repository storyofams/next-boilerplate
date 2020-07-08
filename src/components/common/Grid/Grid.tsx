import React, {FC} from 'react'
import {ResponsiveValue} from 'styled-system'
import {Flex, Box} from '@components'
import {modifyResponsiveValue, ISystem, css} from '@lib'

interface GridProps extends ISystem {
  rowSize: ResponsiveValue<number>
  rowGap?: ResponsiveValue<number>
  columnGap?: ResponsiveValue<number>
}

const Grid: FC<GridProps> = ({rowSize, rowGap = 0, columnGap = 0, children, ...props}) => {
  return (
    <Box className="grid" {...props}>
      <Flex
        flexWrap="wrap"
        ml={modifyResponsiveValue(columnGap, val => -val)}
        mt={modifyResponsiveValue(rowGap, val => -val)}
        css={css({
          '& > *': {
            flex: modifyResponsiveValue(rowSize, size => `0 1 ${(1 / size) * 100}%`),
            pl: columnGap,
            pt: rowGap,
          },
        })}
      >
        {children}
      </Flex>
    </Box>
  )
}

export default Grid
