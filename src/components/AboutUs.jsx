import InnerBanner from './common/InnerBanner'
import ImageInfoWrap from './common/ImageInfoWrap'
import aboutSectionImage from './../assets/Images/aboutPage/about-us.jpg'
import serviceIcon1 from './../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../assets/Images/homepage/MarketingStrategies.png'



const serviceData = [
    {
        icon: serviceIcon1,
        title: 'Search Engine Optimization (SEO)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon2,
        title: 'Social Media Optimization (SMO)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon1,
        title: 'Amazon, Ebay, Etsy Listings , EBC, PPC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon2,
        title: 'Online Reputation Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon1,
        title: 'Adwords PPC Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon2,
        title: 'Google Product Listing Ads (for E-commerce websites)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon1,
        title: 'Google Merchant Center',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon2,
        title: 'Facebook Paid Advertising',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon1,
        title: 'Twitter Advertising',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon2,
        title: 'LinkedIn Advertising',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon1,
        title: 'YouTube Advertising',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon2,
        title: 'WordPress Web Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    {
        icon: serviceIcon2,
        title: 'Shopify Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },
    

    
    // Add more service sections as needed
];


const AboutUs = () => {


    return (
    <>
        <InnerBanner 
            title={'About Us'} 
            info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'}
        />
        <ImageInfoWrap 
            title={'About Us'}
            imageUrl={aboutSectionImage}
            description={'<p>WTechy is a growing Digital marketing company and having a team of highly innovative professionals providing you with get instant results to rise in the highly competitive market within your niche.</p><p>We will help you to increase your visibility in all the major search engines by improving keyword rankings and boosting your real time website traffic with lots of back links which are always done through White Hat techniques.</p>'}
        />
        <section className="sectionPadding bg-gray">
            <div className="container">
                <div className="sectionTopInfo text-center" data-aos="fade-up" data-aos-duration="1500">
                    <h4 className='section-title-sm '>Our Services</h4>
                    <h2 className='title-xl fw-bold'>Services We Offer</h2>
                    <p className='sectionInfo '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.</p>
                </div>
                <div className="listWrapper d-flex flex-wrap mt-5 justify-content-center">
                    {serviceData.map((service, index) => (
                        <div className='col-lg-3 col-md-4' key={index} >
                            <div className="cardWrap">
                                <div className="cardIcon">
                                    <img src={service.icon} alt={service.title} />
                                </div>
                                <h2 className="cardTitle title-md fw-bold">{service.title}</h2>
                                <p className='cardDescription mb-0'>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
        
    );
};

export default AboutUs;
