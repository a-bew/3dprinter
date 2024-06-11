'use client'

// src/context/ThemeContext.js
import { SetStateAction, createContext, useState } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    setTheme: (theme: SetStateAction<string>) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
