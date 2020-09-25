import React, { FC } from 'react';
import styled from 'styled-components';

import { SystemProps, system } from '~/lib';

const Wrapper = styled.label<SystemProps>`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 32px;

  /* Hide default HTML checkbox */
  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  > .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(p) => p.theme.colors.grey300};
    transition: 0.4s;
    border-radius: 34px;
    transition: background-color 0.18s;
  }

  > .slider:before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
    transition: left 0.18s, right 0.18s;
  }

  > input:checked {
    & + .slider {
      background-color: ${(p) => p.theme.colors.primary500};
    }
    & + .slider:before {
      left: unset;
      right: 4px;
    }
  }

  > input:focus + .slider {
    box-shadow: 0px 0px 0px 2px ${(p) => p.theme.colors.grey100};
  }

  ${system}
`;

export interface ToggleProps extends SystemProps {
  checked?: boolean;
  onChange?(isToggled: boolean): void;
}

export const Toggle: FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <Wrapper>
      <input
        onChange={(e) => onChange(e.target.checked)}
        checked={checked}
        type="checkbox"
      />
      <span className="slider" />
    </Wrapper>
  );
};

export default Toggle;
