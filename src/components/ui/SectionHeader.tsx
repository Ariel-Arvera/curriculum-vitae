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
      className={`section-header ${
        align === "center" ? "text-center" : ""
      } ${className}`}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
}
