import React, { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import {
  Link as RebassLink,
  LinkProps as RebassLinkProps,
} from 'rebass/styled-components';

interface LinkProps extends RebassLinkProps {
  children?: ReactNode;
  href?: string;
  linkAs?: string;
  to?: string;
}

export const Link: FC<LinkProps> = ({
  children,
  href,
  linkAs,
  to,
  ...props
}) => {
  if (href) {
    return (
      <RebassLink href={href} {...props}>
        {children}
      </RebassLink>
    );
  }

  return (
    <NextLink as={linkAs} href={to} passHref>
      <RebassLink {...props}>{children}</RebassLink>
    </NextLink>
  );
};

export default Link;
