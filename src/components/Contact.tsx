import { motion } from "framer-motion";
import { personalInfo } from "@/data/cv";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Copy,
  Check,
  Send,
  Download,
} from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { MotionContainer, MotionItem } from "./ui/motion";

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

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      copyable: true,
      copyType: "email" as const,
      copied: copiedEmail,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      copyable: true,
      copyType: "phone" as const,
      copied: copiedPhone,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "View Profile",
      href: personalInfo.linkedin,
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: `${personalInfo.location}, United Kingdom`,
    },
  ];

  return (
    <section id="contact" className="section bg-muted/30">
      <div className="container">
        <SectionHeader
          title="Get in Touch"
          subtitle="I'm always open to discussing new opportunities and projects"
          align="center"
        />

        <MotionContainer className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <MotionItem>
              <div className="card h-full">
                <h3 className="text-xl font-semibold mb-6">Contact Details</h3>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.label}
                      className="chip w-full justify-between group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <method.icon size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            {method.label}
                          </p>
                          {method.href ? (
                            <a
                              href={method.href}
                              target={method.external ? "_blank" : undefined}
                              rel={method.external ? "noopener noreferrer" : undefined}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <span className="text-foreground font-medium">
                              {method.value}
                            </span>
                          )}
                        </div>
                      </div>

                      {method.copyable && (
                        <motion.button
                          onClick={() =>
                            handleCopy(
                              method.copyType === "email"
                                ? personalInfo.email
                                : personalInfo.phone,
                              method.copyType
                            )
                          }
                          className="copy-btn"
                          aria-label={`Copy ${method.label.toLowerCase()}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {method.copied ? (
                            <>
                              <Check size={14} />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              Copy
                            </>
                          )}
                        </motion.button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </MotionItem>

            {/* CTA Card */}
            <MotionItem>
              <motion.div
                className="card h-full bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Prefer email for opportunities and project discussions. I
                  usually respond within 24 hours.
                </p>

                <div className="space-y-4">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    Send me an Email
                  </motion.a>

                  <motion.a
                    href={personalInfo.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={18} />
                    Download CV
                  </motion.a>
                </div>

                {/* Social proof / availability */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {personalInfo.availability}
                    </span>
                  </div>
                </div>
              </motion.div>
            </MotionItem>
          </div>

          {/* Footer */}
          <MotionItem>
            <motion.footer
              className="text-center mt-16 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} {personalInfo.name}. Built with ♥
                using React & Tailwind CSS.
              </p>
            </motion.footer>
          </MotionItem>
        </MotionContainer>
      </div>
    </section>
  );
}
