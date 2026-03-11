import React, { useState, useContext } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import projectsJson from '../data/json/projects.json';
import { AppThemeContext } from "../context/AppThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './css/Projects.module.css';
import modalStyles from './css/ProjectDetail.module.css';
import SocialSaver from './projects/SocialSaver';
import PTCGSimDeckBuilder from './projects/PTCGSimDeckBuilder';
import DatasetGenerator from './projects/DatasetGenerator';

const Projects = () => {
    const { theme } = useContext(AppThemeContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});

    const isDarkMode = theme === 'dark';

    const handleMoreDetails = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const projectComponentMapping = {
        'ptcg-deckbuilder': PTCGSimDeckBuilder,
        'social-saver': SocialSaver,
        'dataset-generator': DatasetGenerator
    };

    function ProjectModal({ project }) {
        const ProjectDetails = projectComponentMapping[project.component];
        const modalBg = isDarkMode ? '#161b22' : '#ffffff';
        const modalColor = isDarkMode ? '#e6edf3' : '#1f2328';
        const footerBg = isDarkMode ? '#0d1117' : '#f6f8fa';
        const borderColor = isDarkMode ? '#30363d' : '#d0d7de';

        return (
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size='lg'
                centered
            >
                <Modal.Header
                    closeButton
                    style={{
                        backgroundColor: modalBg,
                        color: modalColor,
                        borderBottom: `1px solid ${borderColor}`,
                        borderTop: `3px solid var(--accent, #e0185c)`,
                        padding: '1rem 1.25rem 0.75rem',
                    }}
                >
                    <Modal.Title style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                        {project.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                        backgroundColor: modalBg,
                        color: modalColor,
                        padding: '1.5rem 1.25rem',
                    }}
                >
                    {ProjectDetails ? <ProjectDetails /> : <p>Component not found</p>}
                </Modal.Body>
                <Modal.Footer
                    style={{
                        backgroundColor: footerBg,
                        borderTop: `1px solid ${borderColor}`,
                        padding: '0.6rem 1.25rem',
                        gap: '0.5rem',
                    }}
                >
                    <button
                        className={`${modalStyles.liveBtn}`}
                        style={{ backgroundColor: 'transparent', borderColor, color: modalColor }}
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                    <button
                        className={modalStyles.liveBtn}
                        onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                    >
                        <FontAwesomeIcon icon={faGithub} /> View on GitHub
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <Container>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <div className={styles.sectionDivider} />
            </div>
            <Row className="g-4">
                {projectsJson.projects.map((project, index) => (
                    <Col key={index} xs={12} md={4}>
                        <div className={`${styles.projectCard} ${isDarkMode ? styles.cardDark : styles.cardLight}`}>
                            <div className={styles.cardImageWrapper}>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{project.name}</h3>
                                {project.description && (
                                    <p className={styles.cardDescription}>{project.description}</p>
                                )}
                                <div className={styles.cardActions}>
                                    <button
                                        className={`${styles.actionBtn} ${styles.actionBtnGhost}`}
                                        onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                                    >
                                        <FontAwesomeIcon icon={faGithub} /> GitHub
                                    </button>
                                    <button
                                        className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
                                        onClick={() => handleMoreDetails(project)}
                                    >
                                        Details <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            <ProjectModal project={selectedProject} />
        </Container>
    );
};

export default Projects;
