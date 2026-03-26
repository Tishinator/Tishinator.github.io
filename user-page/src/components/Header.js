import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './css/Header.module.css';

const Header = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about-me', 'projects', 'open-source'];
            const current = sections.find(id => {
                const el = document.getElementById(id);
                if (!el) return false;
                const mid = window.scrollY + window.innerHeight / 2;
                return mid >= el.offsetTop && mid <= el.offsetTop + el.offsetHeight;
            });
            setActiveSection(current || '');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <Navbar bg="dark" variant="dark" fixed="top" expand="sm" style={{ maxWidth: '100vw' }}>
            <Container fluid className={styles.navbarContent}>
                <Navbar.Brand className={styles.nameHeader}>
                    <span className={styles.nameText}>Mike</span> Tishman
                    <span className={styles.separator}>|</span>
                    <a
                        href="https://github.com/Tishinator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav variant="underline">
                        <Nav.Link onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('about-me')} className={activeSection === 'about-me' ? 'active' : ''}>About Me</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('open-source')} className={activeSection === 'open-source' ? 'active' : ''}>Open Source</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
