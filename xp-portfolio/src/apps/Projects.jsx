import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Retro OS Simulator',
      desc: 'A full browser-based operating system simulator with window management, a file system, and games.',
      tech: ['React', 'Framer Motion', 'Zustand'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'E-commerce Dashboard',
      desc: 'Modern admin panel for managing products, viewing analytics, and handling orders.',
      tech: ['Next.js', 'TailwindCSS', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'AI Image Generator',
      desc: 'An AI-powered application to create stylized images using various DALL-E and Midjourney APIs.',
      tech: ['React', 'Node.js', 'OpenAI API'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Social Media App',
      desc: 'A fully responsive social platform with real-time chat, feed algorithms, and story features.',
      tech: ['React Native', 'Firebase', 'Redux'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    }
  ];

  return (
    <div className="flex flex-col gap-4 text-gray-800 h-full">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 flex items-center justify-between">
        Projects Portfolio
        <span className="text-xs font-normal bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {projects.length} Items Found
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pb-6">
        {projects.map(proj => (
          <div key={proj.id} className="border border-gray-300 rounded overflow-hidden shadow-sm hover:shadow relative group transition-all bg-white flex flex-col">
            <div className="w-full h-32 bg-gray-200 border-b border-gray-300 overflow-hidden">
               <img src={proj.image} alt={proj.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            
            <div className="p-3 flex flex-col flex-1">
              <h3 className="font-bold text-md text-blue-800">{proj.name}</h3>
              <p className="text-xs text-gray-600 mt-1 mb-2 leading-tight flex-1">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {proj.tech.map(t => (
                  <span key={t} className="text-[10px] bg-gray-100 border border-gray-200 px-1.5 py-0.5 text-gray-600 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 text-xs font-medium border-t border-gray-100 pt-2 mt-auto">
                <button className="flex-1 flex items-center justify-center gap-1 bg-blue-50 text-blue-700 py-1 rounded hover:bg-blue-100 transition">
                  <ExternalLink className="w-3 h-3" /> Live Demo
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 bg-gray-50 text-gray-700 py-1 rounded hover:bg-gray-100 transition border border-gray-200">
                  <Github className="w-3 h-3" /> Source
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
