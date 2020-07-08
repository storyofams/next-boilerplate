import React from 'react'
import styled from 'styled-components'
import {pick, omit} from '@styled-system/props'
import {system, ISystem} from '@/lib'
import {useId} from '@/hooks'

const Wrapper = styled.div<ISystem>`
  font-size: ${p => p.theme.fontSizes[2]};
  color: ${p => p.theme.colors.grey800};
  ${system}

  input[type='radio'] {
    opacity: 0;
    width: 22px;

    + label {
      position: relative;

      &::before {
        background: #fff;
        border-radius: 50%;
        border: 1px solid ${p => p.theme.colors.grey200};
        content: '';
        position: absolute;
        left: -22px; /* This will be adjusted */
        width: 16px;
        height: 16px;
        top: 0px;
        transition: border-color 0.18s;
      }
      &::after {
        content: '';
        position: absolute;
        left: -17px;
        top: 5px;
        border-radius: 50%;
        width: 6px;
        height: 6px;
      }
    }

    &:checked {
      + label::after {
        background: #fff;
      }
      + label::before {
        background: ${p => p.theme.colors.primary500};
        border-color: ${p => p.theme.colors.primary500};
      }
    }
    &:hover {
      + label::before {
        border-color: ${p => p.theme.colors.grey300};
      }
    }
  }
`

export interface IRadio {
  id?: string
  value: string
}
export const Radio: React.FC<IRadio> = ({children, id: initialId, ...props}) => {
  const autoId = useId()
  const id = initialId || `radio=${autoId}`

  return (
    <Wrapper {...pick(props)}>
      <input {...omit(props)} type="radio" id={id} />
      <label htmlFor={id}>{children}</label>
    </Wrapper>
  )
}

export default Radio
