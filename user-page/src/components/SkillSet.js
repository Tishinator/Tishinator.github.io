import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faVial, faFileAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import styles from './css/SkillSet.module.css';

const SkillSet = () => {
    return (
        <div className={styles.skillsetSection}>
            <div className={styles.skillsetCard}>
                <div className={styles.skillsetHeader}>
                    <FontAwesomeIcon icon={faLightbulb} /> <span>Skill Set </span>
                </div>
                <div className={styles.skillsetGridContainer}>
                    <div className={styles.skillsetGridItem}>
                        <FontAwesomeIcon icon={faCode} size="2x" />
                        <p>Front-end Development</p>
                    </div>
                    <div className={styles.skillsetGridItem}>
                        <FontAwesomeIcon icon={faDatabase} size="2x" />
                        <p>Back-end Development</p>
                    </div>
                    <div className={styles.skillsetGridItem}>
                        <FontAwesomeIcon icon={faVial} size="2x" />
                        <p>Automated Regression Testing</p>
                    </div>
                    <div className={styles.skillsetGridItem}>
                        <FontAwesomeIcon icon={faFileAlt} size="2x" />
                        <p>Software Documentation</p>
                    </div>
                </div>        
            </div>
        </div>
    );
};

export default SkillSet;
