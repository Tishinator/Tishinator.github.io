import React from "react";
import styles from './css/AboutMe.module.css';


// components
import EmphasizeText from '../utils/EmphasizeText';

// assets
import aboutmeContent from '../data/json/aboutme.json'

function AboutMe(){
return(
    <div className={styles.aboutmeInfo}>
        <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
                <div className={styles.greeting}>{aboutmeContent.greeting}</div>
                <div className={styles.intro}>{aboutmeContent.introduction}</div>
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