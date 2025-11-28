import { Menu, Search } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>


      <motion.nav className=" sticky top-2 z-50" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 140, damping: 22 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src="/assets/logoencotec.png" alt="Encotec logo" className="h-10 w-auto" />
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-brand transition-colors text-sm">Billing & Payment</a>
              <a href="#" className="text-gray-700 hover:text-brand transition-colors text-sm">Outages</a>
              <a href="#" className="text-gray-700 hover:text-brand transition-colors text-sm">Services & Price</a>
              <a href="#" className="text-gray-700 hover:text-brand transition-colors text-sm">Emergency & Safety</a>
              <a href="#" className="text-gray-700 hover:text-brand transition-colors text-sm">Company</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden sm:block px-6 py-2 border border-gray-900 rounded-full text-sm hover:bg-gray-900 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="w-6 h-6" />
              </button>
              <button className="hidden lg:block">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-brand transition-colors text-sm">Billing & Payment</a>
              <a href="#" className="block text-gray-700 hover:text-brand transition-colors text-sm">Outages</a>
              <a href="#" className="block text-gray-700 hover:text-brand transition-colors text-sm">Services & Price</a>
              <a href="#" className="block text-gray-700 hover:text-brand transition-colors text-sm">Save Money & Energy</a>
              <a href="#" className="block text-gray-700 hover:text-brand transition-colors text-sm">Emergency & Safety</a>
              <a href="#" className="block text-gray-700 hover:text-brand transition-colors text-sm">Company</a>
            </div>
          </div>
        )}
      </motion.nav>
    </>
  );
}
