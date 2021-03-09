import { Button, Box, Flex, Heading, Text } from '@storyofams/react-ui';
import { NextSeo } from 'next-seo';

import { Background } from '~components/home/background';

const getError = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

const getContent = ({ statusCode }) => {
  switch (statusCode) {
    case 401:
      return "It looks like you're not supposed to be here 👀";
    case 404:
      return 'We could not find the page you were looking for 🛰';
    case 500:
      return 'Our server had some trouble processing that request 🔥';
    default:
      return "Even we don't know what happened 🤯";
  }
};

const Error = ({ statusCode }) => {
  const content = getContent({ statusCode });

  return (
    <>
      <NextSeo title={statusCode} description={content} />
      <Background />
      <Box pt={'50vh' as any} position="relative">
        <Flex
          variant="center"
          flexDirection="column"
          transform="translateY(-50%)"
        >
          <Heading fontFamily="mono" fontSize={8} color="white">
            {statusCode}
          </Heading>
          <Text color="white">{content}</Text>
          <Button as="a" variant="link" to="/" mt={2} color="white">
            Take me home
          </Button>
        </Flex>
      </Box>
    </>
  );
};

Error.getInitialProps = ({ res, err }) => getError({ res, err });

export default Error;
