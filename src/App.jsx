import { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}`}>
      <Navigation setActiveSection={setActiveSection} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home activeSection={activeSection} darkMode={darkMode} />
    </div>
  );
}

export default App;