import React, { FC } from 'react';

import {
  Input as RebassInput,
  Label,
  InputProps as RebassInputProps,
} from '@rebass/forms/styled-components';
import { pick, omit } from '@styled-system/props';
import { Box, BoxProps } from 'rebass/styled-components';

import { status, StatusMessage } from '~/components';
import { useId } from '~/hooks';

interface InputProps extends RebassInputProps, BoxProps {
  statusMessage?: string;
  label?: string;
  status?: status;
  // html props
  disabled?: boolean;
  id?: string;
}

const Input: FC<InputProps> = ({
  label,
  status,
  statusMessage,
  id: givenId,
  ...props
}) => {
  const autoId = useId();
  const id = givenId || `checkbox-${autoId}`;

  return (
    <Box {...pick(props)}>
      {label && (
        <Label mb={1} htmlFor={id}>
          {label}
        </Label>
      )}
      <RebassInput id={id} {...omit(props)} />
      {!!statusMessage && (
        <StatusMessage status={status}>{statusMessage}</StatusMessage>
      )}
    </Box>
  );
};

export default Input;
