import React from 'react'
import {StatusMessage, Stack} from '@components'

export default {
  component: StatusMessage,
  title: 'StatusMessage',
}

export const BasicExamples = () => (
  <Stack maxW="270px" flexDir="column" space={4}>
    <StatusMessage status="default">Lorem, ipsum dolor. (default)</StatusMessage>
    <StatusMessage status="success">Lorem, ipsum dolor. (success)</StatusMessage>
    <StatusMessage status="warning">Lorem, ipsum dolor. (warning)</StatusMessage>
    <StatusMessage status="error">Lorem, ipsum dolor. (error)</StatusMessage>
  </Stack>
)
