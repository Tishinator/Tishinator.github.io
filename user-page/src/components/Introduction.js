import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styles from './css/Introduction.module.css';
import myPhoto from '../assets/updatedMe.png';

const TYPED_RESPONSE = 'mike-t // software-engineer';
const TYPE_SPEED_MS = 50;

function TerminalWidget() {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayed(TYPED_RESPONSE.slice(0, i));
            if (i >= TYPED_RESPONSE.length) {
                clearInterval(interval);
                setDone(true);
            }
        }, TYPE_SPEED_MS);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.terminal}>
            <div className={styles.terminalBar}>
                <span className={styles.dot} style={{ background: '#ff5f56' }} />
                <span className={styles.dot} style={{ background: '#ffbd2e' }} />
                <span className={styles.dot} style={{ background: '#27c93f' }} />
            </div>
            <div className={styles.terminalBody}>
                <div className={styles.terminalLine}>
                    <span className={styles.prompt}>$ </span>
                    <span className={styles.command}>whoami</span>
                </div>
                <div className={styles.terminalLine}>
                    <span className={styles.output}>{displayed}</span>
                    {!done && <span className={styles.cursor} />}
                </div>
                {done && (
                    <div className={styles.terminalLine}>
                        <span className={styles.prompt}>$</span>
                        <span className={styles.cursor} />
                    </div>
                )}
            </div>
        </div>
    );
}

function Introduction() {
    const handleScrollTo = (id) => (e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`${styles.introContainer} ${styles.introDark}`} id="home">
            <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
                <Row className="w-100 align-items-center g-4" style={{ maxWidth: '880px', margin: '0 auto' }}>
                    <Col xs={12} md={7} className={styles.heroContent}>
                        <TerminalWidget />
                        <h1 className={styles.heroName}>
                            Mike <span className={styles.nameAccent}>T.</span>
                        </h1>
                        <p className={styles.heroRole}>Software Engineer</p>
                        <div className={styles.ctaRow}>
                            <a
                                href="#about-me"
                                className={`${styles.ctaButton} ${styles.ctaGhost}`}
                                onClick={handleScrollTo('about-me')}
                            >
                                About Me
                            </a>
                            <a
                                href="#projects"
                                className={styles.ctaButton}
                                onClick={handleScrollTo('projects')}
                            >
                                View my work →
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={5} className="d-flex justify-content-center align-items-center">
                        <img src={myPhoto} alt="Mike T." className={styles.profilePhoto} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Introduction;
