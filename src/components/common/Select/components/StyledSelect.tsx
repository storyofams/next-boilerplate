import React, { useContext } from 'react';
import ReactSelect, { Props } from 'react-select';
import { system, ISystem } from '@/lib';
import styled, { css, ThemeContext } from 'styled-components';

const StyledSelect = styled(ReactSelect).attrs({
  className: 'react-select',
  classNamePrefix: 'react-select',
})<ISystem>(
  ({ styledTheme: theme }) => css`
    ${system}

    font-size: 14px;
    .react-select {
      &__placeholder {
        color: ${theme.colors.grey200};
      }
      &__control {
        transition: border-color 0.18s ease;
        border-radius: ${theme.radii.md};
        box-shadow: none;
        border-color: ${theme.colors.grey200};
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
    }
  `,
);

export interface ISelect extends Props {
  theme?: any;
}

export const Select: React.FC<ISelect> = props => {
  const styledTheme = useContext(ThemeContext); // react-select and styled-components both need a theme so it needs to be renamed

  return (
    <StyledSelect
      styledTheme={styledTheme}
      theme={t => ({
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
