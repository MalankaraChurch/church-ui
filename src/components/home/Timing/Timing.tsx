import React from "react";
import timingImage from "assets/images/timing.jpg";
import "./Timing.scss";

type TimingProps = {};

const Timing: React.FC<TimingProps> = (props: TimingProps) => {
  return (
    <section className="timing">
      {/* TODO: Add section heading */}
      <div className="timing__content">
        5.40 am : Morning Prayer in the Main Shrine<br/>
        6.00 am : Mass in Tamil in the Main Shrine<br/>
        7.00 am : Mass in Tamil in the Lower Basilica<br/>
        8.00 am : Mass in Telugu in the Upper Basilica<br/>
        9.00 am : Mass in Malayalam in the Lower Basilica<br/>
      </div>
      <div className="timing__image">
        <img src={timingImage} alt="Timing" />
      </div>
    </section>
  );
};

export default Timing;
