import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Providers } from '~components';
import { seo } from '~config';
import { initSentry } from '~lib';
import CSSreset from '~styles/CSSreset';

import '../../public/static/fonts/stylesheet.css';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  initSentry();
}

const MyApp = ({ pageProps, Component }: AppProps) => {
  return (
    <Providers pageProps={pageProps}>
      <CSSreset />
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </Providers>
  );
};

export default MyApp;
