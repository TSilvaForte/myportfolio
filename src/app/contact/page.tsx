import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-primary-light dark:bg-primary-dark py-40 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-monica text-primary dark:text-primary-light mb-6">Get in Touch</h2>
        <div className="flex justify-center gap-8 mb-6">
          {/* GitHub */}
          <a 
            href="https://github.com/TSilvaForte" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary dark:bg-primary-light text-primary-light dark:text-primary w-16 h-16 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition-transform duration-300"
          >
            <FaGithub size={30} />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/tamara-silva-5427552b7/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary dark:bg-primary-light text-primary-light dark:text-primary w-16 h-16 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin size={30} />
          </a>

          {/* Gmail */}
          <a 
            href="mailto:tamara.sfok@gmail.com" 
            className="bg-primary dark:bg-primary-light text-primary-light dark:text-primary w-16 h-16 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition-transform duration-300"
          >
            <FaEnvelope size={30} />
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/+5491154585532" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary dark:bg-primary-light text-primary-light dark:text-primary w-16 h-16 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition-transform duration-300"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>

        {/* Legend */}
        <div className="text-primary dark:text-primary-light text-lg">
          <p>
            Feel free to reach out via <strong>GitHub</strong>, <strong>LinkedIn</strong>, <strong>Email</strong>, or <strong>WhatsApp</strong>.
          </p>
          <p className="mt-2">
            I&apos;m always open to collaboration and opportunities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

