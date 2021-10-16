import React from 'react';
import '../styles/Projects.css'
import Cards from './Cards';


const Projects = () => {
    return (
        <div className="projects">
            <h1 className="p-title">My Projects</h1>
            <div className="p-wrapper">
                {[1,2,3,4].map(({ item, index }) => (
                    <Cards key={index} />
                ))}
            </div>
        </div>
    )
};

export default Projects;