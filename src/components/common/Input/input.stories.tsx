import React from 'react';

import { Input } from '~/components';

export default {
  component: Input,
  title: 'components/Input',
  args: {
    placeholder: 'Placeholder',
    value: 'Value',
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

export const Basic = (args) => <Input {...args} />;
