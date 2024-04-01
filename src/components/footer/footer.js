import './footerStyle.scss';
import Logo from '../common/siteLogo/logo.js';
import footerLogo from './../../assets/Images/wtechy-logo-white.webp';
import { Link } from 'react-router-dom';
import SocialLinks from './../common/socialLinks/SocialLinks.jsx'

const Footer = () => {


    const topLinks = [
        {
            title: 'Home',
            link: '/'  // Correctly set the home page route
        },
        {
            title: 'About Us',
            link: '/about-agency'
        },
        {
            title: 'Portfolio',
            link: '/portfolio'
        },
        {
            title: 'Careers',
            link: '/careers'
        },
        {
            title: 'Contact',
            link: '/contact'
        },
        // Add more service sections as needed
    ];


    const serviceLinks = [
        {
            title: 'Search Engine Optimization',
            link: '/search-engine-optimization'  // Correctly set the home page route
        },
        {
            title: 'Social Media Optimization',
            link: '/social-media-optimization'
        },
        {
            title: 'Google Ads Management',
            link: '/google-ads-management'
        },
        {
            title: 'Content Marketing',
            link: '/content-marketing'
        },
        // Add more service sections as needed
    ];



    return (
        <footer className='siteFooter' >
            <div className="footerTopWrap">
                <div className="container">
                    <div className="row footerRow">
                        <div className="col-lg-4 col-md-6 pr-5">
                            <Logo src={footerLogo} maxWidth="100px" />
                            <p className='mt-4 mb-0'>The businesses influence digital channels to stay ahead from their competition and connect with their prospects.</p>
                            <SocialLinks />
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h2>Top Links</h2>
                            <ul className="footerList linkList">
                                {topLinks.map((list, index) => (
                                    <li className='serviceWrap' key={index}>
                                        <Link to={list.link}>{list.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h2>Services</h2>
                            <ul className="footerList linkList">
                                {serviceLinks.map((list, index) => (
                                    <li className='serviceWrap' key={index}>
                                        <Link to={list.link}>{list.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h2>Get In Touch</h2>
                            <ul className="footerList contactInfo">
                                <li>
                                    <i className="fa-solid fa-phone"></i>
                                    <a href="tel:+91-6283857196" title="+91-6283857196">+91-6283857196</a>
                                </li>
                                <li>
                                    <i className="fa-solid fa-phone"></i>
                                    <a href="tel:+91-7717505073" title="+91-7717505073">+91-7717505073</a>
                                </li>
                                <li>
                                    <i className="fa-solid fa-envelope"></i>
                                    <a href="mailto:info@wtechy.com" title="info@wtechy.com">info@wtechy.com</a>
                                </li>
                                <li>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p>HSIIDC IT Park, Plot No 6, 7th Floor, Behind Gurudwara Nada Sahib, Sector 22, Panchkula, Haryana 134109</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerCopyright">
                <p className='mb-0'>Copyright © 2024 Wtechy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
