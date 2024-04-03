import React from 'react';


const ImageInfoWrap = ({ title, description, imageUrl }) => {
    return (
        <section className='sectionPadding'>
            <div className="container">
                
                <div className="row align-items-center">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <img src={imageUrl} title={title} />
                    </div>
                    <div className="col-md-6">
                        <h2 className='title-xl fw-bold'>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: description }}></div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default ImageInfoWrap;