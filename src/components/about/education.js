import React from "react";

import './education.css';

function EducationDetails() {

    return (
        <div className="p-3">
            <div className='container-fluid education '>

                <div className="heading p-3 m-3">
                    <h1>Education</h1>
                </div>

                <div className="container-fluid details mb-5">

                    <div className="row text-left">

                        <div className="col-md d-flex detail-card">
                            <div className='logo'>
                                <div className="ui large secondary cap-icon">
                                    <i className="graduation icon"></i>
                                </div>
                            </div>

                            <div className='detail'>
                                <h5 className="degree">
                                    Bachelor's of Science in Information Technology
                                    <br></br>
                                    (B.Sc.I.T.)
                                </h5>
                                <p className="college">
                                    Kirti M. Doongursee College of Arts, Science & Commerce.
                                </p>
                                <p className="location">
                                    Dadar, Mumbai.
                                </p>
                            </div>
                        </div>

                        <div className="col-md d-flex detail-card">
                            <div className='logo'>
                                <div className="ui large secondary cap-icon">
                                    <i className="graduation icon"></i>
                                </div>
                            </div>

                            <div className='detail'>
                                <h5 className="degree">
                                    Master's in Computer Application
                                    <br></br>
                                    (M.C.A.)
                                </h5>
                                <p className="college">
                                    Navinchandra Mehta Institute of Technology & Development
                                </p>
                                <p className="location">
                                    Dadar, Mumbai.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default EducationDetails;