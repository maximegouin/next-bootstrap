import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import theme from '../src/assets/styles/theme';
import { store, persistor } from '../src/store';
import TranslationProvider from '../src/translations';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <TranslationProvider>
            <Story />
          </TranslationProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  ),
];
