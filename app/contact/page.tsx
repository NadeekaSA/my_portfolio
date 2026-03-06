"use client";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const sendEmail = async (e: any) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_88h6mze",
        "template_t17w2x5",
        e.target,
        "gIM1fAszQZsulFxWv"
      );
      
      if (result.status === 200) {
        e.target.reset();
        alert("Message sent successfully!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <main className="max-w-md sm:max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Contact Me</h1>

      <form onSubmit={sendEmail} className="space-y-4">
        <input name="name" placeholder="Your Name" className="w-full p-3 bg-gray-800 rounded text-sm sm:text-base" />
        <input name="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 rounded text-sm sm:text-base" />
        <textarea name="message" placeholder="Message" className="w-full p-3 bg-gray-800 rounded text-sm sm:text-base" />
        <button className="bg-blue-600 px-6 py-3 rounded w-full sm:w-auto text-sm sm:text-base">Send</button>
      </form>
    </main>
  );
}