import { Component, Suspense, lazy, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
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
  "/board-game": "Board Games — YC Qiu",
};
class PageErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed)
      return (
        <main id="main-content" className="page-container error-page">
          <p className="eyebrow">Connection interrupted</p>
          <h1>This page couldn’t load.</h1>
          <p>Please check your connection and try again.</p>
          <button
            className="button primary"
            onClick={() => window.location.reload()}
          >
            Reload page ↻
          </button>
        </main>
      );
    return this.props.children;
  }
}
function PagePending() {
  return (
    <main
      id="main-content"
      className="page-container pending-page"
      aria-busy="true"
    >
      <div
        className="loading-line"
        role="progressbar"
        aria-label="Loading page"
      />
      <p role="status">Opening page…</p>
      <div className="skeleton skeleton-heading" />
      <div className="skeleton skeleton-copy" />
      <div className="skeleton skeleton-panel" />
    </main>
  );
}
export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = titles[pathname] || "Page not found — YC Qiu";
  }, [pathname]);
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
        Skip to content
      </a>
      {pathname !== "/" && <SiteHeader />}
      <PageErrorBoundary key={`page:${pathname}`}>
        <Suspense fallback={<PagePending />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/board-game" element={<BoardGame />} />
            <Route
              path="*"
              element={
                <main id="main-content" className="page-container error-page">
                  <p className="eyebrow">404</p>
                  <h1>A little off the map.</h1>
                  <Link className="button primary" to="/">
                    Back to home ↗
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
