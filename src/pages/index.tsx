import { Heading, Box } from '@storyofams/react-ui';
import { NextSeo } from 'next-seo';
import { Background } from '~components/home';

const Home = () => (
  <>
    <NextSeo title="Home" description="What will your Story be?" />
    <Background />
    <Box pt="50vh" position="relative">
      <Heading
        variant="h2"
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
