import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        ns: [
            'general',
            'home',
            'automobile',
            'customer_satisfaction',
            'financial_market',
            'contact',
            'imprint',
            'legal',
            'directions',
            'jobs_career',
            'not_found'
        ],
        defaultNS: 'general',
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    });

// Das lang-Attribut muss der aktiven Sprache folgen: Screenreader waehlen
// danach die Aussprache, Suchmaschinen die Sprachzuordnung. In index.html
// steht es fest auf "en", auch wenn die Seite deutsch ausgeliefert wird.
const applyDocumentLanguage = (lng) => {
    const code = (lng || i18n.resolvedLanguage || i18n.language || "").split("-")[0];
    if (code) document.documentElement.lang = code;
};

i18n.on("languageChanged", applyDocumentLanguage);
i18n.on("initialized", () => applyDocumentLanguage());

export default i18n;