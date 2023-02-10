import React from 'react';
import Banner from '../components/Banner';
import CoreServices from '../components/CoreServices';
import Counter from '../components/Counter';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Future from '../components/Future';
import NavBar from '../components/NavBar';
import { heroOne, heroTwo, heroThree, heroFour, heroFive } from '../Data/FutureData'

function Home() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Counter />
            <Future {...heroOne} />
            <Future {...heroTwo} />
            <Future {...heroThree} />
            <CoreServices />
            <Features />
            <Future {...heroFour} /> 
            <Future {...heroFive} />
            <Footer />
        </div>
    )
}

export default Home