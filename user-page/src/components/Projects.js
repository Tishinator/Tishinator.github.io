import React, { useState, useEffect } from 'react';
import IconHeaderCard from './IconHeaderCard';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Projects = () => {
    const designSkillsContent = (
        <div>
            <div style={{ textAlign:"justify"}}>
                <p>The DatasetGenerator.py script is a Python program designed to apply transformations on an image.<br></br>These transformations will create a dataset from the single image to be used in machine learning.</p>
            </div>
            <Button variant='danger' style={{marginRight:"10px"}}>Live Demo</Button>
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
