import React, { FC } from 'react';
import {
  Label,
  Radio as RebassRadio,
  CheckboxProps as RebassCheckboxProps,
} from '@rebass/forms/styled-components';
import { omit, pick } from '@styled-system/props';
import { Box, BoxProps } from 'rebass/styled-components';

import { useId } from '~/hooks';
export interface RadioProps extends RebassCheckboxProps, BoxProps {
  id?: string;
  value: string;
}
export const Radio: FC<RadioProps> = ({
  children,
  id: initialId,
  ...props
}) => {
  const autoId = useId();
  const id = initialId || `radio=${autoId}`;

  return (
    <Box {...pick(props)}>
      <Label htmlFor={id}>
        <RebassRadio {...omit(props)} type="radio" id={id} />
        {children}
      </Label>
    </Box>
  );
};

export default Radio;
