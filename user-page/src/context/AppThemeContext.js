import React, { createContext } from "react";

const AppThemeContext = createContext({ theme: 'dark' });

function ThemeProvider({ children }) {
    return (
        <AppThemeContext.Provider value={{ theme: 'dark' }}>
            {children}
        </AppThemeContext.Provider>
    );
}

export { ThemeProvider, AppThemeContext };
