import { NavbarComponents } from "../components/navbar";
import { HomePage } from "../components/homepage";
import {About} from "../components/aboutme";
import { Education } from "@/components/education";
import {Skill} from '@/components/skill';
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
      </div>
    </>
  );
}