import { Download, FileText, Printer } from 'lucide-react';

export default function Resume() {
  return (
    <div className="flex flex-col h-full bg-gray-100 font-serif">
      {/* Top action bar */}
      <div className="flex items-center gap-2 p-2 bg-[#ece9d8] border-b border-gray-300 shadow-sm text-xs font-sans">
        <button className="flex items-center gap-1 text-gray-800 hover:bg-white px-2 py-1 border border-transparent hover:border-blue-200 rounded">
            <Download className="w-4 h-4 text-green-600" />
            <span>Download PDF</span>
        </button>
        <div className="w-[1px] h-4 bg-gray-300 mx-1"></div>
        <button className="flex items-center gap-1 text-gray-800 hover:bg-white px-2 py-1 border border-transparent hover:border-blue-200 rounded">
            <Printer className="w-4 h-4 text-blue-600" />
            <span>Print</span>
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto flex justify-center">
         {/* Fake PDF Paper */}
         <div className="bg-white w-full max-w-[600px] shadow-lg border border-gray-300 p-8 h-max">
            
            <header className="border-b-2 border-gray-800 pb-4 mb-4 text-center">
              <h1 className="text-3xl font-bold uppercase tracking-wider text-black">Benziane Younes</h1>
              <p className="text-sm text-gray-600 font-sans mt-1">contact@benzianeyounes.me | Algeria | github.com/benzianeyounes</p>
            </header>

            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase text-gray-800 mb-2 border-b border-gray-200 pb-1 flex items-center gap-2">
                <FileText className="w-4 h-4" /> Experience
              </h2>
              <div className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-black">Frontend Developer - TechNova</h3>
                  <span className="text-sm text-gray-500 font-sans">Jan 2022 - Present</span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 font-sans space-y-1 ml-2">
                  <li>Lead frontend development building core features in React and modern JS.</li>
                  <li>Improved application load time by 45% through code splitting and tree-shaking.</li>
                  <li>Built and implemented a full responsive and accessible UI using TailwindCSS.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-black">Junior Frontend Developer - Creative Studio</h3>
                  <span className="text-sm text-gray-500 font-sans">Jun 2019 - Dec 2021</span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 font-sans space-y-1 ml-2">
                  <li>Translated high-fidelity wireframes into interactive and responsive web applications.</li>
                  <li>Developed engaging interfaces using HTML, CSS, and modern JavaScript.</li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase text-gray-800 mb-2 border-b border-gray-200 pb-1">
                Education
              </h2>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-black">B.S. in Computer Science</h3>
                  <span className="text-sm text-gray-500 font-sans">University of Design</span>
                </div>
                <p className="text-sm text-gray-700 font-sans">Graduated with Honors, 2015 - 2019</p>
              </div>
            </section>

         </div>
      </div>
    </div>
  );
}
