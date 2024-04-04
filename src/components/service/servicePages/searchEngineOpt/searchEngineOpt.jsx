import React, { useState } from 'react';
import InnerBanner from '../../../common/InnerBanner';
import ImageInfoWrap from '../../../common/ImageInfoWrap';
import section1Image from './../../../../assets/Images/services/SEO.webp';
import section2Image from './../../../../assets/Images/services/what-we-do-service.png';

import serviceIcon1 from './../../../../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../../../../assets/Images/homepage/MarketingStrategies.png'

import { useLocation } from 'react-router-dom';
import SectionTopInfo from '../../../common/SectionTopInfo';


const SearchEngineOpt = () => {


  const serviceData = [
    {
      icon: serviceIcon1,
      title: 'Website Audit',
      description: 'We conduct some tests to examine your business website performance prior to search engine optimization and generate a detailed report. We then analyze them and accordingly develop positive strategies to improve the performance of your business.'
    },
    {
      icon: serviceIcon2,
      title: 'Keyword Research & Reporting',
      description: 'We conduct target-oriented keyword research and choose the best ones that will help your site to move up in the ranking.'
    },
    {
      icon: serviceIcon1,
      title: 'SEO- friendly Content Creation',
      description: 'We create original content for your business in a way that it can reach the target audience. Our SEO experts will develop and execute SEO-driven content that supports searches and drive organic traffic to your site resulting in growing your potential customers.'
    },
    {
      icon: serviceIcon2,
      title: 'On-Page Optimization',
      description: 'Our expert SEO team will conduct the strategic measures within your company website in order to enhance its ranking in the SERPs. We help you match your site content to the best of the keywords.'
    },
    {
      icon: serviceIcon1,
      title: 'Boost in Page Speed',
      description: 'Website optimization is among Google’s top ten factors in positioning their search results. If your webpage loads quickly, there are fewer chances of customers to leave leading to a ranking of your site in SERPs.'
    },
    {
      icon: serviceIcon2,
      title: 'Images Optimization',
      description: 'We optimize images of your website to improve page loading speed which is a major Google ranking factor. This includes choosing the site relevant images, reducing the size, good quality, adding captions, etc.'
    },
    {
      icon: serviceIcon1,
      title: 'Link Building',
      description: 'We use White Hat strategies for link building to improve the online existence of your business website. We use connections with authentic and genuine channels to increase traffic on your website.'
    },
    {
      icon: serviceIcon2,
      title: 'FLocal SEO',
      description: 'Google has realized that most people look for products and services near them. Our Agency is an expert in Local SEO services and helps your business rank on top in local listings resulting in more leads to your company.'
    },
    {
      icon: serviceIcon1,
      title: 'Guest Blog Posting',
      description: 'With guest blog posting we share your business’ expertise on websites of other companies so that you can establish yourself as a supreme figure within your industry. This will not only increase your brand credibility but also helps you build contacts with your peers.'
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

  return (
    <div>
      <InnerBanner
        title={"Search Engine Optimization"}
        info={'Help Potential Customers Find Your Business and Skyrocket Sales with Our Best SEO Services'}
      />
      <ImageInfoWrap
        title={'Dominate the Search Engine with Tailored SEO Approach'}
        imageUrl={section1Image}
        description={'<p>Today, more and more people are turning towards the Internet for making their purchasing decisions. So, it is more important than ever to make an influential digital presence online.</p><p>Search engine optimization is the best way for your business to impact and get traffic on your website organically. Whether it is a fresh start-up or well-established, small or large scale, an effective SEO strategy is essential to growing your revenue.</p><p>You may be providing the best quality products and services, but they all go in vain if potential customers cannot reach you. To help people find you when they are searching online for products and services that you offer, an effective SEO strategy is critical.</p><p>The higher your business appears in the search result, the more likely it is that your potential customers will find and visit your website instead of your competitor. Our agency provides the best professional SEO services to help you unlock your potential prospects.</p><p class="text-20 fw-bold"><i>Want to give your business a boost with SEO?</i></p>'}
        showContactBtn={true}
      />
      <ImageInfoWrap
        customClass={'bg-gray'}
        isReverse={true}
        title={'Improve Your Google Rankings with Professional SEO Services'}
        imageUrl={section2Image}
        description={'<p>With millions of searches being made every minute, it is complicated to appear on the first search engines like Google, Bing, and Yahoo. People neither have time nor patience to go further to the second page of the search results.</p><p>SSo, if your business does not appear on the first page, you are as good as invisible. The sites which appear amongst the first few results are more likely to get traffic.</p><p>Our SEO Agency can make your business appear more in front of scrolling eyes. A practical formulaic approach is kept by our SEO experts who have been working for quite some time in this industry to make your business stand head and shoulders above the crowd outweighing your competitors.</p><p>Approach our SEO Consultant today to know your Google ranking.</p>'}
        showContactBtn={true}
      />
      <section className='sectionPadding '>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'Collaborate with our best SEO Company'}
            title={'Collaborate with the Best SEO Company & Take Your Business to Another Level'}
            text={'With thousands of websites being created every day, you can make yours stand out online with an effective Search Engine Optimization strategy. You can take your business to a new height and generate more revenue than ever with the help of our SEO professionals. Being an experienced and well-reputed SEO Agency, we understand the changing algorithm of Google and design methodologies accordingly. Our SEO services are up to date, and unparalleled that can improve your business website rankings increase the traffic and revenue over a short period. Our advanced SEO services include:'}
          />
          <div className="row mt-5 justify-content-center">
            {serviceData.map((service, index) => (
              <div className='col-lg-4 col-md-4 mb-4 ' key={index} >
                <div className="cardWrap px-4 py-4 type1 bg-gray">
                  <div className="cardIcon">
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
    </div>
  )
}

export default SearchEngineOpt