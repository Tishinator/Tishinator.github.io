import { Accordion, Container, Row, Col } from "react-bootstrap";
import experienceData from '../data/json/workexp.json';
import { useContext } from "react";
import { AppThemeContext } from "../context/AppThemeContext";
import Badge from 'react-bootstrap/Badge';

function Experience() {
    const { theme } = useContext(AppThemeContext);
    const darkMode = theme === 'dark';

    const skillColors = {
        "Python": "warning",
        "ReactJS" : "primary",
        "VueJS" : "success",
        "Java" : "danger",
        "Tester" : "secondary",
        "Visual Basic" : "info"
    }


    return (
        <Accordion flush>
            {experienceData.jobs.map((job, index) => (
                <Accordion.Item eventKey={String(index)} key={index}>
                    <Accordion.Header>
                        <Container>
                            <Row>
                                <Col><b>{job.company}</b></Col>
                                <Col>{job.jobTitle}</Col>
                                <Col>
                                    <Row className="d-flex justify-content-end">
                                        {job.skillHighlights.map((skill, skillIndex) => (
                                            <Col key={skillIndex} className="d-flex justify-content-end" >
                                                <Badge bg={skillColors[skill]} text={["warning", "info"].includes(skillColors[skill]) ? 'dark' : ""}>
                                                    {skill}
                                                </Badge>
                                            </Col>
                                        ))}
                                    </Row>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </Accordion.Header>
                    <Accordion.Body>
                        {job.jobDescription}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default Experience;
