"use client";
import React from "react";

const resumeData = {
  experience: [
    {
      company: "Kaizen Gaming (Online betting)",
      duration: "Mar 2024 - Present",
      position: "Treasury Lead",
      details: [
        "Day-to-day cash management for Argentina, Canada, Denmark and Malta.",
        " Relationships with banks and Payments Service Provividers (PSPs) management.",
        " Reporting, reconciliation, cash flow, and forecasts development.",
        " Responsible for investments and expenses negotiations with counterparties."
      ],
      achievements: [
        "Achivements: treasury processes improvement and automations in new markets; ERP and Treasury system Kyriba implementation."
      ]
    },
    {
      company: "Tiendamia (E-commerce)",
      duration: "Aug 2023 - Mar 2024",
      position: "Treasury Reporting Specialist",
      details: [
        "KPIs measurement and improvement; daily reporting by provider; data analysis."
      ],
      achievements: [
        "Achievements: automated Looker Studio reports with detailed insights by product category, country, and payment method, that allowed to reduce payment rejections and optimize flows."
      ]
    },
    {
        company: "Dow Chemical Co. (Oil & Gas)",
        duration: "Jan 2019 - Mar 2023",
        position: "Lead Treasury specialist LAA",
        details: [
          "Cash management for LAA Region, focused in Argentina under Central Bank FX regime; front office activities such as FX deals, investments, relationships with banks; back office activities: regulatory requirements - Com 6401, Camex-, reporting, forecasting and planning, intercompany operations, cash pooling implementation."
        ],
        achievements: [
          "Achievements: bronze award for the contributions on Plan Gas collections; Silver award for being responsible of prefinance export loans process; selected for Dow-EY Power Up 28th session; “Collaborating for superior results” and “Leading courageously” awards; selected for Mentoring Programme; Bronze award for results during DowDuPont spin-off."

        ]
      },
  ],
  education: [
    {
      title: "Bootcamp Full Stack Developer (800hs)",
      institution: "Henry",
      years: "2024",
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      instructor: "Angela Yu",
      years: "2024"
    },
    {
      title: "Master’s degree in Finance",
      institution: "Torcuato Di Tella University",
      years: "2019-2021"
    },
    {
      title: "Bachelor's degree in Economics - Cum Laude honor",
      institution: "Buenos Aires University",
      years: "2009-2014",
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "Redux", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "TailwindCSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "TypeScript", "Jest", "Jasmine"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "Mongoose", "SQL", "PostgreSQL", "TypeORM"]
    },
    {
      category: "Tools & Libraries",
      items: ["Webpack", "Axios", "Formik", "Git/GitHub", "Vite", "Three.js"]
    },
    {
      category: "Others",
      items: ["PowerQuery", "VBA", "Power BI", "Looker Studio", "SAP", "NetSuite", "Business Central", "Jira"]
    }
  ]
};

const page = () => {
    return (
      <section className="py-12 bg-primary-light dark:bg-primary-dark mt-14">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold font-sleepy text-primary-dark dark:text-primary-light">
            Resume
          </h2>
          <a
            href="/FullStackTamaraSilva.pdf" 
            download
            className="px-4 py-2 bg-tertiary text-primary-light font-semibold rounded-md shadow-md hover:bg-primary dark:hover:bg-quinary transition-colors"
          >
            Download PDF
          </a>
        </div>
  
          {/* Experience Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold font-sleepy text-primary-dark dark:text-primary-light mb-6">
              Working Experience
            </h3>
            {resumeData.experience.map((item, index) => (
              <div
                key={index}
                className="bg-tertiary dark:bg-quinary p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-primary-dark dark:text-primary-light">
                    {item.position} - <span className="text-primary-dark dark:text-primary-light">{item.company}</span>
                  </h4>
                  <p className="text-primary-dark dark:text-primary-light">{item.duration}</p>
                </div>
                <p className="text-primary-dark dark:text-primary-light text-justify">{item.details}</p>
                {item.achievements && (
                  <ul className="mt-4 list-disc pl-5 text-primary-dark dark:text-primary-light">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
  
          {/* Education Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold font-sleepy text-primary-dark dark:text-primary-light mb-6">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div
                key={index}
                className="bg-tertiary dark:bg-quinary p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <h4 className="text-xl font-semibold text-primary-dark dark:text-primary-light">{edu.title}</h4>
                <p className="text-primary-dark dark:text-primary-light">{edu.institution}</p>
                <p className="text-primary-dark dark:text-primary-light">{edu.years}</p>
              </div>
            ))}
          </div>
  
          {/* Skills */}
          <div>
  <h3 className="text-3xl font-semibold font-sleepy text-primary-dark dark:text-primary-light mb-6">Skills</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
    {resumeData.skills.map((skill, index) => (
      <div key={index} className="bg-tertiary dark:bg-quinary shadow-md rounded-lg p-6 hover:shadow-lg transition-transform duration-300 hover:scale-105">
        <h4 className="text-xl font-bold text-primary-dark dark:text-primary-light">{skill.category}</h4>
        <ul className="list-disc list-inside text-primary-dark dark:text-primary-light">
          {skill.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
          </div>

      </section>
    );
  };
  
  export default page;