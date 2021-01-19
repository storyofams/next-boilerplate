import React from 'react';

import { Box, Text } from '~/components';

export default {
  component: Text,
  title: 'components/Text',
};

export const Headings = (args) => <Text {...args} />;
Headings.args = {
  variant: 'h1',
  children: 'Heading',
};
Headings.argTypes = {
  variant: {
    control: { type: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5'] },
  },
};

export const Paragraphs = (args) => <Text {...args} />;
Paragraphs.args = {
  variant: 'pxl',
  children: 'Paragraph',
};
Paragraphs.argTypes = {
  variant: {
    control: { type: 'select', options: ['pxl', 'pl', 'pm', 'psm', 'pxs'] },
  },
};

export const asProp = (args) => <Text {...args} />;
asProp.args = {
  as: '',
  children: 'As Text',
};
asProp.argTypes = {
  as: {
    control: {
      type: 'select',
      options: [
        'h1',
        'i',
        'u',
        'abbr',
        'cite',
        'del',
        'em',
        'ins',
        'kbd',
        'mark',
        's',
        'samp',
        'sub',
        'sup',
      ],
    },
  },
};

export const Ellipsis = (args) => (
  <Box
    m={4}
    p={2}
    borderRadius="xs"
    width="200px"
    border="1px solid"
    borderColor="secondary400"
  >
    <Text maxW="100%" {...args}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
      impedit laudantium porro dolores, laboriosam laborum corrupti sapiente
      alias nulla possimus maiores mollitia harum temporibus, delectus eveniet
      repudiandae ab quos tempora omnis modi voluptatum non? Reprehenderit
      assumenda iusto nemo ducimus cumque iure facere minima. Accusantium, rem
      qui deleniti debitis nihil numquam.
    </Text>
  </Box>
);
Ellipsis.args = {
  ellipsis: true,
};
