import React, { useState, useEffect } from 'react';
import skills from '../data/json/skills.json'
import styles from './css/Skills.module.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { ProgressBar, Row, Col } from 'react-bootstrap';

const ProgrammingLang = () => {
    const [programmingLanguages, setProgrammingLanguages] = useState([]);
  
    useEffect(() => {
      // Load data from the JSON file
      setProgrammingLanguages(skills.programmingLanguages);
    }, []);
  
    const renderProgressBars = (items) => {
        return items.map((item, index) => (
          <Row key={index} className="mb-3">
            <Col xs={2}><span>{item.name}</span></Col>
            <Col lg={10}>
              <ProgressBar now={item.progress}/>
            </Col>
          </Row>
        ));
      };

    return (
        <div className={styles.skillsSection}>
            <div className={styles.skillsCard}>
                <div className={styles.skillsHeader}>
                <FontAwesomeIcon icon={faLaptopCode} /> <span>Coding Expertise </span>
                </div>
                <div className={styles.skillsBody}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: "100%"}}>
                    {renderProgressBars(programmingLanguages)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgrammingLang;
