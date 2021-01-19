import React, { forwardRef } from 'react';

import {
  Input as RebassInput,
  InputProps as RebassInputProps,
} from '@rebass/forms/styled-components';
import { pick, omit } from '@styled-system/props';

import { InputWrapper, InputWrapperProps } from '~/components';
import { useId } from '~/hooks';

export const Input = forwardRef<RebassInputProps, InputWrapperProps>(
  ({ label, status, statusMessage, error, id: givenId, ...props }, ref) => {
    const autoId = useId();
    const id = givenId || `input-${autoId}`;

    return (
      <InputWrapper
        id={id}
        label={label}
        status={status}
        statusMessage={statusMessage}
        error={error}
        {...pick(props)}
      >
        <RebassInput id={id} ref={ref} {...omit(props)} />
      </InputWrapper>
    );
  },
);

export default Input;
