import { experience, extraCurricular } from "@/data/cv";

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <div className="container space-y-6">
        {/* Main Experience Card */}
        <div className="cv-card">
          <h1 className="mb-2">Experience</h1>
          <p className="text-muted-foreground mb-6">Work history and responsibilities.</p>

          {experience.map((job, index) => (
            <div key={index}>
              <p className="font-semibold">
                {job.title}{" "}
                <span className="font-normal text-foreground">— {job.company}</span>{" "}
                <span className="text-muted-foreground font-normal">({job.period})</span>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-foreground">
                {job.duties.map((duty, i) => (
                  <li key={i} className="text-sm leading-relaxed">
                    {duty}
                  </li>
                ))}
              </ul>
              {index < experience.length - 1 && <hr className="cv-hr" />}
            </div>
          ))}
        </div>

        {/* Extra-curricular Card */}
        <div className="cv-card">
          <h2 className="mb-4">Extra-curricular</h2>
          <p className="font-semibold">
            {extraCurricular.title}{" "}
            <span className="text-muted-foreground font-normal">({extraCurricular.period})</span>
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-foreground">
            {extraCurricular.points.map((point, i) => (
              <li key={i} className="text-sm leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
