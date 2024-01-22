import React from "react";

import './projects.css';

import quick_eat from '../images/projects/quick_eat.png';

function Projects() {


    return (
        <div>

            {/* <Navbar /> */}

            <div className="container-fluid">

                <div className="heading m-3 p-3">
                    <h1>My Projects</h1>
                </div>

                <div className="projects text-left row p-3">

                    <div className="project col-md-4">
                        <div className="image">
                           <img src={quick_eat} alt="food-app"/>
                        </div>
                        <div className="description p-3">
                            <h1>Quick Eat</h1>
                            <h4>Food Delivery Application</h4>
                            <p>React Js, Java (Spring Boot), PostgreSql</p>
                        </div>
                    </div>

                </div>


            </div>

            {/* <Footer /> */}

        </div>
    )
}
export default Projects;