// import { experience, extraCurricular } from "@/data/cv";

// export default function Experience() {
//   return (
//     <section id="experience" className="py-8">
//       <div className="container space-y-6">
//         {/* Main Experience Card */}
//         <div className="cv-card">
//           <h1 className="mb-2">Experiencia</h1>
//           <p className="text-muted-foreground mb-6">Experiencia laboral y responsabilidades.</p>

//           {experience.map((job, index) => (
//             <div key={index}>
//               <p className="font-semibold">
//                 {job.title}{" "}
//                 <span className="font-normal text-foreground">— {job.company}</span>{" "}
//                 <span className="text-muted-foreground font-normal">({job.period})</span>
//               </p>
//               <ul className="list-disc list-inside mt-2 space-y-1 text-foreground">
//                 {job.duties.map((duty, i) => (
//                   <li key={i} className="text-sm leading-relaxed">
//                     {duty}
//                   </li>
//                 ))}
//               </ul>
//               {index < experience.length - 1 && <hr className="cv-hr" />}
//             </div>
//           ))}
//         </div>

//         { /* Extracurricular Card */}
//         <div className="cv-card">
//           <h2 className="mb-4">Extracurricular</h2>
//           <p className="font-semibold">
//             {extraCurricular.title}{" "}
//             <span className="text-muted-foreground font-normal">({extraCurricular.period})</span>
//           </p>
//           <ul className="list-disc list-inside mt-2 space-y-1 text-foreground">
//             {extraCurricular.points.map((point, i) => (
//               <li key={i} className="text-sm leading-relaxed">
//                 {point}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
import { experience, extraCurricular } from "@/data/cv";
import { SectionHeader } from "./ui/SectionHeader";
import { MotionContainer, MotionItem } from "./ui/motion";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          title="Experiencia"
          subtitle="Mi trayectoria profesional y responsabilidades clave."
        />

        <MotionContainer className="space-y-8">
          {/* Main Experience */}
          {experience.map((job, index) => (
            <MotionItem key={index}>
              <motion.div
                className="card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {job.title}
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {job.duties.map((duty, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-foreground">{duty}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </MotionItem>
          ))}

          {/* Extracurricular Card */}
          <MotionItem>
            <motion.div
              className="card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Extracurricular</h3>
                  <p className="text-primary font-medium mt-1">
                    {extraCurricular.title}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>{extraCurricular.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {extraCurricular.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </MotionItem>
        </MotionContainer>
      </div>
    </section>
  );
}