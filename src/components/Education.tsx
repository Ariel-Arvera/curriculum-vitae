import { motion } from "framer-motion";
import { education } from "@/data/cv";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { MotionContainer, MotionItem } from "./ui/motion";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader
          title="Education"
          subtitle="My academic background and qualifications"
        />

        <MotionContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <MotionItem key={index}>
              <motion.div
                className="card h-full flex flex-col"
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <GraduationCap size={24} className="text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg mb-2">
                    {edu.institution}
                  </h3>
                  {edu.degree && (
                    <p className="text-primary font-medium mb-3">{edu.degree}</p>
                  )}

                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    {edu.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        {edu.location}
                      </div>
                    )}
                  </div>
                </div>

                {/* Details badge */}
                {edu.details && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="pill text-xs">{edu.details}</span>
                  </div>
                )}
              </motion.div>
            </MotionItem>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
}
