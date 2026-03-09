export const metadata = {
  title: "About | Nadeeka Sachinthana",
  description: "Learn more about Nadeeka Sachinthana, a passionate Full Stack Developer with expertise in modern web and mobile technologies.",
};

import { getAssetUrl } from "@/lib/utils";

export default function AboutPage() {
 return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center mb-8">
        <img 
          src={getAssetUrl("/profile.png")} 
          alt="Nadeeka Sachinthana" 
          className="w-24 h-24 sm:w-40 sm:h-40 rounded-full mb-6 border-4 border-blue-500 object-cover shadow-2xl shadow-blue-500/30"
        />
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</h1>
      </div>
      
      <div className="prose prose-invert max-w-none mb-8">
        <p className="text-gray-300 leading-8 text-base sm:text-lg mb-6">
          I'm a passionate <strong className="text-blue-400">Software Engineering undergraduate</strong> and <strong className="text-purple-400">Full Stack Developer</strong> with a proven track record of delivering high-quality web and mobile applications. With over 2 years of hands-on experience, I specialize in transforming complex problems into elegant, user-friendly solutions.
        </p>

        <p className="text-gray-300 leading-8 text-base sm:text-lg mb-6">
          My journey in software development started with a curiosity about how things work, which quickly evolved into a career focused on building scalable applications using modern technologies. I pride myself on writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
        </p>

        <p className="text-gray-300 leading-8 text-base sm:text-lg mb-6">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and always pushing the boundaries of what's possible.
        </p>
      </div>

      {/* What I Offer */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">What I Bring to the Table</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="font-semibold mb-2 text-blue-400">💡 Problem Solver</h3>
            <p className="text-gray-400 text-sm">I don't just write code—I solve business challenges with thoughtful, efficient solutions.</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="font-semibold mb-2 text-purple-400">🎯 Detail-Oriented</h3>
            <p className="text-gray-400 text-sm">Every pixel, every line of code matters. Quality is non-negotiable.</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="font-semibold mb-2 text-green-400">🤝 Client-Focused</h3>
            <p className="text-gray-400 text-sm">Your success is my success. I work closely with clients to exceed expectations.</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="font-semibold mb-2 text-pink-400">⚡ Fast Learner</h3>
            <p className="text-gray-400 text-sm">Technology evolves rapidly, and so do I. Always learning, always improving.</p>
          </div>
        </div>
      </div>

      {/* Technical Expertise */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Technical Expertise</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-gray-300">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/50 text-xs text-blue-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-300">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Java Web Applications", "PHP", "MySQL", "Firebase", "RESTful APIs", "Node.js"].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full bg-purple-900/30 border border-purple-800/50 text-xs text-purple-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-300">Mobile Development</h3>
            <div className="flex flex-wrap gap-2">
              {["Flutter", "Dart", "Cross-platform Apps"].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full bg-green-900/30 border border-green-800/50 text-xs text-green-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="/cv.pdf"
          download
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-base font-semibold shadow-lg shadow-blue-500/50"
        >
          📄 Download My CV
        </a>
      </div>
    </main>
  );
}
