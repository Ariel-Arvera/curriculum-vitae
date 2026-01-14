import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineUpdates, allTags } from "@/data/cv";
import { Search, ExternalLink, Filter, X, ChevronDown } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { MotionContainer, MotionItem } from "./ui/motion";

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

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTag("");
  };

  const hasFilters = searchQuery || selectedTag;

  return (
    <section id="timeline" className="section">
      <div className="container">
        <SectionHeader
          title="Timeline"
          subtitle="Regular updates on projects, learning, and milestones"
        />

        <MotionContainer className="max-w-4xl mx-auto">
          <MotionItem>
            <div className="card">
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {/* Search */}
                <div className="relative flex-1">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search updates..."
                    className="input pl-12"
                    aria-label="Search timeline"
                  />
                </div>

                {/* Tag filter */}
                <div className="relative sm:w-48">
                  <Filter
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  />
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="select pl-10"
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

                {/* Clear filters */}
                <AnimatePresence>
                  {hasFilters && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={clearFilters}
                      className="btn-ghost sm:w-auto"
                    >
                      <X size={16} />
                      Clear
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              <div className="divider" />

              {/* Timeline items */}
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {displayedUpdates.map((update, i) => (
                    <motion.div
                      key={update.title}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: i * 0.05 }}
                      className="timeline-card"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 className="timeline-title">{update.title}</h4>
                        <span className="timeline-date">{update.date}</span>
                      </div>

                      <p className="timeline-text">{update.description}</p>

                      <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
                        <div className="flex flex-wrap gap-2">
                          {update.tags.map((tag) => (
                            <motion.button
                              key={tag}
                              onClick={() => setSelectedTag(tag)}
                              className={`pill-interactive text-xs ${
                                selectedTag === tag
                                  ? "bg-primary/10 text-primary border-primary/30"
                                  : ""
                              }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {tag}
                            </motion.button>
                          ))}
                        </div>

                        {update.link && (
                          <motion.a
                            href={update.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline underline-offset-2 inline-flex items-center gap-1 font-medium"
                            whileHover={{ x: 3 }}
                          >
                            {update.link.label}
                            <ExternalLink size={14} />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Empty state */}
              {displayedUpdates.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Search
                    size={32}
                    className="mx-auto text-muted-foreground mb-3"
                  />
                  <p className="text-muted-foreground mb-2">
                    No updates found for your filters
                  </p>
                  <button
                    onClick={clearFilters}
                    className="text-primary hover:underline underline-offset-2 text-sm"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between gap-4 mt-6 pt-6 border-t border-border flex-wrap">
                <p className="text-sm text-muted-foreground">
                  Showing {displayedUpdates.length} of {filteredUpdates.length}{" "}
                  update(s)
                </p>
                {filteredUpdates.length > 5 && (
                  <motion.button
                    onClick={() => setShowAll(!showAll)}
                    className="btn-secondary text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {showAll ? "Show less" : "Load more"}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${showAll ? "rotate-180" : ""}`}
                    />
                  </motion.button>
                )}
              </div>
            </div>
          </MotionItem>
        </MotionContainer>
      </div>
    </section>
  );
}
