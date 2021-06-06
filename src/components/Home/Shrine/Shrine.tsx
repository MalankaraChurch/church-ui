import React from "react";
import shrineImage from "assets/images/shrine.jpg";
import "./Shrine.scss";

type ShrineProps = {};

const Shrine: React.FC<ShrineProps> = (props: ShrineProps) => {
  return (
    <section className="shrine">
      <h2 className="shrine__heading">Shrine</h2>
      <div className="shrine__body">
        <div className="shrine__image">
          <img src={shrineImage} alt="Shrine" />
        </div>
        <div className="shrine__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto earum
          accusamus at magnam doloremque consequuntur, reiciendis sunt sit! Et
          incidunt, hic eveniet blanditiis unde porro iure sit. Consequuntur,
          quia repellat.
        </div>
      </div>
    </section>
  );
};

export default Shrine;
