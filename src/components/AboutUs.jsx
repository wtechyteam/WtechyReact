import './../assets/styles/aboutPageStyle.scss'
import InnerBanner from './common/InnerBanner'
import SectionTopInfo from './common/SectionTopInfo'
// import ImageInfoWrap from './common/ImageInfoWrap'
// import aboutSectionImage from './../assets/Images/aboutPage/about-us.jpg'
import serviceIcon1 from './../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../assets/Images/homepage/MarketingStrategies.png'

import teamImage1 from './../assets/Images/homepage/cosnsult-image.png'
// import Slider from 'react-slick'

const serviceData = [
    {
        icon: serviceIcon1,
        title: 'Search Engine Optimization (SEO)',
        description: 'Dominate search results with targeted strategies that skyrocket your website traffic and attract qualified leads. '
    },
    {
        icon: serviceIcon2,
        title: 'Social Media Optimization (SMO)',
        description: 'Ignite your brand awareness with engaging social media campaigns that drive targeted traffic and build a loyal community.'
    },
    {
        icon: serviceIcon1,
        title: 'Amazon, Ebay, Etsy Listings , EBC, PPC',
        description: 'Boost your product sales across major marketplaces! We optimize listings, manage ads (EBC & PPC), and get you seen by millions of potential customers. '
    },
    {
        icon: serviceIcon2,
        title: 'Online Reputation Management',
        description: 'Protect and enhance your online image. We monitor reviews, address negative feedback, and build a positive brand reputation.'
    },
    {
        icon: serviceIcon1,
        title: 'Adwords PPC Management',
        description: 'Maximize your ROI with targeted Google Ads campaigns. We attract qualified leads and generate more sales for your business.'
    },
    {
        icon: serviceIcon2,
        title: 'Google Product Listing Ads (for E-commerce websites)',
        description: 'Showcase your products directly in Google search results. We create captivating ads that drive qualified traffic and conversions.'
    },
    {
        icon: serviceIcon1,
        title: 'Google Merchant Center',
        description: 'Effortlessly manage your product data feed for Google Shopping campaigns. We ensure accurate information and optimal ad performance.'
    },
    {
        icon: serviceIcon2,
        title: 'Facebook Paid Advertising',
        description: 'Reach your ideal audience with laser-focused Facebook Ads. We design targeted campaigns to build brand awareness and generate leads. '
    },
    {
        icon: serviceIcon1,
        title: 'Twitter Advertising',
        description: 'Spark dynamic conversations and brand engagement with targeted Twitter Ads. Connect with influencers and reach new customers.'
    },
    {
        icon: serviceIcon2,
        title: 'LinkedIn Advertising',
        description: 'Target B2B professionals with high-impact LinkedIn Ads. We generate leads and build valuable business connections.'
    },
    {
        icon: serviceIcon1,
        title: 'YouTube Advertising',
        description: 'Capture attention with engaging video ads on YouTube. We connect you with your audience and drive targeted website traffic.'
    },
    {
        icon: serviceIcon2,
        title: 'WordPress Web Design',
        description: 'Create a beautiful and user-friendly website with our custom WordPress development expertise. '
    },
    {
        icon: serviceIcon2,
        title: 'Shopify Development',
        description: 'Build a powerful and scalable online store with our Shopify development services. We customize your store to perfectly fit your needs.'
    },
    {
        icon: serviceIcon2,
        title: 'Custom Website (React JS, Javascript, front-end)',
        description: 'Bring your unique vision to life with our custom website development using cutting-edge React JS and Javascript technologies. '
    },

];

const teamsData = [
    {
        icon: teamImage1,
        video_url: "https://www.youtube.com/embed/5e75jeDjvwo?si=59aoUSpsoYP9ppLr",
        name: 'Randeep Singh',
        designation: 'Director ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada.'
    },
    {
        icon: teamImage1,
        video_url: "https://www.youtube.com/embed/U5_pohZ8NHc?si=MypjhjYIiBYVSGss",
        name: 'Seema Singh',
        designation: 'Managing Director',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada.'
    },
    {
        icon: teamImage1,
        video_url: "https://www.youtube.com/embed/L047UlpW2SU?si=91bFPoVV6HJDDVBL",
        name: 'Suhail Samwal',
        designation: 'Project Manager',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada.'
    },
    {
        icon: teamImage1,
        video_url: "https://www.youtube.com/embed/xW4DGaFw94A?si=3D4A2Irz4KoQwbay",
        name: 'Yuvraj Singh',
        designation: 'Digital marketing Expert',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada.'
    },

];



const AboutUs = () => {
    // const bannerSliderSettings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     arrows: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     cssEase: 'ease-in-out',
    //     autoplaySpeed: 5000,
    //     responsive: [
    //         {
    //             breakpoint: 991.98,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //     ]
    // };



    return (
        <>
            <InnerBanner
                title={'About Us'}
                info={'WTechy helps businesses thrive online with expert Digital Marketing Strategies and Web Design Solutions. We turn possibilities into reality for your Brand.'}
            />
            <section className={`sectionPadding`}>
                <div className="container">
                    <div className={`row align-items-center`}>
                        <div className="col-md-6 mb-5 mb-md-0 text-center">
                            <iframe className='hasShadow border_radius' width="100%" height="358" src="https://www.youtube.com/embed/3j70plHbICg?si=-Ih-vlNUBU2hc7Ip" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6">
                            <h2 className='title-xl fw-bold'>About Us</h2>
                            <div>
                                <p>At WTechy, we're your one-stop shop for comprehensive Digital Marketing solutions. Our passionate team of specialists leverages cutting-edge strategies to elevate your Brand and achieve industry dominance.</p><p>We prioritize long-term success by adhering to ethical white-hat SEO practices. This ensures your website remains search engine friendly while building trust with your audience. </p><p>Partner with WTechy and dominate your online presence. Let's turn possibilities into reality for your brand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectionPadding bg-gray">
                <div className="container">
                    <SectionTopInfo
                        smallTitle={'Our Services'}
                        title={'Services We Offer'}
                        text={'WTechy offers a variety of digital marketing services to help businesses grow online, including SEO, social media marketing, and website development.'}
                    />
                    <div className="row mt-5 justify-content-center">
                        {serviceData.map((service, index) => (
                            <div className='col-lg-4 col-md-4 mb-4 ' key={index} >
                                <div className="cardWrap px-4 py-4 type1 bg-white hasShadow h-100">
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
                        text={'For this Section, we have images as well as Intro videos of Team members. Please include images and videos with each member. '}
                    />
                    <div className="row mt-5 teamList justify-content-center">
                    {/* <Slider className='testimonialSlider' {...bannerSliderSettings}> */}
                        {teamsData.map((item, index) => (
                            <div className='col-lg-4 col-sm-6 mb-5 ' key={index} >
                                <div className="cardWrap bg-white">
                                    {/* <div className="cardImage teamImage"> */}
                                    {/* <img src={item.icon} alt={item.title} /> */}
                                    <iframe className=' hasShadow' width="100%" height="233" src={item.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    {/* </div> */}
                                    <div className="cardInfo mt-3">
                                        <h2 className="cardTitle title-md fw-bold mb-1">{item.name}</h2>
                                        <p className='color-gray title-sm mb-0'>{item.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                         {/* </Slider> */}
                    </div>
                </div>
            </section>
        </>

    );
};

export default AboutUs;
