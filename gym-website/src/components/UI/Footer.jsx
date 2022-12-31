import React from "react";
import "../../styles/Footer.css"
import logo from '../../assets/img/dumble.png';

const Footer = () => {

    const year = new Date().getFullYear
    return <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__box">
                    <div className="logo">
                        <div className="logo__img">
                            <img src={ logo } alt="" />
                        </div>
                        <h2>FitBody</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro alias.</p>
                    </div>

                    <div className="footer__box">
                        <h4 className="footer__title">Company</h4>
                        <ul className="footer__links">
                            <li><a href="#">Our Program</a></li>
                            <li><a href="#">Our Plan</a></li>
                            <li><a href="#">Become a Member</a></li>
                        </ul>
                    </div>

                    <div className="footer__box">
                        <h4 className="footer__title">Quick Links</h4>
                        <ul className="footer__links">
                            <li>
                                <a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>

                    <div className="footer__box">
                        <h4 className="footer__title">Quick Links</h4>
                        <ul className="footer__links">
                            <li>
                                <a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="copyright">Copyright</p>
        </div>
    </footer>
};

export default Footer;