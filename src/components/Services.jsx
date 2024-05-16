import React from 'react'
import InnerBanner from './common/InnerBanner'

import serviceIcon1 from './../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../assets/Images/homepage/MarketingStrategies.png'
import serviceIcon3 from './../assets/Images/services/Shopify-Development-icon-cropped.svg'
// import serviceIcon4 from './../assets/Images/services/WordPress-Web-Design-icon.svg'
import serviceIcon5 from './../assets/Images/services/YouTube-Advertising-icon-cropped.svg'

import SectionTopInfo from './common/SectionTopInfo'
import { Link } from 'react-router-dom'
import { scrollTop } from './common/utils'
import { FiChevronsRight } from 'react-icons/fi'

const Services = () => {

    const serviceData = [
        {
            "icon":serviceIcon1,
            "title": "Search Engine Optimization",
            "description": "Dominate search engines and boost your business with our professional SEO services. Improve Google rankings, drive organic traffic, and stand out from the competition.",
            "slug": "search-engine-optimization"
        },
        {
            "icon":serviceIcon2,
            "title": "Social Media Optimization",
            "description": "Empower Your Business with Social Media Optimization Services. Boost your online visibility and engage with your target audience effectively. Stand out from the competition with our expertly crafted strategies.",
            "slug": "social-media-optimization"
        },
        {
            "icon":serviceIcon1,
            "title": "Google Ads Management",
            "description": "Maximize your online presence with Google Ads Management service. Drive traffic, increase sales, and dominate your market with our expert PPC campaigns.",
            "slug": "google-ads-management"

        },
        {
            "icon":serviceIcon2,
            "title": "Content Marketing",
            "description": "Build brand trust with our quality content. Engage your audience effectively. Reach new markets, rank higher, and grow your business. Commit to content with us for increased sales.",
            "slug": "content-marketing"
        },
        {
            "icon":serviceIcon1,
            "title": "Amazon Store Management",
            "description": "Looking to thrive in the competitive online market? We offer smooth product listing, storefront setup, optimization, and expert marketing services to boost your business on Amazon. Collaborate with us to reach new heights!",
            "slug": "amazon-store-management"
        },
        {
            "icon":serviceIcon2,
            "title": "Ebay Store Management",
            "description": "Discover easy ways for eBay store management solutions with us. We simplify processes, optimize listings, and boost profitability, ensuring your business stands out in the competitive online market. Let us handle market research, pricing, listing creation, and more.",
            "slug": "ebay-store-management"
        },
        {
            "icon":serviceIcon1,
            "title": "Shopify Store Management",
            "description": "Step into the world of seamless e-commerce with Wtechy! Improve your online store on Shopify with our expert management services. Stay ahead in the competitive market with tailored solutions. Let's transform your dream store into reality!",
            "slug": "shopify-store-management"
        },
        {
            "icon":serviceIcon2,
            "title": "Custom E-Commerce Store Management",
            "description": "We specialize in E-commerce store management, offering expert services to increase your presence and boost sales. From product data entry to inventory management, we are there for you. Let's revolutionize your online marketing together!",
            "slug": "custom-e-commerce-store-management"
        },
        {
            "icon":serviceIcon1,
            "title": "Twitter Advertising",
            "description": "Struggling with tech problems? Our website is your one-stop shop for all things tech, with easy-to-follow guides and troubleshooting tips. Get your tech life on track in no time!",
            "slug": "twitter-advertising"
        },
        {
            "icon":serviceIcon2,
            "title": "LinkedIn Advertising",
            "description": "Is your business stuck in the tech stone age? We modernize businesses with advanced website design, development, and marketing solutions. We break down complex topics into easy-to-understand articles and tutorials.",
            "slug": "linkedin-advertising"
        },
        {
            "icon":serviceIcon5,
            "title": "YouTube Advertising",
            "description": "Looking to skyrocket your business with YouTube ads? We're experts at creating YouTube ad campaigns that reach the perfect audience and get you results. We'll craft video ads that turn viewers into customers, fast. With Wtechy, your business will be on fire in no time.",
            "slug": "youtube-advertising"
        },
        {
            "icon":serviceIcon1,
            "title": "WordPress Development",
            "description": "Transform your business with Wtechy's dynamic B2B WordPress website development services. Crafted to propel your online presence, our innovative solutions assure an eloquent, user-friendly, and customized site that engages customers and drives revenue growth.",
            "slug": "wordpress-development"
        },
        {
            "icon":serviceIcon3,
            "title": "Shopify Development",
            "description": "Transform your online business with our Shopify solutions. Boost sales with customizable templates, easy product management, and SEO-friendly features. Our experienced team offers website development, design, optimization, and ongoing support.",
            "slug": "shopify-development"
        }
    ];
    
    return (
        <div>
            <InnerBanner 
                title={"Services"}
                info={'Explore our comprehensive range of services tailored to meet your digital needs. From SEO strategies to web development solutions, we deliver results that drive growth and success for your business.'}
            />
            <section className="sectionPadding">
                <div className="container">
                    <SectionTopInfo
                        smallTitle={'Our Services'}
                        title={'Services We Offer'}
                        text={"Boost your online presence with Wtechy! Control search engines, engage on social media, and maximize ad campaigns. From store management to content marketing, let's grow your business with expert tech solutions."}
                    />
                    <div className="row mt-5 justify-content-center">
                        {serviceData.map((service, index) => (
                            <div className='col-lg-4 col-md-6 mb-4 ' key={index} >
                                <div className="cardWrap px-4 py-4 type1 bg-white hasShadow h-100">
                                    <div className="cardIcon cardIcon-Type1">
                                        <img src={service.icon} alt={service.title} />
                                    </div>
                                    <div className="cardInfo">
                                        <h2 className="cardTitle title-md fw-bold text-capitalize">{service.title}</h2>
                                        <p className='cardDescription text-sm mb-4'>{service.description}</p>
                                        <Link className='dBtn btnText' to={`/service/${service.slug}`} onClick={scrollTop}>Read More<FiChevronsRight /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services