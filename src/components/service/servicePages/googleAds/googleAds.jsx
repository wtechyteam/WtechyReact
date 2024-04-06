import React from 'react'
import InnerBanner from '../../../common/InnerBanner';
import ImageInfoWrap from '../../../common/ImageInfoWrap';
import section1Image from './../../../../assets/Images/services/SEO.webp';
import section2Image from './../../../../assets/Images/services/what-we-do-service.png';

import serviceIcon1 from './../../../../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../../../../assets/Images/homepage/MarketingStrategies.png'

import SectionTopInfo from '../../../common/SectionTopInfo';
import FullWidthCTASection from '../../../common/FullWidthCTASection';
import FAQs from '../../../common/FAQs';

const GoogleAds = () => {
  const googleAdsData = [
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
   
  ];

  const faqData = [
    {
      question: 'Is textual content important for my website?',
      answer: 'The success of your business website is primarily dependent on textual content. Google algorithms make search results on the basis of the textual content, a small percentage over images. Still, content wins over the wallet of your customers. Invest time and effort while writing the quality content for your website, it is highly rewarding.',
    },
    {
      question: 'How will backlinks help in my ranking?',
      answer: 'Search engines like Google consider the backlinks as votes in favor of your website. It shows the credibility of your website. Google treat your website’s backlinks as your site’s ability to satisfy search wishes of browser.',
    },
    {
      question: 'I already have Google AdWords. Do I still need to invest in SEO?',
      answer: 'Yes. Google AdWords is a short time and expensive solution whereas SEO is long. Search Engine Optimization (SEO) requires more time and effort to achieve results but is permanent than ads. Once you stop paying for Google advertising, your project ends, but when you stop paying for SEO your campaign still stands. Web searches trust SEO listing more than advertisement listings.',
    },
    {
      question: 'Can social media be used for SEO?',
      answer: 'Social media campaigns are an important growing aspect of the web and can complement your SEO campaign in a great way. It helps in acquiring backlinks and mentions to your website’s pages, articles, press releases, etc. Social media help you in connecting to your potential buyers and build up a community around your products and services. ',
    },
    // Add more FAQ items as needed
  ];
  return (
    <div>

      <InnerBanner
        title={"Google Ads Management"}
        info={'Google Ads Management Helping You to Make Better Data-Driven Decisions'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'Get More Traffic with Google Ads Management'}
        imageUrl={section1Image}
        description={'<p>The digital marketing services are booming, and when you look around, you can see a number of businesses are rising rapidly. With the rise in the usage of the internet, you can see online sales increasing swiftly.</p><p>If you want to nurture your business and want it to reach and stay at the top, you need to make the best possible use of different digital marketing models like Google Ads services also known as PPC or pay-per-click campaign.</p><p>The most effective feature of Google ads is that has become a highly preferred internet advertisement method, as is it is booming in the land of advertisement vastly. The concept relies on charging the advertiser only when someone clicks on the advertisement.</p><p>When you create the ads by keeping up with Google’s guidelines, there are fair chances if your ad is being shown on the first page of Google. Though creating an effective Google ad campaign is not an easy haul, it is crucial to seek assistance from experts.</p>'}
        showContactBtn={true}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Get More Traffic with Google Ads Management'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding services '>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            // smallTitle={'Collaborate with our best SEO Company'}
            description={"<p>The digital marketing services are booming, and when you look around, you can see a number of businesses are rising rapidly. With the rise in the usage of the internet, you can see online sales increasing swiftly.</p><p>If you want to nurture your business and want it to reach and stay at the top, you need to make the best possible use of different digital marketing models like Google Ads services also known as PPC or pay-per-click campaign.</p><p>The most effective feature of Google ads is that has become a highly preferred internet advertisement method, as is it is booming in the land of advertisement vastly. The concept relies on charging the advertiser only when someone clicks on the advertisement.</p><p>When you create the ads by keeping up with Google’s guidelines, there are fair chances if your ad is being shown on the first page of Google. Though creating an effective Google ad campaign is not an easy haul, it is crucial to seek assistance from experts.</p>"}
            title={'Get More Traffic with Google Ads Management'}
            showContactBtn={true}
          />
        </div>
      </section>



      
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}

        title={'With Our AdWords Management Service'}
        imageUrl={section2Image}
        description={'<p>Although there are abundant digital marketing techniques, as Google is the platform that most of the people buzz-in, it is important for your business to seek some benefits of the Google ad campaigns.</p><p>Every business is here to generate sales and reach their potential customers, we know the importance of increasing the traffic to your websites. Therefore, PPC campaigns are the one-stop solution that can help you to conduct sales and gain profits eventually.</p><p>We have the PPC experts who are proficient with all the aspects of Google ad campaigns ranging from the selection of high volume keywords to creating effective ad campaigns and keeping track of the ads while providing the clients with key matrices.</p><p>Google is known for confidentiality and high performance, so we are prompt to make any necessary changes for the successful ad campaigns. The objective of our agency is to meet the utmost advertising goals that will eventually help you to generate leads.</p>'}
        showContactBtn={true}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Improve your sales opportunity with Pay-Per-Click Management Service'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding services '>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            title={'Google Ads Management Service- Your Growth Partner.'}
            text={'Our company combines the decisive skills that are needed to drive the best results. The only thing businessmen think of is a fast return on investment, in order to generate that you’ll need an efficient and reliable Google marketing agency, which can help you in running productive ad campaigns.Every business has different needs and requirements, so our PPC management services offer our clients with:'}
          />
          <div className="row mt-5 justify-content-center">
            {googleAdsData.map((service, index) => (
              <div className='col-lg-6 col-md-6 mb-4 ' key={index} >
                <div className="cardWrap px-4 py-4 type1 text-center card_border_radius bg-gray">
                  <div className="cardIcon icon_bg">
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
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Improve your sales opportunity with Pay-Per-Click Management Service'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'FAQ'}
            title={'FAQs About Google Ads Management'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>


    </div>
  )
}

export default GoogleAds