import { motion } from "framer-motion";
import { personalInfo, aboutText } from "@/data/cv";
import { Mail, Phone, Linkedin, Copy, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { MotionContainer, MotionItem } from "./ui/motion";

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
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          title="About Me"
          subtitle="A quick introduction to who I am and what I do"
        />

        <MotionContainer className="grid md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <MotionItem className="md:col-span-1">
            <motion.div className="card text-center" whileHover={{ y: -5 }}>
              <motion.a
                href={personalInfo.profileImage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open profile picture"
                className="inline-block mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} profile photo`}
                  className="profile-img mx-auto"
                />
              </motion.a>

              <h3 className="text-xl font-bold text-foreground mb-1">
                {personalInfo.name}
              </h3>
              <p className="text-muted-foreground mb-4">{personalInfo.title}</p>

              <div className="badge mb-6">{personalInfo.availability}</div>

              <div className="space-y-3">
                <motion.a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download CV
                </motion.a>
                <motion.button
                  onClick={() => onNavigate("timeline")}
                  className="btn-secondary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Timeline
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          </MotionItem>

          {/* Content */}
          <MotionItem className="md:col-span-2 space-y-6">
            {/* Bio Card */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Background</h3>
              <p className="text-foreground leading-relaxed text-lg">
                {aboutText}
              </p>
            </div>

            {/* Contact Info Card */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                {/* Email */}
                <div className="chip w-full justify-between">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, "email")}
                    className="copy-btn"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                    {copiedEmail ? "Copied" : "Copy"}
                  </button>
                </div>

                {/* Phone */}
                <div className="chip w-full justify-between">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <span className="text-foreground">{personalInfo.phone}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, "phone")}
                    className="copy-btn"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                    {copiedPhone ? "Copied" : "Copy"}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="chip w-full">
                  <Linkedin size={18} className="text-primary" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline underline-offset-2"
                    >
                      View Profile →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </MotionItem>
        </MotionContainer>
      </div>
    </section>
  );
}
