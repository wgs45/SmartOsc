import React from 'react';
import Article from '../Article/Article';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Future from '../components/Future';
import { heroFive } from '../Data/FutureData';
import Banner from '../Article/Banner';
import Software from '../Solutions/Software';
import { heroFour , heroSix } from '../Solutions/SoftwareData';

function Home() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Article />
            <Software {...heroFour} />
            <Future {...heroFive} />
            <Software {...heroSix} />
            <Footer />
        </div>
    )
}

export default Home