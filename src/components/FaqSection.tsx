import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does switching to PAGEnergy work?",
    answer: "Switching is simple and takes about 5 minutes online. Once you sign up, we handle all the coordination with your current provider. There's no interruption to your service, and you'll start receiving clean energy typically within 1-2 billing cycles.",
  },
  {
    question: "Will I need new equipment or installations?",
    answer: "For our standard renewable energy plans, no new equipment is needed. Your existing electrical setup works perfectly. If you're interested in solar panels or battery storage, we offer professional installation services.",
  },
  {
    question: "How much can I save on my energy bills?",
    answer: "Most customers save between 15-30% on their energy bills after switching. Savings depend on your usage patterns, location, and chosen plan. Our team can provide a personalized estimate based on your current bills.",
  },
  {
    question: "What makes your energy 100% renewable?",
    answer: "We source energy exclusively from certified wind, solar, and hydroelectric facilities. Each kilowatt-hour is tracked and verified through Renewable Energy Certificates (RECs), ensuring complete transparency.",
  },
  {
    question: "Are there any long-term contracts?",
    answer: "No lock-in contracts required. You can switch plans or cancel anytime without penalties. We believe in earning your business through great service, not contractual obligations.",
  },
  {
    question: "Do you offer solutions for businesses?",
    answer: "Yes! We have dedicated business solutions including multi-site management, custom reporting, volume discounts, and dedicated account managers. Contact our business team for a tailored proposal.",
  },
];

const FAQSection = () => {
  return (
    <motion.section className="py-24 bg-gradient-to-b from-background to-secondary/30" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ type: 'spring', stiffness: 140, damping: 22 }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <span className="inline-block px-4 py-1.5 bg-[#f7e2ec] text-[#c61b5a] text-xs font-semibold rounded-full mb-6">
              FAQ
            </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about switching to clean energy.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.06 * index }}>
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
