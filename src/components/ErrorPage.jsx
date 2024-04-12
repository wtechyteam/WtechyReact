import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from './../assets/Images/error2.svg';

const ErrorPage = () => {



    return (
        <>
            {/* <InnerBanner 
                title={'404 - Page Not Found'}
                info={"We can't seems to find a page you are looking for"}
            /> */}
            <section className='errorPage'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="title-xxl fw-bold">Page Not Found</h1>
                            <p className='text-20'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                            <Link className='dBtn mt-4 btnSecondary mx-auto mb-5' to={'/'}>Go To Homepage</Link>
                        </div>
                        <div className='col-lg-6 mx-auto text-center'>
                            <img src={ErrorImage} alt="Page Not Found" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default ErrorPage;