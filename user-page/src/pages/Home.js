import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from'./css/Home.module.css';
import UserCard from '../components/UserCard';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import ProgrammingLang from '../components/ProgrammingLang';
import SkillSet from '../components/SkillSet';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Projects from '../components/Projects';

function Home() {

  useDocumentTitle('Tishinator Home');

  return (
    <div>
      <span className={styles.background}/>
      <div className={styles.pageContainer}>
        <div className={styles.leftPanel}><UserCard /></div>
        <div className={styles.centerPanel}>
              <AboutMe />
              <Education />
              <div className={styles.skillDiv}>
                <ProgrammingLang />
                <SkillSet />
              </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
