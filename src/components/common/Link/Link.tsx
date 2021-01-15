import React, { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import {
  Link as RebassLink,
  LinkProps as RebassLinkProps,
} from 'rebass/styled-components';

interface LinkProps extends RebassLinkProps {
  children?: ReactNode;
  /** usage for regular links */
  href?: string | undefined;
  /** usage for Next.js links */
  to?: string | undefined;
  /** optional decorator for Next.js links (since 9.5.3).
   * Check (https://nextjs.org/docs/routing/introduction#linking-to-dynamic-paths) for info on dynamic routes
   * */
  linkAs?: string | undefined;
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
    <NextLink href={to} as={linkAs} passHref>
      <RebassLink {...props}>{children}</RebassLink>
    </NextLink>
  );
};

export default Link;
