import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../Solutions/Banner';
import Software from '../Solutions/Software';
import { heroOne, heroTwo, heroThree, heroFour, heroSix } from '../Solutions/SoftwareData';
import Future from '../components/Future';
import { heroFive } from '../Data/FutureData';
import Footer from '../components/Footer';

const Solutions = () => {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Software {...heroOne} />
            <Software {...heroTwo} />
            <Software {...heroThree} />
            <Software {...heroFour} />
            <Future {...heroFive} />
            <Software {...heroSix} />
            <Footer />
        </div>
    )
}

export default Solutions 