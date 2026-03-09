export default function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {["TypeScript", "JavaScript", "Java", "React", "Next.js", "Tailwind", "PHP", "MySQL", "Flutter", "Firebase", "Node.js"].map(
          (skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gray-800 text-xs sm:text-sm"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </section>
  );
}