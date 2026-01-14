import { useState, useMemo } from "react";
import { timelineUpdates, allTags } from "@/data/cv";
import { Search, ExternalLink } from "lucide-react";

export default function Timeline() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredUpdates = useMemo(() => {
    let results = timelineUpdates;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (update) =>
          update.title.toLowerCase().includes(query) ||
          update.description.toLowerCase().includes(query) ||
          update.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedTag) {
      results = results.filter((update) => update.tags.includes(selectedTag));
    }

    return results;
  }, [searchQuery, selectedTag]);

  const displayedUpdates = showAll ? filteredUpdates : filteredUpdates.slice(0, 5);

  return (
    <section id="timeline" className="py-8">
      <div className="container">
        <div className="cv-card">
          <h1 className="mb-2">Timeline</h1>
          <p className="text-muted-foreground mb-4">
            Regular updates on projects, learning, and milestones.
          </p>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search updates (e.g., API, React, Python)..."
                className="cv-input pl-10"
                aria-label="Search timeline"
              />
            </div>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="cv-input sm:w-56"
              aria-label="Filter by tag"
            >
              <option value="">All tags</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          <hr className="cv-hr" />

          {/* Timeline items */}
          <div className="space-y-3">
            {displayedUpdates.map((update, i) => (
              <div key={i} className="timeline-card">
                <div className="flex items-start justify-between gap-4">
                  <p className="timeline-title">{update.title}</p>
                  <span className="timeline-date">{update.date}</span>
                </div>
                <p className="timeline-text">{update.description}</p>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  {update.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className="pill cursor-pointer hover:opacity-80 transition-opacity"
                      title={`Filter by ${tag}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                {update.link && (
                  <div className="mt-3">
                    <a
                      href={update.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {update.link.label}
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-4 mt-4 flex-wrap">
            <p className="text-sm text-muted-foreground">
              Showing {displayedUpdates.length} of {filteredUpdates.length} update(s).
            </p>
            {filteredUpdates.length > 5 && !showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="btn-secondary"
              >
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
