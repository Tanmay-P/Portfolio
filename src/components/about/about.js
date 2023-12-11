import React from "react";

// import html from '../images/tech-stack-logo/html.png';
// import css from '../images/tech-stack-logo/css.png';
// import js from '../images/tech-stack-logo/js.png';
// import react from '../images/tech-stack-logo/react.png';
// import java from '../images/tech-stack-logo/java.png';
// import postgresql from '../images/tech-stack-logo/postgresql.png';
// import mysql from '../images/tech-stack-logo/mysql.png';

import EducationDetails from './education.js';

import './about.css';
import TechnologyStack from "./techStack";

function About() {

    return (
        <div>
            {/* <Navbar /> */}

            <div className="about">
                <div className="heading p-3 m-3">
                    <h1>About Me</h1>
                </div>

                <div className="content  m-3">

                    {/* <div className="col-md content-image">
                        <div className="center m-3">
                            <img src={pic} alt="about" />
                        </div>
                    </div> */}

                    <div className="col-md content-description text-left">
                        {/* <div className="heading mt-5 p-3 ml-5">
                            <h1>Tanmay Pednekar</h1>
                        </div> */}
                        <div className="info p-3">
                            <div className="brief">
                                <ul>
                                    <li>At the age of 22, I've already carved a niche for myself in the vast realm of software development.</li>
                                    <li>Holding a <strong>Bachelor's degree in Information Technology</strong> and a <strong>Master's in Computer Application</strong>.</li>
                                    <li>I am deeply passionate about the endless possibilities that technology offers.</li>
                                    <li>My academic foundation is strengthened by over a<strong> year of hands-on experience</strong>, working as a <strong>Software Associate</strong> at <strong>Capgemini</strong>.</li>
                                    <li>My primary domain of expertise lies in <strong>Java Fullstack</strong> development enhanced by <strong>React JS</strong>.</li>
                                </ul>
                                {/* <p>
                                    At the age of 22, I've already carved a niche for myself in the vast realm of software development.
                                    <br></br>Holding a Bachelor's degree in Information Technology and a Master's in Computer Application.
                                    <br></br>I am deeply passionate about the endless possibilities that technology offers.
                                    <br></br>My academic foundation is strengthened by over a year of hands-on experience, working as a Software Associate at Capgemini.
                                    <br></br>My primary domain of expertise lies in Java Fullstack development enhanced by React.js.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>



                <EducationDetails />

{/* 
                <div className="technologies container p-3">
                    <div className="heading mb-5 mt-3">
                        <h3>My technological toolkit includes :</h3>
                    </div>
                    <div className="front mb-3">
                        <h4>Frontend</h4>
                        <div className="row">
                            <div className="tech-stack html col-6 col-sm-3">
                                <img src={html} alt="html" />
                                <p>HTML</p>
                            </div>
                            <div className="tech-stack css col-6 col-sm-3">
                                <img src={css} alt="css" />
                                <p>CSS</p>
                            </div>
                            <div className="tech-stack js col-6 col-sm-3">
                                <img src={js} alt="js" />
                                <p>JavaScript</p>
                            </div>
                            <div className="tech-stack react col-6 col-sm-3">
                                <img src={react} alt="react" />
                                <p>React Js</p>
                            </div>
                        </div>
                    </div>
                    <div className="back mb-3">
                        <h4>Backend</h4>
                        <div className="row">
                            <div className="tech-stack java col-sm-5">
                                <img src={java} alt="java" />
                                <p>JAVA
                                    <br></br>
                                    <span>(Spring Boot Framework & Microservices)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="db">
                        <h4>Databases</h4>
                        <div className="row">
                            <div className="tech-stack postgresql col-6 col-sm-3">
                                <img src={postgresql} alt="postgresql" />
                                <p>PostgreSQL</p>
                            </div>
                            <div className="tech-stack mysql col-6 col-sm-3">
                                <img src={mysql} alt="mysql" />
                                <p>MySql</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <TechnologyStack/>

            </div>


            {/* <Footer /> */}
        </div>
    )
}
export default About;