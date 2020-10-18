import React from 'react';
import Hero from './Hero/Hero';
import Timing from './Timing/Timing';
import Shrine from './Shrine/Shrine';
import YouTube from './YouTube/YouTube';
import Location from './Location/Location';
import Footer from './Footer/Footer';
import './Home.scss';

type HomeProps = {
};

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    return (
      <>
        <Hero />
        <Timing />
        <Shrine />
        <YouTube />
        <Location />
        <Footer />
      </>
    );
};

export default Home;