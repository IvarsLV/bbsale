import { createI18n } from "vue-i18n";
import en from "./assets/langs/en.json";
import lv from "./assets/langs/lv.json";
import ru from "./assets/langs/ru.json";

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "en",
  globalInjection: true,
  messages: { en, lv, ru },
});

export default i18n;