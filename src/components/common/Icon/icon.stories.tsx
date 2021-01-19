import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box, Flex, Text } from 'rebass/styled-components';

import { Icon } from '~/components';

const allIcons = (require as any)
  .context('./library', false, /\.svg$/)
  .keys()
  .map((k) => k.replace('./', '').replace('.svg', ''));

export default {
  component: Icon,
  title: 'components/Icon',
  args: {
    icon: 'heart',
  },
  argTypes: {
    icon: { control: { type: 'select', options: allIcons } },
  },
};

export const Library = (args) => (
  <Box>
    <h1>
      To add an icon simply drop the svg file in ./library and change the
      stroke/fill to "currentColor".
    </h1>
    <Box mt={2} maxWidth="320px">
      <Flex
        py={2}
        justifyContent="center"
        alignItems="center"
        sx={{ borderBottom: '1px solid #D9D9D9' }}
      >
        <Box width="75%">Name</Box>
        <Box width="25%">Icon</Box>
      </Flex>
      {allIcons.map((name: string) => (
        <Flex
          justifyContent="center"
          alignItems="center"
          sx={{ borderBottom: '1px solid #D9D9D9' }}
          key={name}
          py={2}
        >
          <Box width="75%">
            <Text mr={5} fontSize={2} lineHeight="normal">
              {name}
            </Text>
          </Box>
          <Flex width="25%">
            <Icon icon={name} color="grey800" fontSize={4} />
          </Flex>
        </Flex>
      ))}
    </Box>
  </Box>
);

const commonProps = {
  color: 'secondary500' as any,
  icon: 'heart',
  fontSize: 8 as any,
};
// different semantics
export const AsButton = (args) => (
  <Icon {...commonProps} {...args} onClick={action('clicked')} />
);

export const AsATag = (args) => (
  <Icon {...commonProps} {...args} href="https://www.example.com" />
);

export const AsH1 = (args) => <Icon {...commonProps} {...args} as="h1" />;
