import React from 'react';


const InnerBanner = ({title}) => {
  return (
      <section className='innerBanner'>
        <div className="container">
            <h1>{title}</h1>
        </div>
      </section>

  );
};

export default InnerBanner;