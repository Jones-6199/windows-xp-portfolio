import { motion } from 'framer-motion';
const avatarImg = '/avatar.jpg';

export default function LoginScreen({ onLogin }) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center font-sans select-none overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #001f66, #1656b8, #1c6ceb, #245edb)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="absolute top-0 w-full h-[15%] bg-gradient-to-b from-[#0034a7] to-[#12429e] shadow-xl"></div>
      <div className="absolute bottom-0 w-full h-[10%] bg-gradient-to-t from-[#1d43a7] to-[#2562cb] shadow-[0_-5px_15px_rgba(0,0,0,0.5)] flex items-center px-10">
          {/* Shutdown button */}
          <div className="flex items-center gap-2 text-white bg-[#d13a1a] hover:bg-[#e74620] cursor-pointer pl-2 pr-3 py-1 rounded-sm shadow-sm transition border border-white/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
              <span className="font-semibold text-sm">Turn off computer</span>
          </div>
      </div>

      <div className="relative z-10 flex w-full max-w-5xl h-[60vh] items-center">
        {/* Left Side (OS Branding) */}
        <div className="w-1/2 h-full flex flex-col justify-center items-end pr-10 border-r-2 border-gradient-to-b from-transparent via-white/30 to-transparent">
            <h1 className="text-6xl font-bold italic text-white drop-shadow-lg">
                Windows <span className="text-[#f16323]">XP</span>
            </h1>
            <p className="text-white/80 mt-2 text-xl font-medium tracking-wide">To begin, click your user name</p>
        </div>

        <div className="w-[1px] h-[70%] bg-gradient-to-b from-transparent via-white/40 to-transparent self-center mx-4"></div>

        {/* Right Side (Users) */}
        <div className="w-1/2 h-full flex flex-col justify-center pl-10">
          <motion.div
            className="flex items-center gap-4 group cursor-pointer p-4 rounded-xl hover:bg-white/10 transition"
            onClick={onLogin}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-20 h-20 rounded-md overflow-hidden border-4 border-[#fff] shadow-xl group-hover:border-yellow-400 transition-colors">
              <img src={avatarImg} alt="MitchVin" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
                <span className="text-3xl text-white font-semibold drop-shadow-md tracking-tight group-hover:text-yellow-400">MitchVin</span>
                <span className="text-sm text-white/70 italic mt-1 bg-[#1a4dc3] px-2 py-0.5 rounded max-w-max">Administrator</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
