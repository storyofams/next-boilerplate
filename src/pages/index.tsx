import { NextSeo } from 'next-seo';
import { Flex, Heading, Text } from 'rebass/styled-components';

const Home = () => (
  <div>
    <NextSeo title="Home" description="This is a Home page" />
    <Flex bg="grey100" p={2} width="100%" height="100vh" variant="center">
      <Flex
        bg="grey800"
        minHeight="50vh"
        minWidth="50%"
        variant="center"
        sx={{ borderRadius: 'lg', boxShadow: 'sm' }}
      >
        <Heading textAlign="center" px={3} py={4} variant="h2" color="white">
          What will your Story be
          <Text display="inline-block" color="primary500">
            ?
          </Text>
        </Heading>
      </Flex>
    </Flex>
  </div>
);

export default Home;
