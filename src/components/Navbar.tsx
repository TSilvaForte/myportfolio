"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isPlaying, togglePlayPause } = useAudio();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Cierra el menú cuando se hace clic en una sección del menú
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

        {/* Botón del menú para móviles */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
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

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute right-0 mt-2 flex flex-col bg-primary-dark dark:bg-primary-light p-4 shadow-md rounded-lg w-auto min-w-max"
        >
          <NavLink href="/" onClick={handleNavLinkClick}>About Me</NavLink>
          <NavLink href="/projects" onClick={handleNavLinkClick}>Projects</NavLink>
          <NavLink href="/myResume" onClick={handleNavLinkClick}>Resume</NavLink>
          <NavLink href="/contact" onClick={handleNavLinkClick}>Contact</NavLink>

          {/* Contenedor de botones */}
          <div className="flex flex-col items-center space-y-2 mt-2">
            {/* Switch de modo claro/oscuro en móviles */}
            <div
              onClick={toggleDarkMode}
              className="relative flex items-center w-8 h-4 cursor-pointer rounded-full p-1 transition bg-tertiary"
            >
              <div
                className={`w-3 h-3 bg-secondary rounded-full shadow-md transform transition ${darkMode ? "translate-x-4" : "translate-x-0"}`}
              />
            </div>

            {/* Botón de sonido en móviles */}
            <button
              onClick={togglePlayPause}
              className="text-xl hover:bg-tertiary p-2 rounded-full"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

