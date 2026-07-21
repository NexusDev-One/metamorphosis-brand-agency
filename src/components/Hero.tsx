import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808] pb-32">
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{ background: "radial-gradient(circle, #C4622D, transparent)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase border border-neutral-700 rounded-full px-4 py-2">
            Brand Transformation Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6"
        >
          The Art of{" "}
          <span
            className="italic font-bold pr-2"
            style={{
              background: "linear-gradient(135deg, #C4622D, #E8A87C, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Metamorphosis
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We don't just redesign brands — we excavate their buried truth and rebuild them into
          something the world can't ignore. Scroll through our transformations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 text-sm font-semibold text-white rounded-full cursor-pointer"
            style={{ background: "linear-gradient(135deg, #C4622D, #E8935A)" }}
          >
            View Case Studies
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 text-sm font-semibold text-neutral-300 rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer"
          >
            Our Process
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator — sits above the stats bar */}
      <motion.div
        className="absolute bottom-[120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-neutral-500 tracking-widest font-mono uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-neutral-500" />
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t border-neutral-800/50 backdrop-blur-sm"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {[
            { value: "3", label: "Transformations" },
            { value: "10+", label: "Years Experience" },
            { value: "340%", label: "Avg. Engagement Lift" },
            { value: "Award-Winning", label: "Creative Direction" },
          ].map((stat, i) => (
            <div key={i} className="text-center hidden md:block">
              <div className="text-white font-bold text-lg">{stat.value}</div>
              <div className="text-neutral-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
