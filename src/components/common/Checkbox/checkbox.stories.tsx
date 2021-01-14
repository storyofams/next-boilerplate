import React from 'react';

import { Checkbox, Stack } from '~/components';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const Basic = () => (
  <Stack
    flexDirection="column"
    sx={{ alignItems: 'flex-start' }}
    p={4}
    space={1}
  >
    <Checkbox checked />
    <Checkbox />
    <Checkbox disabled label="lorem ipsum" />
    <Checkbox
      label="lorem ipsum"
      statusMessage="Please click this"
      status="error"
    />
  </Stack>
);
