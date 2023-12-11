import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './navbar.css';


function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [isExpanded, setIsExpanded] = useState(false);

    const toggle = () => {
        setIsExpanded(!isExpanded);
    }
    

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Check the screen width and keep the dropdown open if it's less than 992 pixels
            const screenWidth = window.innerWidth;
            setIsDropdownOpen(screenWidth < 992);
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const handleDropdownToggle = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    return (
        <div className="p-3">
            <nav className={`navbar navbar-expand-lg fixed-top navbar-light p-3 ${isScrolled ? 'scrolled' : ''}`}>

                <div className="navbarHeading mt-1">
                    <Link to={'/'} style={{ cursor: "pointer", color: "#fff" }}>
                        <h2 className=" portfolio">PORTFOLIO</h2>
                    </Link>
                </div>

                <div className="navbar-toggler" style={{ border: "none" }}>
                    <button className="ui icon button mini" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isExpanded} aria-label="Toggle navigation" onClick={toggle}>
                        {/* <span className="navbar-toggler-icon"></span> */}
                        {isExpanded ? <i className="close icon"></i> : <i className="bars icon"></i>}
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav" style={{ justifyContent: 'right' }}>
                    <ul className="navbar-nav">
                        <li className="nav-item contact">
                            <Link className="nav-link mx-2" to={'/contact'}>
                                <button class="ui compact right labeled icon button">
                                    <i class="user icon"></i>
                                    Contact
                                </button>
                            </Link>
                        </li>
                    </ul>

                    <div className="dropdown-container text-left m-4" style={isDropdownOpen ? { display: "block" } : { display: "none" }}>
                        {/* <div>
                            <button class="ui compact right labeled icon button" onClick={handleDropdownToggle}>
                                {isDropdownOpen ? <i class="angle up icon"></i> : <i class="angle down icon"></i>}
                                Socials
                            </button>
                            {isDropdownOpen && (
                                <div className="dropdown-content mt-3">
                                    <div className="ui vertical labeled mini icon buttons">

                                        <div className="ui social-icon labeled icon buttons mb-3">
                                            <Link to={""} className=" facebook-icon fluid ui circular facebook icon btn-block button">
                                                <i className="facebook Medium icon"></i>
                                                Facebook
                                            </Link>
                                        </div>

                                        <div className="ui social-icon labeled icon buttons mb-3">
                                            <Link to={""} className="instagram-icon fluid ui button instagram">
                                                <i className="instagram Medium icon"></i>
                                                Instagram
                                            </Link>
                                        </div>
                                        <div className="ui social-icon labeled icon buttons mb-3">
                                            <Link to={""} className="linkedin-icon fluid ui mini button linkedin">
                                                <i className="linkedin Medium icon"></i>
                                                LinkedIn
                                            </Link>
                                        </div>

                                        <div className="ui social-icon labeled purple icon buttons ">
                                            <Link to={""} className="github-icon fluid ui button github ">
                                                <i className="github Medium icon"></i>
                                                Github
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div> */}
                        <div>
                            <h3 className="m-0">Socials</h3>

                            <div className="dropdown-content mt-3">
                                <div className="ui vertical labeled mini icon buttons">

                                    <div className="ui social-icon labeled icon buttons mb-3">
                                        <Link to={""} className=" facebook-icon fluid ui circular facebook icon btn-block button">
                                            <i className="facebook Medium icon"></i>
                                            Facebook
                                        </Link>
                                    </div>

                                    <div className="ui social-icon labeled icon buttons mb-3">
                                        <Link to={""} className="instagram-icon fluid ui button instagram">
                                            <i className="instagram Medium icon"></i>
                                            Instagram
                                        </Link>
                                    </div>
                                    <div className="ui social-icon labeled icon buttons mb-3">
                                        <Link to={""} className="linkedin-icon fluid ui mini button linkedin">
                                            <i className="linkedin Medium icon"></i>
                                            LinkedIn
                                        </Link>
                                    </div>

                                    <div className="ui social-icon labeled purple icon buttons ">
                                        <Link to={""} className="github-icon fluid ui button github ">
                                            <i className="github Medium icon"></i>
                                            Github
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav >

        </div >
    )
}
export default Navbar;