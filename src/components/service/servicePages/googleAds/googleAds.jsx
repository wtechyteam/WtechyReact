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
      question: 'How does Google Ads work?',
      answer: 'When people search for a particular keyword online, if the keyword is listed on your ad, then Google displays your ad for the search query. Google Ads help you to display your ads in front of your potential prospects.',
    },
    {
      question: 'How to set up Google AdWords Campaign?',
      answer: '<p>Setting up a Google Ad campaign is quite a tricky task, as it involves thorough keyword research, ad group creation, landing page, and ad extension addition. It’s not that you just clicked a few buttons and you are all set to run, you need to follow the guidelines and work accordingly. It involves:</p><ul><li>Understanding the objectives of your ad campaign</li><li>Conducting high search volume keyword research</li><li>Creating the precise ad campaign</li><li>Creating different ad extensions so that your ads will look more compelling</li><li>Creating a different set of ad copies for different ads</li><li>Trivial modifications according to the need that will allow conversion tracking</li></ul>',
    },
    {
      question: 'Why does a Google ad campaign need to be managed?',
      answer: '<p>The Google ad campaigns need to be managed regularly in order to make them work better and allow you to expand on them. this is done because Google updates new policies frequently, so it becomes vital to update the ads based on the new policies so that you can generate the best results. Managing of Google ads involves :</p><ul><li>Creating new ad groups and keywords</li><li>Pausing keywords or ads that are not working</li><li>Altering ads and keywords that are not performing well</li><li>Making suggestions about new ad campaigns or groups</li><li>Modifying the ad budget based on Google’s suggestion</li></ul><p> Making sure the ads aren’t being displayed for irrelevant keywords.</p>',
    },
    {
      question: 'What types of businesses do you manage Google ads for?',
      answer: 'We work with customers from everywhere around the world, whether it’s a small business, big business, or an individual. The mainstream of the Google ad campaigns we manage is for conversion, traffic, and lead generation while offering a number of advantages to the clients that will eventually assist in the growth of their business.',
    },
    {
      question: 'How much does Google Ads cost?',
      answer: 'The cost of Google ads entirely depends on your budget. Moreover, it can run on any budget. As an advertiser, you are only charged when someone clicks on your ad or is visiting your website through your ads. In addition to this, you can stop your ads anytime you want.',
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
            smallTitle={'Get More Traffic'}
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
            smallTitle={'Google Ads Management'}
            isFullWidth={true}
            title={'Google Ads Management Service- Your Growth Partner.'}
            text={'Our company combines the decisive skills that are needed to drive the best results. The only thing businessmen think of is a fast return on investment, in order to generate that you’ll need an efficient and reliable Google marketing agency, which can help you in running productive ad campaigns.Every business has different needs and requirements, so our PPC management services offer our clients with:'}
          />
          <div className="row mx-0 mt-5 justify-content-center">
            {googleAdsData.map((service, index) => (
              <div className='col-lg-6 col-md-6 px-0 ' key={index} >
                <div className="cardWrap cardType1 h-100 ">
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
            smallTitle={'FAQs'}
            title={'FAQs About Google Ads Management'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
    </div>
  )
}

export default GoogleAds