import React from 'react';
import heroImage from 'assets/images/hero.jpg';
import './Hero.scss';

type HeroProps = {
};

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
    return (
      <header className="hero">
        <h1 className="hero__name">St. Immaculate Conception Malankara Catholic Church, Alwarcoil</h1>
        <img src={heroImage} alt="church" className="hero__image" />
      </header>
    );
};

export default Hero;