import React from 'react'
import {Stack, Toggle} from '@components'
import {action} from '@storybook/addon-actions'

export default {
  component: Toggle,
  title: 'Toggle',
}

export const normal = () => (
  <Stack flexDir="column" alignItems="flex-start" p={5} mb={5} space={5}>
    <Toggle checked />
    <Toggle onChange={action('toggled')} />
  </Stack>
)
