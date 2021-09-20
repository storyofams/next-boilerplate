import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ThemeProvider } from 'styled-components';

import theme from '~styles/theme';

type ProviderProps = {
  pageProps: any;
  children: ReactNode;
};

// All global context providers
export const Providers = ({ pageProps, children }: ProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};
