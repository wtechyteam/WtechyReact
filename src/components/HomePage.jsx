import React from 'react';
import './../assets/styles/homepageStyle.scss'
import BannerSlider from './homepage/bannerSection/HomeBanner';
import HomeSection2 from './homepage/homeSection2/HomeSection2';
import HomeSection3 from './homepage/homeSection3/HomeSection3';
import HomeSection4 from './homepage/homeSection4/HomeSection4';
import HomeSection5 from './homepage/homeSection5/HomeSection5';
import HomeSection6 from './homepage/homeSection6/HomeSection6';
import HomeSection7 from './homepage/homeSection7/HomeSection7';

const HomePage = () => {
    return (
        <div className='homePage'>
            <BannerSlider />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
            <HomeSection5 />
            <HomeSection6 />
            <HomeSection7 />

        </div>
    );
};

export default HomePage;
