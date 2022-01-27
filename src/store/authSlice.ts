import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LANGUAGES_CODE } from 'translations';

export type AuthState = {
  username?: string;
  locale: LANGUAGES_CODE;
};

const initialState = { username: undefined, locale: 'en' } as AuthState;

export const authSlice: any = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUsername: (state, action: PayloadAction<string>) => ({
      ...state,
      username: action.payload,
    }),
    removeUsername: (state) => ({
      ...state,
      username: undefined,
    }),
    changeLocale: (state, action: PayloadAction<LANGUAGES_CODE>) => ({
      ...state,
      locale: action.payload,
    }),
  },
});

export const { saveUsername, removeUsername, changeLocale } = authSlice.actions;

export default authSlice.reducer;
