import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BackIcon, ForwardIcon, FolderUpIcon, IeIcon, PdfIcon } from './Icons';

export default function Window({ id, title, Icon, isActive, isMaximized, zIndex, onClose, onMinimize, onMaximize, onFocus, children }) {
  const windowRef = useRef(null);

  const windowVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } }
  };

  const baseStyle = {
    position: 'absolute',
    top: '5%',
    left: '10%',
    width: '80%',
    height: '75%',
    minWidth: '320px',
    minHeight: '200px',
  };

  const maximizedStyle = { ...baseStyle, top: 0, left: 0, width: '100%', height: 'calc(100% - 40px)', transition: 'all 0.2s ease-in-out' };

  return (
    <motion.div
      ref={windowRef}
      className={`absolute flex flex-col font-sans select-none overflow-hidden rounded-md border-2 shadow-xp ${isActive ? 'border-[#0055e5]' : 'border-[#4e82d8]'}`}
      style={{
        zIndex: zIndex,
        ...(isMaximized ? maximizedStyle : baseStyle),
        backgroundColor: '#0055e5', // Theme fallback
      }}
      variants={windowVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseDownCapture={onFocus}
      drag={!isMaximized}
      dragMomentum={false}
      dragElastic={0}
      dragHandle=".title-bar"
    >
      {/* Title Bar */}
      <div 
        className="title-bar h-8 px-2 flex items-center justify-between shadow-sm flex-shrink-0"
        style={{
          background: isActive
            ? 'linear-gradient(to right, #0058e6 0%, #3a93ff 5%, #288eff 10%, #127dff 50%, #036ffc 100%)'
            : 'linear-gradient(to bottom, #7697e7 0%, #7e9ea3 100%)',
          cursor: isMaximized ? 'default' : 'grab'
        }}
        onDoubleClick={onMaximize}
      >
        <div className="flex items-center gap-2 overflow-hidden w-[80%]">
          {Icon && <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-300'}`} />}
          <span className={`font-semibold text-sm truncate drop-shadow-md ${isActive ? 'text-white' : 'text-gray-200'}`} style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            {title}
          </span>
        </div>

        {/* Window Controls */}
        <div className="flex gap-1 h-5 ml-1">
          {/* Minimize */}
          <button 
            className="w-6 h-full flex items-center justify-center bg-[#156ce4] hover:bg-[#348ae9] border border-white/40 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(0,0,0,0.3)] rounded-sm group relative"
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
          >
            <div className="w-2.5 h-[2px] bg-white group-hover:bg-[#fff] relative top-1 rounded-sm shadow-sm" />
          </button>
          
          {/* Maximize */}
          <button 
            className="w-6 h-full flex items-center justify-center bg-[#156ce4] hover:bg-[#348ae9] border border-white/40 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(0,0,0,0.3)] rounded-sm group p-[3px]"
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
          >
            <div className="w-full h-full border-t-2 border-l border-r border-b border-white rounded-sm shadow-sm" />
          </button>
          
          {/* Close */}
          <button 
            className="w-6 h-full flex items-center justify-center bg-[#e84b2c] hover:bg-[#f96346] border border-white/40 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(0,0,0,0.3)] rounded-sm group"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shadow-sm"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* Ribbon / Menu Bar */}
      <div className="h-6 bg-[#ece9d8] flex items-center px-1 text-xs text-black/90 font-normal select-none relative z-10">
        <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded-sm cursor-pointer">File</span>
        <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded-sm cursor-pointer">View</span>
        <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded-sm cursor-pointer">Help</span>
        <div className="ml-auto flex items-center pr-1">
          <div className="w-4 h-4 rounded-sm border border-transparent hover:border-black shadow-sm overflow-hidden flex">
             <div className="w-1/2 h-full bg-red-500"></div><div className="w-1/2 h-full bg-green-500"></div><div className="w-1/2 h-full bg-blue-500 absolute bottom-0"></div><div className="w-1/2 h-full bg-yellow-500 absolute right-0 bottom-0"></div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="h-10 bg-[#ece9d8] border-t border-white shadow-[0_1px_0_#aca899] flex items-center px-1 text-xs font-normal select-none gap-1">
        <button className="flex items-center gap-1 hover:border-black border border-transparent hover:shadow-[1px_1px_0_#fff,inset_1px_1px_0_#fff] px-1 py-1 rounded-sm cursor-pointer disabled:opacity-50" disabled>
          <BackIcon className="w-6 h-6" />
          <span className="text-gray-500">Back</span>
        </button>
        <button className="flex items-center gap-1 hover:border-black border border-transparent hover:shadow-[1px_1px_0_#fff,inset_1px_1px_0_#fff] px-1 py-1 rounded-sm cursor-pointer disabled:opacity-50" disabled>
          <ForwardIcon className="w-6 h-6" />
          <span className="text-gray-500 text-xs">Forward</span>
        </button>

        <div className="w-[1px] h-6 bg-gray-400 mx-1 border-r border-white"></div>

        <button className="flex items-center gap-1 hover:border-black border border-transparent hover:shadow-[1px_1px_0_#fff,inset_1px_1px_0_#fff] px-2 py-1 rounded-sm cursor-pointer">
          <IeIcon className="w-5 h-5" />
          <span className="text-black">My Projects</span>
        </button>
        <button className="flex items-center gap-1 hover:border-black border border-transparent hover:shadow-[1px_1px_0_#fff,inset_1px_1px_0_#fff] px-2 py-1 rounded-sm cursor-pointer">
          <PdfIcon className="w-5 h-5" />
          <span className="text-black">My Resume</span>
        </button>

        <div className="w-[1px] h-6 bg-gray-400 mx-1 border-r border-white"></div>

        <button className="flex items-center hover:border-black border border-transparent hover:shadow-[1px_1px_0_#fff,inset_1px_1px_0_#fff] px-1 py-1 rounded-sm cursor-pointer">
          <FolderUpIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Address Bar */}
      <div className="h-8 bg-[#ece9d8] border-t border-white border-b border-[#aca899] flex items-center px-2 text-xs font-normal select-none gap-2">
        <span className="text-gray-600">Address</span>
        <div className="flex-1 h-5 bg-white border border-[#7f9db9] flex items-center px-1 group shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]">
          {Icon && <Icon className="w-3.5 h-3.5 mr-1" />}
          <span className="flex-1 block truncate">{title}</span>
          <div className="w-4 h-full bg-[#ece9d8] border-l border-[#ece9d8] flex items-center justify-center hover:border-[#316ac5] cursor-pointer">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
          </div>
        </div>
        <button className="flex items-center gap-1 text-black">
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border border-green-700 shadow-sm">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
          <span className="text-[10px] font-bold">Go</span>
        </button>
      </div>

      {/* Content Body */}
      <div 
        className="flex-1 overflow-auto flex flex-col"
        onMouseDownCapture={(e) => e.stopPropagation()} // Stop drag propagate
      >
        <div 
          className="flex-1 bg-white border-l border-[#aca899] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)] text-black font-sans"
          style={{
            backgroundImage: 'linear-gradient(#e5e5d0 1px, transparent 1px), linear-gradient(90deg, #e5e5d0 1px, transparent 1px)',
            backgroundSize: '12px 12px'
          }}
        >
          {children}
        </div>
        {/* Status Bar */}
        <div className="h-5 bg-[#ece9d8] border-t border-[#aca899] flex items-center px-2 text-[10px] text-black">
          {`Learn more about Benziane`}
        </div>
      </div>
    </motion.div>
  );
}
