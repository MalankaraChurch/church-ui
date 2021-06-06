import React from "react";
import timingImage from "assets/images/timing.jpg";
import "./Timing.scss";

type TimingProps = {};

const Timing: React.FC<TimingProps> = (props: TimingProps) => {
  return (
    <section className="timing">
      {/* TODO: Different color for section */}
      <h2 className="timing__heading">Timing</h2>
      <div className="timing__body">
        <div className="timing__content">
          <h3 className="timing__subheading">Holy Mass</h3>
          <div className="timing__details">
            <div>All Sunday (7:00 AM - 8:30 AM)</div>
            <div>All Saturday (12:30 PM - 1:30 PM)</div>
          </div>
          <h3 className="timing__subheading">Rosary and Prayers</h3>
          <div className="timing__details">
            <div className="timing__item">
              <div className="timing__name">Rosary</div>
              <div className="timing__time">
                Monday to Friday (6:00 PM - 6:45 PM)
              </div>
            </div>
            <div className="timing__item">
              <div className="timing__name">Navanal Special Prayer</div>
              <div className="timing__time">Saturday (12:00 PM -12:30 PM)</div>
            </div>
            <div className="timing__item">
              <div className="timing__name">
                Morning Prayer (Before Holy Mass)
              </div>
              <div className="timing__time">Sunday (6:30 AM -7:00 AM)</div>
            </div>
          </div>
        </div>
        <div className="timing__image">
          <img src={timingImage} alt="Timing" />
        </div>
      </div>
    </section>
  );
};

export default Timing;
