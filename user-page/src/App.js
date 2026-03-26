import './App.css';
import './DarkMode.css';
import React, { useContext } from 'react';
import { AppThemeContext, ThemeProvider } from './context/AppThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
    useContext(AppThemeContext); // keeps ThemeProvider wired; theme is always 'dark'

    return (
        <div className="App dark-theme">
            <Router>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default function AppWrapper() {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
}
