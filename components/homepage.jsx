'use client'

import Typewriter from 'typewriter-effect';
export const HomePage = () => {

  return (

    <div className="flex flex-col sm:flex-row justify-around items-center h-screen">
      <div className="mb-8 sm:mb-0">
        {/* Icons */}
        <a href="https://github.com/sudip-13" style={{ display: "block", marginBottom: "45px" }}>
          <img src="/github.png" alt="GitHub" className="h-10 sm:h-12 md:h-16 rounded-full" />
        </a>
        <a href="https://www.linkedin.com/in/sudip-kundu-b24984265/" style={{ display: "block", marginBottom: "45px" }}>
          <img src="/linkedin.webp" alt="LinkedIn" className="h-10 sm:h-12 md:h-16 rounded-full" />
        </a>
        <a href="https://x.com/sudip2003kundu">
          <img src="/twitter.png" alt="Twiiter" className="h-10 sm:h-12 md:h-16 rounded-full" />
        </a>
      </div>
      <div className="text-center sm:text-left">
        <p className="font-serif font-semibold text-4xl sm:text-5xl md:text-6xl subpixel-antialiased text-green-300">Sudip,</p>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
          <p className="font-serif font-semibold text-2xl sm:text-3xl md:text-4xl subpixel-antialiased text-red-400 mb-2 sm:mb-0">passionate</p>
          <h4 className={`animation-text font-semibold text-lg sm:text-xl md:text-2xl text-black dark:text-white ml-0 sm:ml-4`}>
            <Typewriter
              options={{
                strings: ['Web Developer', 'ML Enthusiast'],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
        </div>
        <p id='desc' className='text-base sm:text-lg md:text-xl mt-4'>Currently pursuing Bachelor of Technology</p>
        <p id='desc' className='text-base sm:text-lg md:text-xl mt-1'> in Computer Science & Engineering - Artificial Intelligence &</p>
        <p id='desc' className='text-base sm:text-lg md:text-xl mt-1'> Machine Learning at Brainware University, Barasat,</p>
        <p id='desc' className='text-base sm:text-lg md:text-xl mt-1'> my academic expedition spans from 2021 to 2025.</p>

        <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 mt-9">
        <svg className="w-4 h-6 me-2 -ms-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 555"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
        
        <a href="/resume.pdf" download="Sudip Resume">Download Resume</a>
      </button>
      </div>
      
      <div>
        <img src="/homeimg.png" alt="Home" className="h-28 sm:h-40 md:h-60 rounded-full animate-pulse hover:animate-bounce" />
      </div>
    </div>
  );
}