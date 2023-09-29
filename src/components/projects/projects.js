import React from "react";
import Footer from "../dashboard/footer";
import Navbar from "../dashboard/navbar";

import { Accordion } from 'semantic-ui-react';

import './projects.css';

function Projects() {



    return (
        <div>

            <Navbar />

            <div className="container-fluid">

                <div className="heading m-3 p-3">
                    <h1>My Projects</h1>
                </div>

                <div className="projects text-left">

                    {/* Food Delivery Application  */}
                    <div className="project food-app m-3 p-5">
                        <div className="heading mb-3">
                            <h1>Food Delivery Application</h1>
                        </div>

                        <div className="description">
                            <div className="overview">
                                <h3 className="mb-2">Overview :</h3>
                                <p>
                                    Our food delivery application is a comprehensive platform where users can browse, order, and get their favorite food delivered to their doorstep.
                                    With an intuitive UI developed using ReactJS and elegant design elements from Bootstrap and Semantic-UI, it offers a seamless user experience.
                                    The robust backend, developed in Java using the Spring Boot framework, ensures efficient data handling, security, and reliability.
                                </p>
                            </div>

                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button ui button mini" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Click for more
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="accordion-body">

                                            <div className="frontend">
                                                <h4>Frontend :</h4>
                                                <div className="techstack">
                                                    <h5>Technology Stack</h5>
                                                    <ul>
                                                        <li>Technology Stack: ReactJS.</li>
                                                        <li>CSS Libraries: Bootstrap and Semantic-UI.</li>
                                                    </ul>
                                                </div>
                                                <div className="features">
                                                    <h5>Features</h5>
                                                    <ol>
                                                        <li>Home Screen: Displays popular restaurants and trending dishes, enabling users to explore top choices quickly.</li>
                                                        <li>Search Functionality: Allows users to search for specific restaurants, cuisines, or dishes.</li>
                                                        <li>Restaurant Profiles: Detailed pages for each restaurant showcasing their menu, ratings, reviews, and an option to place an order.</li>
                                                        <li>Shopping Cart: Users can add dishes to their cart, view the total price, and proceed to checkout.</li>
                                                        <li>User Profiles: Users can track their orders, view order history, and manage their personal information.</li>
                                                        {/* <li> Responsive Design: Thanks to Bootstrap and Semantic-UI, the application is fully responsive, providing an optimal viewing experience on both mobile and desktop devices.</li> */}
                                                    </ol>
                                                </div>
                                            </div>

                                            <div className="backend">
                                                <h4>Backend :</h4>
                                                <div className="techstack">
                                                    <h5>Technology Stack</h5>
                                                    <ul>
                                                        <li>Technology Stack: Java with the Spring Boot framework.</li>
                                                    </ul>
                                                </div>
                                                <div className="features">
                                                    <h5>Features</h5>
                                                    <ol>
                                                        <li>User Authentication & Authorization: Implemented using Spring Security, ensuring that user data is secure and users only have access to appropriate features.</li>
                                                        <li>Database Interactions: Using Spring Data JPA to manage database operations, making data retrieval and storage efficient.</li>
                                                        <li>RESTful APIs: Developed a series of APIs to handle requests from the frontend, including fetching restaurant data, placing orders, and user account management.</li>
                                                        <li>Error Handling: Comprehensive error handling mechanisms to ensure smooth user experiences even when things go wrong.</li>
                                                        {/* <li>Payment Gateway Integration: Secure integration with popular payment gateways to process transactions.</li> */}
                                                    </ol>
                                                </div>
                                            </div>

                                            <div className="more-info">
                                                <h4>Performance and Scalability :</h4>
                                                <p>
                                                    Spring Boot, combined with a well-architected frontend in React, ensures that the application is performant.
                                                    It's designed to scale, accommodating increasing numbers of users and orders as the application grows in popularity.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </div>

            <Footer />

        </div>
    )
}
export default Projects;