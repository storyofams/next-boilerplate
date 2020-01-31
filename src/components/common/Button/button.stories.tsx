import React from 'react'
import {Stack} from '@components'
import {ChakraButton, BlossomSecondaryButton, UnderlineButton} from './Button'

export default {
  component: ChakraButton,
  title: 'Button',
}

export const examples = () => (
  <Stack alignItems="center" space={3} flexDir="column">
    <ChakraButton>Lorem Ipsum</ChakraButton>
    <ChakraButton isLoading>Lorem Ipsum</ChakraButton>
    <ChakraButton disabled>Lorem Ipsum</ChakraButton>
    <BlossomSecondaryButton>Lorem Ipsum</BlossomSecondaryButton>
    <BlossomSecondaryButton isLoading>Lorem Ipsum</BlossomSecondaryButton>
    <BlossomSecondaryButton width="100%">Lorem Ipsum</BlossomSecondaryButton>
    <UnderlineButton>Lorem Ipsum</UnderlineButton>
  </Stack>
)
