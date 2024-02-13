import React, { useContext, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { CarouselContext } from '../context/CarouselProvider';
import './css/Header.css';

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
                </Row>
            </Container>
        </div>
    );
}

export default Header;
