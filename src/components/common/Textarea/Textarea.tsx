import React, { FC } from 'react';

import {
  Textarea as RebassTextarea,
  Label,
  TextareaProps as RebassTextareaProps,
} from '@rebass/forms/styled-components';
import { pick, omit } from '@styled-system/props';
import { Box, BoxProps } from 'rebass/styled-components';

import { status, StatusMessage } from '~/components';
import { useId } from '~/hooks';

interface TextareaProps extends RebassTextareaProps, BoxProps {
  statusMessage?: string;
  label?: string;
  status?: status;
  // html props
  disabled?: boolean;
  id?: string;
}

const Textarea: FC<TextareaProps> = ({
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
      <RebassTextarea id={id} {...omit(props)} />
      {!!statusMessage && (
        <StatusMessage mt="1/2" status={status}>
          {statusMessage}
        </StatusMessage>
      )}
    </Box>
  );
};

export default Textarea;
