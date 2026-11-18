import { ProjectImage } from "../components/Media";
import SiteLayout from "../components/SiteLayout";
import { experiences, researchProjects } from "../data/work";
const workflows = {
  "Wicresoft International LTD.": {
    src: "/assets/work/wicresoft-toolbox.svg",
    alt: "Conceptual ToolBox workbench: a centralized web application suite for telecom engineers, with interface development, application features, and unit testing.",
    caption: "ToolBox workbench · Concept illustration",
  },
  "Nullmax Autonomous Driving": {
    src: "/assets/work/nullmax-scene.svg",
    alt: "Conceptual driving-data viewport: a perspective road with obstacle boxes, a curved trajectory, and automatic view framing, illustrating THREE.js and Foxglove visualization work.",
    caption: "Driving-data viewport · Concept illustration",
  },
};
function Timeline({ title, items }) {
  return (
    <section className="timeline-section">
      <h2 className="section-title">{title}</h2>
      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-entry" key={item.organization}>
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
              {workflows[item.organization] && <figure className="work-diagram">
                <a href={workflows[item.organization].src} target="_blank" rel="noreferrer" aria-label={`Open concept illustration: ${item.organization}`}>
                  <ProjectImage {...workflows[item.organization]} sizes="(max-width: 760px) 90vw, 850px" />
                </a>
                <figcaption>{workflows[item.organization].caption} <a href={workflows[item.organization].src} target="_blank" rel="noreferrer">View full size</a></figcaption>
              </figure>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default function Work() {
  return (
    <SiteLayout
      eyebrow="In practice / work & research"
      title="Experience"
      intro="Building interfaces, tools, and experiments that connect software to the people using it."
    >
      <Timeline
        title="Professional experience"
        items={[...experiences].reverse()}
      />
      <Timeline title="Research" items={researchProjects} />
    </SiteLayout>
  );
}
