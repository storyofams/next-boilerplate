import React, { Children, cloneElement } from 'react';
import { Box } from '@/components';
import { ISystem } from '@/lib';

interface RadioElement {
  onChange?: any;
  value: string;
  checked?: boolean;
}

export interface IRadioGroup extends ISystem {
  value?: string | number;
  onChange: (value: string) => void;
}

export const RadioGroup: React.FC<IRadioGroup> = ({
  children,
  value,
  onChange,
  ...props
}) => {
  const clones = Children.map(children, child => {
    if (!React.isValidElement<RadioElement>(child)) {
      return child;
    }
    return cloneElement(child, {
      onChange: e => onChange(e.target.value),
      checked: child.props.value === value,
    });
  });

  return (
    <Box role="radiogroup" {...props}>
      {clones}
    </Box>
  );
};

export default RadioGroup;
