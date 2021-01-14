import React from 'react';
import { Link, Stack } from '~/components';

export default {
  component: Link,
  title: 'Link',
};

export const Basic = () => {
  return (
    <Stack sx={{ alignItems: 'center' }} p={4} mb={5} space={3}>
      <Link p={5} bg="success100" href="/">
        Link
      </Link>
      <Link href="/" target="_blank">
        Link
      </Link>
    </Stack>
  );
};
