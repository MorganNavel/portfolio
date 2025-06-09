import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationFR from "./locales/fr/translations.json";
import translationEN from "./locales/en/translations.json";
import translationKO from "./locales/ko/translations.json";

const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN },
  ko: { translation: translationKO },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
