import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { RootState } from 'store';

import en from './en.json';
import fr from './fr.json';

export type LANGUAGES_CODE = 'en' | 'fr';

const translations = {
  en,
  fr,
};

const DEFAULT_LOCALE = 'en';

export default function TranslationProvider({ children }: any) {
  const { locale = DEFAULT_LOCALE } = useSelector(
    (state: RootState) => state.auth
  );
  return (
    <IntlProvider messages={translations[locale]} locale={locale}>
      {children}
    </IntlProvider>
  );
}
