import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const references = [
  {
    category: "ENERGY",
    title: "Power Plant Spares",
    client: "Coastal Energen Pvt. Limited",
        image: "/assets/wind-turbines.jpg",

    highlight: false,
  },
  {
    category: "ENERGY",
    title: "Overhauling Services",
    client: "Bharat Aluminium Company Limited",
    image: "/assets/solar-farm.jpg",
    highlight: true,
  },
  {
    category: "ENERGY",
    title: "Operation & Maintenance Contract",
    client: "Uttar Pradesh Power Transmission Corp. Limited",
    image: "/assets/ev-charging.jpg",
    highlight: false,
  },
  {
    category: "ENERGY",
    title: "Wind Farm Upgrades",
    client: "Great Plains Energy",
    image: "/assets/wind-turbines.jpg",
    highlight: false,
  },
  {
    category: "ENERGY",
    title: "Solar Inverter Replacement",
    client: "SunEdge Utilities",
    image: "/assets/solar-farm.jpg",
    highlight: false,
  },
  {
    category: "ENERGY",
    title: "EV Charging Rollout",
    client: "MetroCharge Network",
    image: "/assets/ev-charging.jpg",
    highlight: false,
  },
  {
    category: "ENERGY",
    title: "Thermal Plant Retrofit",
    client: "Riverbend Power",
    image: "/assets/wind-turbines.jpg",
    highlight: true,
  },
  {
    category: "ENERGY",
    title: "Battery Storage Expansion",
    client: "VoltGrid Corp.",
    image: "/assets/solar-farm.jpg",
    highlight: false,
  },
  {
    category: "ENERGY",
    title: "Transmission Line Audit",
    client: "Northline Transmission",
    image: "/assets/ev-charging.jpg",
    highlight: false,
  },
];

export default function ReferencesSection() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? references : references.slice(0, 3);
  return (
    <motion.section
      className="py-24 bg-gradient-to-br from-[#c61b5a]/5 via-[#c61b5a]/5 to-white relative overflow-hidden px-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 140, damping: 22 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-brand/10 -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-bl from-brand/25 via-brand-700/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-gradient-to-tr from-brand/25 via-brand-700/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-brand-tint text-brand text-xs font-semibold rounded-full mb-4">OUR REFERENCES</span>
          <h2 className="text-4xl font-bold text-black/95">Recent Projects</h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Discover how we’ve helped leading energy providers modernize infrastructure, boost efficiency, and accelerate the transition to cleaner power.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", stiffness: 120, damping: 20 }}
        >
          <AnimatePresence>
          {visible.map((ref, index) => (
            <motion.article
              key={ref.title}
              className={
                ref.highlight
                  ? "relative rounded-2xl overflow-hidden bg-brand text-white shadow-lg"
                  : "relative rounded-2xl overflow-hidden bg-white border border-gray-200/70 shadow-sm"
              }
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.07 * index }}
            >
              <div className={ref.highlight ? "p-6" : "p-6"}>
                <div className={ref.highlight ? "text-white/80 text-xs font-semibold mb-3" : "text-gray-600 text-xs font-semibold mb-3"}>{ref.category}</div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className={ref.highlight ? "text-lg font-semibold" : "text-lg font-semibold text-gray-900"}>{ref.title}</h3>
                    <p className={ref.highlight ? "text-sm text-white/90" : "text-sm text-gray-700"}>{ref.client}</p>
                  </div>
                  <button className={ref.highlight ? "w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center" : "w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center"}>
                    <ArrowRight className={ref.highlight ? "w-5 h-5 text-white" : "w-5 h-5 text-brand"} />
                  </button>
                </div>
              </div>

              <div className={ref.highlight ? "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" : ""} />
              <img src={ref.image} alt={ref.title} className={ref.highlight ? "w-full h-48 object-cover" : "w-full h-48 object-cover"} />
            </motion.article>
          ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button size="lg" onClick={() => setExpanded((v) => !v)} className="group">
            {expanded ? "Show Fewer" : "View All References"}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.section>
  );
}