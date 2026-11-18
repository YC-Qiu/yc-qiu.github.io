import SiteLayout from "../components/SiteLayout";
import { educationData } from "../data/education";
export default function Education() {
  return (
    <SiteLayout
      eyebrow="The foundations / education"
      title="Education"
      intro="Computer science foundations, a focus on artificial intelligence, and a curiosity that connects them."
    >
      <div className="education-list">
        {educationData.map((item) => (
          <article key={item.school} className="education-card">
            <div className="education-aside">
              <span className="eyebrow">{item.category}</span>
              <p>{item.time}</p>
            </div>
            <div className="education-content">
              <div className="school-heading">
                <img
                  src={item.logo}
                  alt=""
                  width="52"
                  height="52"
                  loading="lazy"
                />
                <div>
                  <h2>{item.school}</h2>
                  <p>{item.location}</p>
                </div>
              </div>
              <h3>{item.degree}</h3>
              <div className="academic-facts">
                {item.gpa && (
                  <span>
                    GPA <strong>{item.gpa}</strong>
                  </span>
                )}
                {item.honors.map((honor) => (
                  <span key={honor}>{honor}</span>
                ))}
              </div>
              <div className="tech-tags">
                {item.courses.map((course) => (
                  <span key={course}>{course}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
