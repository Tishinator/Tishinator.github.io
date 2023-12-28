import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import mtImage from '../assets/mt.png'
import githubLogo from '../assets/github-circle-svgrepo-com.svg'
import linkedInLogo from '../assets/linkedin-svgrepo-com.svg'
import resume from '../assets/Tishman_resume_July2023.pdf'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';


import './css/UserCard.css'


function UserCard(){
    return(
        <div>
          <div className='aboutme-card'>
            <Card>
              <Card.Img variant='top' src={mtImage} />
              <Card.Body>
                <Card.Title>Mike Tishman</Card.Title>
                <Card.Subtitle>
                  <span className="badge custom-badge bg-dark text-light">Software Engineer</span>
                </Card.Subtitle>
              </Card.Body>
              <ListGroup variant="list-group-flush">
                <ListGroup.Item>
                    <ul>
                        <li>
                            <div className='infoItem'>
                                <div className='icon'><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div className='text'><span>Florida, USA</span></div>
                            </div>
                        </li>
                        <li>
                            <div className='infoItem'>
                               <div className='icon'><FontAwesomeIcon icon={faEnvelope} /></div>
                               <div className='text'><span>mike</span><span>.</span><span>tishman</span><span>&#64;</span>
                                <span>gmail.com</span></div>
                            </div>
                        </li>
                    </ul>
                </ListGroup.Item>
                <ListGroup.Item>
                <a href={resume} download="mtishmanJuly2023Resume.pdf" style={{ textDecoration: 'none' }}>
                    <button className="btn btn-custom">
                        <FontAwesomeIcon icon={faDownload} /> Download CV
                    </button>
                </a>
                </ListGroup.Item>
            </ListGroup>
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
        </div>
    );
};

export default UserCard;