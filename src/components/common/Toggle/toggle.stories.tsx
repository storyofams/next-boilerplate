import React from 'react';
import { action } from '@storybook/addon-actions';
import { Stack, Toggle } from '~/components';

export default {
  component: Toggle,
  title: 'Toggle',
};

export const normal = () => (
  <Stack flexDir="column" alignItems="flex-start" p={5} mb={5} space={5}>
    <Toggle checked />
    <Toggle onChange={action('toggled')} />
  </Stack>
);
