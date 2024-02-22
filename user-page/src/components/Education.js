import React from 'react';
import education from '../data/json/education.json'
import styles from './css/Education.module.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    return (
        <div className={styles.educationSection}>
            <div className={styles.educationCard}>
                <div className={styles.educationHeader}>
                <FontAwesomeIcon icon={faGraduationCap} /> <span>Education</span>
                </div>
                <div className={styles.educationBody}>
                    <div className={styles.educationInfo}>
                        <h3>{education.school}</h3>
                        <p>{education.degree}, {education.gradYear}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
