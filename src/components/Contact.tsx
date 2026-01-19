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
      label: "E-mail",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      copyable: true,
      copyType: "email" as const,
      copied: copiedEmail,
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: personalInfo.phone,
      copyable: true,
      copyType: "phone" as const,
      copied: copiedPhone,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ver Perfil",
      href: personalInfo.linkedin,
      external: true,
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: `${personalInfo.location}`,
    },
  ];

  return (
    <section id="contact" className="section bg-muted/30">
      <div className="container">
        <SectionHeader
          title="Contacto"
          subtitle="Siempre estoy abierto a discutir nuevas oportunidades y proyectos."
          align="center"
        />

        <MotionContainer className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <MotionItem>
              <div className="card h-full">
                <h3 className="text-xl font-semibold mb-6">Detalle de contacto</h3>

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
                <h3 className="text-xl font-semibold mb-4">Contáctame!</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Tiempo de respuesta menor que un <span className="italic">npm run deploy</span>...
                </p>

                <div className="space-y-4">

                  <motion.a
                    href={`https://wa.me/${personalInfo.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                    </svg>
                    Enviame un WhatsApp!👍
                  </motion.a>

                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    Enviame un E-mail 👌
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
                    Descarga mi CV 😁
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
                © {new Date().getFullYear()} {personalInfo.name}. Hecho con ♥
                — Usando React & Tailwind CSS.
              </p>
            </motion.footer>
          </MotionItem>
        </MotionContainer>
      </div>
    </section>
  );
}
