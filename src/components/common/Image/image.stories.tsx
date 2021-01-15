import React from 'react';
import { Box } from 'rebass/styled-components';

import { Image, Stack } from '~/components';

export default {
  component: Image,
  title: 'components/Image',
  args: {
    objectFit: 'contain',
    objectPosition: '0% 0%',
    height: 'auto',
    width: 'auto',
  },
};

export const Basic = (args) => (
  <Stack space={3} flexDirection="column">
    <Box>
      <Image {...args} src="http://placekitten.com/200/300" />
    </Box>
  </Stack>
);

const array = [...Object(Array(300)).keys()];

export const LazyLoadStressTest = (args) => (
  <Box>
    <h1>
      The dimensions must be specified for this to work. So either height+width,
      flex-basis etc.. or a placeholder with the same dimensions
    </h1>
    <Stack space={3} flexDirection="column" mt={2}>
      {array.map((i) => (
        <Image
          key={i}
          size="80px"
          src="https://res.cloudinary.com/demo/image/upload/w_1500/woman.png"
          placeholder="https://res.cloudinary.com/demo/image/upload/w_20/woman.png"
        />
      ))}
    </Stack>
  </Box>
);
