import { NavbarComponents } from "../components/navbar";
import { HomePage } from "@/components/homepage";
import { About } from "@/components/aboutme";
import { Education } from "@/components/education";
import { Skill } from '@/components/skill';
import { Project } from '@/components/project'
import { Contact } from "@/components/contact";
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <div>
        <NavbarComponents />
        <div className="pt-16"></div>
        <HomePage id="home-page" />
        <div className="pt-16"></div>
        <About id="about-page" />
        <div className="pt-16"></div>
        <Education id="education-page" />
        <div className="pt-16"></div>
        <Skill id="skills-page" />
        <div className="pt-16"></div>
        <Project id="projects-page" />
        <div className="pt-16"></div>
        <Contact id="contact-page" />
        <div className="pb-32"></div>
        <div className="flex items-center flex-col">
          <p className="font-serif text-5xl font-semibold">Sudip Kundu</p>
          <div className="flex flex-row gap-4 mt-8 text-xl font-serif">
            <a href="#about-page" className={`block py-2 px-3 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} >About</a>
            <a href="#projects-page" className={`block py-2 px-3 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} >Projects</a>
            <a href="#skills-page" className={`block py-2 px-3 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} >Skills</a>
          </div>
          <div className="flex flex-row gap-8 mt-8 text-xl font-serif">
            <a href="https://x.com/sudip2003kundu">
              <Image src="/twitter.png" className="h-12 rounded-full" alt="Twitter" />
            </a>
            <a href="https://github.com/sudip-13">
              <Image src="/github.png" className="h-12 rounded-full " alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/sudip-kundu-b24984265/">
            <Image src="/linkedin.webp"  className="h-12 rounded-full " alt="Linkedin" />
            </a>
          </div>
        </div>
        <footer className="text-center text-white text-xl font-serif mt-16">
          <p>&copy; Sudip. All rights reserved 2024</p>
        </footer>
        <div className="pb-16"></div>

      </div>
    </>
  );
}