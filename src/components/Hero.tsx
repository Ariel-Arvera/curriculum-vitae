import { personalInfo, sections, timelineUpdates } from "@/data/cv";
import { Mail, Linkedin } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const latestUpdates = timelineUpdates.slice(0, 3);

  return (
    <section id="home" className="pt-[calc(var(--nav-height)+1.5rem)] pb-8">
      <div className="container space-y-6">
        {/* Main Hero Card */}
        <div className="cv-card animate-fade-in">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Profile Image */}
            <a
              href={personalInfo.profileImage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open profile picture"
              className="flex-shrink-0"
            >
              <img 
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} profile photo`}
                className="profile-img"
              />
            </a>

            <div className="flex-1">
              <h1 className="mb-2">Hi, I'm {personalInfo.name.split(" ")[0]}.</h1>
              <p className="text-muted-foreground">
                {personalInfo.title} • {personalInfo.location} • {personalInfo.tagline}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mt-5">
                <button
                  onClick={() => onNavigate("timeline")}
                  className="btn-primary"
                >
                  Latest updates
                </button>
                <button
                  onClick={() => onNavigate("contact")}
                  className="btn-secondary"
                >
                  Contact
                </button>
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Download CV
                </a>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="chip">
                  <Mail size={14} />
                  Email:{" "}
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </span>
                <span className="chip">
                  <Linkedin size={14} />
                  LinkedIn:{" "}
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    View profile
                  </a>
                </span>
                <span className="chip">
                  <span className="badge">{personalInfo.availability}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="cv-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="mb-1">Explore</h2>
          <p className="text-muted-foreground text-sm">Pick a section.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(section.id);
                }}
                className="topic-card"
              >
                <div className="topic-card-title">{section.title}</div>
                <div className="topic-card-desc">{section.desc}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Latest Updates Preview */}
        <div className="cv-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="mb-0">Latest updates</h2>
            <a
              href="#timeline"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("timeline");
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View all →
            </a>
          </div>

          <div className="space-y-3">
            {latestUpdates.map((update, i) => (
              <div key={i} className="timeline-card">
                <div className="flex items-start justify-between gap-4">
                  <p className="timeline-title">{update.title}</p>
                  <span className="timeline-date">{update.date}</span>
                </div>
                <p className="timeline-text">{update.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {update.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
