import { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { projectSlug } from "../data/projectSlug";
import SiteLayout, { RichText } from "../components/SiteLayout";
import { ProjectImage } from "../components/Media";
import { boardGames } from "../data/boardGames";
export default function BoardGame() {
  const [params] = useSearchParams();
  const selected = params.get("project");
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
      <section className="games-section" aria-labelledby="game-projects">
        <h2 id="game-projects">Game Projects</h2>
        <div className="project-grid">
          {projects.filter(project => project.isGame).map(project => (
            <ProjectCard key={project.title} project={project}
              categoryLabel={project.category === "coursework" ? "Coursework" : "Game project"}
              initialExpanded={selected === projectSlug(project.title)} />
          ))}
        </div>
      </section>
      <section className="games-section" aria-labelledby="game-mods">
        <h2 id="game-mods">Game Mods</h2>
        <div className="project-grid">
          {[
            ["Expanded Hero Pool", "3839314904"],
            ["League of Legends Music Player", "3834977465"],
          ].map(([name, id]) => (
            <a className="game-shortcut" key={id} href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`} target="_blank" rel="noreferrer">
              <span><small>Esports Godfather / Steam Workshop</small>{name}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      <section className="games-section" aria-labelledby="board-projects">
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
      </section>
    </SiteLayout>
  );
}
