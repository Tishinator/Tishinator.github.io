import React from 'react';
import './css/AboutMe.css';
import Card from 'react-bootstrap/Card';

// components

// hooks
import useDocumentTitle from '../hooks/useDocumentTitle'

// assets
import mtImage from '../assets/mt.png'
import githubLogo from '../assets/github-circle-svgrepo-com.svg'
import linkedInLogo from '../assets/linkedin-svgrepo-com.svg'

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
            <p>Some text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
