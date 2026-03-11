import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './css/Introduction.module.css';
import myPhoto from '../assets/updatedMe.png';
import Carousel from 'react-bootstrap/Carousel';
import background from '../assets/background.jpg';

function Introduction() {
    const carouselItems = [
        "Software Engineer",
        "UI/UX Designer",
        "Software Tester",
        "Twitch Streamer",
        "Card Game Enthusiast"
    ];

    const imageBackground = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className={`${styles.introContainer}`} style={imageBackground} id="home">
            <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
                <Row className="w-100">
                    <Col className="text-center text-md-left">
                        <div className={`${styles.verticallyCenteredText} ${styles.textContainer}`} style={{ color: 'white' }}>
                            <Carousel controls={false} indicators={false}>
                                {carouselItems.map((item, index) => (
                                    <Carousel.Item key={index} interval={2000}>
                                        <div className={styles.roleText}>{item}</div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <div className={styles.introText}>
                                Hi, I'm <span className={styles.nameText}>Mike</span>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Image src={myPhoto} alt="ME" className={`p-2 ${styles.userProfileImage}`} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Introduction;
