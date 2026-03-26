import React from 'react';
import styles from './css/Home.module.css';
import AboutMe from '../components/AboutMe';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import Contributions from '../components/Contributions';

function Home() {
    useDocumentTitle("Mike Tishman — Software Engineer");

    return (
        <div className={styles.pageContainer}>
            <Introduction />
            <div className={styles.centerPanel} id="about-me">
                <AboutMe />
            </div>
            <div className={styles.projectsPanel} id="projects">
                <Projects />
            </div>
            <div className={styles.projectsPanel} id="open-source">
                <Contributions />
            </div>
        </div>
    );
}

export default Home;
