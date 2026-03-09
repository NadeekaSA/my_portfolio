export default function TestimonialsSection() {
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Client Testimonials
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Building trust through quality work and satisfied clients
        </p>
      </div>
      
      {/* No testimonials yet - Call to Action */}
      <div className="max-w-3xl mx-auto">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl">
              🚀
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Be a Client Today!
            </h3>
            
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              I'm currently building my portfolio and offering special rates for my first few clients. 
              Get premium web/app development services at an unbeatable price!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">✓</span>
                <span>Custom Web Development</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">✓</span>
                <span>Modern Design</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-green-400">✓</span>
                <span>Responsive & Fast</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 inline-block"
              >
                Contact Me Today
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300 border border-gray-700 inline-block"
              >
                View My Work
              </a>
            </div>
            
            <p className="mt-6 text-sm text-gray-500 italic">
              Limited-time offer for new clients!
            </p>
          </div>
        </div>
        
        {/* Optional: Add a simple form for testimonial requests */}
        <div className="mt-12 p-6 rounded-xl bg-gray-900/30 border border-gray-800">
          <h4 className="text-lg font-semibold mb-3 text-center">
            Have you worked with me before?
          </h4>
          <p className="text-gray-400 text-sm text-center mb-4">
            I'd love to hear about your experience! If you've worked with me on a project, please consider leaving a testimonial.
          </p>
          <a
            href="/contact"
            className="block w-full max-w-md mx-auto px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium rounded-lg transition-all duration-300 text-center border border-gray-700"
          >
            Submit Your Feedback
          </a>
        </div>
      </div>
    </section>
  );
}
