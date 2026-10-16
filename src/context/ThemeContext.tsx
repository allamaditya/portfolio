import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'midnight' | 'architectural';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aditya_portfolio_theme');
      if (saved === 'architectural' || saved === 'midnight') {
        return saved;
      }
    }
    return 'midnight';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'architectural') {
      root.setAttribute('data-theme', 'light');
      root.classList.add('theme-architectural');
      root.classList.remove('theme-midnight');
    } else {
      root.setAttribute('data-theme', 'midnight');
      root.classList.add('theme-midnight');
      root.classList.remove('theme-architectural');
    }
    
    // Update theme-color meta tag for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'architectural' ? '#F9F7F4' : '#09090D');
    }

    localStorage.setItem('aditya_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'midnight' ? 'architectural' : 'midnight'));
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
