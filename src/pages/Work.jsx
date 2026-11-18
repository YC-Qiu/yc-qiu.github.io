import { ProjectImage } from "../components/Media";
import SiteLayout from "../components/SiteLayout";
import { experiences, researchProjects } from "../data/work";
const workflows = {
  "Wicresoft International LTD.": {
    src: "/assets/work/wicresoft-workflow.png",
    alt: "ToolBox development: engineer workflows, web interfaces with jQuery and Jinja, application features with Python and React, then unit tests.",
  },
  "Nullmax Autonomous Driving": {
    src: "/assets/work/nullmax-workflow.png",
    alt: "Driving data visualization: dynamic scene inputs, THREE.js 3D scenes, obstacles and trajectories, then interactive views with automatic zoom and Foxglove.",
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
                <a href={workflows[item.organization].src} target="_blank" rel="noreferrer" aria-label={`Open workflow diagram: ${item.organization}`}>
                  <ProjectImage {...workflows[item.organization]} sizes="(max-width: 760px) 90vw, 850px" />
                </a>
                <figcaption>Workflow overview <a href={workflows[item.organization].src} target="_blank" rel="noreferrer">View full size ↗</a></figcaption>
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
