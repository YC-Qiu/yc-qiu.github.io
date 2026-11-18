import SiteLayout, { RichText } from "../components/SiteLayout";
import { ProjectImage } from "../components/Media";
import { boardGames } from "../data/boardGames";
export default function BoardGame() {
  return (
    <SiteLayout
      eyebrow="Away from the screen / tabletop design"
      title="Board games"
      intro="Hidden information, unexpected alliances, and the stories that happen when people play together."
    >
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
    </SiteLayout>
  );
}
