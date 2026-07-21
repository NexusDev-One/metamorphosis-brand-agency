import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "../data/projects";

function NavLink({ project, active, onClick }: { project: Project; active: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-xs font-mono uppercase tracking-widest transition-colors duration-300 cursor-pointer"
      style={{
        color: hovered || active ? project.accentColor : "rgba(255,255,255,0.45)",
      }}
    >
      {project.client}
    </button>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Detect active project
      for (const p of projects) {
        const el = document.getElementById(p.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveProject(p.id);
            return;
          }
        }
      }
      setActiveProject(null);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const accentColor =
    projects.find((p) => p.id === activeProject)?.accentColor ?? "#C4622D";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between relative"
        animate={{
          background: scrolled ? "rgba(8,8,8,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.03 }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
            style={{ background: accentColor, transition: "background 0.5s" }}
          >
            M
          </div>
          <span className="text-white font-semibold text-sm tracking-wide hidden sm:block">
            Metamorphosis Studio
          </span>
        </motion.div>

        {/* Desktop nav — absolutely centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {projects.map((p) => (
            <NavLink key={p.id} project={p} active={activeProject === p.id} onClick={() => scrollTo(p.id)} />
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:block text-xs font-semibold text-white px-4 py-2 rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer"
          >
            Get in Touch
          </motion.button>
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              className="block w-5 h-0.5 bg-white"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-white"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-white"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>
            {projects.map((p, i) => (
              <motion.button
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(p.id)}
                className="text-2xl font-bold text-white hover:opacity-70 transition-opacity cursor-pointer"
              >
                {p.client}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
