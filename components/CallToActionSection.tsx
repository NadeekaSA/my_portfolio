interface CallToActionSectionProps {
  id?: string;
}

export default function CallToActionSection({ id }: CallToActionSectionProps) {
  return (
    <section id={id} className="mb-20">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-gray-800 p-8 sm:p-12">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life. Whether you need a complete solution 
            or specific development services, I'm here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50 text-base sm:text-lg font-semibold w-full sm:w-auto"
            >
              📩 Get Free Consultation
            </a>
            <a
              href="mailto:nadeeka@example.com"
              className="px-8 py-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all transform hover:scale-105 border border-gray-700 text-base sm:text-lg font-semibold w-full sm:w-auto"
            >
              ✉️ Email Me Directly
            </a>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Free Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Quick Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Flexible Availability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
