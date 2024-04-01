import ctaImage from '../../../assets/Images/homepage/cosnsult-image.png'


const HomeSection4 = () => {
    return (
        <section className='sectionPadding '>
            <div className="container">
                <div className="ctaWrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center">
                            <img className="ctaImage" src={ctaImage} alt='Get In Touch'></img>
                        </div>
                        <div className="col-lg-6">
                            <h4 className='section-title-sm '>Get In Touch</h4>
                            <h2 className='title-xl '>Contact Us to Increase your Brand Visibility</h2>
                            <p className='sectionInfo '>We help you to see world differently , discover oppurtunities you may never have imagined.</p>
                            <button className="dBtn btnPrimary mt-4 hasShadow">Contact Us</button>
                        </div>


                    </div>
                </div>

            </div>
        </section>

    );
};

export default HomeSection4;