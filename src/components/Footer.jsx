import React from 'react';
import '../styles/Footer.css';


const Footer = () => (
    <div className="footer">
        <div className="f-wrapper">
            <h2 className="f-copyright" >© {new Date().getFullYear()} | Made with ❤️ by Arnav </h2>
        </div>
    </div>
)


export default Footer;