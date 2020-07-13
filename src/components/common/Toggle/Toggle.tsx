import React from 'react';
import styled from 'styled-components';
import { system, ISystem } from '@/lib';

const Wrapper = styled.label<ISystem>`
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
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  > .slider:before {
    position: absolute;
    content: '';
    height: 28px;
    width: 28px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }

  > input:checked + .slider {
    background-color: ${p => p.theme.colors.primary500};
  }

  > input:focus + .slider {
    box-shadow: 0px 0px 0px 3px ${p => p.theme.colors.primaryAlpha40};
  }

  > input:checked + .slider:before {
    transform: translateX(19px);
  }

  ${system}
`;

export interface IToggle extends ISystem {
  checked?: boolean;
  onChange?(boolean): void;
}

export const Toggle: React.FC<IToggle> = ({ checked, onChange }) => {
  return (
    <Wrapper>
      <input
        onChange={e => onChange(e.target.checked)}
        checked={checked}
        type="checkbox"
      />
      <span className="slider" />
    </Wrapper>
  );
};

export default Toggle;
