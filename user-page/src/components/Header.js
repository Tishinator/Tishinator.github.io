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
    const [showThemeToggle, setShowThemeToggle] = useState(true);

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

    useEffect(() => {
      const toggler = document.querySelector('.navbar-toggler');
  
      const checkNavbarToggler = () => {
          const isTogglerVisible = window.getComputedStyle(toggler).display !== 'none';
          const isTogglerCollapsed = toggler.getAttribute('class').includes("collapsed");
  
          // Hide theme toggle if toggler is visible and not collapsed
          if (isTogglerVisible && !isTogglerCollapsed) {
              setShowThemeToggle(false);
          } else {
              setShowThemeToggle(true);
          }
      };
  
      // Observer to watch class changes on the navbar-toggler
      const observer = new MutationObserver(mutations => {
          mutations.forEach(mutation => {
              if (mutation.type === "attributes" && mutation.attributeName === "class") {
                  checkNavbarToggler();
              }
          });
      });
  
      // Observe changes in attributes of the navbar-toggler
      observer.observe(toggler, {
          attributes: true // configure it to listen to attribute changes
      });
  
      // Check on resize and on document load
      window.addEventListener('resize', checkNavbarToggler);
      window.addEventListener('load', checkNavbarToggler);
      checkNavbarToggler(); // Initial check
  
      return () => {
          window.removeEventListener('resize', checkNavbarToggler);
          window.removeEventListener('load', checkNavbarToggler);
          observer.disconnect(); // Stop observing when component unmounts
      };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
  

    return (
      <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} fixed='top' expand="lg" style={{'max-width': '100vw'}}>
          <Container fluid className={styles.navbarContent}>
              <Navbar.Brand className={styles.nameHeader}><span className={styles.nameText}>Mike</span> Tishman</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav variant='underline'>
                    <Nav.Link onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('about-me')} className={activeSection === 'about-me' ? 'active' : ''}>About Me</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
              {showThemeToggle && (
                  <div className={styles.themeToggle}>
                      <FontAwesomeIcon icon={darkMode ? farMoon : fasSun} onClick={toggleTheme} size='xl'/>
                  </div>
              )}
          </Container>
      </Navbar>
    );
};

export default Header;
