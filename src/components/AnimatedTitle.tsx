"use client";
import React, { useEffect, useState } from "react";

// Definir los tipos para las props
type AnimatedTitleProps = {
  text: string; // El texto es una cadena
  onComplete?: () => void; // La función es opcional
};

type AnimatedSubtitleProps = {
  text: string; // El texto es una cadena
};
export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, 80); 
        return () => clearTimeout(timeout);
      } else if (onComplete) {
        onComplete();
      }
    }, [index, text, onComplete]);
  
    return (
      <h1 className="text-5xl font-bold text-quaternary text-center">
        {displayedText}
      </h1>
    );
  };
  
  export const AnimatedSubtitle: React.FC<AnimatedSubtitleProps> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, 50); 
        return () => clearTimeout(timeout);
      }
    }, [index, text]);

    return (
        <h2 className="text-2xl font-medium text-olive-600 text-center mt-4">
          {displayedText}
          <span className="border-r-2 border-olive-600 animate-blink">|</span>
        </h2>
      );
    };