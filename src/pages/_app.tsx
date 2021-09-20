import { useEffect, useRef } from 'react';

import { withPasswordProtect } from '@storyofams/next-password-protect';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Providers, UserAgent } from '~components';
import { seo } from '~config';
import { initSentry } from '~lib';
import useDetectKeyboard from '~hooks/useDetectKeyboard';
import { track, pageview } from '~lib/gtag';
import CSSreset from '~styles/CSSreset';

import 'nprogress/nprogress.css';

import '../../public/static/fonts/stylesheet.css';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  initSentry();
}

let qualifiedTimer;

const MyApp = ({ pageProps, Component }: AppProps) => {
  const router = useRouter();
  const progressTimer = useRef<any>(null);
  const isTrackingQualified = useRef(false);

  useDetectKeyboard();

  const clearQualifiedTrackers = () => {
    if (qualifiedTimer) {
      clearTimeout(qualifiedTimer);
    }

    document.removeEventListener('click', setQualified);
    document.removeEventListener('scroll', setQualified);
  };

  const setQualified = () => {
    if (isTrackingQualified.current) {
      return;
    }

    isTrackingQualified.current = true;

    clearQualifiedTrackers();

    track({
      userType: 'Qualified',
    });
  };

  useEffect(() => {
    qualifiedTimer = setTimeout(setQualified, 10000);
    document.addEventListener('click', setQualified, { passive: true });
    document.addEventListener('scroll', setQualified, { passive: true });

    return clearQualifiedTrackers;
  }, []);

  useEffect(() => {
    const startProgress = () => {
      if (!progressTimer.current) {
        progressTimer.current = setTimeout(NProgress.start, 120);
      }
    };

    const onComplete = (url) => {
      pageview(url);
      endProgress(url);
    };

    const endProgress = (err) => {
      if (progressTimer.current) {
        clearTimeout(progressTimer.current);
        progressTimer.current = null;

        if (err?.cancelled) {
          NProgress.set(0.0);
          NProgress.remove();
        } else {
          NProgress.done();
        }
      }
    };

    router.events.on('routeChangeStart', startProgress);
    router.events.on('routeChangeComplete', onComplete);
    router.events.on('routeChangeError', endProgress);

    return () => {
      router.events.off('routeChangeStart', startProgress);
      router.events.off('routeChangeComplete', onComplete);
      router.events.off('routeChangeError', endProgress);
    };
  });

  return (
    <Providers pageProps={pageProps}>
      <CSSreset />
      <DefaultSeo {...seo} />
      <UserAgent />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </Providers>
  );
};

export default process.env.PASSWORD_PROTECT
  ? withPasswordProtect(MyApp)
  : MyApp;
