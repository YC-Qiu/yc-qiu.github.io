import { useLocale } from "../i18n/locale";
import LanguageToggle from "./LanguageToggle";
import SocialLinks from "./SocialLinks";
import { NavLink, Link } from "react-router-dom";

const navigation = [
  ["/projects", "Projects"],
  ["/work", "Experience"],
  ["/education", "Education"],
  ["/games", "Games"],
];
export function SiteHeader({ home = false }) {
  const { t } = useLocale();
  const labels = { Projects: "项目", Experience: "经历", Education: "教育", Games: "游戏" };
  return (
    <header className={`site-header${home ? " on-home" : ""}`}>
      <Link to="/" className="wordmark" aria-label={t("YC Qiu, home", "YC Qiu，首页")}>
        YC<span>.</span>
      </Link>
      <nav aria-label={t("Main navigation", "主导航")}>
        {navigation.map(([path, label]) => (
          <NavLink key={path} to={path}>
            {t(label, labels[label])}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
      <a className="contact-link" href="mailto:yc_qiu@hotmail.com">
        {t("Let’s talk", "联系我")} <span aria-hidden="true">↗</span>
      </a>
      <LanguageToggle />
      </div>
    </header>
  );
}
export function SiteFooter() {
  const { t } = useLocale();
  return (
    <footer className="site-footer">
      <p>
        YC (Yucheng) Qiu <span>{t("· AI, software & play.", "· AI、软件与游戏。")}</span>
      </p>
      <SocialLinks />
    </footer>
  );
}
export default function SiteLayout({ eyebrow, title, intro, children }) {
  return (
    <main id="main-content" className="page-container">
      <header className="page-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title}
          <span className="accent-dot">.</span>
        </h1>
        <p className="page-intro">{intro}</p>
      </header>
      {children}
    </main>
  );
}
export function RichText({ text }) {
  return text
    .split(/<highlight>|<\/highlight>|\*\*/ )
    .map((part, index) =>
      index % 2 ? <strong key={index}>{part}</strong> : part,
    );
}
