import { useLocale } from "../i18n/locale";
import { workTranslations } from "../i18n/work.zh";
import { ProjectImage } from "../components/Media";
import SiteLayout from "../components/SiteLayout";
import { experiences, researchProjects } from "../data/work";
const workflows = {
  "Wicresoft International LTD.": {
    src: "/assets/work/wicresoft-toolbox.svg",
    alt: "Concept illustration of messaging backend features and the ToolBox suite: internal chat, system notifications, persistent storage, chat history, jQuery and Jinja interfaces, Python backend functionality, and unit tests.",
    caption: "Messaging services + ToolBox · Concept illustration",
  },
  "Nullmax Autonomous Driving": {
    src: "/assets/work/nullmax-scene.svg",
    alt: "Conceptual driving-data viewport: a perspective road with obstacle boxes, a curved trajectory, and automatic view framing, illustrating THREE.js and Foxglove visualization work.",
    caption: "Driving-data viewport · Concept illustration",
  },
};
function Timeline({ title, items }) {
  const { language, t } = useLocale();
  return (
    <section className="timeline-section">
      <h2 className="section-title">{title}</h2>
      <div className="timeline">
        {items.map((source) => {
          const item = language === "zh" ? { ...source, ...workTranslations[source.organization] } : source;
          return (
          <article className="timeline-entry" key={source.organization}>
            <div className="timeline-date">
              {item.time}
              <span>{item.location}</span>
            </div>
            <div>
              <p className="eyebrow">{item.role}</p>
              <h3>{item.organization}</h3>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {workflows[source.organization] && <figure className="work-diagram">
                <a href={workflows[source.organization].src} target="_blank" rel="noreferrer" aria-label={`${t("Open concept illustration", "查看概念配图")}: ${item.organization}`}>
                  <ProjectImage {...workflows[source.organization]} sizes="(max-width: 760px) 90vw, 850px" />
                </a>
                <figcaption>{t(workflows[source.organization].caption, source.organization === "Wicresoft International LTD." ? "消息服务与 ToolBox · 概念配图" : "驾驶数据视图 · 概念配图")} <a href={workflows[source.organization].src} target="_blank" rel="noreferrer">{t("View full size", "查看原图")}</a></figcaption>
              </figure>}
            </div>
          </article>
        ); })}
      </div>
    </section>
  );
}
export default function Work() {
  const { t } = useLocale();
  return (
    <SiteLayout
      eyebrow={t("In practice / work & research", "实践 / 工作与研究")}
      title={t("Experience", "经历")}
      intro={t("Building interfaces, tools, and experiments that connect software to the people using it.", "通过界面、工具和实验，让软件更好地服务使用它的人。")}
    >
      <Timeline
        title={t("Professional experience", "工作经历")}
        items={[...experiences].reverse()}
      />
      <Timeline title={t("Research", "研究经历")} items={researchProjects} />
    </SiteLayout>
  );
}
