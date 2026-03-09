"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  
  const sendEmail = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
     const result = await emailjs.sendForm(
        "service_88h6mze",
        "template_t17w2x5",
        e.target,
        {
          publicKey: "gIM1fAszQZsulFxWv",
          limitRate: {
            throttle: 3000, // ms
          },
        }
      );
      
     console.log("Email sent successfully:", result);
      if (result.status === 200) {
        e.target.reset();
        setSubmitMessage("✅ Message sent successfully! I'll get back to you soon.");
      }
    } catch (error: any) {
     console.error("EmailJS Error Details:", {
        status: error.status,
        text: error.text,
        message: error.message,
      });
      
      let errorMessage = "❌ Failed to send message. Please try again.";
      
      if (error.status === 412) {
        errorMessage = "❌ Email configuration error. Please verify your EmailJS service and template IDs in the dashboard.";
      } else if (error.status === 429) {
        errorMessage= "⚠️ Too many requests. Please wait a moment before sending again.";
      }
      
      setSubmitMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

 return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Let's Work Together
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how I can help bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <div className="order-2 md:order-1">
          <form onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name" 
                placeholder="John Doe" 
               required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <input
                id="email"
                name="email" 
                type="email"
                placeholder="john@example.com" 
               required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Project Details
              </label>
              <textarea 
                id="message"
                name="message" 
                placeholder="Tell me about your project, timeline, and budget..." 
                rows={6}
               required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base resize-none"
              />
            </div>
            <button
              type="submit" 
              disabled={isSubmitting}
              className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold transition-all ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
              }`}
            >
              {isSubmitting ? 'Sending...' : '🚀 Send Message'}
            </button>
            {submitMessage && (
              <p className={`text-sm mt-4 ${submitMessage.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="order-1 md:order-2">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Why Work With Me?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-300">Professional, high-quality code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-300">Timely delivery and clear communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-300">Modern tech stack and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-300">Post-project support and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-300">Competitive pricing</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <a href="mailto:nadeekasa@proton.me" className="hover:text-blue-400 transition-colors">
                    nadeekasa@proton.me
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💼</span>
                  <a href="https://www.linkedin.com/in/nadeeka-sachinthana-alahakoon-331401274/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💻</span>
                  <a href="https://github.com/NadeekaSA" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50">
              <h3 className="text-lg font-semibold mb-2">⏱️ Response Time</h3>
              <p className="text-gray-300">
                I typically respond within <strong className="text-blue-400">24-48 hours</strong>. For urgent projects, please mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
