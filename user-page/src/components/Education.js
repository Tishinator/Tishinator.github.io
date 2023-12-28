import React from 'react';
import education from '../data/education.json'
import './css/Education.css'

const Education = () => {
    return (
        <div className="education-section">
            <div className="education-card">
                <div className="education-header">
                    <span>Education</span>
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
