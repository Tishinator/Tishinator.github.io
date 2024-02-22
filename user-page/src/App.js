import './App.css';
import './DarkMode.css';
import './LightMode.css';
import React, { useEffect, useState, useContext,  } from 'react';
import { AppThemeContext, ThemeProvider } from './context/AppThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';


const UnderConstruction = () => {
  const gifUrl = "https://i.redd.it/q0dd3k02unqb1.gif"; // URL of the GIF
  return (
    <div style={{
      height: '100vh', // Full viewport height
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      backgroundColor: 'black' // Black background
    }}>
      <img src={gifUrl} alt="Under Construction" />
    </div>
  );
};


function App() {
  const {theme} = useContext(AppThemeContext);


  useEffect(() => {
    console.log(`THEME CHANGED TO ${theme}`);
  },[theme]);


  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  return isLocalhost ?  
  <div className={`App ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
    <Router>
        <Header />
        <div className='content'>
          < Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
    </Router>
  </div>: 
  <UnderConstruction />;

}

export default function AppWrapper() {
  return (
    <ThemeProvider>
        <App />
    </ThemeProvider>
  );
};
