import React from 'react'
import InnerBanner from '../../../common/InnerBanner'
import ImageInfoWrap from '../../../common/ImageInfoWrap'
import section1Image from './../../../../assets/Images/services/Online-Repair-Service.jpg';
import section2Image from './../../../../assets/Images/services/Manage-the-Way.webp';
import section3Image from './../../../../assets/Images/services/Bury-the-Negativity.webp';



import FullWidthCTASection from '../../../common/FullWidthCTASection';
import SectionTopInfo from '../../../common/SectionTopInfo';
import FAQs from '../../../common/FAQs';

const Corporate = () => {

  const faqData = [
    {
      question: 'How to protect a business’s reputation from these false attacks?',
      answer: '<p>Everyone faces a different kind of claims for their business, regardless of how big or small a business. In order to protect your business’s reputation, you need to create a strategy that must determine the steps required to guard your business against these attacks.</p><p>You need to know what the nature of the attack is, and what the reason behind the attack is. The plan should comprise search engine optimization tactics, the steps to drag down the negative content, and the creation of positive content that regenerates your image in front of your potential prospects.</p>      ',
    },
    {
      question: 'How much time does it take for online reputation management to work?',
      answer: '<p>It varies on the nature of the attack. Depending on the volume of the negative and malicious content, we can determine the duration it will take to provide you with significant results, which can surely range from a month to a year.</p>',
    },
    {
      question: 'Why does it take such a long time?',
      answer: '<p>Online reputation management of attacks is extremely complex, as it entails plenty of work on different websites and social platforms. We have to create positive content that will outcast and shove away the negative content.</p><p>This is not a process of a day, it can take weeks and months to create and rank the new content. We’ll have to first find out the keywords that have the most number of negative content and then have to outrank the spiteful content with positive content and reviews.</p>',
    }
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <InnerBanner
        title={"Online Reputation Marketing-Corporate"}
        info={'Enhance our Brand’s Reorganization with Online Reputation Management Services'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Promote Your Brand’s Positive Image with Online Reputation Management Marketing'}
        imageUrl={section1Image}
        isReverse={true}
        description={'<p>The online platform is filled with Mecca for businesses, and as the democracy internet has given to the users, the power relies on the hands of the customers, and your one wrong move can assassinate the success of your business.</p><p>If your business is online visible to your potential customers, it means that you have fair chances of attracting a malicious amount of content as well, which can indeed breach the reputation of your brand in the corporate world.</p><p>In order to ensure a consistently positive reputation of your business, you need to opt for online reputation management services, as they can help you in several things like building your business reputation, creating good connections with your prospects, and creating a strong online business presence.</p><p>Our team is an expert in helping you to build and manage your corporate reputation, by providing you with customized strategies that will let your customers know what they are missing and what good your company holds for them.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Manage your Business’s reputation with experts.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Proactively Protect Your Online Business Reputation'}
        imageUrl={section2Image}
        isReverse={true}
        description={'<p>The internet presents consumers with a wealth of data, which is sometimes misunderstood as information, and it undeniably ranges in both significant as well as false news. This is the reason, it becomes crucial for the business to maintain their positive online presence.</p><p>The online reputation of a Business widely depends on the consumer’s point of view, and one false claim can tarnish the reputation of several years. This reputation can be enhanced extremely by the enthusiastic reviews from the consumers, and it can be heavily damaged by their negative reviews.</p><p>We make the process of online corporate reputation possible by building your positive presence online on different social media outlets, top-most social networking platforms, by writing an exceptional content, which will intrigue the people who read to perceive your constructive side, creating news, press releases, as well as web forums.</p><p>Removing negative reviews and creating a positive image of you, your company, and anything associated with your Business, despite the source, is the top priority of our online Business reputation management plan.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Protect your reputation with online reputation professionals.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Build a Positive Digital Presence with Online Business Reputation Management Services'}
        imageUrl={section3Image}
        description={'<p>We comprehend that online repute plays a vital role in accomplishing the success of any business, whether it is big or small. Regardless of what your Business comprehends or what is its revenue, it is unfair to anticipate that anyone can predict the complexity of the reviews, Business references, and social media presence without soliciting a digital defense.</p><p>Every organization hope for a positive online presence, which is full of excitement and encouraging experiences, in the end, you and your team have worked hard to achieve the niche.</p><p>However, you must not assume that everything runs in a white corner of the frame, pragmatically, negative reviews about your Business and sometimes being unacknowledged for your products and services might happen.</p><p>Out agency will develop a tailored Business-specific online strategy and execute it to combat the existing negative attacks as well as to create a content that will help in showing your positive image to your potential prospects.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'See how we can help you to manage your tarnished repute.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Team up with us and Lend a Positive Image to your Business'}
        imageUrl={section3Image}
        description={'<p>The world of the internet is enthralling, as it offers all of us the freedom of speech and is a source of open information, but is it a reliable source?</p><p>On the other hand, this liberty of speech is not always fair and comes with several consequences. Most of the time, we might witness that even a single discontented consumer can convention up the platform with the spiteful accusation that will somehow burn down your reputation to the ground.</p><p>Occasionally the corporate sector can harvest some negative comments and hype online, and we understand that, when you have a big organization to run, it is obvious you’ll have a nemesis, who are trying every possible step to tarnish your reputation.</p><p>Our team of experts is well versed in onslaught the chaos and builds a defensive mechanism against the future attacks on your reputation. We make sure that you or your business continues to reflect the positivity in the search engines like Google, Yahoo, and Bing, as well as shine brightly on the social media channels.</p>'}
      />
      {/* ======New Section Start ====== */}
      {/* ======New Section Start ====== */}
        <FullWidthCTASection
          title={'Know the impact of search engine results on your business profile.'}
        />
      <section className='sectionPadding'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'FAQs'}
            title={'FAQs for Online Reputation Marketing'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
      {/* ======New Section Start ====== */}
    </div>
  )
}

export default Corporate