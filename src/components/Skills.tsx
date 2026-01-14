import { useState, useMemo } from "react";
import { skills } from "@/data/cv";
import { Search } from "lucide-react";

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    if (!searchQuery.trim()) return skills;
    const query = searchQuery.toLowerCase();
    return skills.filter((skill) => skill.toLowerCase().includes(query));
  }, [searchQuery]);

  return (
    <section id="skills" className="py-8">
      <div className="container">
        <div className="cv-card">
          <h1 className="mb-2">Skills</h1>
          <p className="text-muted-foreground mb-4">Search and filter.</p>

          {/* Search input */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., communication, teamwork)..."
              className="cv-input pl-10"
              aria-label="Search skills"
            />
          </div>

          {/* Skills pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {filteredSkills.map((skill) => (
              <span key={skill} className="pill">
                {skill}
              </span>
            ))}
          </div>

          {/* Count */}
          <p className="text-sm text-muted-foreground mt-4">
            Showing {filteredSkills.length} skill(s).
          </p>
        </div>
      </div>
    </section>
  );
}
