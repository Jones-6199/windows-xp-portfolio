import { useState } from 'react';
import { Send, Twitter, Linkedin, Github } from 'lucide-react';

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full text-black">
      
      {/* Contact Form */}
      <div className="flex-1 bg-white p-6 shadow-sm border border-gray-200 rounded flex flex-col">
        <h2 className="text-2xl font-bold mb-1 font-serif text-blue-900">Get In Touch</h2>
        <p className="text-sm text-gray-500 mb-6">Drop me a line, and I will get back to you ASAP.</p>
        
        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-sm font-medium">
            Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Your Name</label>
            <input 
              type="text" 
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition shadow-inner bg-gray-50 focus:bg-white"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition shadow-inner bg-gray-50 focus:bg-white"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="john@example.com"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Message</label>
            <textarea 
              required
              className="w-full flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition shadow-inner bg-gray-50 focus:bg-white resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="How can I help you?"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow flex items-center justify-center gap-2 transition"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
        </form>
      </div>

      {/* Social Side Panel */}
      <div className="w-full md:w-1/3 bg-gray-50 border border-gray-200 rounded p-6 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <div>
          <h3 className="font-bold text-gray-800">Phone</h3>
          <p className="text-sm text-gray-500">+1 (555) 012-3456</p>
        </div>

        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mt-2 mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </div>
        <div>
          <h3 className="font-bold text-gray-800">Email</h3>
          <p className="text-sm text-gray-500">mitchvin@example.com</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 mt-6">
            <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#1da1f2] hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#0a66c2] hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
            </a>
        </div>
      </div>
    </div>
  );
}
