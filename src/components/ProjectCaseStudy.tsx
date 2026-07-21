import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Project } from "../data/projects";
import MarkDefinition from "./MarkDefinition";
import CombinedMark from "./CombinedMark";
import ColorPaletteExplorer from "./ColorPaletteExplorer";
import MetricDashboard from "./MetricDashboard";
import StrategySection from "./StrategySection";
import SplitScreenCompare from "./SplitScreenCompare";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCaseStudy({ project, index }: Props) {
  const bannerRef = useRef<HTMLDivElement>(null);

  // Scroll progress of the banner section itself
  const { scrollYProgress: bannerScroll } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"],
  });

  // Gentle typography parallax and fade out
  const textOpacity = useTransform(bannerScroll, [0, 0.5], [1, 0]);
  const textY = useTransform(bannerScroll, [0, 0.5], [0, -30]);

  // Gentle background image parallax shift
  const imageY = useTransform(bannerScroll, [0, 1], ["0%", "15%"]);

  return (
    <>
      {/* Mark Definition Section */}
      {project.markDefinition.title ? (
        index === 0 ? (
          // Combine the first and second projects into a single professional section
          (() => {
            try {
              // eslint-disable-next-line @typescript-eslint/no-var-requires
              const { projects } = require("../data/projects");
              const second = projects[1];
              if (second) {
                // @ts-ignore - dynamic import inside JSX
                return <CombinedMark projectA={project} projectB={second} />;
              }
            } catch (e) {}
            return (
              <MarkDefinition
                markTitle={project.markDefinition.title}
                markDescription={project.markDefinition.description}
                markDetails={project.markDefinition.details}
                accentColor={project.accentColor}
                accentLight={project.accentLight}
                gradientFrom={project.gradientFrom}
                gradientTo={project.gradientTo}
                previewImage={project.beforeImage}
                previewText={project.beforeDescription}
              />
            );
          })()
        ) : (
          <MarkDefinition
            markTitle={project.markDefinition.title}
            markDescription={project.markDefinition.description}
            markDetails={project.markDefinition.details}
            accentColor={project.accentColor}
            accentLight={project.accentLight}
            gradientFrom={project.gradientFrom}
            gradientTo={project.gradientTo}
            previewImage={project.beforeImage}
            previewText={project.beforeDescription}
          />
        )
      ) : null}

      {/* Case Study Container */}
      <div
        className="relative"
        id={project.id}
      >
        {/* Minimalist Natural-Scroll Banner */}
        <div
          ref={bannerRef}
          className="relative h-[75vh] w-full overflow-hidden border-b border-neutral-900 bg-[#080808]"
        >
          {/* Static Brand Image with gentle parallax */}
          <motion.div
            className="absolute inset-0 scale-110 bg-cover bg-center"
            style={{
              backgroundImage: `url(${project.beforeImage})`,
              y: imageY,
            }}
          />

          {/* Dark vignette overlay — ensures text legibility */}
          <div className="absolute inset-0 bg-black/55 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0d0d0d] z-10 pointer-events-none" />

          {/* Clean, Centered Typography */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-20 pointer-events-none"
            style={{ opacity: textOpacity, y: textY }}
          >
            <span
              className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
              style={{ color: project.accentColor }}
            >
              Case Study #{String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
              {project.client}
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-4 max-w-lg leading-relaxed">
              {project.tagline}
            </p>
            <div className="flex items-center gap-6 mt-8 text-neutral-400 font-mono text-[10px] sm:text-xs uppercase tracking-wider">
              <span>{project.industry}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <span>{project.year}</span>
            </div>
          </motion.div>
        </div>


        {/* ── Detailed Content (scrolls normally) ── */}
        <motion.div
          className="relative z-10 bg-[#0d0d0d]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
        >
          <div className="max-w-5xl mx-auto px-6 py-20">
            {/* Strategy & Sketches */}
            <StrategySection
              strategy={project.strategy}
              sketches={project.sketches}
              accentColor={project.accentColor}
            />

            {/* Split-screen drag compare */}
            <SplitScreenCompare
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeDescription={project.beforeDescription}
              afterDescription={project.afterDescription}
            />

            {/* Color palette explorer */}
            <ColorPaletteExplorer
              before={project.beforePalette}
              after={project.afterPalette}
              accentColor={project.accentColor}
            />

            {/* Metric dashboard */}
            <MetricDashboard metrics={project.metrics} accentColor={project.accentColor} />
          </div>

          {/* Section divider */}
          {index < 2 && (
            <div
              className="h-px mx-6"
              style={{
                background: `linear-gradient(90deg, transparent, ${project.accentColor}40, transparent)`,
              }}
            />
          )}
        </motion.div>
      </div>
    </>
  );
}
