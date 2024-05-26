import { NavbarComponents } from "../components/navbar";
import { HomePage } from "../components/homepage";
import {About} from "../components/aboutme";
export default function Home() {
  return (
    <>
      <div>
        <NavbarComponents />
        <HomePage /> 
        <About/>
      </div>
    </>
  );
}