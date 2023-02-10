import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Banner from '../Connect/Banner';
import Future from '../components/Future';
import { heroFive } from '../Data/FutureData';
import Info from '../Connect/Info';
import { heroOne, heroTwo, heroThree } from '../Connect/InfoData';

const Connect = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Info {...heroOne} />
            <Info {...heroTwo} />
            <Info {...heroThree} />
            <Future {...heroFive} />
            <Footer />
        </div>
    )
}

export default Connect