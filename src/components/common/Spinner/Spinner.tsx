import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex } from '~/components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Inner = styled.div`
  position: absolute;

  width: 64px;
  height: 64px;
  margin: 8px;

  border: 8px solid;
  border-radius: 50%;
  border-color: currentColor transparent transparent transparent;

  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;

const Container = styled.div<{ color?: string }>`
  display: inline-block;

  position: relative;

  width: 80px;
  height: 80px;

  color: ${p => (p.color ? p.theme.colors[p.color] : p.color)};

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

export const Spinner = ({ color = '', ...props }) => (
  <Flex variant="center" {...props}>
    <Container color={color}>
      <Inner />
      <Inner />
      <Inner />
      <Inner />
    </Container>
  </Flex>
);

export default Spinner;
