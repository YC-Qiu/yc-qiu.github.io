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
      eyebrow="Digital &amp; tabletop design"
      title="Games"
      intro="Video games, Steam Workshop mods, and original tabletop designs."
    >
      <section className="project-collection" aria-labelledby="games-collection-title">
        <div className="collection-heading">
          <h2 id="games-collection-title">Explore the games<span>{filters[0].count}</span></h2>
        </div>
        <div className="filter-row">
          <div className="filter-buttons" role="group" aria-label="Filter games">
            {filters.map(({ key, label, count }) => (
              <button key={key} type="button" aria-pressed={active === key}
                aria-controls="games-results" onClick={() => selectCategory(key)}>
                {label}<span>{count}</span>
              </button>
            ))}
          </div>
          <p className="result-count" role="status">{activeFilter.count} {activeFilter.count === 1 ? "item" : "items"}</p>
        </div>
        <div id="games-results">
      {(active === "all" || active === "video-games") && <section className="games-section" aria-labelledby="game-projects">
        <h2 id="game-projects">Game Projects</h2>
        <div className="project-grid">
          {gameProjects.map(project => (
            <ProjectCard key={`${project.title}-${selected === projectSlug(project.title)}`} project={project}
              categoryLabel={project.category === "coursework" ? "Coursework" : "Game project"}
              initialExpanded={selected === projectSlug(project.title)} />
          ))}
        </div>
      </section>}
      {(active === "all" || active === "mods") && <section className="games-section" aria-labelledby="game-mods">
        <h2 id="game-mods">Game Mods</h2>
        <div className="project-grid">
          {mods.map(([name, id]) => (
            <a className="game-shortcut" key={id} href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`} target="_blank" rel="noreferrer">
              <span><small>Esports Godfather / Steam Workshop</small>{name}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>}
      {(active === "all" || active === "tabletop") && <section className="games-section" aria-labelledby="board-projects">
        <h2 id="board-projects">Board Game Projects</h2>
      <div className="board-game-list">
        {boardGames.map((game, index) => (
          <article className="board-game-card" key={game.title}>
            <div className="board-game-art">
              <ProjectImage {...game.images[0]} eager={index === 0} />
            </div>
            <div className="board-game-copy">
              <p className="eyebrow">TABLETOP / 0{index + 1}</p>
              <h2>{game.title}</h2>
              <p className="board-tagline">{game.tagline}</p>
              <p>
                <RichText text={game.description[0]} />
              </p>
              <details>
                <summary>
                  Inside the game <span aria-hidden="true">+</span>
                </summary>
                <div className="board-details">
                  {game.description.slice(1).map((paragraph) => (
                    <p key={paragraph}>
                      <RichText text={paragraph} />
                    </p>
                  ))}
                  {game.timeline && (
                    <>
                      <h3>Development notes</h3>
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
        ))}
      </div>
      </section>}
        </div>
      </section>
    </SiteLayout>
  );
}
