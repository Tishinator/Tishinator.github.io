import { useState } from "react";
import experienceData from '../data/json/workexp.json';
import styles from './css/Experience.module.css';
import { FaChevronDown } from 'react-icons/fa';

const SKILL_COLORS = {
    'Python':         { bg: 'rgba(55, 118, 171, 0.15)',  text: '#3776AB', border: 'rgba(55, 118, 171, 0.35)'  },
    'VueJS':          { bg: 'rgba(79, 192, 141, 0.15)',  text: '#4FC08D', border: 'rgba(79, 192, 141, 0.35)'  },
    'ReactJS':        { bg: 'rgba(97, 218, 251, 0.15)',  text: '#61DAFB', border: 'rgba(97, 218, 251, 0.35)'  },
    'Java':           { bg: 'rgba(237, 139, 0, 0.15)',   text: '#ED8B00', border: 'rgba(237, 139, 0, 0.35)'   },
    'TestComplete':   { bg: 'rgba(139, 92, 246, 0.15)',  text: '#8B5CF6', border: 'rgba(139, 92, 246, 0.35)'  },
    'Elastic Search': { bg: 'rgba(0, 191, 179, 0.15)',   text: '#00BFB3', border: 'rgba(0, 191, 179, 0.35)'   },
    'Visual Basic':   { bg: 'rgba(139, 92, 246, 0.15)',  text: '#8B5CF6', border: 'rgba(139, 92, 246, 0.35)'  },
    'Selenium':       { bg: 'rgba(67, 176, 73, 0.15)',   text: '#43B049', border: 'rgba(67, 176, 73, 0.35)'   },
};

const FALLBACK = { bg: 'rgba(150,150,150,0.12)', text: '#888', border: 'rgba(150,150,150,0.3)' };

function ExperienceItem({ job }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`${styles.jobItem} ${open ? styles.jobItemOpen : ''}`}>
            <button className={styles.jobHeader} onClick={() => setOpen(!open)}>
                <div className={styles.jobLeft}>
                    <span className={styles.jobCompany}>{job.company}</span>
                    <span className={styles.jobTitle}>{job.jobTitle}</span>
                </div>
                <div className={styles.jobRight}>
                    <div className={styles.skillTags}>
                        {job.skillHighlights.map(skill => {
                            const c = SKILL_COLORS[skill] || FALLBACK;
                            return (
                                <span key={skill} className={styles.skillTag}
                                    style={{ background: c.bg, color: c.text, borderColor: c.border }}>
                                    {skill}
                                </span>
                            );
                        })}
                    </div>
                    <span className={styles.timeframe}>{job.timeFrame}</span>
                    <FaChevronDown className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} size={11} />
                </div>
            </button>
            <div className={`${styles.jobBody} ${open ? styles.jobBodyOpen : ''}`}>
                <div className={styles.jobBodyInner}
                    dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
            </div>
        </div>
    );
}

function Experience() {
    return (
        <div className={styles.experienceList}>
            {experienceData.jobs.map((job, i) => (
                <ExperienceItem key={i} job={job} />
            ))}
        </div>
    );
}

export default Experience;
