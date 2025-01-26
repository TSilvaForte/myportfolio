import React from "react";
import Image from "next/image";

const logos = [
  { src: "/htmlicon.svg", alt: "HTML" },
  { src: "/javascripticon.svg", alt: "JavaScript" },
  { src: "/typescripticon.svg", alt: "Typescript" },
  { src: "/cssicon.svg", alt: "CSS" },
  { src: "/tailwindicon.svg", alt: "Tailwind CSS" },
  { src: "/bootstrapicon.svg", alt: "Bootstrap" },
  { src: "/figmaicon.svg", alt: "Figma" },
  { src: "/reacticon.svg", alt: "React" },
  { src: "/expressicon.svg", alt: "Express" },
  { src: "/nexjsicon.svg", alt: "Next.js" },
  { src: "/nodejsicon.svg", alt: "Node.js" },
  { src: "/typeormicon.svg", alt: "TypeORM" },
  { src: "/mongodbicon.svg", alt: "MongoDB" },
  { src: "/postgresqlicon.svg", alt: "PostgreSQL" },
  { src: "/mysqlicon.svg", alt: "MySQL" },
  { src: "/giticon.svg", alt: "GitHub" },
  { src: "/reduxicon.svg", alt: "Redux" },
  { src: "/webpackicon.svg", alt: "Webpack" },
  { src: "/viteicon.svg", alt: "Vite" },
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden bg-primary py-4">
      {/* Contenedor animado */}
      <div className="flex animate-marquee gap-8 whitespace-nowrap">
        {/* Generación de elementos con claves únicas */}
        {[...Array(3)].flatMap((_, iteration) =>
          logos.map((logo, logoIndex) => (
            <div
              key={`${logo.alt}-${iteration}-${logoIndex}`}
              className="flex-shrink-0 flex flex-col items-center justify-center bg-secondary rounded-lg shadow-md w-28 h-28 p-4 transform hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={64}
                height={64}
                className="object-contain w-16 h-16"
              />
              <p className="mt-2 text-sm font-medium text-secondary-light text-center">
                {logo.alt}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Marquee;


