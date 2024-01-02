import React, { useContext, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { CarouselContext } from '../context/CarouselProvider';
import './css/Header.css';

const Header = () => {
    const { changeIndex } = useContext(CarouselContext);
    const [activeNavItem, setActiveNavItem] = useState('about'); // default active nav item

    const handleNavItemClick = (navItemName) => {
        setActiveNavItem(navItemName);
        if (navItemName === 'projects') {
            changeIndex(1);
        } else if (navItemName === 'about') {
            changeIndex(0);
        }
    };

    return (
        <div className='header'>
            <Container fluid className="bg-dark text-light py-3">
                <Row>
                    <Col md={6} className="d-flex align-items-center">
                        <div className='name-occupation-wrapper'>
                            <p className="name">Mike Tishman</p>
                            <div className="vert-separator"></div>
                            <p className="occupation">Software Engineer</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Nav className="justify-content-end" variant='underline'>
                            <Nav.Item>
                                <Nav.Link 
                                    className={`text-light ${activeNavItem === 'about' ? 'active' : ''}`}
                                    onClick={() => handleNavItemClick('about')}
                                >
                                    About Me
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link 
                                    className={`text-light ${activeNavItem === 'projects' ? 'active' : ''}`}
                                    onClick={() => handleNavItemClick('projects')}
                                >
                                    Projects
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
