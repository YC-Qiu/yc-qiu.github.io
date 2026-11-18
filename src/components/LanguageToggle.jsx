import { useLocale } from "../i18n/locale";

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLocale();
  return <div className="language-toggle" role="group" aria-label={t("Language", "语言")}>
    <button type="button" lang="zh-CN" aria-label="切换为中文" aria-pressed={language === "zh"} onClick={() => setLanguage("zh")}>中</button>
    <span aria-hidden="true">/</span>
    <button type="button" lang="en" aria-label="Switch to English" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>ENG</button>
  </div>;
}
