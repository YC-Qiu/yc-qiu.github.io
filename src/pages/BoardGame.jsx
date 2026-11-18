import { useLocale } from "../i18n/locale";
import { boardGameTranslations } from "../i18n/boardGames.zh";
import { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { projectSlug } from "../data/projectSlug";
import SiteLayout, { RichText } from "../components/SiteLayout";
import { ProjectImage } from "../components/Media";
import { boardGames } from "../data/boardGames";
const gameProjects = projects.filter(project => project.isGame);
const mods = [
  ["Expanded Hero Pool", "3839314904"],
  ["League of Legends Music Player", "3834977465"],
];
const filters = [
  { key: "all", label: "All games", count: gameProjects.length + mods.length + boardGames.length },
  { key: "video-games", label: "Video games", count: gameProjects.length },
  { key: "mods", label: "Mods", count: mods.length },
  { key: "tabletop", label: "Tabletop", count: boardGames.length },
];
export default function BoardGame() {
  const { language, t } = useLocale();
  const filterLabels = { all: "全部游戏", "video-games": "电子游戏", mods: "模组", tabletop: "桌游" };
  const [params, setParams] = useSearchParams();
  const selected = params.get("project");
  const linkedProject = gameProjects.some(project => projectSlug(project.title) === selected);
  const category = params.get("category");
  const active = linkedProject ? "video-games" : filters.some(filter => filter.key === category) ? category : "all";
  const activeFilter = filters.find(filter => filter.key === active);
  const selectCategory = (key) => {
    const next = new URLSearchParams(params);
    next.delete("project");
    if (key === "all") next.delete("category");
    else next.set("category", key);
    setParams(next);
  };
  useLayoutEffect(() => {
    if (!selected) return;
    const frame = requestAnimationFrame(() => document.getElementById(selected)?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [selected]);
  return (
    <SiteLayout
      eyebrow={t("Digital & tabletop design", "数字游戏与桌游设计")}
      title={t("Games", "游戏")}
      intro={t("Video games, Steam Workshop mods, and original tabletop designs.", "电子游戏、Steam 创意工坊模组与原创桌游。")}
    >
      <section className="project-collection" aria-labelledby="games-collection-title">
        <div className="collection-heading">
          <h2 id="games-collection-title">{t("Explore the games", "探索游戏")}<span>{filters[0].count}</span></h2>
        </div>
        <div className="filter-row">
          <div className="filter-buttons" role="group" aria-label={t("Filter games", "筛选游戏")}>
            {filters.map(({ key, label, count }) => (
              <button key={key} type="button" aria-pressed={active === key}
                aria-controls="games-results" onClick={() => selectCategory(key)}>
                {t(label, filterLabels[key])}<span>{count}</span>
              </button>
            ))}
          </div>
          <p className="result-count" role="status">{activeFilter.count} {t(activeFilter.count === 1 ? "item" : "items", "项内容")}</p>
        </div>
        <div id="games-results">
      {(active === "all" || active === "video-games") && <section className="games-section" aria-labelledby="game-projects">
        <h2 id="game-projects">{t("Game Projects", "电子游戏项目")}</h2>
        <div className="project-grid">
          {gameProjects.map(project => (
            <ProjectCard key={`${project.title}-${selected === projectSlug(project.title)}`} project={project}
              categoryLabel={project.category === "coursework" ? "Coursework" : "Game project"}
              initialExpanded={selected === projectSlug(project.title)} />
          ))}
        </div>
      </section>}
      {(active === "all" || active === "mods") && <section className="games-section" aria-labelledby="game-mods">
        <h2 id="game-mods">{t("Game Mods", "游戏模组")}</h2>
        <div className="project-grid">
          {mods.map(([name, id]) => (
            <a className="game-shortcut" key={id} href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`} target="_blank" rel="noreferrer">
              <span><small>{t("Esports Godfather / Steam Workshop", "电竞教父 / Steam 创意工坊")}</small>{t(name, name === "Expanded Hero Pool" ? "扩展英雄池" : "英雄联盟音乐播放器")}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>}
      {(active === "all" || active === "tabletop") && <section className="games-section" aria-labelledby="board-projects">
        <h2 id="board-projects">{t("Board Game Projects", "桌游项目")}</h2>
      <div className="board-game-list">
        {boardGames.map((source, index) => {
          const game = language === "zh" ? { ...source, ...boardGameTranslations[source.title] } : source;
          return (
          <article className="board-game-card" key={source.title}>
            <div className="board-game-art">
              <ProjectImage {...game.images[0]} eager={index === 0} />
            </div>
            <div className="board-game-copy">
              <p className="eyebrow">{t("TABLETOP", "桌游")} / 0{index + 1}</p>
              <h2>{game.title}</h2>
              <p className="board-tagline">{game.tagline}</p>
              <p>
                <RichText text={game.description[0]} />
              </p>
              <details>
                <summary>
                  {t("Inside the game", "了解玩法")} <span aria-hidden="true">+</span>
                </summary>
                <div className="board-details">
                  {game.description.slice(1).map((paragraph) => (
                    <p key={paragraph}>
                      <RichText text={paragraph} />
                    </p>
                  ))}
                  {game.timeline && (
                    <>
                      <h3>{t("Development notes", "开发记录")}</h3>
                      <ul>
                        {game.timeline.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </details>
            </div>
          </article>
        ); })}
      </div>
      </section>}
        </div>
      </section>
    </SiteLayout>
  );
}
