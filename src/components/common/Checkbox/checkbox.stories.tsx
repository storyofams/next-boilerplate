import React from 'react';

import { Checkbox } from '~/components';

export default {
  component: Checkbox,
  title: 'components/Checkbox',
  args: {
    checked: false,
    label: 'editable label text',
    statusMessage: 'editable status text',
    status: 'error',
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

export const Basic = (args) => <Checkbox {...args} />;
