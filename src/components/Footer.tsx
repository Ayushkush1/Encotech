import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  company: ["About Us", "Leadership/Team", "Certifications & Partners", "Careers"],
  services: ["Services Overview", "Renewable Energy", "EV Charging", "O&M", "Overhauling"],
  resources: ["Case Studies", "Media & Blog", "Downloads", "Contact"],
  
};

// (certifications defined above)

const certifications = [
  { label: "ISO 9001", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/ISO_Logo_%282018%29.svg/200px-ISO_Logo_%282018%29.svg.png" },
  { label: "ISO 14001", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/ISO_Logo_%282018%29.svg/200px-ISO_Logo_%282018%29.svg.png" },
  { label: "ISO 45001", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/ISO_Logo_%282018%29.svg/200px-ISO_Logo_%282018%29.svg.png" },
  { label: "IEC", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/International_Electrotechnical_Commission_logo.svg/200px-International_Electrotechnical_Commission_logo.svg.png" },
  { label: "CE", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Conformit%C3%A9_Europ%C3%A9enne_%28CE%29_logo.svg/200px-Conformit%C3%A9_Europ%C3%A9enne_%28CE%29_logo.svg.png" },
  { label: "BIS", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Bureau_of_Indian_Standards_logo.svg/200px-Bureau_of_Indian_Standards_logo.svg.png" },
  { label: "RoHS", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Rohs_logo.svg/200px-Rohs_logo.svg.png" },
];

const Footer = () => {
  return (
    <motion.footer
      className="bg-foreground text-card relative overflow-hidden px-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 140, damping: 22 }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-brand/25 via-brand-700/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-gradient-to-tl from-brand/25 via-brand-700/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-brand/10 -z-10" />
      
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <motion.div className="col-span-2" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 20 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-brand">enco</span><span className="text-card">tec</span>
              </span>
            </div>
            <p className="text-card/70 text-sm mb-6 max-w-xs">
              Powering a sustainable future for generations to come. Join Encotec in making the world a cleaner, greener place.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:1-800-ENCOTEC" className="flex items-center gap-3 text-card/70 text-sm hover:text-brand transition-colors">
                <Phone className="w-4 h-4" />
                1-800-ENCOTEC
              </a>
              <a href="mailto:support@encotec.com" className="flex items-center gap-3 text-card/70 text-sm hover:text-brand transition-colors">
                <Mail className="w-4 h-4" />
                support@encotec.com
              </a>
              <div className="flex items-center gap-3 text-card/70 text-sm">
                <MapPin className="w-4 h-4" />
                Austin, Texas
              </div>
            </div>
            
            {/* Social */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-card/10 flex items-center justify-center hover:bg-brand hover:scale-110 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.05 * index }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 * (i + 1) }}>
              <h4 className="font-semibold text-card mb-4 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-card/70 text-sm hover:text-brand hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 * 4 }}>
            <h4 className="font-semibold text-card mb-4">Certifications</h4>
            <div className="grid grid-cols-2 gap-3">
              {certifications.slice(0, 6).map((c) => (
                <div key={c.label} className="flex items-center gap-2 p-2 rounded-lg bg-white/10 border border-card/20">
                  <img
                    src={c.src}
                    alt={c.label}
                    className="h-8 w-auto object-contain bg-white rounded-md p-1"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="text-card/80 text-xs font-medium">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

       

        <motion.div className="border-t border-card/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, type: 'spring', stiffness: 120, damping: 20 }}>
          <p className="text-card/50 text-sm">
            © 2024 Encotec. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <p className="text-card/50 text-sm">
              Committed to 100% renewable energy by 2035
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
