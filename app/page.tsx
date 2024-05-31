import { NavbarComponents } from "../components/navbar";
import { HomePage } from "../components/homepage";
import {About} from "../components/aboutme";
import { Education } from "@/components/education";
import {Skill} from '@/components/skill';
import {Project} from '@/components/project'
export default function Home() {
  return (
    <>
      <div>
        <NavbarComponents />
        <HomePage id="home-page"/> 
        <div className="pb-16"></div>
        <About id="about-page"/>
        <div className="pb-16"></div>
        <Education id="education-page"/>
        <div className="pb-16"></div>
        <Skill id="skills-page"/>
        <div className="pb-16"></div>
        <Project id="projects-page"/>
      </div>
    </>
  );
}