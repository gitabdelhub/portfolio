import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Database, BrainCircuit, Activity, ShieldCheck, Zap, BarChart2, Cloud, X, ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  icon: JSX.Element;
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  images: string[] | null;
};

export function Projects() {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const projects: Project[] = [
    {
      icon: <Database size={40} strokeWidth={1} />,
      title: "Streamify (Data Warehouse)",
      description:
        "Built an end-to-end Data Warehouse for a fictional streaming platform using Medallion Architecture. Ingested and cleaned data from 2 source systems (CRM and ERP), modeled a Constellation Schema with 2 fact tables and 5 shared dimensions, and delivered a Power BI dashboard tracking MRR, churn, and watch time. Includes a recommendation system and churn prediction model.",
      tech: ["SQL Server", "Medallion Architecture", "Power BI", "Python", "Scikit-Learn"],
      github: "https://github.com/gitabdelhub/streamify-data-warehouse",
      images: null,
    },
    {
      icon: <Cloud size={40} strokeWidth={1} />,
      title: "Azure Medallion Pipeline",
      description:
        "An end-to-end ETL pipeline following the Medallion Architecture. Ingests consumer data via Azure Data Factory, processes it through Bronze/Silver/Gold layers using Databricks (PySpark), and delivers business insights via Power BI.",
      tech: ["Azure Data Factory", "Azure Databricks", "PySpark", "ADLS Gen2", "Power BI"],
      github: "https://github.com/gitabdelhub/azure-etl-pipeline",
      images: null,
    },
    {
      icon: <BarChart2 size={40} strokeWidth={1} />,
      title: "RAGinstein",
      description:
        "A hybrid search engine built from scratch. Combines semantic vector search with traditional lexical search (BM25). Features automated re-ranking and grounded answer generation using the Gemini API.",
      tech: ["Python", "Gemini API", "ChromaDB", "BM25", "Hybrid Search", "FastAPI"],
      github: "https://github.com/gitabdelhub/RAGinstein-Hybrid-Search-Engine",
      images: null,
    },
    {
      icon: <Zap size={40} strokeWidth={1} />,
      title: "LiveSport Pipeline",
      description: (
        <>
          A real-time sports analytics pipeline ingesting live match stats via API,
          processed with Spark Streaming, and stored in a Databricks Delta Lake.
          <br />
          *PENDING....
        </>
      ),
      tech: ["Kafka", "Spark Streaming", "Databricks", "Delta Lake", "API-Football"],
      github: "https://github.com/YOUR_USERNAME/YOUR_LIVESPORT_REPO",
      images: null,
    },
    {
      icon: <ShieldCheck size={40} strokeWidth={1} />,
      title: "Secure Cloud Banking",
      description:
        "Designed a multi-account AWS architecture for financial and banking systems with 3 isolated VPCs, Identity Federation, and strict network segmentation to minimize breach propagation risks.",
      tech: ["AWS", "VPC", "Identity Federation", "Cloud Security"],
      github: null,
      images: ["/images/secure_cloud_portefolo.jpeg"],
    },
    {
      icon: <Activity size={40} strokeWidth={1} />,
      title: "YOUAL (HealthTech)",
      description:
        "Built a full-stack medical practice management platform handling patient records, appointments, and medical history. Deployed and production-ready.",
      tech: ["Next.js 14", "Prisma", "TypeScript"],
      github: null,
      images: [
        "/images/acceuil_YOUAL_portefolo.jpeg",
        "/images/doctor_2_portefolo.png",
        "/images/RDV_1_portefolo.png",
      ],
    },
  ];

  const openModal = (project: Project) => {
    if (project.images) {
      setModalProject(project);
      setImageIndex(0);
    } else if (project.github) {
      window.open(project.github, '_blank');
    }
  };

  const closeModal = () => setModalProject(null);
  const prevImage = () => setImageIndex((i) => (i - 1 + (modalProject?.images?.length ?? 1)) % (modalProject?.images?.length ?? 1));
  const nextImage = () => setImageIndex((i) => (i + 1) % (modalProject?.images?.length ?? 1));

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            <span className="text-blue-600 font-mono text-xl md:text-2xl mr-2">02.</span>
            Featured Projects
          </h2>
          <div className="h-px bg-slate-200 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-6 flex flex-col h-full transition-colors group shadow-sm hover:shadow-md"
            >
              <div className="flex justify-between items-center mb-6 text-slate-700 group-hover:text-blue-500 transition-colors">
                {project.icon}
                <div className="flex gap-3 items-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3
                onClick={() => openModal(project)}
                className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors cursor-pointer hover:underline underline-offset-4"
              >
                {project.title}
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-700 mt-auto">
                {project.tech.map((tech, j) => (
                  <li key={j} className="bg-slate-100 px-2 py-1 rounded">{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden max-w-4xl w-full shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                <h3 className="text-slate-900 font-bold">{modalProject.title}</h3>
                <button onClick={closeModal} className="text-slate-700 hover:text-slate-800 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="relative">
                <img
                  src={modalProject.images![imageIndex]}
                  alt={`${modalProject.title} screenshot ${imageIndex + 1}`}
                  className="w-full max-h-[70vh] object-contain bg-slate-50"
                />
                {modalProject.images!.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full text-slate-800 hover:text-blue-600 transition-colors shadow">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full text-slate-800 hover:text-blue-600 transition-colors shadow">
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {modalProject.images!.length > 1 && (
                <div className="flex justify-center gap-2 py-4">
                  {modalProject.images!.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === imageIndex ? 'bg-blue-500 w-6' : 'bg-slate-300 hover:bg-slate-700'}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
