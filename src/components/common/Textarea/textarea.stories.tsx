import React from 'react';

import { Textarea, Stack } from '~/components';

export default {
  component: Textarea,
  title: 'Textarea',
};

export const Basic = () => (
  <Stack
    flexDirection="column"
    sx={{ alignItems: 'flex-start' }}
    p={4}
    space={1}
  >
    <Textarea placeholder="Placeholder" />
    <Textarea label="Label" />
    <Textarea
      disabled
      label="Label"
      placeholder="Placeholder"
      status="warning"
      statusMessage="Warning"
    />
  </Stack>
);
