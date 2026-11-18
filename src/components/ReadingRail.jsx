import { useLocale } from "../i18n/locale";
import { useEffect, useState } from "react";

export default function ReadingRail() {
  const { t } = useLocale();
  const [progress, setProgress] = useState(0);
  const [scrollable, setScrollable] = useState(false);
  useEffect(() => {
    let frame;
    const update = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setScrollable(distance > 100);
      setProgress(distance > 0 ? Math.min(100, Math.max(0, window.scrollY / distance * 100)) : 0);
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, []);
  if (!scrollable) return null;
  return <aside className="reading-rail" aria-label={t("Page position", "阅读位置")}>
    <span aria-hidden="true">↑</span>
    <input type="range" min="0" max="100" step="1" value={Math.round(progress)} aria-label={t("Page scroll position", "页面滚动位置")} aria-valuetext={t(`${Math.round(progress)}% of page`, `已阅读 ${Math.round(progress)}%`)} onChange={event => {
      const next = Number(event.target.value);
      setProgress(next);
      window.scrollTo({ top: next / 100 * (document.documentElement.scrollHeight - window.innerHeight), behavior: "instant" });
    }} />
    <span className="rail-value" aria-hidden="true">{Math.round(progress)}%</span>
  </aside>;
}
