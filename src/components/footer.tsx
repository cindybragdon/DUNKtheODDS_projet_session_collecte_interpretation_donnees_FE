import React from "react";
import "../footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <div className="justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <h6 className="dunk">DunkTheOdds, Inc</h6>
            <h6 className="text">Montréal, QC</h6>
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faXTwitter} className="icon" />
            <FontAwesomeIcon icon={faSquareInstagram} className="icon" />
          </div>
          <div className="col">
            <h6 className="dunk">Entreprise</h6>
            <h6 className="text">
            <Link to="/About">À propos de DunkTheOdds</Link>
            </h6>
            <h6 className="text">
            <Link to="/Contact">Nous contacter</Link>
            </h6>
            <h6 className="text">
            <Link to="/ToS">Conditions d'utilisation</Link>
            </h6>
            <h6 className="text">
              <a href="https://www.ncpgambling.org/help-treatment/about-the-national-problem-gambling-helpline/#:~:text=1%2D800%2DGAMBLER%20is%20the,addiction%2C%20or%20their%20loved%20ones.">
                Obtenir de l'aide
              </a>
            </h6>

          </div>
          <div className="col location">
            <h6 className="dunk">Emplacement</h6>
            <div className="row">
              <div className="col">
                <h6 className="text-location">Bureau CA</h6>
                <h6 className="text">7000 Rue Marie-Victorin</h6>
                <h6 className="text">Montréal, QC</h6>
                <h6 className="text">H1G 2J7</h6>
              </div>
              <div className="col">
                <h6 className="text-location">Bureau US</h6>
                <h6 className="text">23 Wall Street</h6>
                <h6 className="text">Manhattan, NY</h6>
                <h6 className="text">0039</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-cont">
          <div className="row"></div>
          <h6 className="copyright">
            <img src="./images/quebec.png" className="img-footer" alt="Québec" />
            <img src="./images/canada.png" className="img-footer" alt="Canada" />
            Copyright © 2024 - Tous droits réservés
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
