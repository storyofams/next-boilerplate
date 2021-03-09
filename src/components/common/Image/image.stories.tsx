import { Stack } from '@storyofams/react-ui';
import { Box } from '@storyofams/react-ui';

import { Image, ImageProps } from '~components';

export default {
  component: Image,
  title: 'components/Image',
  args: {
    src: 'https://placekitten.com/200/300',
    width: [200, 500],
    height: 500,
  } as ImageProps,
};

export const Basic = (args) => (
  <Stack space={3} flexDirection="column">
    <Box>
      <Image {...args} />
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
          width="80px"
          height="100%"
          src="https://res.cloudinary.com/demo/image/upload/w_1500/woman.png"
          placeholder="https://res.cloudinary.com/demo/image/upload/w_20/woman.png"
        />
      ))}
    </Stack>
  </Box>
);
