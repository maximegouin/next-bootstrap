import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'store';
import theme from 'assets/styles/theme';
import TranslationProvider from 'translations';

import 'assets/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <TranslationProvider>
            <Component {...pageProps} />
          </TranslationProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
