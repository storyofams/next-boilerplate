import React, { FC } from 'react';

import {
  Checkbox as RebassCheckbox,
  Label,
  CheckboxProps as RebassCheckboxProps,
} from '@rebass/forms/styled-components';
import { pick, omit } from '@styled-system/props';
import { Box, BoxProps } from 'rebass/styled-components';

import { status, StatusMessage } from '~/components';
import { useId } from '~/hooks';

interface CheckboxProps extends RebassCheckboxProps, BoxProps {
  statusMessage?: string;
  label?: string;
  status?: status;
  checked?: boolean;
  // html props
  disabled?: boolean;
  id?: string;
}

const Checkbox: FC<CheckboxProps> = ({
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
      <Label htmlFor={id}>
        <RebassCheckbox id={id} {...omit(props)} />
        {label}
      </Label>
      {!!statusMessage && (
        <StatusMessage status={status}>{statusMessage}</StatusMessage>
      )}
    </Box>
  );
};

export default Checkbox;
