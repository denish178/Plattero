import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Plattero logo" />
          <p>© 2022 Plattero</p>

          <div className="foot-social-icons">
            <a href="#"><img src={assets.facebook_icon} alt="Facebook" /></a>
            <a href="#"><img src={assets.twitter_icon} alt="Twitter" /></a>
            <a href="#"><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><a href="tel:+918401275343">+91-8401275343</a></li>
            <li><a href="mailto:murawaladenish@gmail.com">murawaladenish@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        Copyright 2026 &copy; Plattero.com - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
