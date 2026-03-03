import { motion } from 'framer-motion';

export default function DesktopIcon({ title, Icon, onDoubleClick }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-24 p-2 rounded cursor-pointer group"
      onDoubleClick={onDoubleClick}
      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
      style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-1 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
        <Icon className="w-10 h-10 text-white drop-shadow-md" style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))' }} />
      </div>
      <span className="text-white text-xs font-semibold text-center drop-shadow-md bg-transparent group-hover:bg-[#0055e5] px-1 rounded truncate w-full" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
        {title}
      </span>
    </motion.div>
  );
}
