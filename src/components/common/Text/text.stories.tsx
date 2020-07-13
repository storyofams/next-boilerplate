import React from 'react';
import { Box } from '@/components';
import Text from './Text';

export default {
  component: Text,
  title: 'Text',
};

export const asProp = () => (
  <Box p={5}>
    <Text as="h1">Title</Text>
    <br />
    <Text>Body Text</Text>
    <br />
    <Text as="i">Italic</Text>
    <br />
    <Text as="u">Underline</Text>
    <br />
    <Text as="abbr">I18N</Text>
    <br />
    <Text as="cite">Citation</Text>
    <br />
    <Text as="del">Deleted</Text>
    <br />
    <Text as="em">Emphasis</Text>
    <br />
    <Text as="ins">Inserted</Text>
    <br />
    <Text as="kbd">Ctrl + C</Text>
    <br />
    <Text as="mark">Highlighted</Text>
    <br />
    <Text as="s">Strikethrough</Text>
    <br />
    <Text as="samp">Sample</Text>
    <br />
    <Text as="sub">sub</Text>
    <br />
    <Text as="sup">sup</Text>
  </Box>
);

export const variantEllipsis = () => (
  <Box m={5} w="200px" border="1px solid red">
    <Text maxW="100%" variant="ellipsis">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
      impedit laudantium porro dolores, laboriosam laborum corrupti sapiente
      alias nulla possimus maiores mollitia harum temporibus, delectus eveniet
      repudiandae ab quos tempora omnis modi voluptatum non? Reprehenderit
      assumenda iusto nemo ducimus cumque iure facere minima. Accusantium, rem
      qui deleniti debitis nihil numquam.
    </Text>
  </Box>
);
