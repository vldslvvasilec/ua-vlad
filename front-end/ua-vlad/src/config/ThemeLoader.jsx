import React, { useEffect, useState } from 'react';
import '../app.scss';

const ThemeLoader = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(userPrefersDark ? 'dark' : 'light');

    const handleThemeChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    window.matchMedia('(prefers-color-scheme: dark)').addListener(handleThemeChange);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeListener(handleThemeChange);
    };
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return null;
};

export default ThemeLoader;
