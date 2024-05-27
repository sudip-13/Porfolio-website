"use client";
// "use client" is specific to Blitz.js, you can remove it if you're using a different framework like Next.js

import { useEffect, useState } from 'react';

export const NavbarComponents = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleScroll = () => {
    const homeSection = document.getElementById('home-page');
    const aboutSection = document.getElementById('about-page');
    const educationSection = document.getElementById('education-page');
    const skillsSection = document.getElementById('skills-page');
    const projectsSection = document.getElementById('projects-page');
    const contactSection = document.getElementById('contact-page');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop >= homeSection.offsetTop && scrollTop < aboutSection.offsetTop) {
      setActiveSection('home-page');
    } else if (scrollTop >= aboutSection.offsetTop && scrollTop < educationSection.offsetTop) {
      setActiveSection('about-page');
    } else if (scrollTop >= educationSection.offsetTop && scrollTop < skillsSection.offsetTop) {
      setActiveSection('education-page');
    } else if (scrollTop >= skillsSection.offsetTop && scrollTop < projectsSection.offsetTop) {
      setActiveSection('skills-page');
    } else if (scrollTop >= projectsSection.offsetTop && scrollTop < contactSection.offsetTop) {
      setActiveSection('projects-page');
    } else if (scrollTop >= contactSection.offsetTop) {
      setActiveSection('contact-page');
    } else {
      setActiveSection(null);
    }
  };
  useEffect(() => {
    console.log(activeSection)
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setActiveSection,handleScroll]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/pic.jpg" className="h-10 w-9 rounded-full" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sudip</span>
        </a>
        <button
          onClick={toggleMenu} // Call toggleMenu function on button click
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"} // Set aria-expanded based on menu state
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:flex md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
              <a href="#home-page" className={`block py-2 px-3 rounded ${activeSection === 'home-page' ? 'text-blue-500' : 'text-white'} hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current={activeSection === 'home-page' ? 'page' : undefined}>Home</a>
            </li>
            <li>
              <a href="#about-page" className={`block py-2 px-3 rounded ${activeSection === 'about-page' ? 'text-blue-500' : 'text-white'} hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current={activeSection === 'about-page' ? 'page' : undefined}>About Me</a>
            </li>
            <li>
              <a href="#education-page" className={`block py-2 px-3 text-${activeSection === 'education-page' ? 'blue' : 'gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current={activeSection === 'education-page' ? 'page' : undefined}>Education</a>
            </li>
            <li>
              <a href="#skills-page" className={`block py-2 px-3 text-${activeSection === 'skills-page' ? 'blue' : 'gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current={activeSection === 'skills-page' ? 'page' : undefined}>Skills</a>
            </li>
            <li>
              <a href="#projects-page" className={`block py-2 px-3 text-${activeSection === 'projects-page' ? 'blue' : 'gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current={activeSection === 'projects-page' ? 'page' : undefined}>Projects</a>
            </li>
            <li>
              <a href="#contact-page" className={`block py-2 px-3 text-${activeSection === 'contact-page' ? 'blue' : 'gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current={activeSection === 'contact-page' ? 'page' : undefined}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
