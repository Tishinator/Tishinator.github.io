import React, { useState, useEffect } from 'react';
import IconHeaderCard from './IconHeaderCard';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Projects = () => {
    const designSkillsContent = (
        <div>
            <div style={{ textAlign:"justify"}}>
                <p>The DatasetGenerator.py script is a Python program designed to apply transformations on an image. These transformations will create a dataset from the single image to be used in machine learning. Original project was done for a machine learning project in college, but was branched out for uses on other projects.</p>
                <p style={{textAlign:"center"}}> Live demo is a web-based application with the original dataset generator code translated to web serivces.</p>
            </div>
            <a href='https://tishinator.github.io/dataset-generator-ui' ><Button variant='danger' style={{marginRight:"10px"}}>Live Demo</Button></a>
            <a href='https://github.com/Tishinator/Dataset-Generator' ><Button variant='primary'>Git Repo</Button></a>
        </div>        
    );

    return (
        <div>
            <IconHeaderCard 
                title="Dataset Generator" 
                icon={faLaptopCode} 
                bodyContent={designSkillsContent}
            />
        </div>
    );
};

export default Projects;
