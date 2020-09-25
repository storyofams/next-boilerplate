import React from 'react';
import { action } from '@storybook/addon-actions';

import { Stack, Toggle } from '~/components';

export default {
  component: Toggle,
  title: 'Toggle',
};

export const Basic = () => (
  <Stack flexDir="column" alignItems="flex-start" p={4} space={3}>
    <Toggle checked />
    <Toggle onChange={action('toggled')} />
  </Stack>
);
