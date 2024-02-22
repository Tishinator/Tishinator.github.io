import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './css/IconHeaderCard.module.css';

const IconHeaderCard = ({ title, icon, bodyContent }) => {
    
    return (
        <div className={styles.iconCardSection}>
            <div className={styles.iconCard}>
                <div className={styles.iconCardHeader}>
                    <FontAwesomeIcon icon={icon} /> <span>{title}</span>
                </div>
                <div className={styles.iconCardBody}>
                    {bodyContent}
                </div>
            </div>
        </div>
    );
};

export default IconHeaderCard;