import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';

const GlobalThemeProvider = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
} 

GlobalThemeProvider.defaultProps = {
  children: null,
}

export default GlobalThemeProvider
