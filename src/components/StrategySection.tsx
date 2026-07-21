import { motion } from "framer-motion";

interface Props {
  strategy: string[];
  sketches: { label: string; description: string }[];
  accentColor: string;
}

export default function StrategySection({ strategy, sketches, accentColor }: Props) {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-16">
      {/* Strategy column */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: accentColor }}
          >
            S
          </div>
          <div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Phase 01</div>
            <h3 className="text-lg font-bold text-white">Strategic Foundation</h3>
          </div>
        </div>
        <div className="space-y-4">
          {strategy.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              className="flex gap-4 group"
            >
              <div className="flex-shrink-0 mt-1">
                <div
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
                  style={{ borderColor: accentColor }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ background: accentColor }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                    viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                  />
                </div>
                {i < strategy.length - 1 && (
                  <div
                    className="w-px h-4 ml-2.5 mt-1"
                    style={{ background: `${accentColor}30` }}
                  />
                )}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sketches column */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: accentColor }}
          >
            D
          </div>
          <div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Phase 02</div>
            <h3 className="text-lg font-bold text-white">Design Exploration</h3>
          </div>
        </div>
        <div className="space-y-4">
          {sketches.map((sketch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              className="border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors group relative overflow-hidden"
            >
              {/* Sketch background decoration */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-5 rounded-full blur-2xl"
                style={{ background: accentColor }}
              />
              {/* Sketch grid lines */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 20px)",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-mono font-bold tracking-widest"
                    style={{ color: accentColor }}
                  >
                    0{i + 1}
                  </span>
                  <div className="h-px flex-1 bg-neutral-800" />
                </div>
                <h4 className="font-semibold text-white text-sm mb-2">{sketch.label}</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">{sketch.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
