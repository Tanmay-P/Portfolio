import React, { useState } from "react";
import { Link } from "react-router-dom";

import './sidebar.css';

function Sidebar() {

    const open = {
        transition: "transform .5s all ease;",
        transform: "translateX(200px)"
    }

    const [openSidebar, setOpenSidebar] = useState(false);


    return (
        <div>

            <div className={`sidebar ${openSidebar ? 'open' : ''}`}>
                <button className="close-button ui icon button" onClick={() => setOpenSidebar(!openSidebar)}>
                    <i className={openSidebar ? "icon large close" : "icon large bars"}></i>
                </button>

                <div>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <i className="icon home"></i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"}>
                                <i className="icon world"></i>
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/education"}>
                                <i class="graduation cap icon"></i>
                                <span>Education</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/skills"}>
                                <i className="icon cogs"></i>
                                <span>Skills</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/projects"}>
                                <i className="icon desktop"></i>
                                <span>Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>
                                <i className="icon phone"></i>
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="contact">

                </div>
            </div>

        </div>
    )
}

export default Sidebar;