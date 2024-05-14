import { Link } from 'react-router-dom';
import { scrollTop } from './../../common/utils'
import ctaImage from '../../../assets/Images/homepage/man.png'

const HomeSection4 = () => {
    return (
        <section className='sectionPadding '>
            <div className="container">
                <div className="ctaWrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                            <img className="ctaImage" src={ctaImage} alt='Get In Touch'></img>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">
                            <h4 className='section-title-sm '>Get In Touch</h4>
                            <h2 className='title-xl fw-bold'>Contact Us to Increase your Brand Visibility </h2>
                            <p className='sectionInfo '>We help you to see the world differently, discover opportunities you may never have imagined.</p>
                            <Link className="dBtn btnPrimary mt-4 hasShadow" title='Contact us' onClick={scrollTop} to='/contact'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection4;