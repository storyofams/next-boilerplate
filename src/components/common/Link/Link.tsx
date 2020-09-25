import React, { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

import { Text } from '~/components/common/Text';
import { SystemProps, system } from '~/lib';

interface LinkProps extends SystemProps {
  children?: ReactNode;
  href?: string;
  linkAs?: string;
  to?: string;
}

const StyledLink = styled(Text)`
  transition: border-color 0.18s ease-in-out, color 0.18s ease-in-out,
    box-shadow 0.18s ease-in-out, opacity 0.18s ease-in-out,
    background-color 0.18s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${system}
`;

export const Link: FC<LinkProps> = ({
  children,
  href,
  linkAs,
  to,
  ...props
}) => {
  if (href) {
    return (
      <StyledLink href={href} as="a" target="_blank" {...props}>
        {children}
      </StyledLink>
    );
  }

  return (
    <NextLink as={linkAs} href={to} passHref>
      <StyledLink as="a" {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
};

export default Link;
