import React from 'react';
import Footer from '../dashboard/footer';

//import resume from './CV-Tanmay_Pednekar.pdf';

import './home.css';

import Navbar from '../dashboard/navbar';
import About from '../about/about';
import Projects from '../projects/projects';

import developer_img from '../images/developer_image.png';

function Home() {

    const handleDownload = () => {
        // Path to the PDF file in the public folder
        const pdfPath = '../../../public/CV-Tanmay_Pednekar.pdf';

        // Create an anchor element
        const anchor = document.createElement('a');
        anchor.href = pdfPath;
        anchor.download = 'CV-Tanmay_Pednekar.pdf';

        // Simulate a click to trigger the download
        anchor.click();

    };

    return (
        <div className=''>

            <div className='home'>

                <Navbar />


                <div className='container p-3 part1'>

                    <div className='row mt-5 p-4 text-left'>
                        <div className='col-sm-6 info-text'>
                            <h1>Hello, <br></br>
                                I'm <span>Tanmay</span> <br></br>
                                Web Developer
                            </h1>
                            <div className='ui mini vertical labeled icon buttons' style={{width:"fit-content"}}>
                                <button class="ui mini button" onClick={handleDownload} style={{background:"blueviolet", color:"#fff"}}>
                                    <i class="download icon"></i>
                                    Download Resume
                                </button>
                            </div>
                        </div>

                        <div className='col-sm-6 info-img'>
                            <div className="circle">
                                <img src={developer_img} alt="developer_img" />
                            </div>
                        </div>

                    </div>

                    {/* <div className='container p-3 description'>
                        <p>
                            I am a full-stack developer with a Bachelor's degree in Information Technology.
                            Currently, I'm pursuing my Master's in Computer Application.
                            Professionally, I'm employed as a Software Associate at Capgemini,
                            where I harness my skills to develop and deliver robust software solutions.
                        </p>
                        <p>
                            I am a full-stack developer with a Bachelor's degree in Information Technology
                            and currently pursuing my Master's in Computer Application.
                            I am employed at Capgemini as a Software Associate,
                            bringing a blend of academic excellence and professional experience to the tech industry.
                        </p>
                    </div> */}

                </div>

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
