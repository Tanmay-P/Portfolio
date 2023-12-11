import React from 'react';
import Footer from '../dashboard/footer';

//import resume from './CV-Tanmay_Pednekar.pdf';

import './home.css';

import Navbar from '../dashboard/navbar';
import About from '../about/about';
import Projects from '../projects/projects';
// import EducationDetails from '../about/education';
//import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className=''>

            <div className='home'>

                <Navbar />

                <div className='container p-3 part1'>
                    <div className='container heading p-3'>
                        <h1>Hello! My name is <span>Tanmay</span> and I'm a <span>Web Developer</span></h1>
                        {/* <h4 className='mt-3'>Web Developer</h4> */}
                    </div>
                    <div className='container p-3 description'>
                        <p>
                            I am a full-stack developer with a Bachelor's degree in Information Technology.
                            Currently, I'm pursuing my Master's in Computer Application.
                            Professionally, I'm employed as a Software Associate at Capgemini,
                            where I harness my skills to develop and deliver robust software solutions.
                        </p>
                        {/* <p>
                                    I am a full-stack developer with a Bachelor's degree in Information Technology 
                                    and currently pursuing my Master's in Computer Application. 
                                    I am employed at Capgemini as a Software Associate, 
                                    bringing a blend of academic excellence and professional experience to the tech industry.
                                </p> */}
                    </div>

                    <div className='container buttons mt-3' style={{ placeContent: "center" }}>
                        <div className='download-resume'>
                            <div className='ui mini vertical labeled icon buttons'>
                                <button class="ui mini button">
                                    <i class="download icon"></i>
                                    Download Resume
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{height:"10vh"}}> </div>
                
                {/* 
                <div className='container col-md-5 part2'>
                    <div className='center'>
                        <img src={pic1} alt="portfolio" />
                    </div>
                </div> */}


            </div>

            <div className="jumbotron">
                <p>
                    In this ever-evolving tech landscape, I continue to grow, adapt, and thrive, always ready to take on the next challenge.
                </p>
            </div>



            {/* <EducationDetails/> */}

            <About />

            <Projects />



            <Footer />

        </div>
    )
}

export default Home;
