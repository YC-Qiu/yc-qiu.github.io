import { useState } from "react";
import SiteLayout, { RichText } from "../components/SiteLayout";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projectSlug } from "../data/projectSlug";
import ProjectArt from "../components/ProjectArt";
import { projects } from "../data/projects";

const filters = [
  { key: "all", label: "All projects" },
  { key: "ai-ml", label: "AI & machine learning" },
  { key: "featured-game", label: "Games" },
  { key: "coursework", label: "Coursework" },
];
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
              project.isGame ? (
                <Link className="game-shortcut" key={project.title} to={`/games?project=${projectSlug(project.title)}`}>
                  {project.title}<span aria-hidden="true">→</span>
                </Link>
              ) : (
                <ProjectCard project={project} key={project.title} categoryLabel={filters.find(filter => filter.key === project.category)?.label} />
              )
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
