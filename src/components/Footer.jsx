import React from "react";

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return(

        <div>
            <div className="greenbox"></div>

            <div className="container-fluid footer footer-bg">
                <img className="protan-logo-white" src="./images/protan-white.png" alt="protan-logo-white"/>

                <div className="container-fluid ">

                    <div className="social-media">
                    <h5 style={{color: "white"}}> <strong>FOLLOW US ON:</strong> 
                    <a style={{color: "white", margin: "2%"}} href="www.google.com"><FontAwesomeIcon icon={faFacebookF} /></a> 
                    <a style={{color: "white", margin: "2%"}} href="www.google.com"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a style={{color: "white", margin: "2%"}} href="www.google.com"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a style={{color: "white", margin: "2%"}} href="www.google.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                      </h5>
                    </div>

                    <p className="footer-p first-footer-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="footer-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="footer-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>

            </div>
        </div>
    )
    
}

export default Footer;