import React, { Children, cloneElement, FC, isValidElement } from 'react';

import { Stack } from '~/components';
import { SystemProps } from '~/lib';

interface RadioElement {
  onChange?: any;
  value: string;
  checked?: boolean;
}

export interface RadioGroupProps extends SystemProps {
  value?: string | number;
  onChange: (value: string) => void;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  children,
  value,
  onChange,
  ...props
}) => {
  const clones = Children.map(children, (child) => {
    if (!isValidElement<RadioElement>(child)) {
      return child;
    }
    return cloneElement(child, {
      onChange: (e) => onChange(e.target.value),
      checked: child.props.value === value,
    });
  });

  return (
    <Stack flexDir="column" space={1} role="radiogroup" {...props}>
      {clones}
    </Stack>
  );
};

export default RadioGroup;
