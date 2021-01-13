import React from 'react';

import { Select, Stack } from '~/components';

const options = [
  { value: '1', label: '0 - 9' },
  { value: '2', label: '10 - 14' },
  { value: '3', label: '15+' },
];

export default {
  component: Select,
  title: 'components/Select',
  args: {
    isSearchable: false,
    isDisabled: false,
    options,
    placeholder: 'Placeholder',
    value: { value: '1', label: '0 - 9' },
    label: 'Label',
    status: 'success',
    statusMessage: 'Status text',
  },
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['default', 'success', 'warning', 'error'],
      },
    },
  },
};

export const Basic = (args) => (
  <Stack maxW="340px" flexDir="column" space={3} p={4}>
    <Select {...args} />
  </Stack>
);
