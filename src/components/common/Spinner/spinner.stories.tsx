import React from 'react';
import { Spinner } from '~/components';

export default {
  component: Spinner,
  title: 'Spinner',
};

export const Basic = () => <Spinner />;
export const Custom = () => <Spinner fontSize="100px" color="error500" />;
