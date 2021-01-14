import React from 'react';

import { Input, Stack } from '~/components';

export default {
  component: Input,
  title: 'Input',
};

export const Basic = () => (
  <Stack
    flexDirection="column"
    sx={{ alignItems: 'flex-start' }}
    p={4}
    space={1}
  >
    <Input placeholder="Placeholder" />
    <Input label="Label" />
    <Input
      disabled
      label="Label"
      placeholder="Placeholder"
      status="warning"
      statusMessage="Warning"
    />
  </Stack>
);
