import React from 'react';
import { NextSeo } from 'next-seo';
import { Flex, Text } from 'rebass/styled-components';

const Home = () => (
  <div>
    <NextSeo title="Home" description="What will your Story be?" />
    <Flex
      bg="black"
      p={1}
      width="100%"
      height="100vh"
      flexWrap="wrap"
      alignContent="start"
      justifyContent="space-evenly"
      overflow="hidden"
      sx={{
        '&:after': {
          content: "''",
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: 'radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,1))',
        },
      }}
    >
      {[...Array(5000)].map((_, i) => (
        <Text
          color="grey800"
          fontWeight="bold"
          fontSize="7"
          lineHeight="normal"
          width="32px"
          textAlign="center"
        >
          ×
        </Text>
      ))}
    </Flex>
  </div>
);

export default Home;
