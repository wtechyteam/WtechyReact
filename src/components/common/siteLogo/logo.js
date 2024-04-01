import React from 'react';

const Logo = ({ src, maxWidth }) => {
  return (
    <a className="siteLogo" href="/"> 
        <img src={src} alt="Wtechy" className="siteLogo"  style={{ maxWidth: maxWidth }} />
    </a>
  );

};


export default Logo;