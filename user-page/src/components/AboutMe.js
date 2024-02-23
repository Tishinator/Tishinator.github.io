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

import { AppThemeContext } from "../context/AppThemeContext";


// components
import EmphasizeText from '../utils/EmphasizeText';

// assets
import aboutmeContent from '../data/json/aboutme.json'
import Experience from "./Experience";

function AboutMe(){
    const [activeTab, setActiveTab] = useState('Education');
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
                                <Nav variant='underline' defaultActiveKey="Education" onSelect={handleSelect} >
                                    <Nav.Link eventKey="Education" className={themedTextColor}>Education</Nav.Link>
                                    <Nav.Link eventKey="Skills" className={themedTextColor}>Skills</Nav.Link>
                                    <Nav.Link eventKey="Experience" className={themedTextColor}>Experience</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                </Navbar>
                    <div style={{paddingTop: '1vh'}}>
                        {activeTab === 'Education' && <div><Education/></div>}
                        {activeTab === 'Skills' && <div></div>}
                        {activeTab === 'Experience' && <div><Experience/></div>}
                    </div>
                </Row>

            </Col>
        </Row>
    </Container>
);
}

export default AboutMe