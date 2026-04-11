import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-blue-600 font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h2>

        <p className="text-slate-700 mb-10 leading-relaxed">
          I'm currently looking for a PFA internship for this summer and keeping an eye out for
          PFE opportunities next year. Whether you have a position available, or just want to
          say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:abdallahassoumanou@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-50 text-blue-600 border border-blue-300 rounded-md font-mono hover:bg-blue-100 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail size={20} />
            abdallahassoumanou@gmail.com
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-16 text-slate-700">
          <a href="https://github.com/gitabdelhub" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/abdallah-assoumanou-354b43286" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>

        <p className="font-mono text-xs text-slate-300 mt-12">
          Designed & Built by Abdallah ASSOUMANOU
        </p>
      </motion.div>
    </section>
  );
}
