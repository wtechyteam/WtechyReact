import React from 'react'
import InnerBanner from './common/InnerBanner'
import serviceIcon1 from './../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../assets/Images/homepage/MarketingStrategies.png'
import SectionTopInfo from './common/SectionTopInfo'
import { Link } from 'react-router-dom'
import { scrollTop } from './common/utils'
import { FiChevronsRight } from 'react-icons/fi'

const Services = () => {

    const serviceData = [
        {
            icon: serviceIcon1,
            title: 'search engine optimization',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.',
            link:'/search-engine-optimization'
        },
        {
            icon: serviceIcon2,
            title: 'social media optimization',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.',
            link:'/social-media-optimization'
        },
        {
            icon: serviceIcon1,
            title: 'google ads management',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.',
            link:'/google-ads-management'
        },
        {
            icon: serviceIcon2,
            title: 'content marketing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.',
            link:'/content-marketing'
        },
        {
            icon: serviceIcon1,
            title: 'Amazon Store Management',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.',
            link:'/amazon-store-management'
        },
        {
            icon: serviceIcon2,
            title: 'Ebay Store Management',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.',
            link:'/ebay-store-management'
        },
        {
            icon: serviceIcon1,
            title: 'Shopify Store Management',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.',
            link:'/shopify-store-management'
        },
        {
            icon: serviceIcon2,
            title: 'Custom E-Commerce Store Management',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.',
            link:'/custom-e-commerce-store-management-2'
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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.',
            link:''
        },
    
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
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu.'}
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
                                        <p className='cardDescription text-sm mb-4'>{service.description}</p>
                                        <Link className='dBtn btnText' to={`/service${service.link}`} onClick={scrollTop}>Read More<FiChevronsRight /></Link>
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