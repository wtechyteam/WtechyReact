import InnerBanner from '../components/common/InnerBanner'
import MyForm from './contactForm';

const ContactUS = () => {
    return (
        <>
            <InnerBanner
                title={'Contact Us'}
                info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu. Mauris quis ultricies odio, at lacinia libero. '}
            />
            {/* ======New Section Start ====== */}
            <section className={`sectionPadding`}>
                <div className="container">
                    <div className={`row align-items-center`}>

                        <div className="col-md-6">
                            <h2 className='title-xl fw-bold'>Get in touch</h2>
                            <p>Let us know what challenge you are facing, and we are ready to provide a solution. Connect with us here.</p>
                            <div className="    ">
                                <h2 className='title-sm fw-bold mb-4'>Get In Touch</h2>
                                <ul className="contact_usInfo">
                                    <li>
                                        <i className="fa-solid fa-location-dot me-3 mt-1"></i>
                                        <div>
                                        <h5>Corporate Head Office</h5>
                                        <p>HSIIDC IT Park, Plot No 6, 7th Floor, Behind Gurudwara Nada Sahib, Sector 22, Panchkula, Haryana 134109</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-location-dot me-3 mt-1"></i>
                                        <div>
                                        <h5>Corporate Office Chandigarh</h5>
                                        <p>SCO 85-86, 1st Floor, near PESCO Office, Sector 34A, Sector 34, Chandigarh, 160022</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-phone me-3 mt-1"></i>
                                        <a href="tel:+91-6283857196" title="+91-6283857196">+91-6283857196</a>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-phone me-3 mt-1"></i>
                                        <a href="tel:+91-7717505073" title="+91-7717505073">+91-7717505073</a>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-envelope me-3 mt-1"></i>
                                        <a href="mailto:info@wtechy.com" title="info@wtechy.com">info@wtechy.com</a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <div className="col-md-6 mb-5 mb-md-0 text-center">
                            <MyForm />
                        </div>

                    </div>
                </div>
            </section>


        </>
    );
};

export default ContactUS;
