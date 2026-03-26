import React, { useState, useEffect, createContext } from "react";

const AppThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => {},
});

function ThemeProvider({ children }) {
    const initialTheme =
        localStorage.getItem('theme') === 'dark' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark' : 'light';

    const [theme, setTheme] = useState(initialTheme);

    // Single immediate toggle — CSS transitions on elements + SVG handle all smoothness
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <AppThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AppThemeContext.Provider>
    );
}

export { ThemeProvider, AppThemeContext };
