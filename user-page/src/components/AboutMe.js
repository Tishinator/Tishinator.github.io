import React from "react";
import { useState, useContext } from "react";
import styles from './css/AboutMe.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Nav, Navbar } from 'react-bootstrap';
import me from '../assets/mt.png';
import Education from "./Education";
import SkillSet from "./SkillSet";
import { AppThemeContext } from "../context/AppThemeContext";


// components
import EmphasizeText from '../utils/EmphasizeText';

// assets
import aboutmeContent from '../data/json/aboutme.json'

function AboutMe(){
    const [activeTab, setActiveTab] = useState('Skills');
    const { theme, toggleTheme } = useContext(AppThemeContext);
    let themedTextColor = theme === 'dark' ? 'text-light' : 'text-dark';

    const handleSelect = (selectedKey) => {
      setActiveTab(selectedKey);
    };

return(
    <Container>
        <Row>
            <Col>
                <Image src={me} alt="ME"  className={`p-2`}/>
            </Col>
            <Col>
                <Row><div className={styles.greeting}>{aboutmeContent.greeting}</div></Row>
                <Row><div className={styles.intro}>{aboutmeContent.introduction}</div></Row>
                <Row>
                    <div className={styles.bio}>
                        <EmphasizeText text={aboutmeContent.bio} emphasize={["Python", "Java", "JavaScript", "Vue", "React", "Florida Institute of Technology"]}/>
                    </div>
                </Row>
                <Row>
                <Navbar style={{ backgroundColor: 'transparent' }} >
                        <Container fluid>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                                <Nav variant='underline' defaultActiveKey="Skills" onSelect={handleSelect} >
                                    <Nav.Link eventKey="Skills" className={themedTextColor}>Skills</Nav.Link>
                                    <Nav.Link eventKey="Experience" className={themedTextColor}>Experience</Nav.Link>
                                    <Nav.Link eventKey="Education" className={themedTextColor}>Education</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div>
                        {activeTab === 'Skills' && <div><SkillSet /></div>}
                        {activeTab === 'Experience' && <div>Experience Content Here</div>}
                        {activeTab === 'Education' && <div><Education/></div>}
                    </div>
                </Row>

            </Col>
        </Row>
    </Container>
);
}

export default AboutMe