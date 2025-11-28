import { ArrowRight, Leaf, Recycle, Fuel, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import solarFarm from "/assets/solar-farm.jpg";
import evCharging from "/assets/ev-charging.jpg";
import windTurbines from "/assets/wind-turbines.jpg";

const solutions = [
  { title: "Reduce Solutions", image: solarFarm, description: "Cut energy waste" },
  { title: "Reshape Solutions", image: evCharging, description: "Transform usage patterns" },
  { title: "Refuel Solutions", image: windTurbines, description: "Switch to clean sources" },
  { title: "Regenerate Solutions", image: solarFarm, description: "Restore & renew" },
];

const solutionLinks = [
  { title: "Reduce Solutions", icon: Leaf, description: "Minimize energy consumption and waste" },
  { title: "Reshape Solutions", icon: Recycle, description: "Transform how you use energy daily" },
  { title: "Refuel Solutions", icon: Fuel, description: "Switch to renewable energy sources" },
  { title: "Regenerate Solutions", icon: Sparkles, description: "Restore and renew ecosystems" },
];

const SolutionsSection = () => {
  return (
    <motion.section
      className="relative bg-white py-20 px-28 "
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 140, damping: 22 }}
    >
      <div className="container mx-auto px-4">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 20 }}>
          {/* Left Content */}
          <div className="px-4">
            <span className="inline-block px-4 py-1.5 bg-brand-tint text-brand text-xs font-semibold rounded-full mb-6">
              SOLUTIONS
            </span>
            <h2 className="text-4xl  font-bold text-black/95 mb-4 leading-tight">
              Custom Energy Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-10 max-w-4xl">
              We're on a mission to make clean energy solutions accessible to everyone. Each organization follows its own unique path to decarbonization.
            </p>

            <div className="space-y-8 max-w-md">
              {solutionLinks.map((link, index) => (
                <motion.button
                  key={link.title}
                  className="w-full flex items-center gap-4 text-gray-800  transition-transform duration-300 group text-left hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.05 * index }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-tint flex items-center justify-center group-hover:scale-105 transition-transform">
                    <link.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-gray-900 block">{link.title}</span>
                    <span className="text-sm text-gray-600">{link.description}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Grid */}
          <motion.div className="grid grid-cols-2 gap-4 pt-20 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15, type: 'spring', stiffness: 120, damping: 20 }}>
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 ${index === 0 || index === 3 ? "h-64" : "h-48"}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.07 * index }}
              >
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 md:h-32 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <div>
                    <span className="text-white text-sm font-semibold block">
                      {solution.title}
                    </span>
                    <span className="text-white/80 text-xs">{solution.description}</span>
                  </div>
                  <button className="w-10 h-10 rounded-xl bg-brand shadow-lg flex items-center justify-center transition-transform group-hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;