import React from 'react';
import '../styles/Cards.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

const Cards = () => {
    const demoImageUrl = 'https://www.enyelsequeira.com/_next/image?url=%2Fimages%2Fprimu.png&w=1080&q=75';
    return (
        <div className="cards">
            <div className="img-wrapper">
                <div className="c-bg-image" style={{ backgroundImage: `url(${demoImageUrl})`}} ></div>
            </div>
            <div className="c-content">
                <p className="c-text" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero delectus accusantium, ipsam veritatis quasi cum.</p>
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