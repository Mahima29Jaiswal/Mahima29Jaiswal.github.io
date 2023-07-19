import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
      
        <div className="socials">
          <ul id="social-icons">
            <li id="contact-github">
              <a target="_blank" rel="noreferrer" href="https://github.com/Mahima29Jaiswal">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id="contact-linkedin">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mahima-jaiswal-320266141/">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            
            {/* <li id="contact-instagram">
              <a target="_blank" rel="noreferrer" href="https://">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>

            <li id="contact-twitter">
              <a target="_blank" rel="noreferrer" href="">
              <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </li> */}

          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/Mahima29Jaiswal">
            Designed and Created by Mahima Jaiswal{" "}
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
          <a href="mailto:mahiworknov29@gmail.com" id="contact-email">mahiworknov29@gmail.com<hr /></a>
      </div>
    </footer>
  );
}
