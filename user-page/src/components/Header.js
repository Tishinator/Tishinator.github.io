import React, { useContext,  useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as farMoon, faSun as fasSun } from '@fortawesome/free-solid-svg-icons';
import { AppThemeContext } from '../context/AppThemeContext';
import styles from './css/Header.module.css';

const Header = () => {
    const { theme, toggleTheme } = useContext(AppThemeContext);
    const darkMode = theme === 'dark';

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
          const sections = ['home', 'about-me', 'projects']; // Add your section IDs
          const currentSection = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust as needed
              return scrollPosition >= element.offsetTop && scrollPosition <= element.offsetTop + element.offsetHeight;
            }
            return false;
          });
          if (currentSection) {
            setActiveSection(currentSection);
          } else {
            setActiveSection('');
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} fixed='top' expand="lg">
            <Container fluid>
                <Navbar.Brand><span className={styles.nameText}>Mike</span> Tishman</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav variant='underline'>
                        <Nav.Link onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('about-me')} className={activeSection === 'about-me' ? 'active' : ''}>About Me</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div style={{ paddingLeft: '20px' }}>
                    <FontAwesomeIcon icon={darkMode ? farMoon : fasSun} onClick={toggleTheme} size='xl'/>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
