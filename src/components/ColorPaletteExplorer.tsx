import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ColorSwatch } from "../data/projects";

interface Props {
  before: ColorSwatch[];
  after: ColorSwatch[];
  accentColor: string;
}

export default function ColorPaletteExplorer({ before, after, accentColor }: Props) {
  const [mode, setMode] = useState<"before" | "after">("before");
  const [hovered, setHovered] = useState<ColorSwatch | null>(null);
  const active = mode === "before" ? before : after;

  return (
    <div className="my-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Color Palette Explorer</h3>
          <p className="text-sm text-neutral-500">
            Hover over swatches to explore each color's role
          </p>
        </div>
        <div className="flex items-center gap-1 bg-neutral-900 rounded-full p-1 border border-neutral-800">
          {(["before", "after"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                mode === m ? "text-white shadow-lg" : "text-neutral-500 hover:text-neutral-300"
              }`}
              style={mode === m ? { background: accentColor } : {}}
            >
              {m === "before" ? "Before" : "After"}
            </button>
          ))}
        </div>
      </div>

      {/* Large color blocks */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex gap-3 h-40 rounded-2xl overflow-hidden"
          >
            {active.map((swatch) => (
              <motion.div
                key={swatch.hex}
                className="flex-1 relative cursor-pointer group"
                style={{ backgroundColor: swatch.hex }}
                initial={{ flex: 1 }}
                whileHover={{ flex: 2.5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onHoverStart={() => setHovered(swatch)}
                onHoverEnd={() => setHovered(null)}
              >
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="text-xs font-bold tracking-widest uppercase mb-1"
                    style={{
                      color: isLight(swatch.hex) ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.9)",
                    }}
                  >
                    {swatch.usage}
                  </div>
                  <div
                    className="font-bold text-sm"
                    style={{
                      color: isLight(swatch.hex) ? "#000" : "#fff",
                    }}
                  >
                    {swatch.name}
                  </div>
                  <div
                    className="text-xs font-mono mt-1"
                    style={{
                      color: isLight(swatch.hex) ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {swatch.hex}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Hovered swatch detail */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="mt-4 flex items-center gap-4 bg-neutral-900/80 backdrop-blur rounded-xl px-5 py-3 border border-neutral-800"
            >
              <div
                className="w-10 h-10 rounded-lg shadow-lg flex-shrink-0"
                style={{ backgroundColor: hovered.hex }}
              />
              <div>
                <div className="text-white font-semibold text-sm">{hovered.name}</div>
                <div className="text-neutral-400 text-xs font-mono">{hovered.hex}</div>
              </div>
              <div className="ml-auto text-xs text-neutral-500 uppercase tracking-wider">
                {hovered.usage}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Swatch dots navigation */}
      <div className="mt-6 flex gap-3 flex-wrap">
        {active.map((swatch) => (
          <motion.div
            key={swatch.hex}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 cursor-pointer group"
            onHoverStart={() => setHovered(swatch)}
            onHoverEnd={() => setHovered(null)}
          >
            <div
              className="w-6 h-6 rounded-full shadow-md border-2 border-neutral-800 group-hover:border-neutral-500 transition-colors"
              style={{ backgroundColor: swatch.hex }}
            />
            <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
              {swatch.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}
