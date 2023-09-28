import React from "react";
// import { Link } from "react-router-dom";

import './footer.css';

function Footer() {

    return (
        <div className="footer" style={{ backgroundColor: "#000", color: "#fff" }}>

            <div className="row text-center" style={{ margin: "0" }}>

                <div className="col-sm-4 p-3 part-description">
                    <div className="navbarHeading p-3">
                        <h2 className=" portfolio">PORTFOLIO</h2>
                    </div>
                    <div className="description p-3">
                        <p>I am a passionate web developer skilled in creating responsive and dynamic websites.
                            Leveraging the latest technologies and design practices,
                            I strive to craft seamless user experiences that align with business goals and user needs.
                            Explore my portfolio to see the innovative solutions I've brought to life.
                        </p>
                    </div>

                </div>

                <div className="col-sm-4 p-3 part-details">

                    <div className="heading p-3">
                        <h1>Personal Details</h1>
                        <hr className="mb-0" style={{backgroundColor:"#555"}}></hr>
                    </div>

                    <div className="details p-3">
                        <div className="name mb-3">
                            <h1>Name : <span>Tanmay Pednekar</span></h1>
                            {/* <p>Tanmay Pednekar</p> */}
                        </div>

                        <div className="email mb-3">
                            <h1>Email : <span>tanmaypednekar21@gmail.com</span></h1>
                            {/* <p>tanmaypednekar21@gmail.com</p> */}
                        </div>

                        <div className="address">
                            <h1>Based in : <span>Mumbai, Maharashtra.</span></h1>
                            {/* <p>Mumbai, Maharashtra.</p> */}
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 p-3 part-social">
                    <div className="social">
                        <div className="heading p-3">
                            <h1>Follow me</h1>
                            <hr className="mb-0" style={{backgroundColor:"#555"}}></hr>
                        </div>
                        <div className="social-icons p-3">

                            {/* <Link to={""} className="social-icon m-2">
                                <img src={facebook} alt="facebook" style={{width:"25px"}}/>
                            </Link>

                            <Link to={""} className="social-icon m-2">
                                <img src={instagram} alt="facebook" style={{width:"25px"}}/>
                            </Link>

                            <Link to={""} className="social-icon m-2">
                                <img src={linkedin} alt="facebook" style={{width:"25px"}}/>
                            </Link>

                            <Link to={""} className="social-icon m-2">
                                <img src={github} alt="facebook" style={{width:"25px"}}/>
                            </Link> */}

                            <a href={"https://www.facebook.com/profile.php?id=100005380007731&mibextid=ZbWKwL"} className="facebook-icon ui mini circular facebook icon button m-2">
                                <i className="facebook Medium icon"></i>
                            </a>

                            <a href={"https://www.instagram.com/tanmay.p_/"} className="instagram-icon ui mini  circular instagram icon button m-2">
                                <i className="instagram Medium icon"></i>
                            </a>

                            <a href={"https://www.linkedin.com/in/tanmay-pednekar-739726239"} className="linkedin-icon ui mini circular linkedin icon button m-2">
                                <i className="linkedin Medium icon"></i>
                            </a>

                            <a href={"https://github.com/Tanmay-P"} className="github-icon ui purple mini circular github icon button m-2">
                                <i className="github Medium icon"></i>
                            </a>

                            {/* <div className="ui vertical labeled icon buttons">

                                <div className="ui labeled mini icon buttons mb-2">
                                    <Link to={""} className="facebook-icon ui circular facebook icon button">
                                        <i className="facebook Medium icon"></i>
                                        Facebook
                                    </Link>
                                </div>

                                <div className="ui labeled mini icon buttons mb-2">
                                    <Link to={""} className="instagram-icon ui button instagram">
                                        <i className="instagram Medium icon"></i>
                                        Instagram
                                    </Link>
                                </div>
                                <div className="ui labeled mini icon buttons mb-2">
                                    <Link to={""} className="linkedin-icon ui button linkedin">
                                        <i className="linkedin Medium icon"></i>
                                        LinkedIn
                                    </Link>
                                </div>

                                <div className="ui labeled mini purple icon buttons ">
                                    <Link to={""} className="github-icon ui button github ">
                                        <i className="github Medium icon"></i>
                                        Github
                                    </Link>
                                </div>

                            </div> */}

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Footer;