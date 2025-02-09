"use client"
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Animation = () => {
  return (
    <div className="w-full max-w-xs md:max-w-lg lg:max-w-xl aspect-square">
    <DotLottieReact
      // src="https://lottie.host/9acf36cb-0438-4a29-bea6-299069634576/IIkO0SXnwG.lottie"
      src="https://lottie.host/85156a6c-8dc5-43e2-bc9e-35a1a041f744/3PRgKE0pPP.lottie"
      loop
      autoplay
      className="w-full h-full"
    />
    </div>
  );
};

export default Animation;
