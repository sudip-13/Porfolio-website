'use client'

import Typewriter from 'typewriter-effect';
interface HomePageProps {
  id: string;
}
export const HomePage: React.FC<HomePageProps> = ({ id }) => {

  return (

    <div className="flex flex-col sm:flex-row justify-evenly items-center h-screen" id={id}>
    <div className="mb-8 sm:mb-0 flex flex-col items-center sm:items-start">
      {/* Icons */}
      <a href="https://github.com/sudip-13" style={{ display: "block", marginBottom: "20px" }}>
        <img src="/github.png" alt="GitHub" className="h-10 sm:h-12 md:h-16 rounded-full" />
      </a>
      <a href="https://www.linkedin.com/in/sudip-kundu-b24984265/" style={{ display: "block", marginBottom: "20px" }}>
        <img src="/linkedin.webp" alt="LinkedIn" className="h-10 sm:h-12 md:h-16 rounded-full" />
      </a>
      <a href="https://x.com/sudip2003kundu">
        <img src="/twitter.png" alt="Twitter" className="h-10 sm:h-12 md:h-16 rounded-full" />
      </a>
    </div>
    <div className="text-center sm:text-left w-full sm:w-1/3">
      <p className="font-serif font-semibold text-4xl sm:text-5xl md:text-6xl subpixel-antialiased text-green-300">Sudip,</p>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
        <p className="font-serif font-semibold text-2xl sm:text-3xl md:text-4xl subpixel-antialiased text-red-400 mb-2 sm:mb-0">passionate</p>
        <h4 className="animation-text font-semibold text-lg sm:text-xl md:text-2xl text-black dark:text-white ml-0 sm:ml-4">
          <Typewriter
            options={{
              strings: ['Web Developer', 'ML Enthusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
      </div>
      <p id='desc' className='text-base sm:text-lg md:text-xl mt-4 '>Currently pursuing Bachelor of Technology in Computer Science & Engineering - Artificial Intelligence & Machine Learning at Brainware University, Barasat, my academic expedition spans from 2021 to 2025.</p>
  
      <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 mt-9">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0000F5"><path d="M480-315.33 284.67-510.67l47.33-48L446.67-444v-356h66.66v356L628-558.67l47.33 48L480-315.33ZM226.67-160q-27 0-46.84-19.83Q160-199.67 160-226.67V-362h66.67v135.33h506.66V-362H800v135.33q0 27-19.83 46.84Q760.33-160 733.33-160H226.67Z" /></svg>
        <a href="/resume.pdf" className='text-xl font-serif font-semibold italic antialiased pl-4 text-blue-800' download="Sudip Resume">Download Resume</a>
      </button>
    </div>
  
    <div className="sm:flex sm:justify-center">
      <img src="/homeimg.png" alt="Home" className="h-28 sm:h-40 md:h-60 rounded-full animate-pulse hover:animate-bounce" />
    </div>
  </div>
  
  );
}