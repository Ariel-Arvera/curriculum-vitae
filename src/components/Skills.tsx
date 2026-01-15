import { useState, useMemo } from "react";
import { skills } from "@/data/cv";
import { Search } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader"; //agregado

// export default function Skills() {
//   const [searchQuery, setSearchQuery] = useState("");
export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    if (!searchQuery.trim()) return skills;
    const query = searchQuery.toLowerCase();
    return skills.filter((skill) => skill.toLowerCase().includes(query));
  }, [searchQuery]);

  // return (
  // <section id="skills" className="py-8"> ---------------------------------------------
  //   <div className="container">
  //     <div className="cv-card">
  //       <h1 className="mb-2">Habilidades</h1>
  //       <p className="text-muted-foreground mb-4">Busquedas y Filtros.</p>

  //       {/* Search input */}
  //       <div className="relative">
  //         <Search
  //           size={18}
  //           className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
  //         />
  //         <input
  //           type="text"
  //           value={searchQuery}
  //           onChange={(e) => setSearchQuery(e.target.value)}
  //           placeholder="Busqueda"
  //           className="cv-input pl-10"
  //           aria-label="Search skills"
  //         />
  //       </div>

  //       {/* Skills pills */}
  //       <div className="flex flex-wrap gap-2 mt-4">
  //         {filteredSkills.map((skill) => (
  //           <span key={skill} className="pill">
  //             {skill}
  //           </span>
  //         ))}
  //       </div>

  //       {/* Count */}
  //       <p className="text-sm text-muted-foreground mt-4">
  //         Mostrando {filteredSkills.length} de {skills.length} habilidades.
  //       </p>
  //     </div>
  //   </div>
  // </section>--------------------------
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          title="Habilidades"
          subtitle="Mis habilidades técnicas y blandas."
        />

        <div className="card">
          {/* Search input */}
          <div className="relative mb-6">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar habilidades..."
              className="input pl-10"
              aria-label="Buscar habilidades"
            />
          </div>

          {/* Skills pills */}
          <div className="flex flex-wrap gap-2">
            {filteredSkills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>

          {/* Count */}
          <p className="text-sm text-muted-foreground mt-6 pt-4 border-t border-border">
            Mostrando {filteredSkills.length} de {skills.length} habilidades.
          </p>
        </div>
      </div>
    </section>
  );
}
