import { useEffect, useMemo, useState } from "react";
import { LANGUAGE_KEY, LocaleContext, readLanguage } from "./locale";

export default function LocaleProvider({ children }) {
  const [language, setLanguage] = useState(readLanguage);
  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    try { window.localStorage.setItem(LANGUAGE_KEY, language); } catch { /* Storage may be unavailable. */ }
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: (en, zh) => language === "zh" ? (zh ?? en) : en }), [language]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
