import React from 'react';

import { Box } from '~/components';
import theme from '~/styles/theme';

export default {
  component: Box,
  title: 'components/Box',
  args: {
    bg: 'black',
    shadow: null,
    borderRadius: 0,
    border: theme.borders.none,
    d: 'flex',
    w: 100,
    h: 100,
  },
  argTypes: {
    bg: { control: { type: 'select', options: theme.colors } },
    borderRadius: { control: { type: 'select', options: theme.radii } },
    shadow: { control: { type: 'select', options: theme.shadows } },
    border: { control: { type: 'select', options: theme.borders } },
  },
};

export const Basic = (args) => (
  <Box p={4} d="flex">
    <Box {...args} />
  </Box>
);
