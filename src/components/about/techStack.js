import React from "react";

import './techStack.css';

function TechnologyStack() {

    return (
        <div>

            <div className="heading p-3 m-3">
                <h1>Skills</h1>
            </div>

            <div className="m-3 p-3 row text-left">
                <div className="frontend col">
                    <div className="box">
                        <div className="head m-3">
                            <h3>FRONTEND</h3>
                        </div>

                        <div className="tech">
                            <p className="">HTML</p>
                            <p className="">CSS</p>
                            <p className="">Bootstrap</p>
                            <p className="">JavaScript</p>
                            <p className="">React JS</p>
                        </div>
                    </div>
                </div>

                <div className="backend col">
                    <div className="box">
                        <div className="head m-3">
                            <h3>BACKEND</h3>
                        </div>
                        <div className="tech">
                            <p className="">Java</p>
                            <p className="">Spring Boot</p>
                            <p className="">Microservices</p>
                        </div>
                    </div>
                </div>

                <div className="database col">
                    <div className="box">
                        <div className="head m-3">
                            <h3>DATABASE</h3>
                        </div>
                        <div className="tech">
                            <p className="">PostgreSQL</p>
                            <p className="">MySQL</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default TechnologyStack;