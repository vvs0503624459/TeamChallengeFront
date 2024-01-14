import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './en.json'
import ua from './ua.json'

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    ua: ua,
  }, // Where we're gonna put translations' files
  lng: "en",     // Set the initial language of the App
  fallbackLng: "en",
  // react: {useSuspense: true},
  // interpolation: { escapeValue: false},
 });
export default i18n;
 