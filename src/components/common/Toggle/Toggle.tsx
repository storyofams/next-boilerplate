import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass/styled-components';

const styles = {
  position: 'relative',
  display: 'inline-block',
  width: '52px',
  height: '32px',
  '& > input': { opacity: 0, width: '0', height: '0' },
  '& > .slider': {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'grey300',
    border: '1px',
    borderColor: 'grey300',
    transition: ['0.4s', 'background-color 0.18s, border-color 0.18s'],
    borderRadius: '34px',
  },
  '& > .slider:before': {
    position: 'absolute',
    content: "''",
    height: '24px',
    width: '24px',
    left: '3px',
    bottom: '3px',
    backgroundColor: 'white',
    transition: ['0.2s', 'left 0.18s, right 0.18s'],
    borderRadius: '50%',
  },
  '& > input:checked': {
    '& + .slider': {
      backgroundColor: 'primary500',
      border: '1px',
      borderColor: 'primary500',
    },
    '& + .slider:before': { left: 'unset', right: '4px' },
  },
  '& > input:focus + .slider': { border: '1px', borderColor: 'primary500' },
  '& > input:disabled + .slider': { cursor: 'not-allowed', opacity: 0.5 },
};
export interface ToggleProps extends Omit<BoxProps, 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  onChange?(isToggled: boolean): void;
}

export const Toggle: FC<ToggleProps> = ({
  checked,
  disabled,
  onChange,
  ...props
}) => {
  return (
    <Box sx={styles} as="label" {...props}>
      <input
        onChange={(e) => onChange(e.target.checked)}
        checked={checked}
        disabled={disabled}
        type="checkbox"
      />
      <span className="slider" />
    </Box>
  );
};

export default Toggle;
