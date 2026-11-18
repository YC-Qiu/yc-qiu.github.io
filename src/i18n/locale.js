import { createContext, useContext } from "react";

export const LANGUAGE_KEY = "yc-portfolio-language";
export function readLanguage() {
  try { return window.localStorage.getItem(LANGUAGE_KEY) === "zh" ? "zh" : "en"; }
  catch { return "en"; }
}
export const LocaleContext = createContext({ language: "en", setLanguage: () => {}, t: (en) => en });
export const useLocale = () => useContext(LocaleContext);
