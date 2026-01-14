import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { navLinks, personalInfo } from "@/data/cv";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ activeSection, onNavigate, isDark, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[var(--nav-height)] bg-nav-bg border-b transition-shadow duration-200 ${
          scrolled ? "shadow-sm border-nav-border" : "border-transparent"
        }`}
      >
        <div className="container h-full flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="flex flex-col hover:opacity-80 transition-opacity"
          >
            <span className="font-bold text-foreground">{personalInfo.name}</span>
            <span className="text-xs text-muted-foreground">
              {personalInfo.title} • {personalInfo.location}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobileMenu"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              <span>Menu</span>
            </button>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              <span className="hidden sm:inline">Theme</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={`mobile-menu ${mobileMenuOpen ? "open" : "closed"}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
              }}
              className={`nav-link text-center py-3 ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
