import { motion } from "framer-motion";

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Beautiful Neon Progress Bar Component
function SkillBar({ label, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-gray-200">{label}</span>
        <span className="text-gray-600 dark:text-gray-300">{level}%</span>
      </div>

      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className="h-3 bg-blue-500 shadow-[0_0_12px_#3b82f6] rounded-full"
        />
      </div>
    </div>
  );
}

function TimelineItem({ title, period, description, points }) {
  return (
    <div className="relative pl-6 sm:pl-10">

      {/* Left Circle */}
      <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>

      {/* Vertical Line */}
      <span className="absolute left-1.5 top-5 w-1 h-full bg-blue-500"></span>

      {/* Card */}
      <div className="mt-1 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
        hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition-all">
        
        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>

        {description && (
          <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
        )}

        {points && (
          <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
            {points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        )}
      </div>

      {/* Bottom Circle */}
      <span className="absolute left-0 bottom-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
    </div>
  );
}


export default function Resume() {
  return (
    <section
      id="resume"
      className="w-full py-24 px-6 sm:px-10 lg:px-20 bg-slate-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto lg:px-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400"
        >
          Resume
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {/* PROFESSIONAL SUMMARY */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition-all">
              <h3 className="text-2xl font-semibold mb-3">Professional Summary</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Results-driven and detail-oriented Web Developer with hands-on experience in 
                responsive web, mobile, and database development. Strong background in real-time 
                systems and user-focused solutions. Passionate about clean code and excellent user experience.
              </p>
            </div>

            {/* SKILLS CARD */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition-all">
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>

              <SkillBar label="HTML / CSS / JS" level={75} />
              <SkillBar label="React.js" level={50} />
              <SkillBar label="Python" level={80} />
              <SkillBar label="Vue.js" level={45} />
              <SkillBar label="Express.js" level={45} />
              <SkillBar label="Database & APIs" level={75} />
              <SkillBar label="Embedded Systems / IoT" level={65} />
              <SkillBar label="MsOffice Suit" level={75} />
            </div>

            {/* Soft Skills */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
            hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition-all">
              <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>

              <ul className="list-disc list-inside space-y-1 grid grid-cols-2 text-gray-700 dark:text-slate-300 gap-2">
                  <li>Teamwork</li>
                  <li>Problem-Solving</li>
                  <li>Adaptability</li>
                  <li>Creativity</li>
                  <li>Communication</li>
                  <li>Time Management</li>
              </ul>
            </div>

            {/* Development Tools */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
            hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition-all">
            <h3 className="text-2xl font-semibold mb-4">Development Tools</h3>

            <ul className="list-disc list-inside space-y-1 grid grid-cols-2 text-gray-700 dark:text-gray-300 gap-2">
                <li>VS Code</li>
                <li>Postman</li>
                <li>Git & GitHub</li>
                <li>Firebase</li>
                <li>Netlify</li>
                <li>PythonAnywhere</li>
            </ul>
            </div>

            {/* AI Tools */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
            hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition-all">
            <h3 className="text-2xl font-semibold mb-4">GenAI Tools</h3>

            <ul className="list-disc list-inside space-y-1 grid grid-cols-2 text-gray-700 dark:text-gray-300 gap-2">
                <li>ChatGPT</li>
                <li>Grok</li>
                <li>Claude</li>
                <li>Google Gemini</li>
                <li>Microsoft Copilot</li>
                <li>Meta Llama</li>
                <li>ImageFx</li>
            </ul>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >

            {/* EXPERIENCE */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition-all">
                <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>

                <div className="space-y-10">

                    <TimelineItem
                      title="Tech Support|Web Developer "
                      period="Jul 2024 – Aug 2025 | Papa's Place"
                      points={[
                          "Developed and managed the hotel's website",
                          "Responsible for information technology related tasks",
                      ]}
                    />

                    <TimelineItem
                      title="National Service Personnel"
                      period="Oct 2021 – Aug 2022 | National Health Insurance Authority"
                      points={[
                          "Assisted clients with needed services",
                          "Provided clarity on health insurance processes",
                          "Helped streamline daily operations"
                      ]}
                    />

                    <TimelineItem
                      title="TV Control Room Engineer (Intern)"
                      period="Jun 2020 – Aug 2021 | Truth Television"
                      points={[
                          "Operated master control room systems",
                          "Handled sound, lighting, and graphics",
                          "Assisted with live production content"
                      ]}
                    />
                </div>
            </div>


            {/* EDUCATION */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition-all">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>

                <div className="space-y-10">
                    <TimelineItem
                    title="BSc. Information Technology"
                    period="2017 – 2021 | Heritage Christian University, Greater Accra"
                    points={[
                        "Website Development",
                        "Mobile App Development",
                        "Network Administration",
                        "Database Management"
                    ]}
                    />

                    <TimelineItem
                    title="General Arts"
                    period="2014 – 2017 | Sogakope Senior High, Volta Region"
                    // points={[
                    //     "Government",
                    //     "Economics",
                    //     "Geography",
                    //     "Elective Mathematics"
                    // ]}
                    />
                </div>
            </div>


            {/* CERTIFICATIONS */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition-all">
              <h3 className="text-2xl font-semibold mb-4">Certifications</h3>

              <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Technical Skills Training, 2022</li>
                <li>National Service Scheme, 2022</li>
                <li>Web Design & Hardware Fundamentals, 2017</li>
              </ul>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
