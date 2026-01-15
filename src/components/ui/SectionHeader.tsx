// import { motion } from "framer-motion";
// import { fadeInUp } from "./motion";

// interface SectionHeaderProps {
//   title: string;
//   subtitle?: string;
//   align?: "left" | "center";
//   className?: string;
// }

// export function SectionHeader({
//   title,
//   subtitle,
//   align = "left",
//   className = "",
// }: SectionHeaderProps) {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-50px" }}
//       variants={fadeInUp}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className={`section-header ${
//         align === "center" ? "text-center" : ""
//       } ${className}`}
//     >
//       <h2 className="section-title">{title}</h2>
//       {subtitle && <p className="section-subtitle">{subtitle}</p>}
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";
import { fadeInUp } from "./motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      {/* Título más grande y visible */}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        {title}
      </h2>

      {/* Línea decorativa debajo del título */}
      <div className="h-1 w-16 bg-primary rounded-full mb-6"></div>

      {/* Subtítulo */}
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}