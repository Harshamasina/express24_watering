import React from 'react';
import HomeSlider from '../components/HomeSlider';
import HeroCards from '../components/HeroCards';
import HomeContent from '../components/HomeContent';
import HomeRibbon from '../components/HomeRibbon';
import Testimonials from '../components/Testimonials';
import LocationSlider from '../components/LocationSlider';

const Home = () => {
    return (
        <div>
            <HomeSlider />
            <LocationSlider />
            {/* <HeroCards /> */}
            <HomeContent />
            <HomeRibbon />
            <Testimonials />
        </div>
    )
};

export default Home;