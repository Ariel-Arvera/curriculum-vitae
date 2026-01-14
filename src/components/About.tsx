import { personalInfo, aboutText } from "@/data/cv";
import { Mail, Phone, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = async (text: string, type: "email" | "phone") => {
    await navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="about" className="py-8">
      <div className="container">
        <div className="cv-card">
          {/* Header with profile */}
          <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
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

            <div>
              <h1 className="mb-2">About</h1>
              <p className="text-muted-foreground">
                Full-time {personalInfo.title} student • {personalInfo.location}, United Kingdom
              </p>
              <span className="badge mt-2">{personalInfo.availability}</span>
            </div>
          </div>

          {/* Contact chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="chip">
              <Mail size={14} />
              Email:{" "}
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <button
                onClick={() => handleCopy(personalInfo.email, "email")}
                className="copy-btn"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </span>
            <span className="chip">
              <Phone size={14} />
              Phone: {personalInfo.phone}
              <button
                onClick={() => handleCopy(personalInfo.phone, "phone")}
                className="copy-btn"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check size={12} /> : <Copy size={12} />}
                {copiedPhone ? "Copied!" : "Copy"}
              </button>
            </span>
            <span className="chip">
              <Linkedin size={14} />
              LinkedIn:{" "}
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                Open profile
              </a>
            </span>
          </div>

          {/* About text */}
          <p className="text-foreground leading-relaxed mb-6">{aboutText}</p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download CV (PDF)
            </a>
            <button
              onClick={() => onNavigate("timeline")}
              className="btn-secondary"
            >
              View Timeline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
