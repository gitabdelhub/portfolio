import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

// -- Vector Logos --
const MicrosoftLogo = () => (
  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 shrink-0 shadow-2xs">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" className="w-full h-full" aria-label="Microsoft">
      <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
      <rect x="12" y="1" width="10" height="10" fill="#7FBA00"/>
      <rect x="1" y="12" width="10" height="10" fill="#00A4EF"/>
      <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
    </svg>
  </div>
);

const AwsLogo = () => (
  <div className="w-9 h-9 rounded-lg bg-[#232F3E] flex items-center justify-center p-1 shrink-0 shadow-2xs">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" className="w-7 h-5" aria-label="AWS">
      <path d="M28.5 24.3c0 .8.1 1.5.2 2 .2.6.5 1.3.8 1.9.1.2.2.4.2.6 0 .3-.2.6-.5.9l-1.8 1.1c-.2.2-.5.2-.7.2-.3 0-.6-.1-.8-.4-.4-.5-.7-1-.9-1.5-.3-.5-.5-1.1-.8-1.9-2.1 2.5-4.7 3.6-7.8 3.6-2.2 0-4-.6-5.3-1.9-1.3-1.3-2-2.9-2-5 0-2.2.8-4 2.3-5.3 1.5-1.4 3.7-2 6.3-2 .8 0 1.8.1 2.7.2 1 .1 1.9.3 2.9.6v-1.9c0-2-.4-3.3-1.3-4.2-.8-.8-2.3-1.3-4.3-1.3-1.2 0-2.3.1-3.4.4-1.2.3-2.3.7-3.3 1.3-.5.2-.8.4-1 .4-.3 0-.5-.2-.5-.7v-1.7c0-.4.1-.7.2-.9.2-.2.5-.4.9-.6 1.1-.5 2.3-1 3.7-1.3 1.4-.3 3-.5 4.6-.5 3.5 0 6.2.8 7.8 2.4 1.7 1.6 2.5 4.1 2.5 7.3v9.8zm-10.9 4.1c.8 0 1.8-.1 2.7-.4.9-.3 1.8-.8 2.5-1.6.4-.5.7-1.1.9-1.7.1-.6.2-1.4.2-2.2v-1.1c-.7-.2-1.6-.3-2.4-.4-.8-.1-1.6-.1-2.4-.1-1.7 0-2.9.3-3.8 1-.8.6-1.3 1.6-1.3 2.8 0 1.2.3 2 1 2.6.5.6 1.4 1.1 2.6 1.1zm20.5 2.7c-.5 0-.8-.1-1.1-.2-.2-.2-.4-.5-.6-1.1l-7-22.6c-.2-.6-.3-1-.3-1.3 0-.5.2-.7.7-.7h3c.5 0 .8.1 1.1.2.2.2.4.5.5 1.1l4.4 16.9 4.7-16.9c.1-.5.3-.8.5-1.1.2-.2.6-.2 1.1-.2h2.4c.5 0 .9.1 1.1.2.2.2.4.5.5 1.1l4.7 17.1 4.5-17.1c.1-.5.3-.8.5-1.1.2-.2.5-.2 1.1-.2h2.8c.5 0 .7.2.7.7 0 .1 0 .3-.1.5 0 .2-.1.4-.2.7l-7.5 23.4c-.1.5-.3.8-.6 1.1-.2.2-.6.2-1.1.2h-2.6c-.5 0-.8-.1-1.1-.2-.2-.2-.4-.5-.6-1.1l-4.5-16.7-4.6 16.7c-.1.5-.3.8-.5 1.1-.2.2-.6.2-1.1.2h-2.3zm40.3.9c-1.6 0-3.3-.2-4.8-.5-1.6-.3-2.8-.7-3.7-1.2-.5-.3-.8-.6-.9-.9-.1-.3-.2-.6-.2-1v-1.8c0-.5.2-.7.6-.7.1 0 .3 0 .5.1.2.1.4.2.6.3 1.1.5 2.2.9 3.5 1.1 1.3.3 2.5.4 3.7.4 2 0 3.5-.3 4.5-.9 1-.6 1.6-1.6 1.6-2.8 0-.8-.3-1.6-.8-2.1-.5-.5-1.7-1-3.1-1.5l-4.5-1.4c-2.3-.7-4-1.8-5-3.1-1-1.4-1.5-2.8-1.5-4.4 0-1.3.3-2.4.8-3.4.5-1 1.3-1.9 2.2-2.6.9-.7 2-1.3 3.2-1.6 1.3-.4 2.5-.5 3.9-.5.6 0 1.4.1 2 .1.6.1 1.3.2 1.9.4.5.1 1.1.3 1.7.5.5.2.9.4 1.3.6.4.2.7.5.8.8.2.3.2.6.2 1v1.6c0 .5-.2.8-.6.8-.2 0-.5-.1-1.1-.3-1.6-.7-3.3-1-5.3-1-1.8 0-3.1.3-4.1.8-.9.5-1.5 1.5-1.5 2.6 0 .8.3 1.6 1 2.1.6.5 1.8 1.1 3.6 1.6l4.4 1.4c2.2.7 3.9 1.7 4.8 3 1 1.3 1.5 2.7 1.5 4.3 0 1.3-.2 2.5-.7 3.5-.5 1-1.3 2-2.2 2.7-1 .7-2.1 1.3-3.4 1.7-1.4.3-3 .5-4.6.5z" fill="#FFF"/>
      <path d="M12 45.2c19.8 8.1 43.8 6.4 60.5-4.8 1-.7 2.1.2 1.3 1.3-17.6 13.9-44.5 14.6-63 4.6-1.1-.6-.1-1.8 1.2-1.1z" fill="#FF9900"/>
      <path d="M74.8 38.6c1.1 1.4 3 4.9 3.5 6.9.1.5-.3.8-.8.6-2.5-1.2-6.6-2.2-8.5-2.4-.6-.1-.7-.7-.2-.9 2.1-.9 4.8-2.6 6-4.2z" fill="#FF9900"/>
    </svg>
  </div>
);

