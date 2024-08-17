import ProjectsSection from "@/components/landing_page/ProjectsSection";
import ShortProfile from "@/components/landing_page/ShortProfile";
import SkillsSection from "@/components/landing_page/SkillsSection";

export default function Home() {
  return (
    <main className="font-sourceCodePro text-b-sm flex flex-col">
      <ShortProfile />

      <SkillsSection />

      <ProjectsSection />
    </main>
  );
}
