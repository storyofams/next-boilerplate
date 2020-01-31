import React from 'react'
import {Box} from '@components'
import Flex from './Flex'

export default {
  component: Flex,
  title: 'Flex',
}

export const Normal = () => (
  <Flex>
    <Box size="50px" border="1px solid black" />
    <Box size="50px" border="1px solid black" />
    <Box size="50px" border="1px solid black" />
    <Box size="50px" border="1px solid black" />
    <Box size="50px" border="1px solid black" />
    <Box size="50px" border="1px solid black" />
  </Flex>
)

export const variantCenter = () => (
  <Flex variant="center" border="1px solid black" size="200px">
    <Box size="50px" bg="primary500" />
  </Flex>
)
