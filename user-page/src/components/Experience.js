import { Accordion, Container, Row, Col, Badge } from "react-bootstrap";
import experienceData from '../data/json/workexp.json';
import { useContext } from "react";
import { AppThemeContext } from "../context/AppThemeContext";
import styles from './css/Experience.module.css'; // Import the CSS module

function Experience() {
    const { theme } = useContext(AppThemeContext);
    const darkMode = theme === 'dark';

    const skillColors = {
        "Python": "warning",
        "ReactJS" : "primary",
        "VueJS" : "success",
        "Java" : "danger",
        "Selenium" : "primary",
        "TestComplete": "primary",
        "Visual Basic" : "info"
    }

    return (
        <Accordion flush>
            {experienceData.jobs.map((job, index) => (
                <Accordion.Item eventKey={String(index)} key={index} className={styles.accordionItem}>
                    <Accordion.Header className={styles.accordionHeader}>
                        <Container>
                            <Row>
                                <Col className={styles.headerText}><b>{job.company}</b></Col>
                                <Col className={styles.headerText}>{job.jobTitle}</Col>
                                <Col>
                                    <Row className={styles.skillRow}>
                                        {job.skillHighlights.map((skill, skillIndex) => (
                                            <Col key={skillIndex} className={styles.skillCol}>
                                                <Badge bg={skillColors[skill]} text={["warning", "info", "light"].includes(skillColors[skill]) ? 'dark' : ''} className={styles.skillBadge}>
                                                    {skill}
                                                </Badge>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        <span style={{textAlign: 'left'}} dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default Experience;
