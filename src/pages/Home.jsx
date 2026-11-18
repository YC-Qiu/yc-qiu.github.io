import SocialLinks from "../components/SocialLinks";
import PlayCorner from "../components/PlayCorner";
import { Link } from "react-router-dom";
const sections = [
  ["Education", "education", "/education"],
  ["Projects", "projects", "/projects"],
  ["Work", "work", "/work"],
  ["Board Game", "board-game", "/board-game"],
];
export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <picture className="home-backdrop" aria-hidden="true">
        <source
          media="(max-width: 700px)"
          srcSet="/assets/images/home-cartoon-clean-v4-mobile.webp"
        />
        <img
          src="/assets/images/home-cartoon-clean-v4.webp"
          alt=""
          fetchPriority="high"
          onError={(event) => { event.currentTarget.style.visibility = "hidden"; }}
          decoding="async"
        />
      </picture>
      <div className="home-content">
        <h1>YC (Yucheng) Qiu</h1>
        <div className="home-cards">
          {sections.map(([title, image, path], index) => (
            <Link
              className="home-card"
              key={path}
              to={path}
              style={{ "--card-index": index }}
            >
              <img
                src={`/assets/images/${image}.webp`}
                alt=""
                width="200"
                height="160"
                decoding="async"
              />
              <h2>{title}</h2>
            </Link>
          ))}
        </div>
        <h2 className="connect-heading">Connect with me</h2>
        <SocialLinks className="home-socials" />
      </div>
      <PlayCorner />
    </main>
  );
}
