import React from "react";
import Location from "./Location/Location";
import "./ContactUs.scss";

type ContactUsProps = {};

const ContactUs: React.FC<ContactUsProps> = (props: ContactUsProps) => {
  return (
    <div className="contact-us">
      <h1 className="contact-us__heading">Contact Us</h1>
      <Location />
    </div>
  );
};

export default ContactUs;
