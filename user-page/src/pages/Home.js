import React from 'react';
import './css/Home.css'
import UserCard from '../components/UserCard';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import ProgrammingLang from '../components/ProgrammingLang';
// import WorkExperience from '../components/WorkExperience';
import SkillSet from '../components/SkillSet';

// hooks
import useDocumentTitle from '../hooks/useDocumentTitle'

function Home() {
  useDocumentTitle('Tishinator Home');


  return (
    <div>
      <span className="background" />
      <div className='page-container'>
          <div className='leftPanel'><UserCard /></div>
          <div className='rightPanel'>
            <AboutMe />
            <Education />
            <div className="skillDiv">
              <ProgrammingLang />
              <SkillSet />
            </div>

          </div> 
      </div>
      
    </div>
  );
}

export default Home;
