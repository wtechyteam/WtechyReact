import React from 'react'
import InnerBanner from './common/InnerBanner'
import SectionTopInfo from './common/SectionTopInfo'
import { Link } from 'react-router-dom'
import { scrollTop } from './common/utils'
import { FiChevronsRight } from 'react-icons/fi'
import { serviceData } from './data/serviceCardData'

const Services = () => {

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