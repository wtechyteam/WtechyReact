import React, { useState, useEffect } from 'react';
import Logo from '../common/siteLogo/logo.js';
import headerLogo from './../../assets/Images/siteLogo.png';
import Navigation from '../navigation/Navigation.js';
import './headerStyle.scss';

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
        {/* <div className='headerTop'>
            <p> Time is money, & we believe in optimizing both!</p>
        </div> */}
        <header className={`headerMain ${isScrolled ? 'sticky' : ''}`}>
            <div className='header_toolbar'>
                <Logo src={headerLogo} maxWidth="100px" />
                <Navigation />
            </div>
        </header>
        </>
    );
};

export default Header;
