import React, { useState, useEffect } from 'react';
import Logo from '../common/SiteLogo.jsx';
import headerLogo from './../../assets/Images/siteLogo.png';
import Navigation from '../navigation/Navigation.js';
import './headerStyle.scss';
import HeaderNavbar from './navbar/navbar.jsx';


const Header = ({activeTab, setActiveTab, currentPath, setCurrentPath}) => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
        <header className={`headerMain ${isScrolled ? 'sticky' : ''}`}>
            {/* <div className='header_toolbar container' >
                <Logo src={headerLogo} maxWidth="100px" />
                <Navigation />
            </div> */}
            <HeaderNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </header>
        </>
    );
};

export default Header;
