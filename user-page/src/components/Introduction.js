import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './css/Introduction.module.css';
import myPhoto from '../assets/me.png';
import Carousel from 'react-bootstrap/Carousel';

function Introduction() {
    return (
        <div className={styles.introContainer}>
            <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
                <Row className="w-100">
                    <Col  className="text-center text-md-left">
                        <div className={styles.verticallyCenteredText}>
                            <Carousel controls={false} indicators={false}>
                                <Carousel.Item interval={2000}>
                                    <div className="mb-2 h4">Software Engineer</div>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <div className="mb-2 h4">UI/UX Designer</div>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <div className="mb-2 h4">Software Tester</div>
                                </Carousel.Item>
                            </Carousel>
                            <div className="mb-2 display-4">
                                Hi, I'm <span className={styles.nameText}>Mike</span>
                            </div>
                        </div>
                    </Col>
                    <Col  className="d-flex justify-content-end">
                        <Image src={myPhoto} alt="ME" className={`p-2 ${styles.userProfileImage}`} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Introduction;
