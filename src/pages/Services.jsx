import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../Services/Banner';
import CoreServices from '../Services/CoreServices';
import Partner from '../Services/Partner';
import Footer from '../components/Footer';
import Model from '../Services/Model';
import { heroOne, heroTwo, heroThree, heroFour, heroSix } from '../Services/ModelData'
import Journey from '../Services/Journey';
import Future from '../components/Future';
import { heroFive } from '../Data/FutureData';

const Services = () => {
    return (
        <div className = "App">
            <NavBar />
            <Banner />
            <Model {...heroOne} />
            <Model {...heroTwo} />
            <Model {...heroThree} />
            <CoreServices />
            <Partner />
            <Journey />
            <Model {...heroFour} />
            <Future {...heroFive} />
            <Model {...heroSix} />
            <Footer />
        </div>
    )
}

export default Services