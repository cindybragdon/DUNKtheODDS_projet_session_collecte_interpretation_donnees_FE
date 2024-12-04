import React from "react";
import "../footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
    <div>
    <div className="footer">
    <div className=" justify-content-center align-items-center">
    <div className="row">
        <div className="col">
        <h6 className="dunk"> DunkTheOdds, Inc</h6>
        <h6 className="text"> Montreal, QC</h6>
        <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faXTwitter} /> <FontAwesomeIcon icon={faSquareInstagram} />
        </div>
        <div className="col">
         <h6 className="dunk"> Company</h6>
         <h6 className="text">About DunkTheOdds</h6>
         <h6 className="text">Contact Us</h6>
         <h6 className="text">Terms of Use</h6>
         <h6 className="text">Get help</h6>
         <h6 className="text">Legality</h6>


        </div>
            <div className="col">
            <h6 className="dunk">Location</h6>
            <div className="row">
            <div className="col">
                <h6 className="text-location">CA Office</h6>
                <h6 className="text">7000 Rue Marie-Victorin</h6>
                <h6 className="text"> Montreal, Qc</h6>
                <h6 className="text"> H1G 2J7</h6>
            </div>
            <div className="col">
                <h6 className="text-location">US Office</h6>
                <h6 className="text"> 23 Wall Street</h6>
                <h6 className="text"> Manhattan, NY</h6>
                <h6 className="text"> 0039</h6>
            </div>
            </div>
        </div>
    </div>
    <div className="copy-cont">
    <div className="row"></div>
    <h6 className="copyright">  <img src="./images/quebec.png" className="img-footer"/> <img src="./images/canada.png" className="img-footer"></img> Copyright © 2024 - All rights reserved   </h6>
    </div>
    </div>
    </div>
    </div>
    )
}

export default Footer;