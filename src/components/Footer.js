import React from "react";
import "../stylesheets/footer.css"
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#011e33"
            fill-opacity="1"
            d="M0,256L60,234.7C120,213,240,171,360,176C480,181,600,235,720,240C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <div className="footer-content row justify-content-center">
            <div className="col-md-6">
                <div>
                    <p>Development and Design By</p>
                    <hr />
                    <div className="footer-icons d-flex justify-content-around">
                        <FaGithub />
                        <FaLinkedin />
                        <FaTwitterSquare />
                    </div>
                    <hr />
                    <p>B.Wood Designs</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
