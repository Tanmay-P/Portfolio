import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './navbar.css';
import Sidebar from "./sidebar";


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
                    <Link to={'/'}>
                        <h2 className="portfolio" style={isScrolled ? {color:"#fff"} : {color:"#000"}}>PORTFOLIO</h2>
                    </Link>
                </div>

                <Sidebar/>
            </nav >

        </div >
    )
}
export default Navbar;