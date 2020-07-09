import React from 'react'
import Box from './Box'

export default {
  component: Box,
  title: 'Box',
}

export const BasicExamples = () => (
  <Box d="flex">
    <Box mr={[7, 5, 9]} h={100} w={100} bg="primary500" />
    <Box h={100} w={100} borderRadius="full" bg={['grey800', 'success500']} />
  </Box>
)
