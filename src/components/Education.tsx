import { education } from "@/data/cv";

export default function Education() {
  return (
    <section id="education" className="py-8">
      <div className="container">
        <div className="cv-card">
          <h1 className="mb-2">Education</h1>
          <p className="text-muted-foreground mb-6">Academic background.</p>

          {education.map((edu, index) => (
            <div key={index}>
              <p className="font-semibold">
                {edu.institution}
                {edu.degree && (
                  <span className="font-normal text-foreground"> — {edu.degree}</span>
                )}
                {edu.location && (
                  <span className="font-normal text-foreground"> — {edu.location}</span>
                )}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                {edu.period}
                {edu.details && ` • ${edu.details}`}
              </p>
              {index < education.length - 1 && <hr className="cv-hr" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
