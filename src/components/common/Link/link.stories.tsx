import React from 'react';
import { Link, Stack } from '~/components';
import theme from '~/styles/theme';

export default {
  component: Link,
  title: 'components/Link',
  args: {
    bg: theme.colors.success100,
    href: '/',
  },
  argTypes: {
    bg: { control: { type: 'select', options: theme.colors } },
  },
};

export const Basic = (args) => {
  return (
    <Stack space={3} sx={{ alignItems: 'center' }}>
      <Link p={2} {...args}>
        Link
      </Link>
    </Stack>
  );
};
