import React from 'react';


const InnerBanner = ({title,info}) => {
  return (
      <section className='innerBanner'>
        <div className="container">
          <div className="bannerInfo">
            <h1 className='title-xxl fw-bold'>{title}</h1>
            <p>{info}</p>
          </div>
        </div>
      </section>

  );
};

export default InnerBanner;