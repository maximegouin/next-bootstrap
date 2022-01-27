// Use this render within your test.

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@mui/material';
import { store } from 'store';
import theme from 'assets/styles/theme';

const AllTheProviders = ({ children }: any) => (
  <Provider store={store}>
    <IntlProvider locale="en">
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </IntlProvider>
  </Provider>
);

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
