import React from "react";
import "./footer.css";
import fb from "../assets/images/icon-facebook.svg";
import insta from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="linkIco">
        <img src={fb} alt="Facebook icone" />
        <img src={insta} alt="Instagram icone" />
        <img src={pinterest} alt="Pinterest icone" />
      </div>
    </div>
  );
};

export default Footer;
