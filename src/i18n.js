import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import firstStepMessages from "./containers/basics/messages/firstMessage/messages";

const allResources = { ...firstStepMessages };

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          firstPage: {
            title: "Kerberos protocol visualization",
          },
        },
      },
      sr: {
        translation: {
          firstPage: {
            title: "Vizualizacija kerberos protokola",
          },
        },
      },
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });
