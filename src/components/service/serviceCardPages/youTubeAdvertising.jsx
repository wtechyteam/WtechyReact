import React from 'react'
import InnerBanner from '../../common/InnerBanner'

import section1Image from '../../../assets/Images/services/youtube-1.png';
import section1Image2 from '../../../assets/Images/services/youtube-2.png';
import section1Image3 from '../../../assets/Images/services/youtube-3.png';
import serviceIcon1 from '../../../assets/Images/services/exp-icon.png'
import serviceIcon2 from '../../../assets/Images/homepage/MarketingStrategies.png'

import ImageInfoWrap from '../../common/ImageInfoWrap';
import FullWidthCTASection from '../../common/FullWidthCTASection';
import SectionTopInfo from '../../common/SectionTopInfo';

const YouTubeAdvertising = () => {

  const serviceData = [
    {
      icon: serviceIcon1,
      title: 'Expert Strategy Session',
      description: "We don't just jump into ad creation. First, we'll sit down with you to understand your business goals and target audience inside and out. Then, we'll craft a winning YouTube ad strategy that aligns perfectly with your needs, like a puzzle perfectly clicked into place."
    },
    {
      icon: serviceIcon2,
      title: 'Creative that Converts, Not Confuses',
      description: "Our team is a powerhouse of talented videographers and copywriters. Together, they'll develop video ads that are as captivating as they are persuasive. We're talking clear messaging, stunning visuals, and a call to action that's impossible to resist."
    },
    {
      icon: serviceIcon1,
      title: 'Flawless Campaign Management',
      description: "We'll handle everything from setting your budget and targeting options to tracking results and optimizing your campaign for maximum impact. Think of it as having a superhero sidekick who takes care of all the technical stuff while you focus on running your business."
    },
  ];

  return (
    <div>
      <InnerBanner
        title={"YouTube Advertising"}
        info={"Let Wtechy be your YouTube ad dream team and watch your business grow."}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Reach Millions & Grow Your Business with YouTube Ads'}
        imageUrl={section1Image}
        isReverse={true}
        description={"<p>Imagine millions of potential customers, all interested in exactly what you offer. That's the magic of YouTube advertising, and Wtechy is here to unlock it for your business.</p><p>YouTube might have started with funny videos that are still entertaining. But it's evolved into a massive platform where people go beyond just entertainment. They use YouTube to actively seek out solutions, learn new things, and discover products they'll love. With the right YouTube ad campaign, you can put your brand front and center, right in front of this highly engaged audience.</p>"}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Stand out on YouTube, grow your business with Wtechy'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Why YouTube Ads?'}
        imageUrl={section1Image2}
        customClass={'bg-gray'}
        description={"<p>Text ads can easily get lost in the shuffle, and banner ads often go unnoticed. Videos, on the other hand, are like little commercials with superpowers. They grab attention, tell a captivating story, and leave a lasting impression on viewers. But it's not just about throwing any video out there.</p><p>Here's where the real magic of YouTube ads comes in: </p><ol><li><b>Laser-Focused Targeting:</b><p> We don't believe in a one-size-fits-all approach. Instead, we use clever targeting options to reach people who are most likely to be interested in what you have to offer. We're talking demographics, interests, even the kind of videos they typically watch. It's like whispering your message directly to the right ears.</p></li><li><b>Attention-Grabbing in Seconds:</b><p>You only have a few precious seconds to hook viewers before they skip your ad. We get it. That's why our team creates video ads that are as visually stunning as they are engaging. We'll stop viewers in their tracks and make them want to learn more about your brand.</p></li><li><b>From Viewer to Customer in a Flash:</b><p>The goal is to get people to act, not just watch. We'll design your campaign to drive traffic to your website, landing page, or even your online store. Think of it as building a smooth bridge between watching your ad and becoming a loyal customer.</p></li></ol>"}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Instantly captivate and convert viewers into loyal customers'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding services '>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'We know YouTube ads are powerful'}
            title={'Your YouTube Ad Campaign Dream Team'}
            text={"<p>We know YouTube ads are powerful, but creating and managing them can feel overwhelming. That's where Wtechy swoops in to save the day! We're your one-stop shop for all things YouTube advertising.</p><p>Here's what sets us apart and makes us the perfect partner for your video ad journey: </p>"}
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
        title={'Let Wtechy manage your YouTube campaigns flawlessly'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'See the Results for Yourself'}
        imageUrl={section1Image3}
        customClass={'bg-gray'}
        isReverse={true}
        description={"<p>We wouldn't be here without results to back it up. With Wtechy's YouTube ad expertise, you can expect to see some serious improvements for your business: </p><ul><li><b>Brand Awareness Growing Fast:</b><p>Get your brand noticed by a massive audience of potential customers who are actively searching for what you offer. It's like a virtual spotlight propelling you into the YouTube stratosphere.</p></li><li><b>Website Traffic That Increases:</b><p>Drive qualified leads to your website or landing page, ready to learn more about what you offer. Imagine a constant stream of potential customers, all interested in your business.</p></li><li><b>Sales and Conversions:</b><p>urn those interested viewers into paying customers with targeted video ads that showcase the value you bring. We're talking about boosting your bottom line and seeing those sales figures climb steadily upwards.</p></li></ul><p>Don't miss out on this incredible opportunity to reach millions of potential customers who are actively looking for solutions like yours. We'll help you craft a video ad campaign that's both memorable and effective, propelling your brand into the YouTube spotlight and fueling your business growth.</p>"}
      />
    </div>
  )
}

export default YouTubeAdvertising