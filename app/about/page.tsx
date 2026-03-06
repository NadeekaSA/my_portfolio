export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center mb-8">
        <img 
          src="/profile.png" 
          alt="Nadeeka Sachinthana" 
          className="w-24 h-24 sm:w-40 sm:h-40 rounded-full mb-6 border-4 border-gray-700 object-cover"
        />
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">About Me</h1>
      </div>
      <p className="text-gray-400 leading-7 text-sm sm:text-base">
        I am a Software Engineering undergraduate with hands-on experience in
        web development, mobile app development, and database-driven systems.
        I enjoy building practical solutions using modern technologies.
      </p>

      <div className="flex justify-center mt-8">
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 bg-blue-600 rounded-lg text-sm sm:text-base"
        >
          Download CV
        </a>
      </div>
    </main>
  );
}