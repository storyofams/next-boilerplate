import React from 'react';

import { Checkbox, Stack } from '~/components';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const Basic = () => (
  <Stack flexDir="column" alignItems="flex-start" p={4} space={1}>
    <Checkbox checked />
    <Checkbox />
    <Checkbox label="lorem ipsum" />
    <Checkbox
      label="lorem ipsum"
      statusMessage="Please click this"
      status="error"
    />
  </Stack>
);
