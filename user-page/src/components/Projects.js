import React, { useState, useContext } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import projectsJson from '../data/json/projects.json';
import { AppThemeContext } from "../context/AppThemeContext";

const Projects = () => {
    const { theme, toggleTheme } = useContext(AppThemeContext);
    let isDarkMode = theme === 'dark';

    const darkTitle = {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',

    }

    const lightTitle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: 'black',

    }

    const titleStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: '7.5vh',
        fontSize: '1.5vw', // Adjusted for better visibility at various sizes
        // padding: '10px', // Optional: Adjust padding as needed
        // borderRadius: '5px', // Optional: Add rounded corners if desired
        width: '100%',
        height: '5vh',
        

    };

    const overlayStyle = {
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '20px',
        color: 'white',
        opacity: 1, // Always visible
        transition: 'transform 1s ease',
    };

    const cardZoomStyle = {
        transition: 'transform 0.5s ease', // Smooth zoom transition
        display: 'inline-block', // Required for transform
        width: '100%', // Ensure it fills the column
    };

    const cardStyle = {
        width: '100%', // Use 100% of the wrapper's width
        height: '15vw', // Set a scalable height based on the viewport width
        objectFit: 'none', // Ensure images cover the card size without distortion
        borderRadius: '5%'
    };


    const cardBodyStyle = {

    };

    const projectHeaderStyle = {
        fontSize: '2.5vw',
        fontWeight: 'bold',
        textAlign: 'start',
        paddingBottom: '2vh'
    }

    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <Container>
            <Row>
                <Col style={projectHeaderStyle}>
                    <span >Projects</span>
                </Col>
            </Row>
            <Row>
                {projectsJson.projects.map((project, index) => (
                    <Col key={index}>
                        <div
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                ...cardZoomStyle,
                                transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                            }}
                        >
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={project.image} style={cardStyle} />
                                <Card.ImgOverlay style={{
                                                    ...overlayStyle,
                                                    backgroundColor: hoveredCard === index ?  'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5)',
                                                    }}>
                                    <Card.Title style={{...titleStyle, ...(isDarkMode ? darkTitle : lightTitle)}} >{project.name}</Card.Title>
                                    <Card.Body  style={cardBodyStyle}>
                                        <Row style={{
                                                position: 'absolute',
                                                bottom: '3vh',
                                                left: 0,
                                                right: 0,
                                        }} className='g-0'>
                                            <Col>
                                                    <Button variant='primary'
                                                     size='lg'
                                                     onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}>Github</Button>
                                            </Col>
                                            <Col>
                                                    <Button variant='success' size='lg' onClick={() => alert("I didnt implement this yet.")}>More Details</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
 
                                </Card.ImgOverlay>
   
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects;
