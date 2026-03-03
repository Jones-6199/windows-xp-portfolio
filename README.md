🛠️ Tech Stack
Frontend Framework: React 19
Build Tool: Vite
Styling: Tailwind CSS v4.2
Type Checking: TypeScript (via @types packages)
Code Quality: ESLint
CSS Processing: PostCSS + Autoprefixer

---

windows-xp-portfolio/
├── src/
│   ├── components/
│   │   ├── desktop/
│   │   │   ├── Taskbar.jsx
│   │   │   ├── StartMenu.jsx
│   │   │   └── DesktopIcons.jsx
│   │   ├── windows/
│   │   │   ├── Window.jsx
│   │   │   ├── AboutWindow.jsx
│   │   │   ├── ProjectsWindow.jsx
│   │   │   └── ContactWindow.jsx
│   │   └── common/
│   │       ├── Button.jsx
│   │       └── Icon.jsx
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md

--- 

🎮 How to Use
Desktop Icons: Double-click any icon to open its corresponding window
Start Menu: Click the Start button in the bottom-left corner to access all applications
Window Management:
Drag windows by their title bar
Use the minimize/maximize/close buttons in the top-right corner
Resize windows by dragging their edges
Taskbar: View open applications and switch between them
System Tray: Check the time and date in the bottom-right corner
🎨 Customization
Adding Your Content
Update Portfolio Data: Modify the data files in src/data/ with your information
Change Colors: Edit the Tailwind configuration in tailwind.config.js
Replace Assets: Add your own images and icons to src/assets/
Changing Themes
The Windows XP theme can be modified by updating the color palette in the Tailwind config:

JavaScript

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'xp-blue': '#245EDC',
        'xp-gray': '#D4D0C8',
        'xp-dark-gray': '#808080',
        // Add your custom colors
      }
    }
  }
  ]
