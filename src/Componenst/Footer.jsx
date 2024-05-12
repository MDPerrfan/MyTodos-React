import React from "react";
import { AiFillGithub, AiOutlineGoogle, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer(props) {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 footer-copywright">
            <h3>Designed and Developed by <span className="coral">Parves</span></h3>
          </div>
          <div className="col-md-4 footer-copywright">
            <h3>Copyright © {year}</h3>
          </div>
          <div className="col-md-4 footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/MDPerrfan"
                  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/mdparves.erfan.3/"
                  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammed-parves-6635212aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto: mdperrfan@gmail.com"
                  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGoogle />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
