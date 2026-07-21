import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-neutral-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
                style={{ background: "linear-gradient(135deg, #C4622D, #E8935A)" }}
              >
                M
              </div>
              <div>
                <div className="text-white font-bold">Metamorphosis Studio</div>
                <div className="text-neutral-600 text-xs">Brand Transformation</div>
              </div>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
              We help ambitious brands excavate their buried truth and rebuild into something
              the world can't ignore. Every project begins with a question: what are you{" "}
              <em className="text-neutral-400">really</em> about?
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Case Studies
            </h4>
            <ul className="space-y-3">
              {["BrewCo", "Nova Systems", "Verde Collective"].map((name) => (
                <li key={name}>
                  <span className="text-neutral-500 text-sm hover:text-neutral-300 transition-colors cursor-pointer">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">
            © 2024 Metamorphosis Studio. All transformations reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "Dribbble", "LinkedIn", "Are.na"].map((link) => (
              <motion.span
                key={link}
                whileHover={{ color: "#ffffff" }}
                className="text-neutral-600 text-xs cursor-pointer transition-colors"
              >
                {link}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
