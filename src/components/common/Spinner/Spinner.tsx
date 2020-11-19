import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Flex } from '~/components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Container = styled.div<{ color?: string; size: number }>`
  position: relative;
  display: inline-block;

  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  color: ${(p) => (p.color ? p.theme.colors[p.color] : p.color)};

  div {
    position: absolute;
    width: ${(p) => p.size}px;
    height: ${(p) => p.size}px;
    border: ${(p) => p.size / 8}px solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const Spinner = ({ color = '', size = 80, ...props }) => {
  return (
    <Flex variant="center" {...props}>
      <Container color={color} size={size}>
        <div />
        <div />
        <div />
        <div />
      </Container>
    </Flex>
  );
};

export default Spinner;
