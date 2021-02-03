import { NextSeo } from 'next-seo';
import { Flex, Text, Heading, Box } from 'rebass/styled-components';

const cover = { top: 0, bottom: 0, left: 0, right: 0 };

const Home = () => (
  <>
    <NextSeo title="Home" description="What will your Story be?" />
    <Flex
      bg="black"
      flexWrap="wrap"
      alignContent="start"
      justifyContent="space-evenly"
      overflow="hidden"
      sx={{
        position: 'absolute',
        ...cover,
        '&:after': {
          content: "''",
          position: 'fixed',
          ...cover,
          background:
            'radial-gradient(circle at center bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8), rgba(0,0,0,0.9), rgba(0,0,0,1))',
        },
      }}
    >
      {[...Array(5000)].map((_, i) => (
        <Text
          key={i}
          color="grey800"
          fontWeight="bold"
          fontSize={7}
          lineHeight="normal"
          width="32px"
          textAlign="center"
        >
          ×
        </Text>
      ))}
    </Flex>
    <Box pt="50vh" sx={{ position: 'relative' }}>
      <Heading
        fontSize={9}
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
