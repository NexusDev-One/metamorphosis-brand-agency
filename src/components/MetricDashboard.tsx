import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Metric } from "../data/projects";

interface Props {
  metrics: Metric[];
  accentColor: string;
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return value;
}

function MetricCard({ metric, accentColor, active }: { metric: Metric; accentColor: string; active: boolean }) {
  const beforeVal = useCountUp(metric.before, 1200, active);
  const afterVal = useCountUp(metric.after, 1500, active);
  const percentage = Math.round(((metric.after - metric.before) / metric.before) * 100);
  const barWidth = Math.min(100, (metric.after / (metric.after * 1.1)) * 100);
  const beforeBarWidth = Math.min(100, (metric.before / (metric.after * 1.1)) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-colors"
    >
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="text-2xl mb-2">{metric.icon}</div>
          <div className="text-sm text-neutral-400 font-medium">{metric.label}</div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={active ? { scale: 1 } : {}}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="text-xs font-bold px-3 py-1.5 rounded-full"
          style={{ background: `${accentColor}20`, color: accentColor }}
        >
          +{percentage}%
        </motion.div>
      </div>

      {/* Before bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-neutral-600 uppercase tracking-wider font-mono">Before</span>
          <span className="text-sm font-mono text-neutral-500">
            {metric.unit.startsWith("$") ? metric.unit : ""}
            {beforeVal.toLocaleString()}
            {!metric.unit.startsWith("$") ? metric.unit : ""}
          </span>
        </div>
        <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={active ? { width: `${beforeBarWidth}%` } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="h-full bg-neutral-600 rounded-full"
          />
        </div>
      </div>

      {/* After bar */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span
            className="text-xs uppercase tracking-wider font-mono font-bold"
            style={{ color: accentColor }}
          >
            After
          </span>
          <span className="text-lg font-bold font-mono text-white">
            {metric.unit.startsWith("$") ? metric.unit : ""}
            {afterVal.toLocaleString()}
            {!metric.unit.startsWith("$") ? metric.unit : ""}
          </span>
        </div>
        <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={active ? { width: `${barWidth}%` } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${accentColor}99, ${accentColor})` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function MetricDashboard({ metrics, accentColor }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.22, rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="my-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-neutral-800" />
          <span
            className="text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: accentColor }}
          >
            Impact Metrics
          </span>
          <div className="h-px flex-1 bg-neutral-800" />
        </div>
        <h3 className="text-2xl font-bold text-white text-center">
          The Numbers Don't Lie
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            transition={{ delay: i * 0.1 }}
          >
            <MetricCard metric={metric} accentColor={accentColor} active={active} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
