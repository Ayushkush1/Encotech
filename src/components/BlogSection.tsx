import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    category: "Media",
    title: "Encotec 50MW wind O&M program",
    excerpt: "Our latest rollout improves uptime and reduces LCoE across three sites.",
    date: "Nov 2025",
    image: "/assets/wind-turbines.jpg",
  },
  {
    category: "Blog",
    title: "EV fast-charging: grid readiness checklist",
    excerpt: "A practical framework for utilities planning rapid charging corridors.",
    date: "Oct 2025",
    image: "/assets/ev-charging.jpg",
  },
  {
    category: "Media",
    title: "Solar retrofit case study: 15% yield gain",
    excerpt: "How module and inverter upgrades lifted performance in coastal climate.",
    date: "Sep 2025",
    image: "/assets/solar-farm.jpg",
  },
];

export default function BlogSection() {
  return (
    <motion.section
      className="py-24 relative  bg-gradient-to-br from-[#c61b5a]/5 via-[#c61b5a]/5 to-white overflow-hidden px-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 140, damping: 22 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-brand/10 -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-brand-tint text-brand text-xs font-semibold rounded-full">Media & Blog</span>
          <h2 className="mt-3 text-4xl font-bold text-black/95">Insights and Updates</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", stiffness: 120, damping: 20 }}
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200/70 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.07 * index }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-brand-tint text-brand text-xs font-semibold rounded-full">{post.category}</span>
                  <span className="text-xs text-muted">{post.date}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-brand">
                  <span className="text-sm font-medium">Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button size="lg" className="group">
            View all posts
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

