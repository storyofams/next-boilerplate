import React from 'react'
import Box from './Box'

export default {
  component: Box,
  title: 'Box',
}

export const BasicExamples = () => (
  <Box d="flex">
    <Box mr={{sm: 0, md: 5, lg: 9}} h={100} w={100} bg="#00f" />
    <Box h={100} w={100} borderRadius="full" bg={['grey800', '#ff1']} />
  </Box>
)
