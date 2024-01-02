import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/IconHeaderCard.css';

const IconHeaderCard = ({ title, icon, bodyContent }) => {
    
    return (
        <div className="icon-card-section">
            <div className="icon-card">
                <div className="icon-card-header">
                    <FontAwesomeIcon icon={icon} /> <span>{title}</span>
                </div>
                <div className="icon-card-body">
                    {bodyContent}
                </div>
            </div>
        </div>
    );
};

export default IconHeaderCard;