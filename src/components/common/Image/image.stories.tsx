import React from 'react';

import { Box, Image, Stack } from '~/components';

export default {
  component: Image,
  title: 'Image',
  args: {
    objectFit: 'contain',
    objectPosition: '0% 0%',
    height: 'auto',
    width: 'auto',
  },
};

export const Basic = (args) => (
  <Stack space={3} flexDir="column" p={4}>
    <Box>
      <Image {...args} src="http://placekitten.com/200/300" />
    </Box>
  </Stack>
);

//@ts-ginore
const array = [...Object(Array(300)).keys()];

export const LazyLoadStressTest = (args) => (
  <Box p={4}>
    <h1>
      The dimensions must be specified for this to work. So either height+width,
      flex-basis etc.. or a placeholder with the same dimensions
    </h1>
    <Stack space={3} flexDir="column" mt={4}>
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