const DataCampLogo = () => (
  <div className="w-9 h-9 rounded-lg bg-[#05192D] flex items-center justify-center p-1 shrink-0 shadow-2xs">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6" aria-label="DataCamp">
      <path d="M19.3 7.5L9.6 16l9.7 8.5 2.1-2.4L14.3 16l7.1-6.1z" fill="#03EF62"/>
    </svg>
  </div>
);

const DeepLearningLogo = () => (
  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center p-1 shrink-0 shadow-2xs">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-6 h-6" aria-label="DeepLearning.AI">
      <circle cx="20" cy="11" r="5" fill="#FF4F00"/>
      <circle cx="11" cy="27" r="5" fill="#1E88E5"/>
      <circle cx="29" cy="27" r="5" fill="#00C853"/>
      <path d="M20 16v5m-4.5 2.5l-2.5 1.5m11.5-1.5l2.5 1.5" stroke="#78909C" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
);

const McKinseyLogo = () => (
  <div className="w-9 h-9 rounded-lg bg-[#001E62] flex items-center justify-center text-white text-xs font-serif font-bold tracking-tight shrink-0 shadow-2xs" aria-label="McKinsey">
    McK
  </div>
);

export function Experience() {
  const education = [
    {
      degree: "Engineering Degree - Data Engineering & AI",
      school: "ENSIAS - École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
      date: "Jul 2024 - Jul 2027",
      details: [
        "Specializing in Data Engineering, Distributed Systems, and Artificial Intelligence.",
        "Relevant coursework: Database Management, Big Data, Machine Learning, Cloud Computing, Distributed Systems.",
      ],
    },
    {
      degree: "DEUST - Mathematics, Informatics & Physics",
      school: "Université Sultan Moulay Slimane",
      date: "Nov 2022 - Aug 2024",
      details: [
        "Foundational studies in mathematics, computer science, and physics.",
      ],
    },
  ];

  // Reordered: newest first (2026 then 2025)
  const experiences = [
    {
      role: "Data Engineering & AI Intern",
      company: "D&A Technologies",
      date: "Jul 2026 - Aug 2026 (2 months)",
      details: [
        "Designed and built a production AI & Analytics Portal on a microservices architecture, centralizing business KPI access.",
        "Developed data ingestion pipelines following a medallion architecture to consolidate heterogeneous sources into PostgreSQL.",
        "Contributed to a natural language chatbot (NLP/LLM) letting business users query backend data without SQL.",
      ],
    },
    {
      role: "Data Scientist Intern",
      company: "3D Smart Factory",
      date: "Aug 2025 (1 month)",
      details: [
        "Developed an intelligent inspection system for industrial parts using ResNet18 and PyTorch, on MVTec AD dataset.",
        "Integrated a Large Language Model (LLM) via Google Generative AI to provide technical comments, enhancing anomaly understanding.",
        "Designed an interactive interface with Streamlit to simplify program usage, including image uploads and confidence threshold adjustments.",
      ],
    },
  ];

  // Ordered by importance / prestige
  const certifications = [
    {
      title: "Microsoft Certified: Fabric Analytics Engineer Associate",
      badge: "DP-700",
      issuer: "Microsoft",
      date: "2026",
      url: "https://learn.microsoft.com/fr-fr/users/abdallahassoumanou-4522/credentials/5d20d26c621535b",
      Logo: MicrosoftLogo,
    },
    {
      title: "AWS Certified Cloud Practitioner",
      badge: "CLF-C02",
      issuer: "Amazon Web Services",
      date: "May 2026",
      url: "https://www.credly.com/badges/ec7263c9-e301-44f0-bf68-bfdf8dc3d8cd/public_url",
      Logo: AwsLogo,
    },
    {
      title: "McKinsey Forward Program",
      badge: "",
      issuer: "McKinsey & Company",
      date: "Dec 2024",
      url: "https://www.credly.com/badges/41b4bdad-add1-422e-a66c-9c3a05caf31f/public_url",
      Logo: McKinseyLogo,
    },
    {
      title: "Data Engineer Associate",
      badge: "DEA",
      issuer: "DataCamp",
      date: "2025",
      url: "https://www.datacamp.com/certificate/DEA0017674085993",
      Logo: DataCampLogo,
    },
    {
      title: "Supervised Machine Learning: Regression & Classification",
      badge: "",
      issuer: "DeepLearning.AI / Coursera",
      date: "Oct 2025",
      url: "https://coursera.org/share/420c3030ea0083a6fcf5b114df3959c2",
      Logo: DeepLearningLogo,
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

        {/* Experience - Newest First */}
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
                <span className="font-mono text-xs text-slate-700 whitespace-nowrap">Incoming - 2025/2026</span>
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
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">Founding and Organizing Committee</h4>
                  <p className="text-blue-600 font-mono text-sm mt-1">@ ENSIAS Wellbeing Community</p>
                </div>
                <span className="font-mono text-xs text-slate-700 whitespace-nowrap">2025 - Present</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                  <span className="text-blue-500 mt-1 text-xs">▹</span>
                  <span>Selected by the founding professor to help launch the community and support its early activities.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                  <span className="text-blue-500 mt-1 text-xs">▹</span>
                  <span>Organized ENSIAS's first mental health awareness workshop.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className={cardClass}>
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
                className="bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-5 transition-all duration-200 group flex items-start justify-between gap-4 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                  <cert.Logo />
                  <div className="min-w-0">
                    <h4 className="text-slate-800 font-bold text-sm group-hover:text-blue-600 transition-colors leading-snug">
                      {cert.title}
                      {cert.badge && (
                        <span className="ml-2 inline-block text-[11px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-100 px-1.5 py-0.5 rounded align-middle">
                          {cert.badge}
                        </span>
                      )}
                    </h4>
                    <p className="text-slate-600 font-mono text-xs mt-1">{cert.issuer}</p>
                    <p className="text-slate-400 font-mono text-xs mt-0.5">{cert.date}</p>
                  </div>
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
