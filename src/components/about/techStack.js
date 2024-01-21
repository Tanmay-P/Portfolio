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
                            <p className="html" style={{border:"1px solid #ff7a21", color:"#ff7a21"}}>HTML</p>
                            <p className="css" style={{border:"1px solid #2887ed", color:"#2887ed"}}>CSS</p>
                            <p className="bs" style={{border:"1px solid #8d03a8", color:"#8d03a8"}}>Bootstrap</p>
                            <p className="js" style={{border:"1px solid #d6d01c", color:"#d6d01c"}}>JavaScript</p>
                            <p className="rjs" style={{border:"1px solid #0298e3", color:"#0298e3"}}>React JS</p>
                        </div>
                    </div>
                </div>

                <div className="backend col">
                    <div className="box">
                        <div className="head m-3">
                            <h3>BACKEND</h3>
                        </div>
                        <div className="tech">
                            <p className="java" style={{border:"1px solid #f71629", color:"#f71629"}}>Java</p>
                            <p className="sb" style={{border:"1px solid #06b81d", color:"#06b81d"}}>Spring Boot</p>
                            <p className="mic" style={{border:"1px solid #878a87", color:"#878a87"}}>Microservices</p>
                        </div>
                    </div>
                </div>

                <div className="database col">
                    <div className="box">
                        <div className="head m-3">
                            <h3>DATABASE</h3>
                        </div>
                        <div className="tech">
                            <p className="psql" style={{border:"1px solid #20507a", color:"#20507a"}}>PostgreSQL</p>
                            <p className="msql" style={{border:"1px solid #ff7a21", color:"#ff7a21"}}>MySQL</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default TechnologyStack;