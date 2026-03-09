"use client";

import { getAssetUrl } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="text-center mb-20 relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl -z-10"></div>
      
      <div className="mb-8">
        <img
          src={getAssetUrl("/profile.png")}
          alt="Nadeeka Sachinthana"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-blue-500 object-cover shadow-2xl shadow-blue-500/30"
        />
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
        Nadeeka Sachinthana
      </h1>
      
      <p className="text-xl sm:text-2xl text-gray-300 mb-6">
        Full Stack Developer & Software Engineer
      </p>
      
      <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
        I build exceptional web and mobile applications that drive business growth. 
        Specializing in modern technologies to transform your ideas into reality.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#contact"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50 text-base sm:text-lg font-semibold"
        >
          🚀 Start Your Project
        </a>
        <a
          href="/cv.pdf"
          download
          className="px-8 py-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all transform hover:scale-105 border border-gray-700 text-base sm:text-lg font-semibold"
        >
          📄 Download CV
        </a>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-400">2+</div>
          <div className="text-xs sm:text-sm text-gray-500 mt-1">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-purple-400">15+</div>
          <div className="text-xs sm:text-sm text-gray-500 mt-1">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-pink-400">100%</div>
          <div className="text-xs sm:text-sm text-gray-500 mt-1">Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
}
