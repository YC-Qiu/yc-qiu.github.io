import { useLocale } from "../i18n/locale";
import { localizeProject } from "../i18n/projects.zh";
import { useState } from "react";
import SiteLayout from "../components/SiteLayout";
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
  const { language, t } = useLocale();
  const filterLabels = { all: "全部项目", "ai-ml": "AI 与机器学习", "featured-game": "游戏", coursework: "课程项目" };
  const [active, setActive] = useState("all");
  const [showFeatured, setShowFeatured] = useState(false);
  const featured = localizeProject(projects.find(project => project.art === "narrative"), language);
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
      eyebrow={t("Selected work / experiments & explorations", "精选作品 / 实验与探索")}
      title={t("Projects", "项目")}
      intro={t("From AI that plans dinner to games that bend the rules. A collection of things I’ve designed, built, and learned from.", "从规划晚餐的 AI 到打破常规的游戏，记录我设计、开发和学习的过程。")}
    >
      <section className="featured-project" aria-labelledby="featured-title">
        <div className="featured-copy">
          <p className="eyebrow"><span className="live-dot" /> {t("FEATURED · NARRATIVE AGENTS", "精选 · 叙事智能体")}</p>
          <h2 id="featured-title">{t("Narrative AI", "交互叙事")}<br />{t("Agent", "AI 智能体")}</h2>
          <p>{featured.description[0]}</p>
          <div className="tech-tags"><span>{t("Tool calling", "工具调用")}</span><span>{t("Story state", "故事状态")}</span><span>{t("Interactive fiction", "交互式小说")}</span></div>
          <div className="featured-actions">
            <button className="button primary" onClick={() => setShowFeatured(!showFeatured)} aria-expanded={showFeatured} aria-controls="featured-story-details">{showFeatured ? t("Close project −", "收起项目 −") : t("Explore the design +", "了解设计 +")}</button>
          </div>
          <span className="featured-footnote">{featured.type}</span>
        </div>
        <ProjectArt kind="narrative" />
      </section>
      <section id="featured-story-details" className="featured-story-details" hidden={!showFeatured} aria-label={t("Narrative agent design details", "叙事智能体设计详情")}>
        {showFeatured && <><h3>{featured.title}</h3>{featured.description.slice(1).map(text => <p key={text}>{text}</p>)}<h4>{t("My contribution", "我的贡献")}</h4>{featured.contributions.map(text => <p key={text}>{text}</p>)}</>}
      </section>
      <section
        className="project-collection"
        aria-labelledby="collection-title"
      >
        <div className="collection-heading">
          <h2 id="collection-title">
            {t("Explore the projects", "探索项目")}
            <span>{projects.length.toString().padStart(2, "0")}</span>
          </h2>
        </div>
        <div className="filter-row">
          <div
            className="filter-buttons"
            role="group"
            aria-label={t("Filter projects", "筛选项目")}
          >
            {filters.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                aria-pressed={active === key}
              >
                {t(label, filterLabels[key])}
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
            {matches.length} {t(matches.length === 1 ? "project" : "projects", "个项目")}
          </p>
        </div>
        {matches.length ? (
          <div className="project-grid" key={active}>
            {matches.map((project) => (
              project.isGame ? (
                <Link className="game-shortcut" key={project.title} to={`/games?project=${projectSlug(project.title)}`}>
                  {localizeProject(project, language).title}<span aria-hidden="true">→</span>
                </Link>
              ) : (
                <ProjectCard project={project} key={project.title} categoryLabel={filters.find(filter => filter.key === project.category)?.label} />
              )
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>{t("No projects found.", "没有找到项目。")}</h3>
            <p>{t("Try another topic or technology.", "试试其他主题或技术分类。")}</p>
            <button
              className="button primary"
              onClick={() => {
                setActive("all");
              }}
            >
              {t("Clear filters", "清除筛选")}
            </button>
          </div>
        )}
      </section>

    </SiteLayout>
  );
}
