import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import projectsJson from '../data/json/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faLayerGroup, faImages, faFlask } from '@fortawesome/free-solid-svg-icons';
import styles from './css/Projects.module.css';

const TECH_COLORS = {
    'React':      { bg: 'rgba(97, 218, 251, 0.12)',  text: '#61DAFB', border: 'rgba(97, 218, 251, 0.3)'  },
    'JavaScript': { bg: 'rgba(247, 223, 30, 0.12)',  text: '#F7DF1E', border: 'rgba(247, 223, 30, 0.3)'  },
    'Python':     { bg: 'rgba(55, 118, 171, 0.12)',  text: '#3776AB', border: 'rgba(55, 118, 171, 0.3)'  },
    'Django':     { bg: 'rgba(68, 183, 139, 0.12)',  text: '#44B78B', border: 'rgba(68, 183, 139, 0.3)'  },
    'CSS':        { bg: 'rgba(38, 132, 255, 0.12)',  text: '#2684FF', border: 'rgba(38, 132, 255, 0.3)'  },
    'Node.js':    { bg: 'rgba(104, 160, 99, 0.12)',  text: '#68A063', border: 'rgba(104, 160, 99, 0.3)'  },
    'SQLite':     { bg: 'rgba(0, 121, 194, 0.12)',   text: '#0079C2', border: 'rgba(0, 121, 194, 0.3)'   },
};
const FALLBACK = { bg: 'rgba(150,150,150,0.1)', text: '#8b949e', border: 'rgba(150,150,150,0.25)' };

const PROJECT_ICONS = {
    'Agent Follow Through': '🦞',
    'PTCG-Sim Deckbuilder': faLayerGroup,
    'Social Saver':         faImages,
    'Dataset Generator':    faFlask,
};

const Projects = () => (
    <Container>
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.sectionDivider} />
        </div>
        <Row className="g-4">
            {projectsJson.projects.map((project, index) => (
                <Col key={index} xs={12} md={4}>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <div className={styles.cardTop}>
                            {PROJECT_ICONS[project.name] && (
                                <div className={styles.cardIconBox}>
                                    {typeof PROJECT_ICONS[project.name] === 'string'
                                        ? <span className={styles.cardIcon}>{PROJECT_ICONS[project.name]}</span>
                                        : <FontAwesomeIcon icon={PROJECT_ICONS[project.name]} className={styles.cardIcon} />
                                    }
                                </div>
                            )}
                            <h3 className={styles.cardTitle}>{project.name}</h3>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.linkIcon} />
                        </div>

                        <p className={styles.cardDescription}>{project.description}</p>

                        <div className={styles.techList}>
                            {project.tech.map(t => {
                                const c = TECH_COLORS[t] || FALLBACK;
                                return (
                                    <span key={t} className={styles.techBadge}
                                        style={{ background: c.bg, color: c.text, borderColor: c.border }}>
                                        {t}
                                    </span>
                                );
                            })}
                        </div>

                        <div className={styles.cardFooter}>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>View on GitHub</span>
                        </div>
                    </a>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Projects;
