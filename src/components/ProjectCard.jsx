import { useLocale } from "../i18n/locale";
import { localizeProject } from "../i18n/projects.zh";
import { useState } from "react";
import { RichText } from "../components/SiteLayout";
import { ProjectImage, VideoPreview } from "../components/Media";
import ProjectArt from "../components/ProjectArt";
import { projects } from "../data/projects";

import { projectSlug } from "../data/projectSlug";

const mealPlanner = projects.find((project) =>
  project.title.startsWith("Meal Logistics Planner"),
);
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
export default function ProjectCard({ project: sourceProject, categoryLabel, initialExpanded = false }) {
  const { language, t } = useLocale();
  const project = localizeProject(sourceProject, language);
  const categories = { "AI & machine learning": "AI 与机器学习", Games: "游戏", "Game project": "游戏项目" };
  const [expanded, setExpanded] = useState(initialExpanded);
  const id = projectSlug(sourceProject.title);
  const images = project.images || [];
  // Concept cover is separate from the original research figures in the details.
  const cover = sourceProject.title === "Understanding Global Drivers and Barriers of AI Adoption"
    ? { src: "/assets/ai_projects/ai-adoption-workflow.png", alt: "AI adoption analysis workflow: multilingual survey data, cleaning and feature engineering, classification and regression, then Tableau dashboards" }
    : images[0];
  return (
    <article
      className={`project-card${expanded ? " is-expanded" : ""}`}
      id={id}
    >
      <div className="project-cover">
        {cover ? (
          <a className="project-cover-link" href={cover.src} target="_blank" rel="noreferrer" aria-label={`${t("Open full image", "查看原图")}: ${cover.alt}`}><ProjectImage src={cover.src} alt={cover.alt} /></a>
        ) : sourceProject === mealPlanner ? (
          <PlanningArt compact />
        ) : (
          <AbstractArt project={sourceProject} />
        )}
      </div>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{t(categoryLabel, categories[categoryLabel])}</span>
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
            {expanded ? t("Less detail", "收起详情") : t("Explore project", "查看项目")}{" "}
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
                <strong>{project.art ? t("Tags:", "标签：") : t("Tools:", "工具：")}</strong> {project.tech}
              </p>
              {project.description.slice(1).map((text) => (
                <p key={text}>
                  <RichText text={text} />
                </p>
              ))}
              <h4>{project.detailHeading || t("My contribution", "我的贡献")}</h4>
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
                    aria-label={`${t("Open full image", "查看原图")}: ${image.alt}`}
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
