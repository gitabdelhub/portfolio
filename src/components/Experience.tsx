import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
 
export function Experience() {
  const education = [
    {
      degree: "Engineering Degree — Data Engineering & AI",
      school: "ENSIAS — École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
      date: "Jul 2024 — Jul 2027",
      details: [
        "Specializing in Data Engineering, Distributed Systems, and Artificial Intelligence.",
        "Relevant coursework: Database Management, Big Data, Machine Learning, Cloud Computing, Distributed Systems.",
      ],
    },
    {
      degree: "DEUST — Mathematics, Informatics & Physics",
      school: "Université Sultan Moulay Slimane",
      date: "Nov 2022 — Aug 2024",
      details: [
        "Foundational studies in mathematics, computer science, and physics.",
      ],
    },
  ];
 
  const experiences = [
    {
      role: "Data Scientist Intern",
      company: "3D Smart Factory",
      date: "Aug 2025 — 1 month",
      details: [
        "Developed an intelligent inspection system for industrial parts using ResNet18 and PyTorch, on MVTec AD dataset.",
        "Integrated a Large Language Model (LLM) via Google Generative AI to provide technical comments, enhancing anomaly understanding.",
        "Designed an interactive interface with Streamlit to simplify program usage, including image uploads and confidence threshold adjustments.",
      ],
    },
    {
      role: "Looking for PFA Internship",
      company: "Your Company?",
      date: "Summer 2026",
      details: [
        "Looking for a PFA internship in Data Engineering and AI, eager to work on real problems and learn from experienced engineers.",
        "Comfortable with data pipelines and AI systems, and always looking to expand my skills.",
        "I learn fast, adapt quickly, and I am not afraid of challenges.",
      ],
    },
  ];
 
  const certifications = [
    {
      title: "Data Engineer Certificate",
      issuer: "DataCamp",
      date: "Coming soon",
      url: "YOUR_DATACAMP_CERT_URL",
    },
    {
      title: "Data Engineer Associate",
      issuer: "DataCamp",
      date: "2025",
      url: "https://www.datacamp.com/certificate/DEA0017674085993",
    },
    {
      title: "AWS Academy Graduate — Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "Jan 2026",
      url: "https://www.credly.com/badges/45da2664-1cd1-4fa9-b644-a84c938d3174/public_url",
    },
    {
      title: "Supervised Machine Learning: Regression & Classification",
      issuer: "DeepLearning.AI",
      date: "Oct 2025",
      url: "https://coursera.org/share/420c3030ea0083a6fcf5b114df3959c2",
    },
    {
      title: "McKinsey Forward Program",
      issuer: "McKinsey & Company",
      date: "Dec 2024",
      url: "https://www.credly.com/badges/41b4bdad-add1-422e-a66c-9c3a05caf31f/public_url",
    },
  ];
 
  const cardClass = "bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-6 transition-colors shadow-sm";
 
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-20"
      >
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            <span className="text-blue-600 font-mono text-xl md:text-2xl mr-2">03.</span>
            Experience & Background
          </h2>
          <div className="h-px bg-slate-200 flex-grow max-w-xs"></div>
        </div>
 
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={20} className="text-blue-600" />
            <h3 className="text-lg font-bold text-slate-700 font-mono">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={cardClass}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg">{item.degree}</h4>
                    <p className="text-blue-600 font-mono text-sm mt-1">{item.school}</p>
                  </div>
                  <span className="font-mono text-xs text-slate-700 whitespace-nowrap">{item.date}</span>
                </div>
                <ul className="space-y-2">
                  {item.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <span className="text-blue-500 mt-1 text-xs">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
 
        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={20} className="text-blue-600" />
            <h3 className="text-lg font-bold text-slate-700 font-mono">Experience</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={cardClass}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg">{item.role}</h4>
                    <p className="text-blue-600 font-mono text-sm mt-1">@ {item.company}</p>
                  </div>
                  <span className="font-mono text-xs text-slate-700 whitespace-nowrap">{item.date}</span>
                </div>
                <ul className="space-y-2">
                  {item.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <span className="text-blue-500 mt-1 text-xs">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
 
        {/* Clubs & Community */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <h3 className="text-lg font-bold text-slate-700 font-mono">Clubs & Community</h3>
          </div>
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={cardClass}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">Data Cell Lead</h4>
                  <p className="text-blue-600 font-mono text-sm mt-1">@ Neurodynamics Club, ENSIAS</p>
                </div>
                <span className="font-mono text-xs text-slate-700 whitespace-nowrap">Incoming — 2025/2026</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                  <span className="text-blue-500 mt-1 text-xs">▹</span>
                  <span>Appointed to lead the Data Cell, responsible for managing data-driven projects and initiatives within the club focused on neuroscience and engineering.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                  <span className="text-blue-500 mt-1 text-xs">▹</span>
                  <span>Planning to coordinate analytics activities, formations, support innovation, and promote data literacy among club members.</span>
                </li>
              </ul>
            </motion.div>
 
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className={cardClass}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">Volunteer</h4>
                  <p className="text-blue-600 font-mono text-sm mt-1">@ CINDH ENSIAS</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
 
        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award size={20} className="text-blue-600" />
            <h3 className="text-lg font-bold text-slate-700 font-mono">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-5 transition-colors group flex items-start justify-between gap-4 shadow-sm"
              >
                <div>
                  <h4 className="text-slate-800 font-bold text-sm group-hover:text-blue-600 transition-colors">{cert.title}</h4>
                  <p className="text-slate-700 font-mono text-xs mt-1">{cert.issuer}</p>
                  <p className="text-slate-500 font-mono text-xs mt-1">{cert.date}</p>
                </div>
                <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors shrink-0 mt-1" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}