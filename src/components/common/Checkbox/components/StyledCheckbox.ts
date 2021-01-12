import styled from 'styled-components';

import { SystemProps, system } from '~/lib';

const CheckboxInput = styled.input.attrs({
  type: 'checkbox',
})<SystemProps>`
  position: relative;
  appearance: none;
  width: 16px;
  min-width: 16px;
  height: 16px;
  background-color: ${(p) => p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors.grey200};
  border-radius: ${(p) => p.theme.radii.xs};

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.grey300};
  }

  &:checked {
    background-color: ${(p) => p.theme.colors.primary500};

    &:after {
      content: '';
      top: 2px;
      left: 4px;
      position: absolute;
      width: 5px;
      height: 8px;
      border-right: 2px solid;
      border-bottom: 2px solid;
      border-color: ${(p) => p.theme.colors.white};
      transform: rotate(40deg);
      transition: border-color 0.15s;
    }
  }

  &:after {
    border-color: transparent;
  }

  /* leave font-size 16px for consistency sake, IOS browsers zoom in on inputs if they are below 16px */
  @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
    & + label {
      font-size: ${(p) => p.theme.fontSizes[3]};
    }
  }

  ${system}
`;

export default CheckboxInput;
