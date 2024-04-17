import i18n from "i18next";
import { initReactI18next } from  "react-i18next";
import ar from './locales/ar/translations.json'
import en from './locales/en/translations.json'

i18n.use(initReactI18next).init({
    // we init with resources
    resources: {
        ar: {
            translation: ar
        },
        en: {
            translation: en
        }
    },
    lng: 'ar',
    fallbackLng: "ar"
});

i18n.languages = ['ar', 'en'];

export default i18n;