import React, { FC } from 'react';
import { Label } from '@rebass/forms/styled-components';
import { pick, omit } from '@styled-system/props';
import { Props } from 'react-select';
import { Box, BoxProps } from 'rebass/styled-components';

import { StatusMessage } from '~/components';
import { useId } from '~/hooks';

import StyledSelect from './components/StyledSelect';

export type status = 'default' | 'success' | 'warning' | 'error';
export interface SelectProps
  extends Props,
    Omit<
      BoxProps,
      'defaultValue' | 'onBlur' | 'onFocus' | 'onKeyDown' | 'tabIndex' | 'value'
    > {
  status?: status;
  statusMessage?: string;
  label?: string;
  // html props
  // @todo figure out how to combine styled system with React.HTMLProps
  disabled?: boolean;
  onChange?: (val?) => any;
  placeholder?: string;
}

export const Select: FC<SelectProps> = ({
  status = false,
  statusMessage = false,
  label = false,
  id: givenId,
  ...props
}) => {
  const autoId = useId();
  const id = givenId || `select-${autoId}`;

  return (
    <Box {...pick(props)}>
      {label && (
        <Label htmlFor={id} mb={1} as="label">
          {label}
        </Label>
      )}
      <StyledSelect inputId={id} {...omit(props)} />

      {statusMessage && (
        <StatusMessage status={status}>{statusMessage}</StatusMessage>
      )}
    </Box>
  );
};

export default Select;
