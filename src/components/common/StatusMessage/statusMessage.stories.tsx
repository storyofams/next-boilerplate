import React from 'react';

import { Box, StatusMessage } from '~/components';

export default {
  component: StatusMessage,
  title: 'components/StatusMessage',
  args: {
    children: 'editable status text',
    status: 'default',
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
  <Box p={4} maxWidth="270px" flexDirection="column">
    <StatusMessage {...args} />
  </Box>
);
