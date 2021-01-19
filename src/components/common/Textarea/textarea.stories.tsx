import React from 'react';

import { Textarea } from '~/components';

export default {
  component: Textarea,
  title: 'components/Textarea',
  args: {
    placeholder: 'Placeholder',
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

export const Basic = (args) => <Textarea {...args} />;
