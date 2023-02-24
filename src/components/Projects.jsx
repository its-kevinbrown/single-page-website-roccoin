import React from 'react';
import '../styles/Projects.css'
import Cards from './Cards';
import projectData from '../projectData/projectData';
import { Fade } from "react-awesome-reveal";

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="p-title">Cryptocurrency & Gift Cards</h1>
            <div className="p-wrapper">
                {projectData.map((item, index) => (
                    <Fade damping={0.5} duration={3000} >
                        <Cards key={index} {...item} />
                    </Fade>
                ))}
            </div>
        </div>
    )
};

export default Projects;