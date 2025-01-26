import './globals.css';
import { ReactNode } from 'react';
import { AudioProvider } from '../../context/musicContext'
import { DarkModeProvider } from "../../context/darkModeContext";
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Tamara Silva - Full Stack Developer',
  description: 'My portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+TZ+Guides&family=Poiret+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-primary">
        <AudioProvider>
        <DarkModeProvider>
          <Navbar />
          {children}
          </DarkModeProvider>
        </AudioProvider>

      </body>

    </html>
  );
}

