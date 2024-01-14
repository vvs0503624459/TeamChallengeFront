import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "../data/i18n/i18n";
type LanguageState = string;
const initialState: LanguageState = i18n.language;
export const languageReducer = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (_state, action: PayloadAction<string>) => action.payload,
  },
});

export const { setLanguage } = languageReducer.actions;

export default languageReducer.reducer;
