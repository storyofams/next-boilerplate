import React from 'react';

import { Select, Stack } from '~/components';

export default {
  component: Select,
  title: 'Select',
};

const options = [
  { value: '1', label: '0 - 9' },
  { value: '2', label: '10 - 14' },
  { value: '3', label: '15+' },
];

export const Basic = () => (
  <Stack maxW="340px" flexDir="column" space={3} p={4}>
    <Select options={options} placeholder="Placeholder" isSearchable={false} />
    <Select options={options} placeholder="Placeholder" isDisabled />
    <Select
      options={options}
      placeholder="Placeholder"
      value={{ value: '1', label: '0 - 9' }}
    />
    <Select
      label="Name"
      status="success"
      statusMessage="probably won't use this"
    />
    <Select
      label="Name"
      status="warning"
      statusMessage="This is not a strong password"
    />
    <Select
      label="Name"
      status="error"
      statusMessage="This email address is already in use"
    />
  </Stack>
);
