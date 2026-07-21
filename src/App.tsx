import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import ProjectsIntro from "./components/ProjectsIntro";
import ProjectCaseStudy from "./components/ProjectCaseStudy";
import Footer from "./components/Footer";
import { projects } from "./data/projects";

export default function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-[#080808] min-h-screen">
      <Navigation />
      <Hero />
      <ProjectsIntro />

      {/* Case Studies */}
      <div>
        {projects.map((project, index) => (
          <ProjectCaseStudy
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* Final CTA */}
      <section className="bg-[#0d0d0d] py-32 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #C4622D 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase mb-6">
              Ready for your metamorphosis?
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              What's your{" "}
              <span
                className="italic font-light pr-4 pb-1"
                style={{
                  background: "linear-gradient(135deg, #C4622D, #E8A87C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                buried truth?
              </span>
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Every great brand transformation starts with a single honest conversation.
              Let's find what makes you irreplaceable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 text-sm font-semibold text-white rounded-full cursor-pointer"
                style={{ background: "linear-gradient(135deg, #C4622D, #E8935A)" }}
              >
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 text-sm font-semibold text-neutral-300 rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer"
              >
                Download Our Process Deck
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
