import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';
import enTranslation from './locale/en.json';
import csTranslation from './locale/cs.json';
import ruTranslation from './locale/ru.json';
import ukTranslation from './locale/uk.json';

const supportedLanguages = ['en', 'cs', 'ru', 'uk']; 

const getUserLanguage = () => {
  const cookieLang = Cookies.get('language');
  if (cookieLang && supportedLanguages.includes(cookieLang)) {
    return cookieLang;
  }
  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.split('-')[0];
  return supportedLanguages.includes(langCode) ? langCode : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      cs: { translation: csTranslation },
      ru: { translation: ruTranslation },
      uk: { translation: ukTranslation },
    },
    lng: getUserLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
