import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import jobData from '../data/json/workexp.json'

const WorkExperience = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobData.jobs);
  }, []);

  return (
    <div>
            <Accordion>
                {jobs.map((job, index) => (
                    <Card key={index}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={String(index)}>
                                {job.jobTitle} - {job.company} ({job.timeFrame})
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={String(index)}>
                            <Card.Body>
                                {job.jobDescription}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </div>
  );
};

export default WorkExperience;
