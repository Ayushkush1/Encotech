import { ClipboardCheck, Settings, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Sign Up Online",
    description: "Complete our simple online form in under 5 minutes. No paperwork, no hassle.",
  },
  {
    icon: Settings,
    step: "02",
    title: "We Handle the Switch",
    description: "Our team coordinates everything with your current provider. Zero downtime guaranteed.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy Clean Energy",
    description: "Start powering your life with 100% renewable energy and watch your savings grow.",
  },
];

const HowItWorksSection = () => {
  return (
    <motion.section
      className="py-24 bg-white relative overflow-hidden px-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 140, damping: 22 }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-tint text-brand text-xs font-semibold rounded-full mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl  font-bold text-black/95 mb-4">
            Switch in Three Simple Steps
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Making the transition to clean energy has never been easier. We've streamlined the entire process.
          </p>
        </div>

        <motion.div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 20 }}>
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-brand-tint via-brand to-brand-tint" />
          
          {steps.map((step, index) => (
            <motion.div key={step.step} className="relative text-center group" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.07 * index }}>
              <div className="relative inline-flex mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand to-brand-700 flex items-center justify-center shadow-lg shadow-brand/25 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-brand flex items-center justify-center text-sm font-bold text-brand">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;
