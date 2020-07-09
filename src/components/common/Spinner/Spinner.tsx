import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Flex} from '../Flex'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Inner = styled.div<{stroke?: string}>`
  /* Spinner size and color */
  width: 1em;
  height: 1em;
  border-top-color: currentColor;
  border-left-color: currentColor;

  /* Additional spinner styles */
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-width: ${p => p.stroke};
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  animation: ${spin} 0.7s linear infinite;
`

export const Spinner = ({stroke = '2px', ...props}) => (
  <Flex variant="center" {...props}>
    <Inner stroke={stroke} />
  </Flex>
)

export default Spinner
