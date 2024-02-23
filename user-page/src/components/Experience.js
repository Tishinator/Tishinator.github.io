import { Accordion, Container, Row, Col } from "react-bootstrap";
import experienceData from '../data/json/workexp.json';
import { useContext } from "react";
import { AppThemeContext } from "../context/AppThemeContext";

function Experience() {
    const { theme } = useContext(AppThemeContext);
    const darkMode = theme === 'dark';

    return (
        <Accordion flush>
            {experienceData.jobs.map((job, index) => (
                <Accordion.Item eventKey={String(index)} key={index}>
                    <Accordion.Header>
                        <Container>
                            <Row>
                                <Col><b>{job.company}</b></Col>
                                <Col>{job.jobTitle}</Col>
                                <Col>{job.timeFrame}</Col>
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
