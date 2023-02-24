import React from 'react';
import '../styles/Hero.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';


const Hero = () => {
    const smileMan = 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    return (
        <div className="hero">
            <div className="h-left">
                <motion.div
                    className="h-intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}

                >
                    <h1 >Hello, I'm <br /> <span>Ryan Ogonda</span> </h1>
                    <h2>Welcome to ROC COIN official trading platform</h2>
                </motion.div>
                <Link
                    to="projects"
                    exact="true"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={50}
                >
                    <div className="scroll-down">
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </div>
            <motion.div
                className="h-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 1, duration: 3}}
            >
                <img src={smileMan} alt="" />
            </motion.div>
        </div>
    )
}

export default Hero;