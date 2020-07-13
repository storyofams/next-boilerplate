import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import CSSreset from '@/styles/CSSreset';
import theme from '@/styles/theme';
import objectFitImages from 'object-fit-images';
import '../../public/static/fonts/stylesheet.css';
import { DefaultSeo } from 'next-seo';
import { seo } from '@/config';
export default class MyApp extends App {
  componentDidMount() {
    objectFitImages();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CSSreset />
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
