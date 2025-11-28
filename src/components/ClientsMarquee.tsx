import { motion } from "framer-motion";

const clients = [
  { name: "Siemens", src: "https://logo.clearbit.com/siemens.com" },
  { name: "General Electric", src: "https://logo.clearbit.com/ge.com" },
  { name: "ABB", src: "https://logo.clearbit.com/abb.com" },
  { name: "Schneider Electric", src: "https://logo.clearbit.com/se.com" },
  { name: "Hitachi", src: "https://logo.clearbit.com/hitachi.com" },
  { name: "NTPC", src: "https://logo.clearbit.com/ntpc.co.in" },
  { name: "Adani", src: "https://logo.clearbit.com/adani.com" },
  { name: "Reliance", src: "https://logo.clearbit.com/ril.com" },
  { name: "Tata Power", src: "https://logo.clearbit.com/tatapower.com" },
  { name: "Suzlon", src: "https://logo.clearbit.com/suzlon.com" },
  { name: "JSW", src: "https://logo.clearbit.com/jsw.in" },
  { name: "Enel", src: "https://logo.clearbit.com/enel.com" },
  { name: "BP", src: "https://logo.clearbit.com/bp.com" },
  { name: "TotalEnergies", src: "https://logo.clearbit.com/totalenergies.com" },
  { name: "Ørsted", src: "https://logo.clearbit.com/orsted.com" }
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const sequence = reverse ? ["-50%", "0%"] : ["0%", "-50%"];
  return (
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: sequence }}
      transition={{ ease: "linear", duration: 35, repeat: Infinity }}
    >
      <div className="flex">
        {clients.map((c) => (
          <div
            key={`${c.name}-a`}
            className="mx-6 h-28 min-w-[220px]   flex items-center justify-center grayscale hover:grayscale-0 transition"
          >
            <img
              src={c.src}
              alt={c.name}
              className="h-20 w-auto object-contain opacity-90 hover:opacity-100"
              onError={(e) => (e.currentTarget.src = "/assets/logoencotec.png")}
            />
          </div>
        ))}
        {clients.map((c) => (
          <div
            key={`${c.name}-b`}
            className="mx-6 h-28 min-w-[220px]  flex items-center justify-center shadow-sm grayscale hover:grayscale-0 transition"
          >
            <img
              src={c.src}
              alt={c.name}
              className="h-20 w-auto object-contain opacity-90 hover:opacity-100"
              onError={(e) => (e.currentTarget.src = "/assets/logoencotec.png")}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ClientsMarquee() {
  return (
    <motion.section
      className="py-28 relative overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 140, damping: 22 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-brand/10 -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-brand-tint text-brand text-xs font-semibold rounded-full">Our Clients</span>
          <h3 className="mt-3 text-2xl font-bold text-black/95">Trusted by leading energy companies</h3>
          <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
            We proudly partner with global leaders across the energy spectrum to drive innovation and sustainable progress.
          </p>
        </div>
        <div className="relative pt-12">
          <Row />
          <div className="mt-6" />"
          <Row reverse />
        </div>
      </div>
    </motion.section>
  );
}
