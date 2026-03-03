import { User, Code, Terminal, MonitorSmartphone } from 'lucide-react';

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-6 text-gray-800">
      <div className="flex gap-4 items-center mb-4">
        <div className="w-24 h-24 rounded shadow-md overflow-hidden border-2 border-gray-300 flex-shrink-0">
          <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold font-serif mb-1">MitchVin</h1>
          <p className="text-xl text-gray-600 font-medium">Visual Designer & Developer</p>
        </div>
      </div>

      <div className="p-4 rounded-sm text-sm leading-relaxed text-black font-serif">
        <p>
          Hello! I am a passionate Visual Designer and Developer with a deep love for creating interactive, 
          nostalgic, and highly functional digital experiences. With a strong foundation in modern web technologies, 
          I bridge the gap between design and development to build pixel-perfect applications.
        </p>
        <p className="mt-2">
          This portfolio is a tribute to the classic Windows XP layout, aiming to evoke nostalgia while showcasing 
          my ability to implement complex user interfaces in React.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4 flex items-center gap-2">
          <Code className="w-5 h-5" /> Technologies & Skills
        </h2>
        
        <div className="grid grid-cols-2 gap-4 text-sm font-medium">
          <div className="bg-blue-50 border border-blue-200 rounded p-2 flex items-center gap-2">
            <MonitorSmartphone className="w-4 h-4 text-blue-600" />
            Frontend Development
            <div className="ml-auto flex gap-1">
                <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded">React.js</span>
                <span className="bg-sky-500 text-white text-[10px] px-1.5 py-0.5 rounded">TailwindCSS</span>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded p-2 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-green-700" />
            Logic & Animation
            <div className="ml-auto flex gap-1">
                <span className="bg-yellow-500 text-black text-[10px] px-1.5 py-0.5 rounded">JavaScript</span>
                <span className="bg-fuchsia-600 text-white text-[10px] px-1.5 py-0.5 rounded">Framer</span>
            </div>
          </div>
          
          <div className="col-span-2 bg-purple-50 border border-purple-200 rounded p-2 flex items-center gap-2">
            <User className="w-4 h-4 text-purple-700" />
            UI/UX Design
            <div className="ml-auto flex gap-1">
                <span className="bg-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded">Figma</span>
                <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded">Wireframing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
