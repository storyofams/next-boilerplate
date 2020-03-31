import React, {FC} from 'react'
import {ResponsiveValue} from 'styled-system'
import {Flex, Box} from '@components'
import {modifyResponsiveValue} from '@lib'

interface GridProps {
  rowSize: ResponsiveValue<number>
  rowGap?: ResponsiveValue<number>
  columnGap?: ResponsiveValue<number>
}

const Grid: FC<GridProps> = ({rowSize, rowGap = 0, columnGap = 0, children}) => {
  return (
    <Flex
      flexWrap="wrap"
      ml={modifyResponsiveValue(columnGap, val => -val)}
      mt={modifyResponsiveValue(rowGap, val => -val)}
    >
      {React.Children.map(children, child => (
        <Box width={modifyResponsiveValue(rowSize, size => 1 / size)} pl={columnGap} pt={rowGap}>
          {child}
        </Box>
      ))}
    </Flex>
  )
}

export default Grid
