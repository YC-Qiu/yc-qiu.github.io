import { useState } from "react";
import SiteLayout, { RichText } from "../components/SiteLayout";
import { ProjectImage, VideoPreview } from "../components/Media";
import ProjectArt from "../components/ProjectArt";
import { projects } from "../data/projects";

const filters = [
  { key: "all", label: "All projects" },
  { key: "ai-ml", label: "AI & machine learning" },
  { key: "featured-game", label: "Games" },
  { key: "coursework", label: "Coursework" },
];
const categoryName = (key) =>
  filters.find((filter) => filter.key === key)?.label;
const mealPlanner = projects.find((project) =>
  project.title.startsWith("Meal Logistics Planner"),
);
const slug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-$/, "");
function PlanningArt({ compact = false }) {
  return (
    <div
      className={`planning-art${compact ? " compact-art" : ""}`}
      aria-label="Illustration of recipes becoming a coordinated cooking plan"
      role="img"
    >
      <div className="art-topline">
        <span className="live-dot" /> MEAL LOGISTICS <span>01 / PLANNING</span>
      </div>
      <div className="planning-caption">
        A little order.
        <br />
        <em>A better dinner.</em>
      </div>
      <div className="plan-tracks">
        <div>
          <span>PREPARE</span>
          <i />
          <i />
        </div>
        <div>
          <span>COOK</span>
          <i />
          <i />
        </div>
        <div>
          <span>SERVE</span>
          <i />
        </div>
      </div>
      <div className="art-bottomline">
        Recipes → Resources → Schedule <span>↗</span>
      </div>
    </div>
  );
}
function AbstractArt({ project }) {
  if (project.art) return <ProjectArt kind={project.art} />;
  const isNlp = project.title.includes("Sentiment");
  return (
    <div
      className={`abstract-art ${isNlp ? "nlp-art" : "game-art"}`}
      aria-hidden="true"
    >
      <span>
        {isNlp ? "LANGUAGE / DOMAIN SHIFT" : "INTERACTIVE / EXPLORATION"}
      </span>
      <div>
        {isNlp ? (
          <>
            <b>Domains change.</b>
            <em>Can models transfer?</em>
          </>
        ) : (
          <>
            <b>
              {project.title.includes("Zelda")
                ? "PLAY"
                : project.title.includes("AR Game")
                  ? "EXPLORE"
                  : "IMMERSE"}
            </b>
            <em>{project.tech.split(",")[0]}</em>
          </>
        )}
      </div>
      <span>
        {isNlp
          ? "Text → Features → Predictions"
          : "An experiment in how we play"}{" "}
        <span>↗</span>
      </span>
    </div>
  );
}
function ProjectLinks({ links = [] }) {
  return (
    links.length > 0 && (
      <div className="project-links">
        {links.map(({ label, url }) => (
          <a key={url} href={url} target="_blank" rel="noreferrer">
            {label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    )
  );
}
function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const id = slug(project.title);
  const images = project.images || [];
  // Concept cover is separate from the original research figures in the details.
  const cover = project.title === "Understanding Global Drivers and Barriers of AI Adoption"
    ? { src: "/assets/ai_projects/ai-adoption-workflow.png", alt: "AI adoption analysis workflow: multilingual survey data, cleaning and feature engineering, classification and regression, then Tableau dashboards" }
    : images[0];
  return (
    <article
      className={`project-card${expanded ? " is-expanded" : ""}`}
      id={id}
    >
      <div className="project-cover">
        {cover ? (
          <a className="project-cover-link" href={cover.src} target="_blank" rel="noreferrer" aria-label={`Open full image: ${cover.alt}`}><ProjectImage src={cover.src} alt={cover.alt} /></a>
        ) : project === mealPlanner ? (
          <PlanningArt compact />
        ) : (
          <AbstractArt project={project} />
        )}
      </div>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{categoryName(project.category)}</span>
          <span>{project.time || project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-summary">
          <RichText text={project.description[0]} />
        </p>
        <div className="tech-tags">
          {project.tech
            .split(/,(?![^()]*\))/)
            .slice(0, project.art ? undefined : 3)
            .map((tech) => (
              <span key={tech}>{tech.trim()}</span>
            ))}
        </div>
        <div className="project-card-actions">
          <button
            type="button"
            className="text-button"
            aria-expanded={expanded}
            aria-controls={`${id}-details`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Less detail" : "Explore project"}{" "}
            <span aria-hidden="true">{expanded ? "−" : "+"}</span>
          </button>
          {project.links?.[0] && (
            <a
              className="project-quick-link"
              href={project.links[0].url}
              target="_blank"
              rel="noreferrer"
            >
              {project.links[0].label} ↗
            </a>
          )}
        </div>
        <div
          className="project-details"
          id={`${id}-details`}
          hidden={!expanded}
        >
          {expanded && (
            <>
              <p className="detail-label">
                {[project.type, project.location, project.team].filter(Boolean).join(" · ")}
              </p>
              <p>
                <strong>{project.art ? "Tags:" : "Tools:"}</strong> {project.tech}
              </p>
              {project.description.slice(1).map((text) => (
                <p key={text}>
                  <RichText text={text} />
                </p>
              ))}
              <h4>{project.detailHeading || "My contribution"}</h4>
              <ul>
                {project.contributions.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
              <ProjectLinks links={project.links} />
              <div className="detail-media">
                {images.map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open full image: ${image.alt}`}
                  >
                    <ProjectImage {...image} />
                  </a>
                ))}
                {project.videos?.map((video) => (
                  <VideoPreview key={video.src} {...video} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
export default function Projects() {
  const [active, setActive] = useState("all");
  const [showFeatured, setShowFeatured] = useState(false);
  const featured = projects.find(project => project.art === "narrative");
  const matches = projects
    .filter((project) => active === "all" || project.category === active)
    .sort(
      (a, b) =>
        filters.findIndex((item) => item.key === a.category) -
          filters.findIndex((item) => item.key === b.category) ||
        b.order - a.order,
    );
  return (
    <SiteLayout
      eyebrow="Selected work / experiments & explorations"
      title="Projects"
      intro="From AI that plans dinner to games that bend the rules. A collection of things I’ve designed, built, and learned from."
    >
      <section className="featured-project" aria-labelledby="featured-title">
        <div className="featured-copy">
          <p className="eyebrow"><span className="live-dot" /> FEATURED · NARRATIVE AGENTS</p>
          <h2 id="featured-title">Narrative AI<br />Agent</h2>
          <p>{featured.description[0]}</p>
          <div className="tech-tags"><span>Tool calling</span><span>Story state</span><span>Interactive fiction</span></div>
          <div className="featured-actions">
            <button className="button primary" onClick={() => setShowFeatured(!showFeatured)} aria-expanded={showFeatured} aria-controls="featured-story-details">{showFeatured ? "Close project −" : "Explore the design +"}</button>
          </div>
          <span className="featured-footnote">Independent course project · System design and evaluation plan</span>
        </div>
        <ProjectArt kind="narrative" />
      </section>
      <section id="featured-story-details" className="featured-story-details" hidden={!showFeatured} aria-label="Narrative agent design details">
        {showFeatured && <><h3>{featured.title}</h3>{featured.description.slice(1).map(text => <p key={text}>{text}</p>)}<h4>My contribution</h4>{featured.contributions.map(text => <p key={text}>{text}</p>)}</>}
      </section>
      <section
        className="project-collection"
        aria-labelledby="collection-title"
      >
        <div className="collection-heading">
          <h2 id="collection-title">
            Explore the projects
            <span>{projects.length.toString().padStart(2, "0")}</span>
          </h2>
        </div>
        <div className="filter-row">
          <div
            className="filter-buttons"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                aria-pressed={active === key}
              >
                {label}
                <span>
                  {key === "all"
                    ? projects.length
                    : projects.filter((project) => project.category === key)
                        .length}
                </span>
              </button>
            ))}
          </div>
          <p className="result-count" role="status">
            {matches.length} {matches.length === 1 ? "project" : "projects"}
          </p>
        </div>
        {matches.length ? (
          <div className="project-grid" key={active}>
            {matches.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No projects found.</h3>
            <p>Try another topic or technology.</p>
            <button
              className="button primary"
              onClick={() => {
                setActive("all");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

    </SiteLayout>
  );
}
