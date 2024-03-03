function Skills() {
    return (
        <>
            <style>
                {`
                    #skills {
                        font-size: min(2vw, 1rem); /* Scale based on viewport */
                        text-align: left; /* Justify text to the left */
                    }

                    .skills-category h3 {
                        text-decoration: underline;
                        text-decoration-color: pink; /* Pink underline */
                        font-size: min(2vw, 1.5rem);
                        margin-bottom: 5px; /* Adjust space below headers */
                    }

                    .skills-category p {
                        margin-left: 20px; /* Indent skill lists for better readability */
                    }
                `}
            </style>
            <div id="skills">

            <h3>Technical Skills:</h3>
                <ul>
                    <li><strong>Programming Languages:</strong> Proficient in Python, Javascript, and Java. Familiar with C#, C++, and Fortran.</li>
                    <li><strong>Frameworks and Libraries:</strong> Experienced with React, Vue, Django, and Flask.</li>
                    <li><strong>Databases:</strong> Skilled in MySQL and ElasticSearch.</li>
                    <li><strong>Tools and Platforms:</strong> Git, Jenkins, and JIRA.</li>
                    <li><strong>Development Practices:</strong> Agile methodologies, Test-Driven Development (TDD), Continuous Integration (CI), and Continuous Deployment (CD).</li>
                </ul>
                
                <h3>Business Skills:</h3>
                <ul>
                    <li><strong>Problem-Solving:</strong> Strong analytical skills with a proven track record of debugging and resolving complex issues in software applications.</li>
                    <li><strong>Team Collaboration:</strong> Effective at working in team settings, contributing to team meetings, and providing insights to drive project success.</li>
                    <li><strong>Communication:</strong> Excellent written and verbal communication skills, capable of clearly articulating technical concepts to non-technical stakeholders.</li>
                    <li><strong>Adaptability:</strong> Quickly adapts to new technologies and changing project requirements, demonstrating flexibility in learning and applying new skills.</li>
                    <li><strong>Time Management:</strong> Proficient in managing multiple tasks and projects simultaneously, ensuring timely delivery of all assignments.</li>
                </ul>
            </div>
        </>
    );
}

export default Skills;
