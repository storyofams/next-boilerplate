import React, { FC } from 'react';
import Alert from '@reach/alert';
import { Text, BoxProps, TextProps } from 'rebass/styled-components';

export type status = 'default' | 'success' | 'warning' | 'error';

interface StatusMessageProps extends BoxProps, TextProps {
  status: status | Boolean;
  type?: 'polite' | 'assertive';
}
// this component alerts screen readers when its rendered.
// should be used together with a formfield + react-hook-form

export const StatusMessage: FC<StatusMessageProps> = ({
  status,
  type,
  children,
  ...props
}) => {
  return (
    <Text
      color={status !== 'default' && status ? `${status}500` : `grey900`}
      fontSize={2}
      fontWeight="medium"
      mt="1/4"
      {...props}
    >
      <Alert type={type}>{children}</Alert>
    </Text>
  );
};
