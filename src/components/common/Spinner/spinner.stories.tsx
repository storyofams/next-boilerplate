import React from 'react';
import { Spinner } from '@/components';

export default {
  component: Spinner,
  title: 'Spinner',
};

export const Basic = () => <Spinner />;
export const Custom = () => (
  <Spinner stroke="8px" fontSize="100px" color="blue" />
);
