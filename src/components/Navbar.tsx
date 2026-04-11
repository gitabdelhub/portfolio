import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, FileText, ChevronDown } from 'lucide-react';

const CV_FR = "https://drive.google.com/file/d/1QI6TJuoWKtNUOnT0kF2fFdEz_E8xay_Y/preview";
const CV_EN = "https://drive.google.com/file/d/1_WQs2lxayz0ufFKDTfp-jPIaSPgNKr6N/preview";

export function Navbar() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-600 font-mono font-medium">
          <Terminal size={20} />
          <span>Abdallah's Portfolio</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-mono text-slate-500">
          <a href="#about" className="hover:text-blue-600 transition-colors">01. About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">02. Projects</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">03. Experience</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">04. Contact</a>

          {/* CV Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCvOpen(!cvOpen)}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-500/50 rounded hover:bg-blue-50 transition-colors"
            >
              <FileText size={16} />
              CV
              <ChevronDown size={14} className={`transition-transform ${cvOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {cvOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 right-0 bg-white border border-slate-200 rounded-md shadow-md overflow-hidden z-10 min-w-[160px]"
                >
                  <a
                    href={CV_FR}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-slate-600 font-mono text-xs hover:bg-slate-50 transition-colors whitespace-nowrap"
                  >
                    🇫🇷 CV en Français
                  </a>
                  <a
                    href={CV_EN}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-slate-600 font-mono text-xs hover:bg-slate-50 transition-colors whitespace-nowrap border-t border-slate-100"
                  >
                    🇬🇧 CV in English
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
