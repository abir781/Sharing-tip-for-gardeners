import React from 'react';
import Slider from '../Components/Slider';
import Quotes from '../Components/Quotes';
import Faq from '../Components/Faq';
import Fgardeners from '../Components/Fgardeners';
import Trendingtips from '../Components/Trendingtips';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Fgardeners></Fgardeners>
            <Trendingtips></Trendingtips>
            <Quotes></Quotes>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;