import React, { FC } from 'react';
import { omit, pick } from '@styled-system/props';
import styled from 'styled-components';

import { useId } from '~/hooks';
import { SystemProps, system } from '~/lib';

const Wrapper = styled.div<SystemProps>`
  input[type='radio'] {
    width: 16px;
    height: 16px;
    box-shadow: inset 0 0 0 5px #fff;
    background-color: #fff;
    padding: 0;
    border: 1px solid ${(p) => p.theme.colors.grey200};
    outline: none;
    vertical-align: middle;
    appearance: none;
    border-radius: ${(p) => p.theme.radii.full};
    transition: border 0.18s ease-in-out, box-shadow 0.18s ease-in-out;
    margin-right: ${(p) => p.theme.space[1]}px;

    &:checked {
      border: 1px solid ${(p) => p.theme.colors.primary500};
      box-shadow: inset 0 0 0 4px ${(p) => p.theme.colors.primary500};
    }

    &:hover {
      border: 1px solid ${(p) => p.theme.colors.grey200};
      box-shadow: inset 0 0 0 4px ${(p) => p.theme.colors.primary500};
    }
  }

  label {
    font-size: ${(p) => p.theme.fontSizes[2]};
    color: ${(p) => p.theme.colors.grey900};

    /* leave font-size 16px for consistency sake, IOS browsers zoom in on inputs if they are below 16px */
    @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
      font-size: ${(p) => p.theme.fontSizes[3]};
    }
  }

  ${system}
`;

export interface RadioProps {
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
    <Wrapper {...pick(props)}>
      <input {...omit(props)} type="radio" id={id} />
      <label htmlFor={id}>{children}</label>
    </Wrapper>
  );
};

export default Radio;
