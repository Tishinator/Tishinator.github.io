import React from 'react';
import education from '../data/education.json'
import './css/Education.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    return (
        <div className="education-section">
            <div className="education-card">
                <div className="education-header">
                <FontAwesomeIcon icon={faGraduationCap} /> <span>Education</span>
                </div>
                <div className="education-body">
                    <div className="education-info">
                        <h3>{education.school}</h3>
                        <p>{education.degree}, {education.gradYear}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
