import './../assets/styles/aboutPageStyle.scss'
import InnerBanner from './common/InnerBanner'
import SectionTopInfo from './common/SectionTopInfo'
import ImageInfoWrap from './common/ImageInfoWrap'
import aboutSectionImage from './../assets/Images/aboutPage/about-us.jpg'
import serviceIcon1 from './../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../assets/Images/homepage/MarketingStrategies.png'

import teamImage1 from './../assets/Images/homepage/cosnsult-image.png'

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
    {
        icon: serviceIcon2,
        title: 'Shopify Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'
    },

];

const teamsData = [
    {
        icon: teamImage1,
        name: 'Team Member 1',
        designation: 'Director ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada.'
    },
    {
        icon: teamImage1,
        name: 'Team Member 2',
        designation: 'Team Leader ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada.'
    },
    {
        icon: teamImage1,
        name: 'Team Member 3',
        designation: 'Manager ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada.'
    },
    {
        icon: teamImage1,
        name: 'Team Member 4 ',
        designation: 'Product Designer ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada.'
    },

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
                    <SectionTopInfo
                        smallTitle={'Our Services'}
                        title={'Services We Offer'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'}
                    />
                    <div className="row mt-5 justify-content-center">
                        {serviceData.map((service, index) => (
                            <div className='col-lg-4 col-md-4 mb-4 ' key={index} >
                                <div className="cardWrap px-4 py-4 type1 bg-white hasShadow ">
                                    <div className="cardIcon cardIcon-Type1">
                                        <img src={service.icon} alt={service.title} />
                                    </div>
                                    <div className="cardInfo">
                                        <h2 className="cardTitle title-md fw-bold">{service.title}</h2>
                                        <p className='cardDescription text-sm mb-0'>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="sectionPadding teamSection">
                <div className="container">
                    <SectionTopInfo
                        isCenter={true}
                        smallTitle={'Our Team'}
                        title={'Meet the We Offer'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'}
                    />
                    <div className="row mt-5 teamList justify-content-center">
                        {teamsData.map((item, index) => (
                            <div className='col-lg-3 col-sm-6 mb-5 ' key={index} >
                                <div className="cardWrap bg-white">
                                    <div className="cardImage teamImage">
                                        <img src={item.icon} alt={item.title} />
                                    </div>
                                    <div className="cardInfo mt-3">
                                        <h2 className="cardTitle title-md fw-bold mb-1">{item.name}</h2>
                                        <p className='color-gray title-sm mb-0'>{item.designation}</p>
                                    </div>
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
