import React, { useContext } from "react";
import styles from './css/AboutMe.module.css';
import { AppThemeContext } from "../context/AppThemeContext";
import EmphasizeText from '../utils/EmphasizeText';
import aboutmeContent from '../data/json/aboutme.json';
import education from '../data/json/education.json';
import Experience from "./Experience";
import FITLOGO from '../assets/fitLogo.png';
import {
    SiPython, SiJavascript, SiSharp, SiCplusplus,
    SiReact, SiVuedotjs, SiDjango, SiFlask,
    SiMysql, SiElasticsearch, SiGit, SiJenkins, SiJira,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const GITHUB_PFP = 'https://github.com/Tishinator.png';
const EMPHASIZE = ['Python', 'Java', 'JavaScript', 'Vue', 'React', 'Florida Institute of Technology'];

const SKILL_ROWS = [
    [
        { label: 'Python',        Icon: SiPython,        color: '#3776AB' },
        { label: 'JavaScript',    Icon: SiJavascript,    color: '#F7DF1E' },
        { label: 'Java',          Icon: FaJava,          color: '#ED8B00' },
        { label: 'C#',            Icon: SiSharp,         color: '#512BD4' },
        { label: 'C++',           Icon: SiCplusplus,     color: '#00599C' },
    ],
    [
        { label: 'React',         Icon: SiReact,         color: '#61DAFB' },
        { label: 'Vue',           Icon: SiVuedotjs,      color: '#4FC08D' },
        { label: 'Django',        Icon: SiDjango,        color: '#44B78B' },
        { label: 'Flask',         Icon: SiFlask,         color: '#2d2d2d', darkColor: '#d4d4d4' },
    ],
    [
        { label: 'MySQL',         Icon: SiMysql,         color: '#4479A1' },
        { label: 'Elasticsearch', Icon: SiElasticsearch, color: '#00BFB3' },
        { label: 'Git',           Icon: SiGit,           color: '#F05032' },
        { label: 'Jenkins',       Icon: SiJenkins,       color: '#D24939' },
        { label: 'JIRA',          Icon: SiJira,          color: '#2684FF' },
    ],
];

function AboutMe() {
    const { theme } = useContext(AppThemeContext);
    const isDarkMode = theme === 'dark';

    return (
        <div>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <div className={styles.sectionDivider} />
            </div>

            {/* ── Profile ── */}
            <div className={styles.profileRow}>
                <img
                    src={GITHUB_PFP}
                    alt="Mike Tishman"
                    className={styles.profilePhoto}
                />
                <div className={styles.profileInfo}>
                    <div className={styles.profileHeader}>
                        <div>
                            <h3 className={styles.profileName}>Michael Tishman</h3>
                            <p className={styles.profileRole}>Software Engineer</p>
                        </div>
                        <div className={styles.eduLine}>
                            <img src={FITLOGO} alt="Florida Tech logo" className={styles.eduLineLogo} />
                            <div>
                                <div className={styles.eduLineSchool}>{education.school}</div>
                                <div className={styles.eduLineDegree}>{education.degree}</div>
                            </div>
                        </div>
                    </div>
                    <p className={styles.bio}>
                        <EmphasizeText text={aboutmeContent.bio} emphasize={EMPHASIZE} />
                    </p>
                </div>
            </div>

            {/* ── Skills ── */}
            <div className={`${styles.subSection} ${isDarkMode ? styles.subSectionDark : styles.subSectionLight}`}>
                <div className={styles.subSectionInner}>
                    <p className={styles.subLabel}>Skills</p>
                    <div className={styles.skillGrid}>
                        {SKILL_ROWS.map((row, rowIdx) =>
                            row.map((skill, itemIdx) => { const { label, Icon } = skill; return (
                                <div
                                    key={label}
                                    className={styles.skillIconWrap}
                                    style={{
                                        gridColumn: rowIdx % 2 === 0 ? itemIdx * 2 + 1 : itemIdx * 2 + 2,
                                        gridRow: rowIdx + 1,
                                        color: isDarkMode && skill.darkColor ? skill.darkColor : skill.color,
                                    }}
                                >
                                    <Icon size={48} />
                                    <span className={styles.skillIconLabel}>{label}</span>
                                </div>
                            ); })
                        )}
                    </div>
                </div>
            </div>

            {/* ── Experience ── */}
            <div className={`${styles.subSection} ${isDarkMode ? styles.subSectionDark : styles.subSectionLight}`}>
                <div className={styles.subSectionInner}>
                    <p className={styles.subLabel}>Experience</p>
                    <Experience />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
