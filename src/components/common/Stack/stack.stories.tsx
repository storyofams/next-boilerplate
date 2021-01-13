import React from 'react';

import { Box, Stack } from '~/components';
import theme from '~/styles/theme';

export default {
  component: Stack,
  title: 'components/Stack',
  args: {
    borderRadius: 'xs',
    size: '40px',
    bg: 'primary500',
  },
  argTypes: {
    bg: { control: { type: 'select', options: theme.colors } },
    borderRadius: { control: { type: 'select', options: theme.radii } },
  },
};

export const Basic = (args) => (
  <Box p={5}>
    <h1>
      Stack is a layout utility that adds space on one side which in turn
      creates a stack.
    </h1>
    <Stack space={3} mt={4}>
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
    </Stack>
  </Box>
);

export const Responsive = (args) => (
  <Box p={4}>
    <Stack flexDir={args.flexDirTop} space={[1, 2, 3]}>
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
    </Stack>
    <Stack mt={3} space={3} flexDir={args.flexDirMiddle}>
      <Box borderRadius="xs" size="40px" bg="secondary400" />
      <Box borderRadius="xs" size="40px" bg="secondary400" />
      <Box borderRadius="xs" size="40px" bg="secondary400" />
      <Box borderRadius="xs" size="40px" bg="secondary400" />
    </Stack>
    <Stack mt={3} space={3} flexDir={args.flexDirBottom}>
      <Box borderRadius="xs" size="40px" bg="secondary500" />
      <Box borderRadius="xs" size="40px" bg="secondary500" />
      <Box borderRadius="xs" size="40px" bg="secondary500" />
      <Box borderRadius="xs" size="40px" bg="secondary500" />
    </Stack>
  </Box>
);

Responsive.args = {
  flexDirTop: ['row', 'column'],
  flexDirMiddle: ['row', 'column', 'row'],
  flexDirBottom: ['column', 'row'],
};

export const OverwritingMargin = (args) => (
  <Stack p={4} space={[0, 5, 9]}>
    <Box {...args} mt={args.mtFirstItem} />
    <Box mt={5} mr={5} {...args} />
    <Box {...args} />
  </Stack>
);

OverwritingMargin.args = {
  mtFirstItem: 5,
  mr: 5,
};
