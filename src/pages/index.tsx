import { Heading, Box } from '@storyofams/react-ui';
import { NextSeo } from 'next-seo';
import { Background } from '~components/home';

const Home = () => (
  <>
    <NextSeo title="Home" description="What will your Story be?" />
    <Background />
    <Box pt={'50vh' as any} position="relative">
      <Heading
        fontSize={[6, 8]}
        color="white"
        textAlign="center"
        transform="translateY(-50%)"
      >
        What will your Story be?
      </Heading>
    </Box>
  </>
);

export default Home;
