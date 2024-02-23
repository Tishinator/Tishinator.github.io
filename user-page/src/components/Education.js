import React from 'react';
import education from '../data/json/education.json'
import { Container, Row, Col, Image } from 'react-bootstrap';
import FITLOGO from '../assets/fitLogo.png';

const Education = () => {

    const styles = {
        educationCol: {
            fontWeight: 'bold'
        },
        educationSchool: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: '1.5vw', // Adjust the size as needed
          paddingBottom: '0.5vw'
          
        },
        educationDegreeYear: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: '1vw', // Adjust the size as needed
        },
        schoolBorderSpan: {
            display: 'inline-block',
            borderBottom: '2px solid rgb(255, 0, 128)', 
            
            paddingBottom: '0.5vw',
            width: '90%', 
          },
      };
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={FITLOGO} alt="Florida Institute of Technology's Logo"  style={{height: '8vh', width: 'auto'}}/>
                </Col>
                <Col>
                <div style={styles.educationCol}>
                    <h3 style={styles.educationSchool}>
                        <span style={styles.schoolBorderSpan}>{education.school}</span>
                    </h3>
                    <p style={styles.educationDegreeYear}>{education.degree}, {education.gradYear}</p>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Education;
