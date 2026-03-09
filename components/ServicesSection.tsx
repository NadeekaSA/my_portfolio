export default function ServicesSection() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom, responsive websites built with React, Next.js, and modern technologies. SEO-optimized and mobile-friendly.",
     color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Cross-platform mobile applications using Flutter. Deploy on both iOS and Android from a single codebase.",
     color: "from-purple-500 to-pink-500"
    },
    {
      icon: "⚙️",
      title: "Full Stack Solutions",
      description: "End-to-end web applications with robust backends using Java, PHP, and modern frameworks. Database design with MySQL, Firebase, and scalable architectures.",
     color: "from-green-500 to-teal-500"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed for optimal user experience. Tailwind CSS for rapid, clean styling.",
     color: "from-orange-500 to-red-500"
    },
    {
      icon: "🔧",
      title: "API Development",
      description: "RESTful APIs and third-party integrations. Secure, scalable, and well-documented backend services.",
     color: "from-indigo-500 to-blue-500"
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description: "Speed optimization, code refactoring, and performance improvements for existing applications.",
     color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Services I Offer
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Transform your ideas into powerful digital solutions with comprehensive development services
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-4 group-hover:shadow-lg transition-shadow`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
