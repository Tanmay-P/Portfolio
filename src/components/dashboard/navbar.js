import React from "react";
import { Link } from "react-router-dom";

import './navbar.css';

function Navbar() {

    return (
        <div className="p-3">
            <nav className="navbar navbar-expand-lg navbar-light p-3">

                <div className="navbarHeading mt-1">
                    <h2 className=" portfolio">PORTFOLIO</h2>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav" style={{ justifyContent: 'right' }}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link mx-2" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2" to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2" to={'/projects'}>Projects</Link>
                        </li>
                        <li className="nav-item contact">
                            <Link className="nav-link mx-2" to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
export default Navbar;