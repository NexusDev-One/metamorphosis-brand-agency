import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function ProjectsIntro() {
  return (
    <div
      id="projects"
      className="bg-[#0d0d0d] py-24 px-6 border-t border-neutral-900"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-neutral-800" />
            <span className="text-xs font-mono text-neutral-500 tracking-[0.3em] uppercase">
              Selected Works
            </span>
            <div className="h-px w-16 bg-neutral-800" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Three Metamorphoses
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Each story begins in the past and ends in possibility. Scroll through each case
            study to witness the full transformation.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors bg-neutral-900/50"
              onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${p.afterImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                <div
                  className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: p.accentColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs text-neutral-600 font-mono tracking-widest uppercase mb-2">
                  {p.industry}
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{p.client}</h3>
                <p className="text-neutral-500 text-sm">{p.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
