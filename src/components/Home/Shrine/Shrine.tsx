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
          <p>
            The shrine of Lady of Immaculate Conception in Alwarcoil stands as
            the local pilgrimage for many people around the vicinity. The holy
            place belongs to the Lady of Immaculate Conception Malankara
            Catholic Church. The Church is one among the churches of Malankara
            Catholic Diocese of Marthandam.
          </p>

          <h3>History of the shrine</h3>

          <p>
            The foundation stone was laid down by Rev.Fr. Premkumar on 13th June
            2013. Then the construction work started and progressed under the
            guidance of the parish priest and with the enthusiasm of the
            parishioners. Within a year, when Rev.Fr. Jenan Jerald was the
            parish priest, on 23rd February 2014 the Shrine was fully
            constructed and blessed by then bishop Vincent Mar Paulos.
          </p>

          <h3>Faith and theology</h3>

          <p>
            Holy Mary has been given various names in the Catholic Church. The
            names are given in relation to her nature and her vocation. The name
            of our Mother in our shrine is Lady of Immaculate Conception.
            Immaculate Conception is one of the Marian dogmas in the Catholic
            Church, believed by Christians from ancient times. But the dogma was
            officially declared as a dogma in the 9th century by Pope Pius IX.
            The dogma asserts that Mary, the mother of Jesus, was preserved free
            from the effects of original sin from the first instant of her
            conception. Our Holy Mother was greatly blessed, highly holy and
            fully grace-filled from the very moment of her conception in her
            mother’s womb. She was free from all stains of sin of Adam. It is
            all not because of her merit but because she was chosen by God for
            the fulfillment of salvific will of God. In order for Son of God to
            take birth in her womb, she had to be holy and stainless. So, being
            chosen by god for the divine purpose, she became the source of
            blessing and holiness for the all the Christians. After Jesus
            Christ, it is Mary who is the most elevated of the human being on
            the earth. It shows the how great it to be born as woman. Mary
            became the icon of femininity. In India and particularly in Tamil
            Nadu, our ancestors worshipped may female deities like Kaali, Amman
            etc. This is a beautiful tradition where even women are elevated to
            the status of divinity. This shows the respect and honor toward the
            femininity. Which, in turn, indicates high maturity of the
            civilization because patriarchy will overlook anything with female
            nature. The Catholic tradition also values highly this custom of
            honoring the femininity, and that is done by venerating the Mother
            of Son of God. She really deserves this status as she carried the
            divinity not only by the grace of Cod but also by her staunch
            obedience.
          </p>

          <h3>Greatness of the shrine</h3>

          <p>
            The consecrated and the divine place which is dedicated to the
            Immaculate Conception of our Mother Mary gives the ambiance of
            divine presence and prayer. This is the place where heaven and earth
            meet, because of the unfailing faith and in continuous prayers of
            the devotees. People praying at this holy site experience solace and
            peace of mind in their heart and they get their wishes fulfilled by
            the intercession of the Blessed Mother.
          </p>

          <h3>Feast</h3>

          <p>
            The day of Feast of Immaculate Conception falls on 8th December.
            This day is celebrated very vehemently and colorfully in our Church
            and shrine with incredible fervor and deep piety for the feminine
            Protector. People from different area, throng to the place for this
            much-awaited day of special prayer and blessings. This day unites
            all the people in the larger area irrespective of religion and
            social status. They all unite in praying, working and preparing.
            This is a day of thanksgiving to our lady for the blessing we obtain
            through her intercession. We offer the novena of prayers honoring
            Mary’s Immaculate Conception and seek her protection and comfort.
            The day of festivity and prayers will get over with mind filled with
            divine grace in mind and delicious food in the belly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shrine;
