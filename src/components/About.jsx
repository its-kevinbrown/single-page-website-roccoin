import React from "react";
import '../styles/About.css';
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import Slide from 'react-reveal/Slide'

const About = () => {
    const grannyCar = "https://freesvg.org/img/1547510251.png"

    const fadeInUp = keyframes`
        from {
            opacity: 0;
            transform: translateY(100px);
        }
        to {
            opacity: 1;
            transform: translateY(0)
        }
    `;

    return (
        <div className="about">
            <div className="a-left">
                <Slide left>
                    <img src={grannyCar} alt="" />
                </Slide>
            </div>

            <Reveal keyframes={fadeInUp} delay={500} triggerOnce>
                <div className="a-right">
                    <h1 className="a-title">About Me</h1>
                    <h2 className="a-subtitle">Get to know me</h2>
                    <p className="a-text">Ryan Ogonda Chima is the founder and chief executive officer of ROC COIN trading platform. He believes cryptocurrency is the next biggest investment.</p><br />
                    <p className="a-text">The idea of ROC COIN was born out of the desire to help individuals with passion to dive and endulge into the blockchain network, but do not have an idea on how to go about the buying and selling of various cryptocurrencies. This gave him an idea to start a platform that guarantees the convenient buying and selling of cryptocurrency from anywhere in the world. </p><br />
                    <p className="a-text">With the help Kevin OG the chief technical officer, ROC COIN also diversifies and deals not only on cryptocurrency, but also on the exchange of converting various gift cards to cash. ROC COIN is here to stay and is ready to serve. Thank you for choosing us today.</p>
                </div>
            </Reveal>
        </div>
    );
}

export default About;