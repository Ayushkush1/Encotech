import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <motion.section className="py-16 relative overflow-hidden" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ type: 'spring', stiffness: 140, damping: 22 }}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#c61b5a]/8 via-transparent to-[#c61b5a]/8" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#c61b5a]/12 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#c61b5a]/12 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 20 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f7e2ec] rounded-full mb-8">
            <Leaf className="w-5 h-5 text-[#c61b5a]" />
            <span className="text-[#c61b5a] text-xs font-medium">Join the Clean Energy Revolution</span>
          </div>
          
          <h2 className="text-4xl font-bold text-black/95 mb-6">
            Ready to Power Your Future
            <span className="text-[#c61b5a]"> Sustainably?</span>
          </h2>
          
          <p className="text-md text-gray-700 mb-10 max-w-2xl mx-auto">
            Make the switch today and join thousands of customers already enjoying clean, affordable, renewable energy. Your journey to a greener future starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group bg-gradient-to-r from-[#c61b5a] to-[#9e124b] hover:from-[#b91a55] hover:to-[#8a0f44] text-white">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:border-[#c61b5a] hover:text-[#c61b5a]">
              Talk to an Expert
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-gray-600">
            No commitment required • Cancel anytime • 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;
