import { NextSeo } from 'next-seo';
import { Button, Flex, Link, Text } from 'rebass/styled-components';

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
      <Flex
        height="100vh"
        backgroundColor="black"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text fontFamily="mono" fontSize={9} color="white">
          {statusCode}
        </Text>
        <Text color="white">{content}</Text>
        <Link href="/">
          <Button mt={3}>Take me home</Button>
        </Link>
      </Flex>
    </>
  );
};

Error.getInitialProps = ({ res, err }) => getError({ res, err });

export default Error;
