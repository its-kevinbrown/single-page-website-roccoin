import React from 'react';
import '../styles/Social.css';
import { Fade } from 'react-awesome-reveal';
import { Twitter, Instagram, Facebook, GitHub, SystemUpdateAlt, LinkedIn } from '@material-ui/icons';


const Tabs = ({ title, Icon, socialLink }) => (
    <div className="s-tab">
        <a href={socialLink}>
            <div className="s-tab-wrapper">
                <h2 className="s-tab-title" >{title}</h2>
                <div className="s-tab-icon">
                    <Icon className="hvr-icon-up" />
                </div>
            </div>
        </a>
    </div>
);


const Social = () => {
    return (
        <Fade delay={500} duration={2000} >
            <div className="social">
                <h1 className="s-title" >Let's Connect</h1>
                <h1 className="s-subtitle" >My Social</h1>
                <div className="social-links">

                    <Tabs
                        title="Twitter"
                        Icon={Twitter}
                        socialLink="#twitter"
                    />

                    <Tabs
                        title="Facebook"
                        Icon={Facebook}
                        socialLink="#facebook"
                    />

                    <Tabs
                        title="Instagram"
                        Icon={Instagram}
                        socialLink="#instagram"
                    />

                    <Tabs
                        title="Github"
                        Icon={GitHub}
                        socialLink="#github"
                    />

                    <Tabs
                        title="Linkedin"
                        Icon={LinkedIn}
                        socialLink="#linkedin"
                    />

                    <Tabs
                        title="Resume"
                        Icon={SystemUpdateAlt}
                        socialLink="#download"
                    />
                </div>
            </div>
        </Fade>

    );
}

export default Social;
