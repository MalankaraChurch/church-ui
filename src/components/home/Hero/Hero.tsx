import React from 'react';
import heroImage from 'assets/images/hero.jpg';
import './Hero.scss';

type HeroProps = {
};

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
    return (
      <header className="hero">
        <h1 className="hero__name">St. Immaculate Conception Malankara Catholic Church</h1>
        <h2 className="hero__place">Alwarcoil</h2>
        <img src={heroImage} alt="church" className="hero__image" />
      </header>
    );
};

export default Hero;