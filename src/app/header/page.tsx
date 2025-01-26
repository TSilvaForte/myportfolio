import React from 'react';
import Image from 'next/image'; 
import Marquee from '@/components/Marquee';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen">
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-tertiary dark:bg-quinary">

      <div className="md:w-1/2">
        <h1 className="text-4xl font-sleepy font-bold mb-4 text-quaternary">Who Am I?</h1>
        <p className="text-lg text-primary-dark dark:text-primary-light mb-4 text-justify">
          I have a background as Economist and Magister in Finance, with many different roles among multinational companies.
        </p>
        <p className="text-lg text-primary-dark dark:text-primary-light mb-4 text-justify">
        I started diving into programming almost by chance, as self-learner, taking online courses and working in small projects for family and friends.
        </p>
        <p className="text-lg text-primary-dark dark:text-primary-light mb-4 text-justify">
        It took me some time to understand how much I enjoy developing websites and apps from scratch, meshing up my previous logical mindset with new skills I gained while learning to code.
        </p>
        <p className="text-lg text-primary-dark dark:text-primary-light mb-4 text-justify">
        In 2023 that I decided to enroll at an 800-hour Bootcamp to become a Full Stack developer, specialized in Frontend, accelerating my new professional path.
        </p>
        <h2 className="text-4xl font-sleepy font-bold mb-4 text-quaternary">What Can I Do?</h2>
        <p className="text-lg text-primary-dark dark:text-primary-light text-justify">
          My technical expertise includes working with technologies like JavaScript, TypeScript, React.js, Redux, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, CSS, Tailwind CSS and more.
        </p>
      </div>


      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <Image 
          src="/profile.jpg" 
          alt="Profile Picture" 
          width={300} 
          height={300} 
          className="rounded-full shadow-lg border-4 border-gray-200 object-cover mb-4" 
        />
        <div className="flex gap-4 mt-4">
        <Link href="/myResume">
          <button className= "min-w-42">
            Go to my resume
          </button>
          </Link>
          <Link href="/projects">
          <button className="min-w-42">
            Go to my projects
          </button>
          </Link>
        </div>
      </div>
    </div>
        <Marquee/>
    </div>
  );
};

export default Page;
