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
import Introduction from '../components/Introduction';
import { AppThemeContext } from '..//context/AppThemeContext';

function Home() {
  const { theme } = useContext(AppThemeContext);
  const darkMode = theme === 'dark';
  let bkgrd = darkMode ? 'black' : 'white';
  
  useDocumentTitle('Tishinator Home');

  return (
    <div>
      <div className={`${styles.pageContainer}`}>
        <Introduction />
        <div className={`${styles.centerPanel}`} style={{ backgroundColor: bkgrd }}>
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
