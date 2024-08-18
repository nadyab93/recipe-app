import React, { useState, useEffect } from 'react';
import './index.css';
import RecipeSearch from './components/RecipeSearch';

const App = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div>
      <button id="theme-toggle" className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? '☀️' : '🌙'}
      </button>
      <section>
        <div className="container initial">
          <h1 className="brand">Recipe App</h1>
          <RecipeSearch />
        </div>
      </section>
    </div>
  );
};

export default App;

