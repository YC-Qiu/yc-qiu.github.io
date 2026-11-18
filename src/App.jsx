import { LocaleContext, useLocale } from "./i18n/locale";
import { Component, Suspense, lazy, useEffect } from "react";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { SiteHeader, SiteFooter } from "./components/SiteLayout";

import Home from "./pages/Home";
import ReadingRail from "./components/ReadingRail";
const Projects = lazy(() => import("./pages/Projects"));
const Education = lazy(() => import("./pages/Education"));
const Work = lazy(() => import("./pages/Work"));
const BoardGame = lazy(() => import("./pages/BoardGame"));
const titles = {
  "/": "YC Qiu — AI, Software & Play",
  "/projects": "Projects — YC Qiu",
  "/work": "Experience — YC Qiu",
  "/education": "Education — YC Qiu",
  "/games": "Games — YC Qiu",
};
class PageErrorBoundary extends Component {
  static contextType = LocaleContext;
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    const { t } = this.context;
    if (this.state.failed)
      return (
        <main id="main-content" className="page-container error-page">
          <p className="eyebrow">{t("Connection interrupted", "连接中断")}</p>
          <h1>{t("This page couldn’t load.", "页面暂时无法加载。")}</h1>
          <p>{t("Please check your connection and try again.", "请检查网络连接后重试。")}</p>
          <button
            className="button primary"
            onClick={() => window.location.reload()}
          >
            {t("Reload page ↻", "重新加载 ↻")}
          </button>
        </main>
      );
    return this.props.children;
  }
}
function PagePending() {
  const { t } = useLocale();
  return (
    <main
      id="main-content"
      className="page-container pending-page"
      aria-busy="true"
    >
      <div
        className="loading-line"
        role="progressbar"
        aria-label={t("Loading page", "正在加载页面")}
      />
      <p role="status">{t("Opening page…", "正在打开页面…")}</p>
      <div className="skeleton skeleton-heading" />
      <div className="skeleton skeleton-copy" />
      <div className="skeleton skeleton-panel" />
    </main>
  );
}
export default function App() {
  const { pathname } = useLocation();
  const { language, t } = useLocale();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  useEffect(() => {
    const zhTitles = { "/": "YC Qiu — AI、软件与游戏", "/projects": "项目 — YC Qiu", "/work": "经历 — YC Qiu", "/education": "教育 — YC Qiu", "/games": "游戏 — YC Qiu" };
    document.title = language === "zh" ? (zhTitles[pathname] || "页面未找到 — YC Qiu") : (titles[pathname] || "Page not found — YC Qiu");
  }, [pathname, language]);
  return (
    <div className={pathname === "/" ? "app home-app" : "app"}>
      {pathname !== "/" && <div className="ambient-background" aria-hidden="true"><div className="ambient-glow glow-cyan" /><div className="ambient-glow glow-violet" /><div className="ambient-grid" /></div>}
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main-content");
          if (main) {
            main.tabIndex = -1;
            main.focus();
            main.scrollIntoView();
          }
        }}
      >
        {t("Skip to content", "跳至正文")}
      </a>
      {pathname !== "/" && <SiteHeader />}
      <PageErrorBoundary key={`page:${pathname}`}>
        <Suspense fallback={<PagePending />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/games" element={<BoardGame />} />
            <Route path="/board-game" element={<Navigate to="/games" replace />} />
            <Route
              path="*"
              element={
                <main id="main-content" className="page-container error-page">
                  <p className="eyebrow">404</p>
                  <h1>{t("A little off the map.", "这个页面还没有出现在地图上。")}</h1>
                  <Link className="button primary" to="/">
                    {t("Back to home ↗", "返回首页 ↗")}
                  </Link>
                </main>
              }
            />
          </Routes>
        </Suspense>
      </PageErrorBoundary>
      <SiteFooter />
      {pathname !== "/" && <ReadingRail key={`rail:${pathname}`} />}
    </div>
  );
}
