import About from "@/components/about";
import Education from "@/components/education";
import English from "@/components/english";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="ml-[272px] bg-gray-100 min-h-screen px-8 pr-[95px]">
      <About />
      <Experience />
      <English />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
}
