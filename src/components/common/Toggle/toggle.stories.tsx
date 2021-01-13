import React from 'react';

import { Stack, Toggle } from '~/components';

export default {
  component: Toggle,
  title: 'Toggle',
  argTypes: { onChange: { action: 'toggled' } },
  parameters: { controls: { hideNoControlsWarning: true } },
};

export const Basic = (args) => (
  <Stack flexDir="column" alignItems="flex-start" p={4} space={3}>
    <Toggle {...args} />
  </Stack>
);
