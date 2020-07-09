import React from 'react'
import {Props} from 'react-select'
import {ISystem} from '@/lib'
import {useId} from '@/hooks'
import StyledSelect from './components/StyledSelect'
import {Box} from '../Box'
import {Text} from '../Text'
import {StatusMessage} from '../StatusMessage'

export type status = 'default' | 'success' | 'warning' | 'error'

export interface ISelect extends ISystem, Props {
  status?: status
  statusMessage?: string
  label?: string
  // html props
  // @todo figure out how to combine styled system with React.HTMLProps
  disabled?: boolean
  onChange?: (val?) => any
  placeholder?: string
}

export const Select: React.FC<ISelect> = ({
  status = false,
  statusMessage = false,
  label = false,
  ...props
}) => {
  const id = useId()

  return (
    <Box>
      {label && (
        <Text htmlFor={`select-${id}`} mb={1} as="label">
          {label}
        </Text>
      )}
      <StyledSelect inputId={`select-${id}`} {...props} />

      {statusMessage && <StatusMessage status={status}>{statusMessage}</StatusMessage>}
    </Box>
  )
}

export default Select
