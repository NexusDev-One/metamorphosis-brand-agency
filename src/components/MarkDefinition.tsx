import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  markTitle: string;
  markDescription: string;
  markDetails: string[];
  accentColor: string;
  accentLight: string;
  gradientFrom: string;
  gradientTo: string;
  previewImage?: string;
  previewText?: string;
}

export default function MarkDefinition({
  markTitle,
  markDescription,
  markDetails,
  accentColor,
  accentLight,
  gradientFrom,
  gradientTo,
  previewImage,
  previewText,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.25]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#080808] overflow-hidden flex items-center justify-center py-20"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}15, ${accentColor}06)`,
      }}
    >
      {/* Subtle moving radial */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentColor}18 0%, transparent 60%)`,
          y: backgroundY,
        }}
      />

      {/* Decorative blobs */}
      <motion.div
        className="absolute top-8 right-8 w-80 h-80 rounded-full blur-3xl opacity-14 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${accentColor}, ${gradientFrom})` }}
        animate={{ x: [0, 24, -16, 0], y: [0, -36, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-24 left-6 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${accentColor})` }}
        animate={{ x: [0, -20, 26, 0], y: [0, 26, -18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Mark and definition */}
          <div className="text-center md:text-left">
            {/* emblem box removed */}

            <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, margin: "-15% 0px -15% 0px" }}>
              {markTitle}
            </motion.h2>

            <motion.p className="text-neutral-300 max-w-xl mb-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: false, margin: "-15% 0px -15% 0px" }}>
              {markDescription}
            </motion.p>

            <div className="grid grid-cols-1 gap-3 max-w-xl mx-auto md:mx-0">
              {markDetails.map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: accentColor }} />
                  <div className="text-neutral-200 text-sm">{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Preview of second section (background + emblem + definition text) */}
          <div>
            <motion.div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-lg relative" initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: false, margin: "-10% 0px -10% 0px" }}>
              <div className="relative h-72 md:h-80 bg-black/20">
                {previewImage ? (
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${previewImage})` }} />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br" style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }} />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-sm text-neutral-100">
                  <div className="text-xs text-neutral-300 uppercase tracking-wider mb-2">Preview — Before</div>
                  <div className="text-sm leading-tight max-h-28 overflow-hidden text-shadow">{previewText}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
