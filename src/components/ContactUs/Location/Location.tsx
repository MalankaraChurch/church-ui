import React from "react";
import "./Location.scss";

type LocationProps = {};

const Location: React.FC<LocationProps> = (props: LocationProps) => {
  return (
    <section className="location">
      {/* TODO: Different color for section */}
      <div className="location__body">
        <div className="location__content">
          <p>
            <span className="location__label">Address:</span>
            <br />
            Annai Nagar, North Alwarcoil, Kannattu Vilai Post, Kanyakumari
            District, Tamil Nadu, India. PIN: 629802
          </p>
          <p>
            <span className="location__label">Phone: </span>+91 9942809220
            <br />
            <span className="location__label">Email: </span>
            malankarachurch.alwarcoil@gmail.com
          </p>
        </div>
        <div className="location__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.817547800969!2d77.31980122450105!3d8.221095747623043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f9a79d80b775%3A0x7adf34b84c8779d7!2sMalankara%20Catholic%20Church!5e0!3m2!1sen!2sin!4v1613918610326!5m2!1sen!2sin"
            width="550"
            height="300"
            title="Church location map"
            className="location__map-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
