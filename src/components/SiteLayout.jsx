import SocialLinks from "./SocialLinks";
import { NavLink, Link } from "react-router-dom";

const navigation = [
  ["/projects", "Projects"],
  ["/work", "Experience"],
  ["/education", "Education"],
  ["/games", "Games"],
];
export function SiteHeader({ home = false }) {
  return (
    <header className={`site-header${home ? " on-home" : ""}`}>
      <Link to="/" className="wordmark" aria-label="YC Qiu, home">
        YC<span>.</span>
      </Link>
      <nav aria-label="Main navigation">
        {navigation.map(([path, label]) => (
          <NavLink key={path} to={path}>
            {label}
          </NavLink>
        ))}
      </nav>
      <a className="contact-link" href="mailto:yc_qiu@hotmail.com">
        Let’s talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        YC (Yucheng) Qiu <span>· AI, software & play.</span>
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
