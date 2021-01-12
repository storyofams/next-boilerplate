import React, { FC, useContext } from 'react';
import ReactSelect, { Props } from 'react-select';
import styled, { css, ThemeContext } from 'styled-components';

import { SystemProps, system } from '~/lib';

const StyledSelect = styled(ReactSelect).attrs({
  className: 'react-select',
  classNamePrefix: 'react-select',
})<SystemProps>(
  ({ styledTheme: theme }) => css`
    font-size: ${theme.fontSizes[2]};

    /* leave font-size 16px for consistency sake, IOS browsers zoom in on inputs if they are below 16px */
    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes[3]};
    }

    .react-select {
      &__placeholder {
        color: ${theme.colors.grey200};
      }

      &__control {
        transition: border-color 0.18s ease;
        border-radius: ${theme.radii.xs};
        border-color: ${theme.colors.grey200};
        box-shadow: none;

        &:hover {
          border-color: ${theme.colors.grey300};
        }

        &--menu-is-open {
          .react-select__dropdown-indicator {
            svg {
              transform: rotate(180deg);
            }
          }
        }

        &--is-disabled {
          background: ${theme.colors.grey200};

          .react-select__placeholder {
            color: ${theme.colors.grey700};
          }
        }
      }

      &__value-container {
        padding-left: 14px;
      }

      &__indicator-separator {
        display: none;
      }

      &__option {
        transition: border-color 0.18s ease, background-color 0.18s ease;
        color: ${theme.colors.grey900};

        &:hover {
          background-color: ${theme.colors.grey100};
        }

        &.option--is-selected {
          background-color: ${theme.colors.primary500};
        }
      }
    }

    ${system}
  `,
);

export interface SelectProps extends Props {
  theme?: any;
}

export const Select: FC<SelectProps> = (props) => {
  const styledTheme = useContext(ThemeContext); // react-select and styled-components both need a theme so it needs to be renamed

  return (
    <StyledSelect
      styledTheme={styledTheme}
      theme={(t) => ({
        ...t,
        colors: {
          ...t.colors,
          primary25: styledTheme.colors.primary500,
          primary50: styledTheme.colors.primary500,
          primary: styledTheme.colors.primary500,
        },
      })}
      {...props}
    />
  );
};

export default Select;
