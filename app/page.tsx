import Skills from "../components/Skills";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <main className="px-6 py-12 max-w-6xl mx-auto">
      <section className="text-center mb-16">
        <div className="mb-6">
          <img
            src="/profile.png"
            alt="Nadeeka Sachinthana"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto border-4 border-gray-700 object-cover"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">Nadeeka Sachinthana</h1>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Software Engineering Undergraduate | Full Stack Developer
        </p>
      </section>

      <Skills />
      <div className="flex justify-center mt-10">
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          Download CV
        </a>
      </div>

      <ProjectsSection />
    </main>
  );
}
