import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faVial, faFileAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './css/SkillSet.css';

const SkillSet = () => {
    return (
        <div className="skillset-section">
            <div className="skillset-card">
                <div className="skillset-header">
                    <FontAwesomeIcon icon={faLightbulb} /> <span>Skill Set </span>
                </div>
                <div className="skillset-grid-container">
                    <div className="skillset-grid-item">
                        <FontAwesomeIcon icon={faCode} size="2x" />
                        <p>Front-end Development</p>
                    </div>
                    <div className="skillset-grid-item">
                        <FontAwesomeIcon icon={faDatabase} size="2x" />
                        <p>Back-end Development</p>
                    </div>
                    <div className="skillset-grid-item">
                        <FontAwesomeIcon icon={faVial} size="2x" />
                        <p>Automated Regression Testing</p>
                    </div>
                    <div className="skillset-grid-item">
                        <FontAwesomeIcon icon={faFileAlt} size="2x" />
                        <p>Software Documentation</p>
                    </div>
                </div>        
            </div>
        </div>
    );
};

export default SkillSet;
