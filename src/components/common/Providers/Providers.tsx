import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '~/styles/theme';

// All global context providers

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
