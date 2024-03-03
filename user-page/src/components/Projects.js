import React, { useState, useContext } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import projectsJson from '../data/json/projects.json';
import { AppThemeContext } from "../context/AppThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import styles from './css/Projects.module.css';
import SocialSaver from './projects/SocialSaver';
import PTCGSimDeckBuilder from './projects/PTCGSimDeckBuilder';
import DatasetGenerator from './projects/DatasetGenerator';

const Projects = () => {
    const { theme } = useContext(AppThemeContext);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    
    const modalThemeClass = theme === 'dark' ? 'bg-dark text-white' : '';


    let isDarkMode = theme === 'dark';

    const handleMoreDetails = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const projectComponentMapping = {
        'ptcg-deckbuilder' : PTCGSimDeckBuilder,
        'social-saver' : SocialSaver,
        'dataset-generator': DatasetGenerator
    }

    function ProjectModal({ project }) {
        const ProjectDetails = projectComponentMapping[project.component];
        return (
            <Modal show={showModal} onHide={() => setShowModal(false)} size='xl' contentClassName={modalThemeClass} >
                <Modal.Header closeButton>
                    <Modal.Title>{project.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>                  
                    {ProjectDetails ? <ProjectDetails /> : <p>Component not found</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary'
                            size='md'
                            onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}>
                        <FontAwesomeIcon icon={faGithub} /> Github
                    </Button>
                    <Button variant='secondary' size='md' onClick={()=>setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <Container>
            <Row>
                <Col className={styles.projectHeaderStyle}>
                    <span>Projects</span>
                </Col>
            </Row>
            <Row>
                {projectsJson.projects.map((project, index) => (
                    <Col key={index}>
                        <div
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={styles.cardZoomStyle}
                            style={{
                                transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                            }}
                        >
                            <Card className={styles.cardStyle}>
                                <Card.Img variant="top" src={project.image} className={styles.cardStyle} />
                                <Card.ImgOverlay className={`${styles.overlayStyle} ${hoveredCard === index ? 'bg-hover' : ''}`} >
                                    <Card.Title className={`${styles.titleStyle} ${isDarkMode ? styles.darkTitle : styles.lightTitle}`} >{project.name}</Card.Title>
                                    <Card.Body>
                                        <Row className={`g-0 ${styles.bottomRow}`}>
                                            <Col>
                                                <Button variant='primary'
                                                        size='lg'
                                                        onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}>
                                                    <FontAwesomeIcon icon={faGithub} /> Github
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button variant='success' size='lg' onClick={() => handleMoreDetails(project)}>
                                                    <FontAwesomeIcon icon={faCircleInfo} /> More Details
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
            <ProjectModal project={selectedProject} />
        </Container>
    );
};

export default Projects;
