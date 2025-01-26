"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useAudio } from '../../context/musicContext';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useDarkMode } from "../../context/darkModeContext"; 

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href}>
    {children}
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isPlaying, togglePlayPause } = useAudio(); // Usa el hook para controlar el audio
  const { darkMode, toggleDarkMode } = useDarkMode();
  


  return (
    <nav className="bg-primary-dark dark:bg-primary-light py-4 px-6 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center font-primary">

        {/* Título */}
        <div className="title">
          <Link href="/">Tamara Silva</Link>
        </div>

        {/* Links del menú */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="/">About Me</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/myResume">Resume</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          {/* Switch de modo claro/oscuro */}
          <div
            onClick={toggleDarkMode}
            className={`relative inline-flex items-center w-14 h-8 cursor-pointer rounded-full p-1 transition bg-tertiary
            }`}
          >
            <div
              className={`w-6 h-6 bg-secondary rounded-full shadow-md transform transition ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </div>
        
         {/* Botón de sonido */}
         <button
  onClick={togglePlayPause}
  className="text-2xl focus:outline-none hover:bg-tertiary"
  aria-label={isPlaying ? "Pause audio" : "Play audio"}
>
  {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
</button>
</div>

        {/* Botón del menú para pantallas pequeñas */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-olive-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#about" className="block" >About Me</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#skills" className="block">Skills</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


