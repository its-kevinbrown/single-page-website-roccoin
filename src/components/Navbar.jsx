import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { Link as NavLink, animateScroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { GrMenu } from 'react-icons/gr'

const Navbar = () => {
    const [menuIcon, setMenutIcon] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleHome = () => {
        animateScroll.scrollToTop()
    }

    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
        console.log(toggleMenu)
    }

    const handleNavbar = () => {
        if (window.innerWidth <= 1180) {
            setMenutIcon(true)
        } else {
            setMenutIcon(false)
        }
    }

    useEffect(() => {
        handleNavbar()
        window.addEventListener('resize', handleNavbar);
    }, [menuIcon])

    return (
        <motion.div className="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .7, delay: 2 }}
        >
            <div className="n-wrapper">
                <NavLink className="n-logo"
                    to="/"
                    duration={500}
                    onClick={toggleHome}
                >ROC COIN
                </NavLink>
                {menuIcon ? <GrMenu className="menu-icon" onClick={handleMenu} /> : ""}
                <ul
                    className={`n-menu ${toggleMenu ? "drop-menu" : ""}`}
                >
                    <li className="n-menu-link">
                        <NavLink
                            to="projects"
                            exact="true"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Crypto
                        </NavLink>
                    </li>
                    <li className="n-menu-link">
                        <NavLink
                            to="about"
                            exact="true"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="n-menu-link">
                        <NavLink
                            to="social"
                            exact="true"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Social
                        </NavLink>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Navbar;