import React from 'react';
import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import objectFitImages from 'object-fit-images';

import { Providers } from '~/components';
import { seo } from '~/config';
import { initSentry } from '~/lib';
import CSSreset from '~/styles/CSSreset';

import '../../public/static/fonts/stylesheet.css';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  initSentry();
}

export default class MyApp extends App {
  componentDidMount() {
    objectFitImages();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Providers>
        <CSSreset />
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </Providers>
    );
  }
}
