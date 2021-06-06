import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.scss";

type FooterProps = {};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__left">
          <ul className="footer__nav">
            <li>
              <NavLink to="/" exact className="navbar__link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/activities" exact className="navbar__link">
                Activities
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" exact className="navbar__link">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/history" exact className="navbar__link">
                History
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" exact className="navbar__link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__right">
          <ul className="footer__social-links">
            <li>
              <a href="https://www.facebook.com/mscchurch.azhvarcoil">
                <i className="ion-social-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/mscchurch.azhvarcoil">
                <i className="ion-social-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/mscchurch.azhvarcoil">
                <i className="ion-social-googleplus"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/mscchurch.azhvarcoil">
                <i className="ion-social-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__row">
        <p className="footer__copyright">
          Copyright &copy; 2021 by St. Immaculate Conception Malankara Catholic
          Church. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
