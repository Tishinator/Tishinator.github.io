import React from 'react';
import education from '../data/json/education.json';
import { Container, Row, Col, Image } from 'react-bootstrap';
import FITLOGO from '../assets/fitLogo.png';
import styles from './css/Education.module.css'; // Import the CSS module

const Education = () => {
    return (
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col md={1}>
                    <Image src={FITLOGO} alt="Florida Institute of Technology's Logo"  className={styles.schoolLogo}/>
                </Col>
                <Col md={9}>
                    <div className={styles.educationCol}>
                        <h3 className={styles.educationSchool}>
                            <span className={styles.schoolBorderSpan}>{education.school}</span>
                        </h3>
                        <p className={styles.educationDegreeYear}>{education.degree}, {education.gradYear}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Education;
