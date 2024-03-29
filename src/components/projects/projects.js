import React from "react";

import './projects.css';

import quick_eat from '../images/projects/quick_eat.png';

function Projects() {


    return (
        <div>

            <div className="container-fluid">

                <div className="heading m-3 p-3">
                    <h1>Projects</h1>
                </div>

                <div className="projects text-left row p-3">

                    <div className="col-md-4">
                        <div className="project">
                            <div className="image">
                                <img src={quick_eat} alt="food-app" />
                            </div>
                            <div className="description p-3">
                                <h1>Quick Eat</h1>
                                <h4>Food Delivery Application</h4>
                                <p>React Js, Java (Spring Boot), PostgreSql</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Projects;