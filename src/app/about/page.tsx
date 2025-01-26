"use client";
import React from "react";

const AboutMe = () => {
    return (
        <section id="about" className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 ">
                <h2 className="text-4xl font-bold text-primary text-center mb-8">
                    About Me
                </h2>
                <div className=" text-primary flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                    {/* Imagen de perfil */}
                    <div className="lg:w-1/3 flex justify-start">
                        <img
                            src="./profile.jpg"
                            alt="Profile Picture"
                            className="rounded-full object-cover shadow-lg"
                        />
                    </div>

                    {/* Descripción */}
                    <div className="lg:w-2/3">
                        <p className="text-lg text-p leading-relaxed">
                            Hi! This is <span className="font-semibold">Tamara Silva, a
                                Full Stack Developer specialized in Frontend</span>, with a solid
                            background as an Economist and extensive experience in Finance
                            within multinational companies.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mt-4">
                            My technical expertise includes{" "}
                            <span className="font-semibold">
                                JavaScript, TypeScript, React.js, Express.js, Redux.js,
                                Node.js, Next.js, PostgreSQL, MongoDB
                            </span>{" "}
                            and more—skills I&apos;ve developed through bootcamps, courses, and
                            hands-on experience in real-world projects. I am passionate about
                            creating efficient, scalable, and user-friendly solutions,
                            leveraging my analytical mindset and technical proficiency to
                            solve complex challenges.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-olive-600 mb-4">
                                Quick Facts:
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Focused on Frontend technologies with a strong Full Stack background</li>
                                <li>Economist and Magister in Finance</li>
                                <li>Passionate about scalable, user-friendly & efficient solutions</li>
                                <li>Extensive professional experience in multinational companies</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sección: Education */}
                <div className="mt-8 p-6 border rounded-lg bg-white shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <h3 className="text-3xl font-bold text-olive-800 mb-6">Education</h3>
                    <ul className="list-none list-inside text-gray-700 space-y-2">
                        <li>
                            👨🏻‍🎓 Bootcamp Full Stack Developer - specialized in Frontend, Henry
                            (2024). 800 hs
                        </li>
                        <li>
                            👨🏻‍🎓 The Complete 2024 Web Development Bootcamp, Angela Yu (2024). 62 hs.
                        </li>
                        <li>
                            👨🏻‍🎓 Master&apos;s degree in Finance, Torcuato Di Tella University
                            (2019-2021)
                        </li>
                        <li>
                            👨🏻‍🎓 Bachelor&apos;s degree in Economics, Buenos Aires University
                            (2009-2014). Cum Laude
                        </li>
                    </ul>
                </div>
                <div className="mt-8 p-6 border rounded-lg bg-white shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <h3 className="text-3xl font-bold text-olive-800 mb-6">
                        Working Experience
                    </h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-semibold text-olive-600">
                                ⭐ Kaizen Gaming (Online betting): Mar 2024 - Up to date
                            </h4>
                            <p className="text-gray-700">
                                Treasury lead: day-to-day cash management for Argentina, Canada,
                                Denmark, and Malta; relationship with banks and PSPs; reporting
                                and reconciliation; cash flow and forecast development;
                                investments and expenses negotiation with providers.
                            </p>
                            <p className="mt-2 text-gray-500 italic">
                                Achievements: Improved treasury processes and implemented
                                automations in new markets; led ERP implementation.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-olive-600">
                                ⭐ Tiendamia (E-commerce): Aug 2023 - Mar 2024
                            </h4>
                            <p className="text-gray-700">
                            Treasury reporting Sr. specialist: KPI&apos;s measurement and improvement; daily reporting by provider; data analysis.
                            </p>
                            <p className="mt-2 text-gray-500 italic">
                            Achievements: automated Looker Studio reports with detailed insights by product category, country, and payment method, reducing payment rejections and optimizing flows.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-olive-600">
                                ⭐ Dow Chemical (Oil & Gas): Jan 2019 - Mar 2023
                            </h4>
                            <p className="text-gray-700">
                            Lead Treasury specialist LAA: cash management for LAA Region, focused in Argentina under Central Bank FX regime; front office activities such as FX deals, investments, relationships with banks; back office activities: regulatory requirements - Com 6401, Camex-, reporting, forecasting and planning, intercompany operations, cash pooling implementation.
                            </p>
                            <p className="mt-2 text-gray-500 italic">
                            Achievements: bronze award for the contributions on Plan Gas collections; Silver award for being responsible of prefinance export loans process; selected for Dow-EY Power Up 28th session; “Collaborating for superior results” and “Leading courageously” awards; selected for Mentoring Programme; Bronze award for results during DowDuPont spin-off.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-olive-600">
                                ⭐ Universidad Nacional de Cuyo (Education): Mar 2017 - Jul 2018
                            </h4>
                            <p className="text-gray-700">
                            Professor of Probability and Statistics
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-olive-600">
                                ⭐ Mendoza Local Government (Public sector): Dec 2015 - Jul 2018
                            </h4>
                            <p className="text-gray-700">
                            Project manager: Technical support to startups; financing tools management, business project design, and training courses for entrepreneurs.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-olive-600">
                                ⭐ HSBC (Commercial Banking): Oct 2011 - Jun 2015
                            </h4>
                            <p className="text-gray-700">
                            Relationship manager: Development of corporate product portfolios, credit assessment, and ensuring compliance with global standards (KYC, KYCC, FATCA).
                            </p>
                        </div>
                    </div>
                </div>

                

                {/* Sección: Skills */}
                <div className="mt-8 p-6 border rounded-lg bg-white shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <h3 className="text-3xl font-bold text-olive-800 mb-6">Skills</h3>
                    <ul className="list-none list-inside text-gray-700 space-y-2">
                        <li>
                        ✅ <span className="font-semibold">Frontend:</span> React.js,
                            Redux, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3,
                            Bootstrap, TailwindCSS.
                        </li>
                        <li>
                        ✅ <span className="font-semibold">Backend:</span> Node.js,
                            Express.js, TypeScript, Jest, Jasmine.
                        </li>
                        <li>
                        ✅ <span className="font-semibold">Databases:</span> MongoDB,
                            Mongoose, SQL, PostgreSQL, TypeORM.
                        </li>
                        <li>
                        ✅ <span className="font-semibold">Tools & Libraries:</span>{" "}
                            Webpack, Axios, Formik, Git/GitHub, Vite, Three.js.
                        </li>
                        <li>
                        ✅ <span className="font-semibold">Others:</span> PowerQuery, VBA,
                            Power BI, Looker Studio, SAP, NetSuite, Business Central, Jira.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

