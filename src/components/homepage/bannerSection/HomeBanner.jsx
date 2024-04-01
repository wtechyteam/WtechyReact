import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './bannerStyle.scss'; // Optional: Add custom styles
import bannerImage  from './../../../assets/Images/homepage/bannerInner1.png'; 


const BannerSlider = () => {
  const bannerSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'ease-in-out',
    autoplaySpeed: 5000 // Set the autoplay speed in milliseconds
  };

  return (
    <div className="banner-slider">
        <div className="hero-shapes">
            <div className="shape top-shape"></div>
            <div className="shape bottom-shape"></div>
        </div>
        <div className="container bannerContent">
            <div className='row align-items-center'>
                <div className='col-md-5 '>
                    <h1 className='bannerTitle'>We maximize your <span>business potential </span></h1>
                    <h2 className='bannerSubTitle'>With Innovative <span>SEO</span> Technologies</h2>
                    <p>Effective White-Hat SEO Techniques for Improving the User Experience & Online Visibility.</p>
                    <button className="dBtn btnPrimary mt-4 hasShadow">Contact Us</button>
                </div>
                <div className="col-md-7">
                  <div className='bannerImage'>
                    <Slider {...bannerSliderSettings}>
                      <div>
                        <img src={bannerImage} alt="Banner 1" />
                      </div>
                      <div>
                        <img src={bannerImage} alt="Banner 2" />
                      </div>
                      <div>
                        <img src={bannerImage} alt="Banner 3" />
                      </div> 
                  </Slider>
                  </div>
                </div>
            </div>

        </div>

    </div>
  );
};

export default BannerSlider;
