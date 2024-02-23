import React, { useContext } from 'react';
import styles from'./css/Home.module.css';
import AboutMe from '../components/AboutMe';
import useDocumentTitle from '../hooks/useDocumentTitle';
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
        {/* <div className={`${styles.centerPanel}`} style={{ backgroundColor: bkgrd }} id='about-me'>
              <AboutMe />
              <Education />
              <div className={styles.skillDiv}>
                <ProgrammingLang />
                <SkillSet />
              </div>
        </div> */}
        <div className={`${styles.centerPanel}`} style={{ backgroundColor: bkgrd }} id='about-me'>
          <AboutMe />
        </div>
      </div>

    </div>
  );
}

export default Home;
