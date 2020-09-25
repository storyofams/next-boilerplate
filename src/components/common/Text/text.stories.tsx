import React from 'react';

import { Box, Stack, Text } from '~/components';

export default {
  component: Text,
  title: 'Text',
};

export const Headings = () => (
  <Stack flexDir="column" space={3} p={4}>
    <Text variant="h1">h1: Heading 1</Text>
    <Text variant="h2">h2: Heading 2</Text>
    <Text variant="h3">h3: Heading 3</Text>
    <Text variant="h4">h4: Heading 4</Text>
    <Text variant="h5">h5: Heading 5</Text>
  </Stack>
);

export const Paragraphs = () => (
  <Stack flexDir="column" space={3} p={4}>
    <Text variant="pxl">pxl: Paragraph extra large</Text>
    <Text variant="pl">pl: Paragraph large</Text>
    <Text variant="pm">pm: Paragraph medium</Text>
    <Text variant="psm">psm: Paragraph small</Text>
    <Text variant="pxs">pxs: Paragraph extra small</Text>
  </Stack>
);

export const asProp = () => (
  <Stack flexDir="column" space={3} p={4}>
    <Text as="h1">Title</Text>
    <Text>Body Text</Text>
    <Text as="i">Italic</Text>
    <Text as="u">Underline</Text>
    <Text as="abbr">I18N</Text>
    <Text as="cite">Citation</Text>
    <Text as="del">Deleted</Text>
    <Text as="em">Emphasis</Text>
    <Text as="ins">Inserted</Text>
    <Text as="kbd">Ctrl + C</Text>
    <Text as="mark">Highlighted</Text>
    <Text as="s">Strikethrough</Text>
    <Text as="samp">Sample</Text>
    <Text as="sub">sub</Text>
    <Text as="sup">sup</Text>
  </Stack>
);

export const Ellipsis = () => (
  <Box
    m={4}
    p={2}
    borderRadius="xs"
    w="200px"
    border="1px solid"
    borderColor="secondary400"
  >
    <Text maxW="100%" ellipsis>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
      impedit laudantium porro dolores, laboriosam laborum corrupti sapiente
      alias nulla possimus maiores mollitia harum temporibus, delectus eveniet
      repudiandae ab quos tempora omnis modi voluptatum non? Reprehenderit
      assumenda iusto nemo ducimus cumque iure facere minima. Accusantium, rem
      qui deleniti debitis nihil numquam.
    </Text>
  </Box>
);
