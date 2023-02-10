import React from 'react';
import Banner from '../About/Banner';
import BannerClient from '../About/BannerClient';
import Clients from '../About/Clients';
import Counter from '../About/Counter';
import Story from '../About/Story';
import Vision from '../About/Vision';
import { heroOne, heroTwo, heroThree, heroFour } from '../About/VisionData';
import Footer from '../components/Footer';
import Future from '../components/Future';
import { heroFive } from '../Data/FutureData';
import NavBar from '../components/NavBar';

const About = () => {
    
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Counter />
            <Vision {...heroOne} />
            <Vision {...heroTwo} />
            <Story />
            <BannerClient />
            <Clients />
            <Vision {...heroThree} />
            <Future {...heroFive} />
            <Vision {...heroFour} />
            <Footer />
        </div>
    )
}

export default About