import React from "react";
import "../../styles/Footer.css"
import logo from '../../assets/img/dumble.png';

const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__box">
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="" />
                        </div>
                        <h2>FitBody</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dicta.</p>
                </div>

                <div className="footer__box">
                    <h4 className="footer__title">Company</h4>

                    <ul className="footer__links">
                        <li><a href="#">Our program</a></li>
                        <li><a href="#">Our plan</a></li>
                        <li><a href="#">Become a member</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <h4 className="footer__title">Quick Links</h4>

                    <ul className="footer__links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <h4 className="footer__title">Plan</h4>

                    <ul className="footer__links">
                        <li><a href="#">Regular</a></li>
                        <li><a href="#">Premium</a></li>
                        <li><a href="#">Standard</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
};

export default Footer;