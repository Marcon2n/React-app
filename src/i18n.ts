import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'
import * as en from './assets/locales/en/translation.json'
import * as vi from './assets/locales/vi/translation.json'

const resources = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi',
    fallbackLng: 'vi',
    debug: true,
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    }
  })

export default i18n;