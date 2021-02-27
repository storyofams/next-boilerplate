import { NextSeo } from 'next-seo';
import { Heading, Box } from 'rebass/styled-components';
import { Background } from '~components/home';

const Home = () => (
  <>
    <NextSeo title="Home" description="What will your Story be?" />
    <Background />
    <Box pt="50vh" sx={{ position: 'relative' }}>
      <Heading
        fontSize={[6, 9]}
        color="white"
        textAlign="center"
        sx={{ transform: 'translateY(-50%)' }}
      >
        What will your Story be?
      </Heading>
    </Box>
  </>
);

export default Home;
