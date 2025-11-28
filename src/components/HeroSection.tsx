import { Button } from "./ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 140, damping: 22 }}
    >
      

      {/* Content */}
      <motion.div
        className="relative container mx-auto px-4 py-20 lg:py-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="max-w-5xl mx-auto text-center px-4">
          <span className="inline-block px-4 py-1.5 bg-brand-tint text-brand text-sm font-semibold rounded-full mb-6">
            Encotec
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-black/95 mb-8 leading-tight" style={{ animationDelay: "0.1s" }}>
            The <span className="text-brand">Future</span> of Energy is Now!
          </h1>

          <p className="text-base sm:text-lg text-gray-700 mb-10 max-w-4xl mx-auto" style={{ animationDelay: "0.2s" }}>
            When the world is changing and the future is uncertain, it's important to have a clear strategy for the future. The Encotec is a strategy plan that will help us reach our goal of 100% renewable energy by 2035.
          </p>

          <div className="mt-6">
            <Button
              size="lg"
              className="animate-fade-in hover:scale-105 transition-transform rounded-3xl shadow-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Learn More About Encotec 
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
