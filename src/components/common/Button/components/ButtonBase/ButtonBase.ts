import styled from 'styled-components';
import { variant } from 'styled-system';

import { SystemProps, system } from '~/lib';

export interface ButtonProps extends SystemProps {
  variant?: 'primary' | 'secondary' | 'underline';
}

const ButtonBase = styled.button<ButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: inherit;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  padding: ${(p) => p.theme.space[1]}px ${(p) => p.theme.space[2]}px;
  border-radius: ${(p) => p.theme.radii.xs};
  background-color: ${(p) => p.theme.colors.transparent};
  cursor: pointer;
  user-select: none;
  transition: background-color 0.18s, box-shadow 0.18s, border-color 0.18s,
    color 0.18s;

  &:hover {
    color: ${(p) => p.theme.colors.grey700};
  }

  ${variant({
    variants: {
      primary: {
        color: 'grey900',
        bg: 'primary500',
        borderColor: 'primary500',
        boxShadow: 'sm',
        '&:hover, &:active': {
          color: 'grey900',
          bg: 'primary400',
          borderColor: 'primary400',
        },
      },
      secondary: {
        color: 'white',
        bg: 'secondary500',
        borderColor: 'secondary500',
        boxShadow: 'sm',
        '&:hover, &:active': {
          color: 'white',
          bg: 'secondary400',
          borderColor: 'secondary400',
        },
      },
      underline: {
        px: 0,
        pt: 0,
        pb: 1,
        color: 'grey900',
        bg: 'transparent',
        borderColor: 'transparent',
        '&::before': {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          bg: 'primary500',
        },
        '&:hover, &:active': {
          color: 'grey900',
          '&::before': {
            bg: 'secondary400',
          },
        },
      },
    },
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:active {
    box-shadow: none;
  }

  &[data-is-loading] {
    cursor: wait;
  }

  ${(p) =>
    p.variant === 'underline' &&
    `
    &::before {
      content: '';
      transition: background-color 0.2s;
    }
  `}

  ${system}
`;

export default ButtonBase;
