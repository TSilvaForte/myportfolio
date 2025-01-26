"use client";
import React from 'react';
import Animation from '@/components/Animation';
import Typewriter from 'typewriter-effect';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Page = () => {
  return (
    <div className="flex items-center justify-between h-screen bg-primary-light dark:bg-primary-dark pt-20">
      <div className="w-1/2 flex items-center justify-center">
        <Animation />
      </div>

      <div className="w-1/2 flex items-center justify-center p-4">
        <div className="text-center md:text-left">
          <div>

            <h1
              className="text-4xl font-bold mb-4 text-quaternary w-[30rem] min-h-[6rem] text-center"
              // style={{ width: '30rem', minHeight: '6rem', color: 'quaternary' }}
            >
              <Typewriter
                options={{
                  strings: ['Hi, this is Tamara.<br> Welcome to my website!'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </h1>
          </div>
          <div>
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
    </div>
  );
};

export default Page;









