import React from "react";

// import html from '../images/tech-stack-logo/html.png';
// import css from '../images/tech-stack-logo/css.png';
// import js from '../images/tech-stack-logo/js.png';
// import react from '../images/tech-stack-logo/react.png';
// import java from '../images/tech-stack-logo/java.png';
// import postgresql from '../images/tech-stack-logo/postgresql.png';
// import mysql from '../images/tech-stack-logo/mysql.png';

import webDeveloper from '../images/web-developer.png';

import EducationDetails from './education.js';

import './about.css';
import TechnologyStack from "./techStack";

function About() {

    return (
        <div>

            <div className="about">
                <div className="heading p-3 m-3">
                    <h1>About Me</h1>
                </div>


                <div className="row p-4" style={{ width: "100%" }}>
                    <div className="col-sm-6" style={{ paddingRight: "0", paddingLeft: "2rem" }}>
                        <div className="about-image">
                            <img src={webDeveloper} alt="web-developer" />
                        </div>
                    </div>

                    <div className="col-sm-6 content text-left" style={{ paddingRight: "0", paddingLeft: "2rem" }}>
                        <h1>Tanmay Pednekar</h1>
                        <p>
                            At the age of 22, I've already carved a niche for myself in the vast realm of software development.
                            Holding a <strong>Bachelor's degree in Information Technology</strong> and a <strong>Master's in Computer Application</strong>.
                            I am deeply passionate about the endless possibilities that technology offers.
                            My academic foundation is strengthened by over a<strong> year of hands-on experience</strong>, working as a <strong>Software Associate</strong> at <strong>Capgemini</strong>.
                            My primary domain of expertise lies in <strong>Java Fullstack</strong> development enhanced by <strong>React JS</strong>.
                        </p>
                        <table className="table">
                            <tr>
                                <td>
                                    <i className="icon map marker alternate"></i>
                                    Based In
                                </td>
                                <td className="detail">Mumbai, Maharashtra, India</td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="icon phone"></i>
                                    Contact
                                </td>
                                <td className="detail">+91 8693899740</td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="icon at"></i>
                                    Email
                                </td>
                                <td className="detail">tanmaypednekar21@gmail.com</td>
                            </tr>
                        </table>
                    </div>

                </div>


                {/* <div className="content  m-3">
                    <div className="col-md content-description text-left">
                        <div className="info p-3">
                            <div className="brief">
                                <ul>
                                    <li>At the age of 22, I've already carved a niche for myself in the vast realm of software development.</li>
                                    <li>Holding a <strong>Bachelor's degree in Information Technology</strong> and a <strong>Master's in Computer Application</strong>.</li>
                                    <li>I am deeply passionate about the endless possibilities that technology offers.</li>
                                    <li>My academic foundation is strengthened by over a<strong> year of hands-on experience</strong>, working as a <strong>Software Associate</strong> at <strong>Capgemini</strong>.</li>
                                    <li>My primary domain of expertise lies in <strong>Java Fullstack</strong> development enhanced by <strong>React JS</strong>.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}




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


            </div>


            {/* <Footer /> */}
        </div>
    )
}
export default About;