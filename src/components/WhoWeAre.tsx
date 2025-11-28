import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Globe } from "lucide-react";
import childDandelion from "/assets/child-dandelion.jpg";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "500K+", label: "Customers" },
  { icon: Globe, value: "35", label: "States" },
  { icon: Award, value: "15+", label: "Years" },
];

const AboutSection = () => {
  return (
    <motion.section
      className="py-24 bg-gray-50 relative overflow-hidden px-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 140, damping: 22 }}
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div className="grid lg:grid-cols-2 gap-16 items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 20 }}>
          {/* Image */}
          <motion.div className="relative" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 20 }}>
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src={childDandelion}
                alt="Child with dandelion representing future generations"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 left-8 right-8 p-6 bg-white rounded-2xl border border-gray-200/70 shadow-xl">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-6 h-6 text-brand mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div className="lg:pl-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 20 }}>
            <span className="inline-block px-4 py-1.5 bg-brand-tint text-brand text-xs font-semibold rounded-full mb-6">
              WHO ARE WE?
            </span>
            <h2 className="text-4xl  font-bold text-black/95 mb-6">
              Making our planet a better place, one kilowatt at a time.
            </h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              We are a leading independent power producer (IPP) that develops, owns, and operates power generation projects across the United States and select international markets. We focus on delivering clean, cost-effective electricity to our customers, while minimizing environmental impacts.
            </p>
            
            <div className="space-y-4 mb-10">
              {["Committed to carbon neutrality by 2030", "Award-winning customer service team", "Industry-leading renewable energy portfolio"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-tint flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-brand" />
                  </div>
                  <span className="text-gray-900">{item}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="group">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
