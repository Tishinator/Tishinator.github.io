import React from 'react';
import './css/AboutMe.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// components

// hooks
import useDocumentTitle from '../hooks/useDocumentTitle'

// assets
import mtImage from '../assets/mt.png'
import githubLogo from '../assets/github-circle-svgrepo-com.svg'
import linkedInLogo from '../assets/linkedin-svgrepo-com.svg'
import aboutmeContent from '../data/json/aboutme.json'

const EmphasizeText = ({ text, emphasize }) => {
  // Create a regular expression that matches whole words only
  const regex = new RegExp(`\\b(${emphasize.join('|')})\\b`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, index) =>
        emphasize.includes(part) ? <span key={index} className="highlight">{part}</span> : part
      )}
    </>
  );
};


function AboutMe() {
  useDocumentTitle('Tish');
  
  return (
    <div>
      <span className="background" />
      <div className='aboutme'>
        <div className="aboutme-wrapper">
          <div className='aboutme-card'>
            <Card className='rounded-0'>
              <Card.Img variant='top' src={mtImage} />
              <Card.Body>
                <Card.Title>Mike Tishman</Card.Title>
                <Card.Text>
                  Software Engineer
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href='https://github.com/Tishinator'>
                  <img src={githubLogo} alt="GitHub" width="32" height="32"/>
                </a>

                <a href='https://www.linkedin.com/in/michael-tishman-8a80477b'>
                  <img src={linkedInLogo} alt="LinkedIn" width="32" height="32"/>
                </a>
              </Card.Footer>
            </Card>
          </div>
          <div className='aboutme-info'>
            <div className='content-container'>
              <div className="text-container">
                <div className='greeting'>{aboutmeContent.greeting}</div>
                <div className='intro'>{aboutmeContent.introduction}</div>
                <div className='bio'>
                  <EmphasizeText text={aboutmeContent.bio} emphasize={["Python", "Java", "JavaScript", "Vue", "React", "Florida Institute of Technology"]}/>
                </div>
              </div>
              <div className="button-container">
                  <Button variant='primary'>Resume</Button>
                  <Button variant='secondary'>Projects</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
