import React from 'react';
import { Container, Row, Col, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './css/Header.css'

const Header = () => {
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
                        <Nav className="justify-content-end" variant='underline' defaultActiveKey="about">
                            <Nav.Item>
                                <NavLink to="/" className="nav-link text-light">About Me</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#projects" className="text-light">Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
