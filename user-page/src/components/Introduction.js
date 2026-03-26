import React, { useContext } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './css/Introduction.module.css';
import myPhoto from '../assets/updatedMe.png';
import Carousel from 'react-bootstrap/Carousel';
import MountainBackground, { skyColors } from './MountainBackground';
import { AppThemeContext } from '../context/AppThemeContext';

function Introduction() {
    const { theme } = useContext(AppThemeContext);
    const isDark = theme === 'dark';

    const carouselItems = [
        "Software Engineer",
        "UI/UX Designer",
        "Software Tester",
        "Twitch Streamer",
        "Card Game Enthusiast"
    ];

    const overlayStyle = {
        opacity: isDark ? 1 : 0.55,
        transition: 'opacity 0.7s ease',
    };

    const backdropStyle = {
        background: isDark ? 'rgba(22, 27, 34, 0.68)' : 'rgba(255, 255, 255, 0.68)',
        color: isDark ? '#ffffff' : '#1f2328',
    };

    return (
        <div className={styles.introContainer} id="home">
            <MountainBackground theme={theme} colors={{ sky: skyColors[theme] }} />
            <div className={styles.overlay} style={overlayStyle} />

            {/*
              Photo lives directly inside introContainer (position:relative, 100vw wide)
              so left:76vw is measured from the viewport left edge — same as the old
              position:fixed behaviour, but now it scrolls away with the intro section
              instead of floating over the About Me content.
            */}
            <Image
                src={myPhoto}
                alt="ME"
                className={`p-2 ${styles.userProfileImage}`}
            />

            <Container
                className="d-flex flex-column align-items-center justify-content-center vh-100"
                style={{ position: 'relative', zIndex: 1 }}
            >
                <Row className="w-100">
                    <Col>
                        <div className={`${styles.verticallyCenteredText} ${styles.textContainer}`}>
                            <div className={styles.textBackdrop} style={backdropStyle}>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Introduction;
