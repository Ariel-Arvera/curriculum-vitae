import { motion } from "framer-motion";
import { personalInfo, sections, timelineUpdates } from "@/data/cv";
import {
  Mail,
  Linkedin,
  MapPin,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";
import { MotionContainer, MotionItem } from "./ui/motion";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const latestUpdates = timelineUpdates.slice(0, 3);

  return (
    <section
      id="home"
      className="min-h-screen pt-[var(--nav-height)] flex items-center"
    >
      <div className="container py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <MotionContainer className="space-y-8">
            {/* Availability badge */}
            <MotionItem>
              <motion.div
                className="inline-flex items-center gap-2 badge"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                {personalInfo.availability}
              </motion.div>
            </MotionItem>

            {/* Main heading */}
            <MotionItem>
              <h1 className="text-foreground">
                Hi, I'm{" "}
                <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
                <span className="text-muted-foreground">.</span>
              </h1>
            </MotionItem>

            {/* Subtitle */}
            <MotionItem>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                {personalInfo.title} student based in {personalInfo.location}.{" "}
                <span className="text-foreground font-medium">
                  {personalInfo.tagline}
                </span>
              </p>
            </MotionItem>

            {/* Contact chips */}
            <MotionItem>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="chip hover:border-primary/30 transition-colors"
                >
                  <Mail size={16} className="text-primary" />
                  <span className="text-foreground">{personalInfo.email}</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip hover:border-primary/30 transition-colors"
                >
                  <Linkedin size={16} className="text-primary" />
                  <span className="text-foreground">LinkedIn</span>
                </a>
                <span className="chip">
                  <MapPin size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{personalInfo.location}, UK</span>
                </span>
              </div>
            </MotionItem>

            {/* CTA buttons */}
            <MotionItem>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => onNavigate("contact")}
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in touch
                  <ArrowRight size={18} />
                </motion.button>
                <motion.a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  Download CV
                </motion.a>
              </div>
            </MotionItem>
          </MotionContainer>

          {/* Right - Profile & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Profile image */}
            <motion.div
              className="relative mb-8 flex justify-center lg:justify-end"
              whileHover={{ scale: 1.02 }}
            >
              <a
                href={personalInfo.profileImage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View profile picture"
              >
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} profile photo`}
                  className="profile-img w-40 h-40 md:w-48 md:h-48"
                />
              </a>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/10 -z-10 blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-accent/10 -z-10 blur-2xl" />
            </motion.div>

            {/* Quick explore cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-primary" />
                <h3 className="text-lg font-semibold">Explore</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {sections.slice(0, 4).map((section, index) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(section.id);
                    }}
                    className="topic-card p-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <span className="font-medium text-foreground text-sm">
                      {section.title}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {section.desc}
                    </p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Latest Updates Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Latest Updates</h3>
            <motion.a
              href="#timeline"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("timeline");
              }}
              className="text-sm text-primary font-medium hover:underline underline-offset-4 inline-flex items-center gap-1"
              whileHover={{ x: 5 }}
            >
              View all
              <ArrowRight size={14} />
            </motion.a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {latestUpdates.map((update, i) => (
              <motion.div
                key={i}
                className="card-interactive"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {update.tags.map((tag) => (
                    <span key={tag} className="pill text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {update.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {update.description}
                </p>
                <p className="text-xs text-muted-foreground mt-3">{update.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
