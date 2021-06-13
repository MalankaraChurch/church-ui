import React from "react";
import { IcFacebook } from "assets/icons";

import "./Footer.scss";

type FooterProps = {};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        Copyright &copy; 2021 by St. Immaculate Conception Malankara Catholic
        Church. All rights reserved.
      </div>
      <div className="footer__social">
        <a href="https://www.facebook.com/mscchurch.azhvarcoil">
          <IcFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
