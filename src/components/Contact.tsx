import { personalInfo } from "@/data/cv";
import { Mail, Phone, Linkedin, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
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
    <section id="contact" className="py-8 pb-16">
      <div className="container">
        <div className="cv-card">
          <h1 className="mb-2">Contact</h1>
          <p className="text-muted-foreground mb-6">Best ways to reach me.</p>

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
                {personalInfo.linkedinDisplay}
              </a>
            </span>
            <span className="chip">
              <MapPin size={14} />
              Location: {personalInfo.location}, United Kingdom
            </span>
          </div>

          <hr className="cv-hr" />

          <p className="text-foreground mb-6">
            Prefer email for opportunities and project discussions. I usually respond quickly.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary"
            >
              Email me
            </a>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
