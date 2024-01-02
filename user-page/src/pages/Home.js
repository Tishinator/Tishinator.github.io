import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import './css/Home.css';
import UserCard from '../components/UserCard';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import ProgrammingLang from '../components/ProgrammingLang';
import SkillSet from '../components/SkillSet';
import { CarouselContext } from '../context/CarouselProvider';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Home() {
  const { index } = useContext(CarouselContext);

  useDocumentTitle('Tishinator Home');

  return (
    <div>
      <span className="background" />
      <div className='page-container'>
        <div className='leftPanel'><UserCard /></div>
        <div className='rightPanel'>
          <Carousel
                    activeIndex={index} 
                    controls={false} 
                    indicators={false}
                    interval={null}>
            <Carousel.Item>
              <AboutMe />
              <Education />
              <div className="skillDiv">
                <ProgrammingLang />
                <SkillSet />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {/* Content of the second item */}
            </Carousel.Item>
          </Carousel>
        </div> 
      </div>
    </div>
  );
}

export default Home;
