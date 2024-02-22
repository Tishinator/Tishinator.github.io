import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as farMoon, faSun as fasSun } from '@fortawesome/free-solid-svg-icons';
import { AppThemeContext } from '../context/AppThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(AppThemeContext);
    const darkMode = theme === 'dark';

    return (
        <NavBar bg={darkMode ?"dark" : "light"} data-bs-theme={darkMode?"dark" : "light"}  fixed='top'>
            <Container style={{ paddingLeft: '20px' }} fluid='true'>
                <NavBar.Brand>Mike Tishman</NavBar.Brand>
            </Container>
            <NavBar.Collapse className='justify-content-end'>
                <Container fluid="true" style={{ paddingRight: '20px' }}>
                    <FontAwesomeIcon icon={darkMode ? farMoon : fasSun} onClick={toggleTheme} size='xl'/>
                </Container>
            </NavBar.Collapse>
        </NavBar>
    );
};

export default Header;
