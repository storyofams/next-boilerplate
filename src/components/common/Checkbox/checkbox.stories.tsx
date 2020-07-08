import React from 'react'
import {Stack, Checkbox} from '@/components'

export default {
  component: Checkbox,
  title: 'Checkbox',
}

export const normal = () => (
  <Stack flexDir="column" alignItems="flex-start" p={5} mb={5} space={5}>
    <Checkbox checked />
    <Checkbox />
    <Checkbox label="lorem ipsum" />
    <Checkbox label="lorem ipsum" statusMessage="Please click this" status="error" />
  </Stack>
)
