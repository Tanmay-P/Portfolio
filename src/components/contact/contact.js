import { TextField } from "@mui/material";
import React, {  } from "react";
import Navbar from "../dashboard/navbar";

import './contact.css';

import image from "../images/pic1.png";
import Footer from "../dashboard/footer";

function Contact() {

    // const [text, setText] = useState('');

    // const [check, setCheck] = useState(true);

    // const submit = () => {

    //     if (!text) {
    //         setCheck(false);
    //     }
    //     else {
    //         setCheck(true);
    //         alert(text);
    //     }
    // }

    return (
        <div>

            <div className="container p-3">

                {/* <div className="contact"> */}

                <div className="row contact">

                    <div className="contact-form-details col-md-8">
                        <div className="heading ">
                            <h1>Get in Touch</h1>
                        </div>
                        <div className="">
                            <div className="contact-form">

                                <div className="m-3">
                                    <TextField fullWidth
                                        id="standard-basic"
                                        label="Full Name"
                                        // variant="standard"
                                       // onChange={(event) => setText(event.target.value)}

                                        // error={!check ? true : false}
                                        // helperText={!check ? "Enter Valid Name" : ""}
                                    />
                                </div>

                                <div className="m-3">
                                    <TextField fullWidth
                                        id="standard-basic"
                                        label="Email"
                                    />
                                </div>

                                <div className="m-3">
                                    <TextField fullWidth
                                        id="standard-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                    />
                                </div>

                                <div className="m-3">
                                    <button className="ui secondary btn-block button">Send</button>
                                </div>
                            </div>

                            {/* <div className="contact-details text-left">
                                <div className="container row">
                                    <div className="name p-3 col-6">
                                        <h1>Name :</h1>
                                        <p>Tanmay Pednekar</p>
                                    </div>

                                    <div className="email p-3 col-6">
                                        <h1>Email :</h1>
                                        <p>tanmaypednekar21@gmail</p>
                                    </div>

                                    <div className="address p-3 col-6">
                                        <h1>Based in :</h1>
                                        <p>Mumbai, Maharashtra.</p>
                                    </div>

                                    <div className="social p-3 col-6">
                                        <h1>Social :</h1>

                                        <div className="social-icons">
                                            <Link to={""} className="facebook-icon">
                                                <i className="facebook Medium icon"></i>
                                            </Link>
                                            <Link to={""} className="instagram-icon">
                                                <i className="instagram Medium icon"></i>
                                            </Link>
                                            <Link to={""} className="linkedin-icon">
                                                <i className="linkedin Medium icon"></i>
                                            </Link>
                                            <Link to={""} className="github-icon">
                                                <i className="github Medium icon"></i>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>

                    <div className="contact-image col-md-4">
                        <img src={image} alt="contact" style={{ width: "100%" }} />
                    </div>

                </div>

                {/* </div> */}

            </div>

        </div>
    )
}
export default Contact;