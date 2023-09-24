import React from 'react';
import EducationDetails from './education';
import Footer from './footer';

import pic1 from './images/pic1.png';

import resume from './files/CV-Tanmay_Pednekar.pdf';

import './home.css';

import Navbar from './navbar';

function Home() {

    return (
        <div className=''>

            <Navbar />

            <div className='row home p-3' style={{ margin: "0" }}>

                <div className='container col-md-7 text-left'>
                    <div className='container p-3 part1'>
                        <div className='container heading p-3'>
                            <h1>Hello, <br></br> I'm Tanmay</h1>
                            <h4 className='mt-3'>Web Developer</h4>
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
                        <div className='container buttons'>
                            {/* <div className=''>
                <Link to={''} className='btn btn-light m-3'>Contact</Link>
            </div> */}
                            <div className='download-resume'>
                                <a href={resume} download className='ui vertical labeled icon buttons'>
                                    <button class="ui mini secondary button">
                                        <i class="download icon"></i>
                                        Download Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container col-md-5 part2'>
                    <div className='center'>
                        <img src={pic1} alt="portfolio" />
                    </div>
                </div>


            </div>

            <EducationDetails />

            <Footer />

        </div>
    )
}

export default Home;