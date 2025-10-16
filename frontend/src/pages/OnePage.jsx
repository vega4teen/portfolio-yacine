import { useEffect } from "react";
import Home from "./Home";
import Resume from "./Resume";
import ProjetUniv from "./ProjetUniv";
import Experience from "./Experience";
import Skills from './Skills';
import Contact from "./Contact";

export default function PortfolioOnePage() {
  // Scroll fluide
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="onepage">
      <section id="home" className="section"><Home /></section>
      <section id="resume" className="section"><Resume /></section>
      <section id="experience" className="section"><Experience /></section>
      <section id="projects" className="section"><ProjetUniv /></section>
      <section id="skills" className="section"><Skills/></section>
      <section id="contact" className="section"><Contact /></section>
    </div>
  );
}
