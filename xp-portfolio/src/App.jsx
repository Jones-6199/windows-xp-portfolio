import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import Desktop from './components/Desktop';

function App() {
  const [screen, setScreen] = useState('loading'); // loading, login, desktop

  useEffect(() => {
    // Automatically transition to login after 3.5 seconds
    if (screen === 'loading') {
      const timer = setTimeout(() => {
        setScreen('login');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      {screen === 'loading' && <LoadingScreen />}
      {screen === 'login' && <LoginScreen onLogin={() => setScreen('desktop')} />}
      {screen === 'desktop' && <Desktop />}
    </div>
  );
}

export default App;
