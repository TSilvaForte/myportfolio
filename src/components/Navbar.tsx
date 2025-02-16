"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useAudio } from "../../context/musicContext";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useDarkMode } from "../../context/darkModeContext";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <Link href={href} onClick={onClick} className="text-white dark:text-black hover:underline">
    {children}
  </Link>
);

const Navbar = () => {

  const { isPlaying, togglePlayPause } = useAudio();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  
  return (
    <nav className="bg-primary-dark dark:bg-primary-light py-4 px-6 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center font-primary">
        {/* Título */}
        <div className="title">
          <Link href="/" className="text-xl font-bold">
            Tamara Silva
          </Link>
        </div>

        {/* Links del menú */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="/" onClick={handleNavLinkClick}>About Me</NavLink>
          <NavLink href="/projects" onClick={handleNavLinkClick}>Projects</NavLink>
          <NavLink href="/myResume" onClick={handleNavLinkClick}>Resume</NavLink>
          <NavLink href="/contact" onClick={handleNavLinkClick}>Contact</NavLink>

          {/* Contenedor de botones */}
          <div className="flex items-center space-x-4">
            {/* Switch de modo claro/oscuro */}
            <div
              onClick={toggleDarkMode}
              className="relative flex items-center w-8 h-4 cursor-pointer rounded-full p-1 transition bg-tertiary"
            >
              <div
                className={`w-3 h-3 bg-secondary rounded-full shadow-md transform transition ${darkMode ? "translate-x-4" : "translate-x-0"}`}
              />
            </div>

            {/* Botón de sonido */}
            <button
              onClick={togglePlayPause}
              className="text-xl hover:bg-tertiary p-2 rounded-full"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
            </button>
          </div>
        </div>

         {/* Botón de menú para móviles */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-primary-dark dark:bg-primary-light absolute top-0 right-0 p-6 shadow-md max-w-xs w-auto`}>
        <div className="flex flex-col space-y-4">
          <NavLink href="/" onClick={handleNavLinkClick}>About Me</NavLink>
          <NavLink href="/projects" onClick={handleNavLinkClick}>Projects</NavLink>
          <NavLink href="/myResume" onClick={handleNavLinkClick}>Resume</NavLink>
          <NavLink href="/contact" onClick={handleNavLinkClick}>Contact</NavLink>

          {/* Botón de modo claro/oscuro */}
          <div
            onClick={toggleDarkMode}
            className="relative flex items-center w-8 h-4 cursor-pointer rounded-full p-1 transition bg-tertiary"
          >
            <div
              className={`w-3 h-3 bg-secondary rounded-full shadow-md transform transition ${darkMode ? "translate-x-4" : "translate-x-0"}`}
            />
          </div>

          {/* Botón de sonido */}
          <button
            onClick={togglePlayPause}
            className="text-xl hover:bg-tertiary p-2 rounded-full"
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
          >
            {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

