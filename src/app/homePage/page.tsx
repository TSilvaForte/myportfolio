"use client";
import React from "react";
import Animation from "@/components/Animation";
import Typewriter from "typewriter-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-primary-light dark:bg-primary-dark pt-20">
      {/* Sección de Animación - Aparece arriba en móviles */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Animation />
      </div>

      {/* Sección de Texto - Aparece abajo en móviles */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-quaternary w-full max-w-[20rem] md:max-w-[30rem] min-h-[6rem] text-center">
            <Typewriter
              options={{
                strings: ["Hi, this is Tamara.<br> Welcome to my website!"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h1>
          <p className="text-lg text-secondary-light dark:text-secondary-dark flex justify-center py-3 mb-2">
            Scroll down to find out more about me
          </p>
          <DotLottieReact
            src="https://lottie.host/8165408c-4c53-4143-97c4-e8551ff3ec39/K731SWAgGi.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Page;










