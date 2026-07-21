import React from "react";
import { Project } from "../data/projects";

interface Props {
  projectA: Project;
  projectB: Project;
}

export default function CombinedMark({ projectA, projectB }: Props) {
  return (
    <section className="relative bg-[#070707] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-sm font-mono tracking-widest text-neutral-400 uppercase">Featured Pairing</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">A Combined Narrative: {projectA.client} & {projectB.client}</h2>
          <p className="text-neutral-400 mt-3 max-w-2xl mx-auto">A professional synthesis of two brand transformations that highlights complementary strategy, shared craft, and contrasting visual systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Project A */}
          <div className="rounded-2xl bg-gradient-to-br p-6" style={{ background: `linear-gradient(180deg, ${projectA.gradientFrom}10, ${projectA.gradientTo}06)` }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg" style={{ background: projectA.accentColor }} />
              <div>
                <div className="text-xs font-mono tracking-widest text-neutral-300">{projectA.client}</div>
                <h3 className="text-xl font-bold text-white mt-1">{projectA.markDefinition.title}</h3>
                <p className="text-neutral-300 mt-2 text-sm">{projectA.markDefinition.description}</p>
              </div>
            </div>

            <div className="mt-4 rounded-md overflow-hidden h-40 bg-black/20" style={{ backgroundImage: `url(${projectA.afterImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
          </div>

          {/* Project B */}
          <div className="rounded-2xl bg-gradient-to-br p-6" style={{ background: `linear-gradient(180deg, ${projectB.gradientFrom}10, ${projectB.gradientTo}06)` }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg" style={{ background: projectB.accentColor }} />
              <div>
                <div className="text-xs font-mono tracking-widest text-neutral-300">{projectB.client}</div>
                <h3 className="text-xl font-bold text-white mt-1">{projectB.markDefinition.title}</h3>
                <p className="text-neutral-300 mt-2 text-sm">{projectB.markDefinition.description}</p>
              </div>
            </div>

            <div className="mt-4 rounded-md overflow-hidden h-40 bg-black/20" style={{ backgroundImage: `url(${projectB.afterImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
