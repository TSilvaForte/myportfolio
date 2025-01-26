"use client";
import React, { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  images: string[];
  liveLink: string;
  repoLink: string;
} 

const projects: Project[] = [
  {
    title: "FullTechno E-commerce",
    description:
      "E-commerce application developed using the MERN stack, designed to provide a seamless user experience and robust backend reliability. The application incorporates RESTful APIs to manage products, users and orders, ensuring efficient data flow and scalability. A responsive and intuitive interface was built with React and TailwindCSS. Secure user access is enabled through JWT-based authentication, with Redux handling state management. The site also integrates bcrypt for password encryption, Mongoose for database modeling, Axios for API communication and Formik/Yup for form handling and validation, enhancing security and usability.",
    images: ["/FullTechno1.png", "/FullTechno2.png", "/FullTechno3.png", "/FullTechno4.png",  "/FullTechno5.png", "/FullTechno6.png", "/FullTechno7.png"],
    liveLink: "https://full-techno.vercel.app/",
    repoLink: "https://github.com/TSilvaForte/FullTechno",
  },
  {
    title: "Flotarium Spa",
    description:
      "Full-stack web application for spa appointment management, built with React, Redux Toolkit and Vite for fast and responsive performance. Utilizes Formik and Yup for form validation, React Router DOM for navigation and SweetAlert2 for modern alerts. The backend, developed with TypeScript, Express, TypeORM and a PostgreSQL database ensures data integrity and scalability. Features include real-time booking, calendar views and automated email notifications via MailerSend. Styled with CSS Modules, the app offers an aesthetic and user-friendly experience.",
    images: ["/Flotarium1.png", "/Flotarium2.png", "/Flotarium5.png", "/Flotarium7.png"],
    liveLink: "https://flotariumspa.vercel.app/",
    repoLink: "https://github.com/TSilvaForte/PM3",
  },
  {
    title: "Elysium hotel",
    description:"This hotel management web application uses NestJS for the backend and React for the frontend. JWT ensures secure token-based authentication, and TypeORM manages an SQL database. Swagger offers API documentation, while a logger middleware tracks user roles. Axios handles HTTP requests and Formik manages form validation for registration and bookings. Redux is used for state management. Features include role-based access (admin/user), Google authentication, secure payments with Stripe, room creation via Cloudinary and visit counters with IP identification.",
    images: ["/Elysium1.png", "/Elysium2.png", "/Elysium3.png","/Elysium4.png", "/Elysium5.png", "/Elysium6.png" ],
    liveLink: "In progress",
    repoLink: "https://github.com/RGonzalezRebolledo/PFhenrypt21b",
  },
  {
    title: "Activities board - Student project",
    description:
      "This project is a simple yet functional web application developed as part of my Full Stack Web Development studies. It showcases the implementation of fundamental technologies and concepts used in modern web development: HTML, CSS, JavaScript, Node.js, Jasmine, Live Server. It includes features like dynamically rendering activities as cards, validating form inputs and intuitive interface. Testing has been implemented using Jasmine to ensure robust functionality and the repository pattern has been used to manage activities effectively.",
    images: ["/StudentProject2.png", "/StudentProject3.png", "/StudentProject4.png"],
    liveLink: "https://myfirststudentproject.vercel.app/",
    repoLink: "https://github.com/TSilvaForte/PM1",
  },
  
];

const Page = () => {
  return (
    <section className="py-16 bg-primary-light dark:bg-primary-dark pt-28">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold font-sleepy text-center mb-8 text-secondary-light dark:text-secondary-dark">
          My Latest Projects
        </h2>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <DynamicImageCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DynamicImageCardProps {
  project: Project;
}
const DynamicImageCard: React.FC<DynamicImageCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % project.images.length
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [project.images.length]);

  return (
    <div className=" my-12 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col lg:flex-row">
      {/* Dynamic Image */}
      <div className="relative lg:w-2/3">
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {project.images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex
                  ? "bg-tertiary dark:bg-quinary"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="lg:w-1/3 p-6 flex flex-col justify-between bg-tertiary dark:bg-quinary">
        <div>
          <h3 className="text-2xl font-semibold text-secondary-light dark:text-secondary-dark">
            {project.title}
          </h3>
          <p className="dark:text-secondary-dark text-secondary-light text-sm mt-4 text-justify">{project.description}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 space-y-3">
        <a
  href={project.liveLink !== "In progress" ? project.liveLink : undefined}
  target={project.liveLink !== "In progress" ? "_blank" : undefined}
  rel={project.liveLink !== "In progress" ? "noopener noreferrer" : undefined}
  className={`no-global-link block px-4 py-2 rounded text-sm text-center transition ${
    project.liveLink !== "In progress"
      ? "bg-primary-dark text-secondary-dark dark:text-secondary hover:bg-quaternary dark:hover:bg-tertiary hover:text-primary dark:hover:text-primary"
      : "bg-gray-400 text-gray-700 cursor-not-allowed"
  }`}
  onClick={(e) => project.liveLink === "In progress" && e.preventDefault()}
>
  {project.liveLink !== "In progress" ? "View Live" : "In Progress"}
</a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="no-global-link block bg-primary-dark text-secondary-dark dark:text-secondary px-4 py-2 rounded text-sm text-center hover:bg-quaternary dark:hover:bg-tertiary hover:text-primary dark:hover:text-primary  transition"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;

