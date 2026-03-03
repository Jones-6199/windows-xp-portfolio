import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AboutIcon, PdfIcon, IeIcon, MailIcon } from './Icons';
const blissImg = '/bliss.jpg';
import Taskbar from './Taskbar';
import Window from './Window';
import StartMenu from './StartMenu';
import DesktopIcon from './DesktopIcon';

import AboutMe from '../apps/AboutMe';
import Projects from '../apps/Projects';
import Resume from '../apps/Resume';
import ContactMe from '../apps/ContactMe';

const appsConfig = [
  { id: 'about', title: 'About Me', icon: AboutIcon, Component: AboutMe },
  { id: 'resume', title: 'My Resume', icon: PdfIcon, Component: Resume },
  { id: 'projects', title: 'My Projects', icon: IeIcon, Component: Projects },
  { id: 'contact', title: 'Contact Me', icon: MailIcon, Component: ContactMe }
];

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState([]); // { id, zIndex, minimized, maximized }
  const [activeWindow, setActiveWindow] = useState(null);
  const [maxZIndex, setMaxZIndex] = useState(1);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const toggleStartMenu = () => setIsStartMenuOpen(!isStartMenuOpen);
  const closeStartMenu = () => setIsStartMenuOpen(false);

  const openWindow = (id) => {
    const existing = openWindows.find(w => w.id === id);
    if (existing) {
      if (existing.minimized) {
        setOpenWindows(openWindows.map(w => w.id === id ? { ...w, minimized: false, zIndex: maxZIndex + 1 } : w));
      } else {
        setOpenWindows(openWindows.map(w => w.id === id ? { ...w, zIndex: maxZIndex + 1 } : w));
      }
      setActiveWindow(id);
      setMaxZIndex(prev => prev + 1);
      return;
    }
    setOpenWindows([...openWindows, { id, zIndex: maxZIndex + 1, minimized: false, maximized: false }]);
    setActiveWindow(id);
    setMaxZIndex(prev => prev + 1);
  };

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter(w => w.id !== id));
    if (activeWindow === id) setActiveWindow(null); // Simple fallback, can be improved
  };

  const toggleMinimize = (id) => {
    setOpenWindows(openWindows.map(w => w.id === id ? { ...w, minimized: !w.minimized } : w));
    if (activeWindow === id) {
       // Just find another active window or null
       const active = openWindows.find(w => w.id !== id && !w.minimized);
       setActiveWindow(active ? active.id : null);
    } else {
       // Unminimizing
       setActiveWindow(id);
       setOpenWindows(openWindows.map(w => w.id === id ? { ...w, minimized: false, zIndex: maxZIndex + 1 } : w));
       setMaxZIndex(prev => prev + 1);
    }
  };

  const toggleMaximize = (id) => {
    setOpenWindows(openWindows.map(w => w.id === id ? { ...w, maximized: !w.maximized } : w));
  };

  const focusWindow = (id) => {
    setOpenWindows(openWindows.map(w => w.id === id ? { ...w, zIndex: maxZIndex + 1 } : w));
    setActiveWindow(id);
    setMaxZIndex(prev => prev + 1);
  };

  return (
    <motion.div
      className="w-full h-full relative overflow-hidden flex flex-col font-sans select-none"
      style={{
        backgroundImage: `url(${blissImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      onClick={() => { if(isStartMenuOpen) closeStartMenu(); }}
    >
      {/* Desktop Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '4px 4px'
        }}
      />
      <div className="absolute top-0 left-0 right-0 bottom-10 p-2 pt-6 grid grid-cols-1 grid-rows-[repeat(auto-fill,minmax(80px,80px))] gap-2 justify-items-start place-content-start w-fit z-10">
        
        {appsConfig.map((app) => (
          <DesktopIcon 
            key={app.id} 
            title={app.title} 
            Icon={app.icon} 
            onDoubleClick={() => openWindow(app.id)} 
          />
        ))}
      </div>

      <AnimatePresence>
        {openWindows.map((win) => {
          const appConfig = appsConfig.find(a => a.id === win.id);
          const { Component } = appConfig;
          if (win.minimized) return null;
          return (
            <Window
              key={win.id}
              id={win.id}
              title={appConfig.title}
              Icon={appConfig.icon}
              zIndex={win.zIndex}
              isActive={activeWindow === win.id}
              isMaximized={win.maximized}
              onClose={() => closeWindow(win.id)}
              onMinimize={() => toggleMinimize(win.id)}
              onMaximize={() => toggleMaximize(win.id)}
              onFocus={() => focusWindow(win.id)}
            >
              <Component />
            </Window>
          );
        })}
      </AnimatePresence>

      <AnimatePresence>
        <StartMenu isOpen={isStartMenuOpen} toggleStartMenu={toggleStartMenu} openWindow={openWindow} />
      </AnimatePresence>

      <div className="absolute bottom-0 w-full z-50">
        <Taskbar 
          openWindows={openWindows} 
          activeWindow={activeWindow} 
          appsConfig={appsConfig}
          toggleWindow={toggleMinimize}
          isStartMenuOpen={isStartMenuOpen}
          toggleStartMenu={toggleStartMenu}
        />
      </div>
    </motion.div>
  );
}
