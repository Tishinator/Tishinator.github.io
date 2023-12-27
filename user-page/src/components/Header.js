import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

import './css/Header.css'

const Header = () => {
    return (
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
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link href="#about" className="text-light">About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#resume" className="text-light">Resume</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#projects" className="text-light">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
