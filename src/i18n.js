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

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "ko"],
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then((t) => {
    let userLang = navigator.language || navigator.userLanguage;
    i18n.changeLanguage(userLang);
  });

export default i18n;
