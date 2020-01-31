import React from 'react'
import {Box, Stack, Text} from '@components'

export default {
  component: Stack,
  title: 'Stack',
}

export const Row = () => (
  <>
    <Text fontSize={4} fontWeight="bold">
      Stack is a layout utility that adds space between items in it
    </Text>
    <Stack space={5}>
      <Box size="40px" bg="red" />
      <Box size="40px" bg="red" />
      <Box size="40px" bg="red" />
      <Box size="40px" bg="red" />
    </Stack>
  </>
)

export const ResponsiveArray = () => (
  <Stack space={[0, 5, 9]}>
    <Box size="40px" bg="red" />
    <Box size="40px" bg="red" />
    <Box size="40px" bg="red" />
    <Box size="40px" bg="red" />
  </Stack>
)

export const ResponsiveDirection = () => (
  <>
    <Stack space="7" flexDir={['row', 'column']}>
      <Box size="40px" bg="red" />
      <Box size="40px" bg="red" />
      <Box size="40px" bg="red" />
      <Box size="40px" bg="red" />
    </Stack>
    <Stack mt={5} space="7" flexDir={['row', 'column', 'row']}>
      <Box size="40px" bg="blue" />
      <Box size="40px" bg="blue" />
      <Box size="40px" bg="blue" />
      <Box size="40px" bg="blue" />
    </Stack>
    <Stack mt={5} space="7" flexDir={['column', 'row']}>
      <Box size="40px" bg="green" />
      <Box size="40px" bg="green" />
      <Box size="40px" bg="green" />
      <Box size="40px" bg="green" />
    </Stack>
  </>
)

export const OverwritingMargin = () => (
  <Stack space={[0, 5, 9]}>
    <Box mt={5} size="40px" bg="red" />
    <Box mr={5} mt={5} size="40px" bg="red" />
    <Box ml={0} size="40px" bg="red" />
  </Stack>
)
