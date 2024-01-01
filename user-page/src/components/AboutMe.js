import React from "react";
import './css/AboutMe.css';


// components
import EmphasizeText from '../utils/EmphasizeText';

// assets
import aboutmeContent from '../data/json/aboutme.json'

function AboutMe(){
return(
    <div className='aboutme-info'>
        <div className='content-container'>
            <div className="text-container">
                <div className='greeting'>{aboutmeContent.greeting}</div>
                <div className='intro'>{aboutmeContent.introduction}</div>
                <hr></hr>
                <div className='bio'>
                    <EmphasizeText text={aboutmeContent.bio} emphasize={["Python", "Java", "JavaScript", "Vue", "React", "Florida Institute of Technology"]}/>
                </div>
            </div>

        </div>
    </div>
);
}

export default AboutMe