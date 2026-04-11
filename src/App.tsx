import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-32">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
