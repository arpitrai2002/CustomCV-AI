import Header from '@/components/custom/Header';
import { TypeAnimation } from 'react-type-animation';
import React from 'react';

function Home() {
  return (
    <div>
    <Header className="w-full" />
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white flex flex-col items-center">
      <div className="flex flex-col items-center justify-center flex-grow">
        <section className="z-50">
          <div className="py-12 px-4 mx-auto max-w-screen-xl text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
              <TypeAnimation
                sequence={['Build Your Resume', 2000, 'With AI', 2000]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className="inline-block text-primary animate-pulse"
              />
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">
              Effortlessly Craft a Standout Resume with Our AI-Powered Builder
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/dashboard"
                className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-500 hover:shadow-indigo-600/50 transform hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}

export default Home;
