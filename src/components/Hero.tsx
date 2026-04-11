import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ChevronDown } from 'lucide-react';

const CV_FR = "https://drive.google.com/uc?export=download&id=19xkvav_fr0VX_p4GyfF-Wy_6yRQHET-y";
const CV_EN = "https://drive.google.com/uc?export=download&id=1Moh6mrt1UGIcEqI7BV7psExhawb9B8fQ";

export function Hero() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-10 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <p className="text-blue-600 font-mono">Welcome !</p>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
          I'm ASSOUMANOU Abdallah
        </h1>

        <p className="text-blue-600 font-mono text-lg md:text-xl tracking-widest">
          ENSIAS · Data Engineering & AI
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 tracking-tight">
          I build scalable data pipelines<br />& AI systems.
        </h2>

        <p className="max-w-2xl text-lg text-slate-500 leading-relaxed pt-4">
          I'm a data engineering student graduating in 2027, passionate about building systems
          where data actually does something useful. Currently seeking a PFA internship. I enjoy
          hard problems, clean architecture, and good laughs.
        </p>

        <div className="flex flex-wrap gap-4 pt-8">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md font-mono text-sm hover:bg-blue-600 transition-colors"
          >
            Get In Touch
          </a>

          {/* CV Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCvOpen(!cvOpen)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-600 border border-slate-200 rounded-md font-mono text-sm hover:bg-slate-50 transition-colors"
            >
              <FileText size={18} />
              Download CV
              <ChevronDown size={16} className={`transition-transform ${cvOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {cvOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 left-0 bg-white border border-slate-200 rounded-md shadow-md overflow-hidden z-10 min-w-full"
                >
                  <a
                    href={CV_FR}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-slate-600 font-mono text-sm hover:bg-slate-50 transition-colors whitespace-nowrap"
                  >
                    🇫🇷 CV en Français
                  </a>
                  <a
                    href={CV_EN}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-slate-600 font-mono text-sm hover:bg-slate-50 transition-colors whitespace-nowrap border-t border-slate-100"
                  >
                    🇬🇧 CV in English
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Images */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 hidden sm:grid">
          <div className="relative group overflow-hidden rounded-xl border border-slate-200 h-48 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
              alt="Data Warehouse"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-blue-600 border border-blue-100">
              Data Warehouse
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl border border-slate-200 h-48 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
              alt="Artificial Intelligence"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-blue-600 border border-blue-100">
              Artificial Intelligence
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl border border-slate-200 h-48 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
              alt="Data Pipelines"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-blue-600 border border-blue-100">
              Data Pipelines
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
