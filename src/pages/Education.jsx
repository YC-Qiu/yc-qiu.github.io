import { useLocale } from "../i18n/locale";
import { educationTranslations } from "../i18n/education.zh";
import SiteLayout from "../components/SiteLayout";
import { educationData } from "../data/education";
export default function Education() {
  const { language, t } = useLocale();
  return (
    <SiteLayout
      eyebrow={t("The foundations / education", "学习与积累 / 教育背景")}
      title={t("Education", "教育背景")}
      intro={t("Computer science foundations, a focus on artificial intelligence, and a curiosity that connects them.", "以计算机科学为基础，专注人工智能，用好奇心连接不同领域。")}
    >
      <div className="education-list">
        {educationData.map((source) => {
          const item = language === "zh" ? { ...source, ...educationTranslations[source.school] } : source;
          return (
          <article key={source.school} className="education-card">
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
        ); })}
      </div>
    </SiteLayout>
  );
}
