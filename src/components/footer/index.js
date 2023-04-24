import React from 'react';
import {MdDoubleArrow} from "react-icons/md";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {ImInstagram} from "react-icons/im";
import {FiGithub} from "react-icons/fi";

const Footer = () => {
    return (
        <>

            <footer id="footer">
                <div className="container">
                    <div className="footer--general">

                        <div className="footer--general__btn">
                            <a href="#"><button><MdDoubleArrow/></button></a>
                        </div>

                        <div className="footer--general__icon">

                            <div>
                                <a href="https://www.linkedin.com/in/bakyt-azimjanov-9616b6244/"><button><FaLinkedinIn/></button></a>
                                <a href="https://www.facebook.com/profile.php?id=100082032607936"><button><FaFacebookF/></button></a>
                                <a href="https://www.instagram.com/bakyt_azimjanov/"><button><ImInstagram/></button></a>
                                <a href="https://github.com/bakytdev"><button><FiGithub/></button></a>
                            </div>

                            <h4>
                                AZIMJANOV BAKYT <span>©2022</span>
                            </h4>

                        </div>

                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;