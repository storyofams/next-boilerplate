import React from 'react';

import { Flex, Spinner } from '~/components';
import theme from '~/styles/theme';

export default {
  component: Spinner,
  title: 'components/Spinner',
  args: {
    size: 40,
    color: 'primary500',
  },
  argTypes: {
    color: { control: { type: 'select', options: Object.keys(theme.colors) } },
  },
};

export const Basic = (args) => (
  <Flex p={4}>
    <Spinner {...args} />
  </Flex>
);
