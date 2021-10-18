import React from "react";
import '../styles/About.css'


const About = () => {
    const grannyCar = "https://images.unsplash.com/photo-1633719280862-af1910412e3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
    return (
        <div className="about">
            <div className="a-left"  style={{background: `url(${grannyCar}) no-repeat center center`}}></div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <h2 className="a-subtitle" >Get to know me</h2>
                <p className="a-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga velit assumenda! Nemo iste molestiae cumque ipsam recusandae error, similique necessitatibus! Nesciunt aut voluptas officia sunt iusto expedita dolorem ad.</p><br />
                <p className="a-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga velit assumenda! Nemo iste molestiae cumque ipsam recusandae error, similique necessitatibus! Nesciunt aut voluptas officia sunt iusto expedita dolorem ad.</p><br />
                <p className="a-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ipsum nesciunt ab? Vitae molestiae velit cumque dignissimos ut fugit in commodi iste porro soluta vel deserunt quia rerum voluptates magni rem dolore, expedita eius officia sint! Corrupti molestiae quibusdam voluptas.</p>
            </div>
        </div>
    );
}

export default About;