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

const EMPHASIZE = ['Python', 'Java', 'JavaScript', 'Vue', 'React', 'Florida Institute of Technology'];

const SKILLS = [
    { label: 'Python',        Icon: SiPython,        color: '#3776AB' },
    { label: 'JavaScript',    Icon: SiJavascript,    color: '#F7DF1E' },
    { label: 'Java',          Icon: FaJava,          color: '#ED8B00' },
    { label: 'C#',            Icon: SiSharp,         color: '#512BD4' },
    { label: 'C++',           Icon: SiCplusplus,     color: '#00599C' },
    { label: 'React',         Icon: SiReact,         color: '#61DAFB' },
    { label: 'Vue',           Icon: SiVuedotjs,      color: '#4FC08D' },
    { label: 'Django',        Icon: SiDjango,        color: '#44B78B' },
    { label: 'Flask',         Icon: SiFlask,         color: '#2d2d2d', darkColor: '#d4d4d4' },
    { label: 'MySQL',         Icon: SiMysql,         color: '#4479A1' },
    { label: 'Elasticsearch', Icon: SiElasticsearch, color: '#00BFB3' },
    { label: 'Git',           Icon: SiGit,           color: '#F05032' },
    { label: 'Jenkins',       Icon: SiJenkins,       color: '#D24939' },
    { label: 'JIRA',          Icon: SiJira,          color: '#2684FF' },
];

function AboutMe() {
    const { theme } = useContext(AppThemeContext);
    const isDarkMode = theme === 'dark';

    return (
        <div>
            {/* ── Section header ── */}
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <div className={styles.sectionDivider} />
            </div>

            {/* ── Identity ── */}
            <div className={styles.identityBlock}>
                <h3 className={styles.identityName}>Michael Tishman</h3>
                <p className={styles.identityRole}>Software Engineer</p>
                <div className={styles.identityEdu}>
                    <img src={FITLOGO} alt="Florida Tech logo" className={styles.eduLogo} />
                    <span className={styles.eduSchool}>{education.school}</span>
                    <span className={styles.eduSep}>·</span>
                    <span className={styles.eduDegree}>{education.degree}</span>
                </div>
            </div>

            {/* ── Bio ── */}
            <p className={styles.bio}>
                <EmphasizeText text={aboutmeContent.bio} emphasize={EMPHASIZE} />
            </p>

            {/* ── Divider ── */}
            <hr className={`${styles.divider} ${isDarkMode ? styles.dividerDark : styles.dividerLight}`} />

            {/* ── Skills ── */}
            <div className={styles.skillsSection}>
                <p className={styles.subLabel}>Skills</p>
                <div className={styles.skillGrid}>
                    {SKILLS.map((skill) => {
                        const { label, Icon } = skill;
                        const color = isDarkMode && skill.darkColor ? skill.darkColor : skill.color;
                        return (
                            <div key={label} className={styles.skillItem} style={{ color }}>
                                <Icon size={36} />
                                <span className={styles.skillLabel}>{label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <hr className={`${styles.divider} ${isDarkMode ? styles.dividerDark : styles.dividerLight}`} />

            {/* ── Experience ── */}
            <div className={styles.experienceSection}>
                <p className={styles.subLabel}>Experience</p>
                <Experience />
            </div>
        </div>
    );
}

export default AboutMe;
