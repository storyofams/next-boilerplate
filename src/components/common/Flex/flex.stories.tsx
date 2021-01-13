import React from 'react';

import { Box, Flex, Stack } from '~/components';
import theme from '~/styles/theme';

export default {
  component: Flex,
  title: 'components/Flex',
  argTypes: {
    borderRadius: { control: { type: 'select', options: theme.radii } },
    borderColor: { control: { type: 'select', options: theme.colors } },
  },
};

export const Basic = (args) => (
  <Stack space={3} p={4}>
    <Box {...args} />
    <Box {...args} />
    <Box {...args} />
    <Box {...args} />
    <Box {...args} />
  </Stack>
);

Basic.args = {
  size: '50px',
  border: '1px solid',
  borderColor: 'secondary400',
  borderRadius: 'xs',
};

export const Center = (args) => (
  <Flex m={4} variant="center" {...args}>
    <Box size="50px" bg="primary500" borderRadius="xs" />
  </Flex>
);

Center.args = {
  size: '200px',
  border: '1px solid',
  borderColor: 'secondary400',
  borderRadius: 'xs',
};
