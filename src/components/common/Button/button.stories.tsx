import React from 'react';
import { Stack } from '~/components';
import { PrimaryButton, SecondaryButton, UnderlineButton } from './Button';

export default {
  component: PrimaryButton,
  title: 'Button',
};

export const examples = () => (
  <Stack alignItems="center" space={3} flexDir="column">
    <PrimaryButton>Lorem Ipsum</PrimaryButton>
    <PrimaryButton isLoading>Lorem Ipsum</PrimaryButton>
    <PrimaryButton disabled>Lorem Ipsum</PrimaryButton>
    <SecondaryButton>Lorem Ipsum</SecondaryButton>
    <SecondaryButton isLoading>Lorem Ipsum</SecondaryButton>
    <SecondaryButton width="100%">Lorem Ipsum</SecondaryButton>
    <UnderlineButton>Lorem Ipsum</UnderlineButton>
  </Stack>
);
