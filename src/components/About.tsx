import { motion } from 'motion/react';

export function About() {
  const skills = [
    "Python (PySpark, Pandas)",
    "SQL (PostgreSQL, Snowflake)",
    "Apache Spark & Kafka",
    "dbt & Airflow",
    "AWS & Azure",
    "Docker & Kubernetes",
    "MLflow & Scikit-Learn",
    "Power BI",
    "Git & CI/CD",
    "Databricks & Delta Lake",
    "LangChain & Hugging Face",
    "Great Expectations",
  ];

  const learning = [
    "Databricks & Delta Lake",
    "LangChain & Hugging Face",
    "Great Expectations",
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            <span className="text-blue-600 font-mono text-xl md:text-2xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-slate-200 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-slate-800 leading-relaxed">
            <p>
              I'm a second-year engineering student at ENSIAS, specializing in Data Engineering and AI.
            </p>
            <p>
              I'm currently looking for a PFA internship this summer in a challenging environment
              where I can contribute and grow fast.
            </p>
            <p>
              I'm also preparing for my PFE next year, aiming to work on a high-impact project
              with a good company.
            </p>

            <div className="pt-4">
              <p className="font-mono text-sm text-blue-600 mb-4">Technologies I work with:</p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {skills.filter(s => !learning.includes(s)).map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-800">
                    <span className="text-blue-500">▹</span> {skill}
                  </li>
                ))}
              </ul>

              <p className="font-mono text-sm text-slate-700 mt-6 mb-4">Currently learning:</p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {learning.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <span className="text-slate-700">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group max-w-[400px] mx-auto w-full">
            <div className="absolute inset-0 bg-blue-500/20 rounded-xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 border border-blue-200"></div>
            {/* ✏️ REPLACE: src with your own photo URL */}
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"
              alt="Workspace"
              className="relative z-10 rounded-xl w-full h-[450px] object-cover transition-all duration-500 border border-slate-200 shadow-sm"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
