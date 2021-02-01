import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '~styles/theme';

// All global context providers

export const Providers: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
