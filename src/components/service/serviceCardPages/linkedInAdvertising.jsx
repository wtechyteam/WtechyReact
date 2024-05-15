import React from 'react'
import InnerBanner from '../../common/InnerBanner'
import FullWidthCTASection from '../../common/FullWidthCTASection'
import ImageInfoWrap from '../../common/ImageInfoWrap'

import section1Image from '../../../assets/Images/services/SEO.webp';
import section2Image from '../../../assets/Images/services/what-we-do-service.png';

import SectionTopInfo from '../../common/SectionTopInfo';

import serviceIcon1 from '../../../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from '../../../assets/Images/homepage/MarketingStrategies.png'

const LinkedInAdvertising = () => {

  const serviceData = [
    {
      icon: serviceIcon1,
      title: 'Sharpshooter Targeting',
      description: 'Forget scattershot marketing. Our team of experts dives deep to understand your ideal client profile. Job titles, industries, company size – we use a wide range of filters to ensure your ad reaches the exact audience you need to convert.'
    },
    {
      icon: serviceIcon2,
      title: 'Content that Converts',
      description: "Not all ads are created equal. Our creative team crafts compelling ad copy and visuals that grab attention, spark interest, and most importantly, drive action. We'll showcase your brand's unique value proposition and convince viewers because they should choose you."
    },
    {
      icon: serviceIcon1,
      title: 'Campaign Optimization',
      description: "The world of online advertising is dynamic. That's why we constantly monitor your campaign performance, analyze results, and maximize your return on investment (ROI). We don't just launch a campaign and walk away – we're in it for the long haul, ensuring you get the most out of your ad spend."
    },
  ];

  return (
    <div>
      <InnerBanner
        title={"LinkedIn Advertising"}
        info={"Connect with your ideal audience on LinkedIn with Wtechy's strategic advertising campaigns. "}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Turn LinkedIn Connections into Real Business Growth with Wtechy Ads'}
        imageUrl={section1Image}
        isReverse={true}
        description={"<p>Imagine having a direct line to the key decision-makers you need to reach. Think about showcasing your brand and expertise right in front of their eyes, on a platform they use every day. That's the power of LinkedIn Advertising, and that's what Wtechy can help you achieve.</p><p>LinkedIn isn't your average social media platform. It's a professional network brimming with over a billion active users – a goldmine for B2B businesses. Here at Wtechy, we specialize in crafting laser-targeted LinkedIn ad campaigns that put your brand directly in front of the C-suite executives, industry leaders, and high-potential clients you've been chasing.</p>"}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Reach Key Decision-Makers & Showcase Expertise with Powerful LinkedIn Ads'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        title={'Why Advertise on LinkedIn?'}
        imageUrl={section2Image}
        description={'<p>An individual is in a professional frame of mind when they log onto LinkedIn, actively searching for information, connecting with others, and investigating new prospects.  Compared to the casual browsing you see on other platforms, that is a far cry.  You can reach this targeted group with LinkedIn Ads and communicate with them in a way that speaks to their needs.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Unlock opportunities with targeted LinkedIn Ads today.'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding services '>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'We go beyond simply placing ads'}
            title={'Your Secret Weapon for LinkedIn Success'}
            text={"We go beyond simply placing ads. We become your strategic partner in the world of LinkedIn marketing.Here's how we help you dominate this professional landscape"}
          />
          <div className="row mt-5 justify-content-center">
            {serviceData.map((item, index) => (
              <div className='col-lg-4 col-md-4 mb-4 ' key={index} >
                <div className="cardWrap px-4 py-4 type1 hasShadow bg-gray h-100 ">
                  <div className="cardIcon cardIcon-Type1 ">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="cardInfo">
                    <h2 className="cardTitle title-md fw-bold">{item.title}</h2>
                    <p className='cardDescription text-sm mb-0'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Unlock LinkedIn Success with Our Targeted Expertise!'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'The Benefits of a Winning LinkedIn Ads Strategy'}
        imageUrl={section1Image}
        isReverse={true}
        customClass={'bg-gray'}
        description={"<p>By partnering with Wtechy, you can expect to see a range of positive impacts on your business: </p><ol><li><b>Generate High-Quality Leads:</b><p> Attract the right kind of leads – qualified prospects who are genuinely interested in what you have to offer. This translates into a more efficient sales funnel and a higher conversion rate.</p></li><li><b>Boost Brand Awareness:</b><p>Position your company as a thought leader in your industry. LinkedIn Ads allow you to showcase your expertise and build brand recognition among the key players you want to impress.</p></li><li><b>Drive Targeted Traffic:</b><p>Send qualified website visitors directly to your landing pages, product demos, or contact forms. This targeted approach ensures you're attracting the right kind of traffic that's more likely to convert.</p></li></ol><p>Don't settle for a generic online presence.Let Wtechy craft a targeted LinkedIn advertising strategy that connects you with the right audience and fuels your business growth.</p>"}
      />
    </div>
  )
}

export default LinkedInAdvertising