import { DollarSign, Wrench, AlertTriangle, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesBar() {
  const services = [
    {
      icon: DollarSign,
      title: 'Pay Your Bill',
      href: '#'
    },
    {
      icon: Wrench,
      title: 'Start or Stop Services',
      href: '#'
    },
    {
      icon: AlertTriangle,
      title: 'Report Outage',
      href: '#'
    },
    {
      icon: BarChart3,
      title: 'View Outages',
      href: '#'
    }
  ];

  return (
    <motion.div className="bg-white border-t border-b border-gray-200 py-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 140, damping: 22 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.href}
              className="flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.05 * index }}
            >
              <div className="flex-shrink-0">
                <service.icon className="w-6 h-6 text-gray-700 group-hover:text-brand transition-colors" />
              </div>
              <span className="text-sm font-medium text-gray-900 group-hover:text-brand transition-colors">
                {service.title}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
