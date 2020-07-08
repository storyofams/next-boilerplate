import styled from 'styled-components'
import {system, ISystem} from '@/lib'

const CheckboxInput = styled.input.attrs({
  type: 'checkbox',
})<ISystem>`
  appearance: none;
  border-radius: ${p => p.theme.radii.sm};
  width: 16px;
  min-width: 16px;
  height: 16px;
  border: 1px solid ${p => p.theme.colors.grey200};
  position: relative;
  background-color: ${p => p.theme.colors.white};

  &:hover {
    border: 1px solid ${p => p.theme.colors.grey300};
  }

  &:checked {
    background-color: ${p => p.theme.colors.primary500};
    &:after {
      content: '';
      top: 2px;
      left: 4px;
      position: absolute;
      width: 5px;
      height: 8px;
      border-right: 2px solid;
      border-bottom: 2px solid;
      border-color: ${p => p.theme.colors.white};
      transform: rotate(40deg);
      transition: border-color 0.15s;
    }
  }

  &:after {
    border-color: transparent;
  }

  ${system}
`

export default CheckboxInput
