
import aboutSectionImage from './../../../assets/Images/homepage/aboutImage.png';


const HomeSection2 = () => {
  return (
    <section className="sectionPadding homepage-slider">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h4 className='section-title-sm'>Amplify your Sales in 90 Days</h4>
                    <h2 className='title-xl'>Digital Marketing Company Helping Businesses to Augment their Online Presence</h2>
                    <p>We leave no leaf unturned when it comes to website optimization, enabling it to rank higher in search engines such as Google. We conduct in-depth competitor research in order to produce effective results within the committed time frame and budget. Each SEO activity is targeted to ensure that your website ranks high in organic searches.</p>

                </div>
                <div className="col-lg-6 text-center">
                    <img src={aboutSectionImage} alt="Amplify your Sales in 90 Days"></img>
                </div>
            </div>
        </div>
    </section>

  );
};

export default HomeSection2;