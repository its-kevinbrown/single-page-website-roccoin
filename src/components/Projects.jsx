import React from 'react';
import '../styles/Projects.css'
import Cards from './Cards';
import projectData from '../projectData/projectData';


const Projects = () => {
    return (
        <div className="projects">
            <h1 className="p-title">My Projects</h1>
            <div className="p-wrapper">
                {projectData.map((item, index) => (
                    <Cards key={index} {...item} />
                ))}
            </div>
        </div>
    )
};

export default Projects;