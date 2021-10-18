import React from 'react';
import '../styles/Hero.css';


const Hero = () => {
    const smileMan = 'https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
    return (
        <div className="hero">
            <div className="h-left">
                <div className="h-intro">
                    <h1>I'm <span>Arnav</span> Negi</h1>
                    <h2>Freelance ReactJS Developer</h2>
                </div>
                    <div className="scroll-down">
                        <span></span>
                        <span></span>
                </div>
            </div>
            <div className="h-right">
                <img src={smileMan} alt="" />
            </div>
        </div>
    )
}

export default Hero;