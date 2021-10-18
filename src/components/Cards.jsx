import React from 'react';
import '../styles/Cards.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

const Cards = ({title, description, image}) => {
    return (
        <div className="cards">
            <div className="img-wrapper">
                <div className="c-bg-image" style={{ backgroundImage: `url('${image}')`}} ></div>
            </div>
            <div className="c-content">
                <h1 className="c-title" >{title}</h1>
                <p className="c-text" >{description}</p>
                <div className="c-social-links">
                    <ul>
                        <li><a href="#github"><GitHubIcon className="c-icons" /></a></li>
                        <li><a href="#source"><LinkIcon className="c-icons" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Cards;