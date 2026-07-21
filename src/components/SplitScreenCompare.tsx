import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  beforeImage: string;
  afterImage: string;
  beforeDescription: string;
  afterDescription: string;
}

export default function SplitScreenCompare({
  beforeImage,
  afterImage,
  beforeDescription,
  afterDescription,
}: Props) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setSliderPos((x / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div className="my-16">
      <div className="text-center mb-8">
        <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
          Interactive Comparison
        </span>
        <h3 className="text-xl font-bold text-white mt-2">Drag to Compare</h3>
      </div>

      <div
        ref={containerRef}
        className="relative h-80 md:h-[480px] rounded-3xl overflow-hidden cursor-col-resize select-none border border-neutral-800"
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {/* AFTER (full background) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        />

        {/* BEFORE (clipped left side) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${beforeImage})`,
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            transition: isDragging ? "none" : "clip-path 0.05s",
          }}
        />

        {/* Grainy overlay on before side */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 40%)`,
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}
        />

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)] z-10"
          style={{ left: `${sliderPos}%`, transition: isDragging ? "none" : "left 0.05s" }}
        >
          {/* Slider handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center cursor-col-resize z-20"
            onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); }}
            onTouchStart={() => setIsDragging(true)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 8L3 10L6 12" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 8L17 10L14 12" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="3" y1="10" x2="17" y2="10" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <motion.div
          className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 text-neutral-300 backdrop-blur"
          style={{ opacity: sliderPos > 15 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          Before
        </motion.div>
        <motion.div
          className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur"
          style={{ opacity: sliderPos < 85 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          After
        </motion.div>

        {/* Bottom descriptions */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex gap-4">
          <div
            className="flex-1 bg-black/80 backdrop-blur rounded-xl p-3"
            style={{
              opacity: sliderPos > 20 ? 1 : 0,
              transition: "opacity 0.3s",
              maxWidth: `${sliderPos - 5}%`,
              overflow: "hidden",
            }}
          >
            <p className="text-neutral-300 text-xs leading-relaxed line-clamp-2">{beforeDescription}</p>
          </div>
          <div
            className="flex-1 bg-white/10 backdrop-blur rounded-xl p-3 ml-auto"
            style={{
              opacity: sliderPos < 80 ? 1 : 0,
              transition: "opacity 0.3s",
              maxWidth: `${95 - sliderPos}%`,
              overflow: "hidden",
            }}
          >
            <p className="text-white text-xs leading-relaxed line-clamp-2">{afterDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
