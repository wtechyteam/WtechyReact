import React from 'react'
import InnerBanner from '../../../common/InnerBanner'
import ImageInfoWrap from '../../../common/ImageInfoWrap';
import section1Image from './../../../../assets/Images/services/smo.jpg';
import section2Image from './../../../../assets/Images/services/smo-1.png';
import section3Image from './../../../../assets/Images/services/smo-2.jpg';
import section4Image from './../../../../assets/Images/services/smo-3.png';


import SectionTopInfo from '../../../common/SectionTopInfo';
import FullWidthCTASection from '../../../common/FullWidthCTASection';
import FAQs from '../../../common/FAQs';


const SocialMediaOpt = () => {

  const faqData = [
    {
      question: 'What to do if my reputation is previously negative?',
      answer: 'If your repute is tainted with false content, then it immediately requires your reaction. Ignoring and staying acquainted with the situation will only hinder your reputation more. Prior to start taking a step yourself, you need an online reputation provide, who will help you to sort out the issue that has been bolting out your online reputation.',
    },
    {
      question: 'What’s the major mistake people make while managing their online reputation by themselves?',
      answer: '<p>Creating social media profiles, running several campaigns online, posting blogs every now and then can build up their tainted image. However, this is the fair approach, but it will only work well when used with correct tools and guidelines.</p><p>It is good that people create their different social profiles and post positive content, but writing and posting is not the only step that will help them to reinstate their lost repute, you need search engine optimization and social media optimization to drag down the negative content.</p><p>This is one of the major reasons for a fallback for many people who are trying to manage their reputation by themselves. Therefore, a reputation management agency is the best rescue and your one-stop solution to get rid of the negative image online.</p>',
    },
    {
      question: 'How much time will it take to fix a tarnished reputation?',
      answer: '<p>Everyone has a different situation and it entails its own approach. The most important thing to check is the cycle of negative comments. You have to see for how long the negative content is floating, and see has it run its course.</p><p>The second step to do is create high-quality content with valid keywords backing up the SEO strategy so that the technique used can counteract any unwanted content finding its way to rank up to the top 3 pages of search engines.</p>',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <InnerBanner title={"Social Media Optimization"}
        info={"Let’s Get Together to Make your Brand Reach More Customers by Using Social Media Optimization"}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Nurturing Unique Business Possibilities with Social Media Optimization'}
        imageUrl={section2Image}
        isReverse={true}
        description={'<p>Social media is one of the most effective and reliable forms of digital marketing, this is the reason tip-most brands are not even bending a step to promote their products on platforms like Instagram, Facebook, Twitter, and many more.</p>      <p>Social media optimization plays a significant role to make any website a success, as it is a crucial factor in your SERP. Most of the companies are making a prominent spot on the search engines with the help of SMO.</p>      <p>However, some of the companies often overlook this strategy, even though SMO can help them to increase their website position within the Google search rankings. Not only helps in increasing the position of your website but it also helps in increasing the awareness of a product or service, by using different social media channels and communities to engender the publicity.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Strive up your social media efforts with the experts.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        title={'Highlight the Strength of your Company with Effective Social Media Optimization'}
        imageUrl={section1Image}
        description={'<p>With millions of searches being made every minute, it is complicated to appear on the first search engines like Google, Bing, and Yahoo. People neither have time nor patience to go further to the second page of the search results.</p><p>SSo, if your business does not appear on the first page, you are as good as invisible. The sites which appear amongst the first few results are more likely to get traffic.</p><p>Our SEO Agency can make your business appear more in front of scrolling eyes. A practical formulaic approach is kept by our SEO experts who have been working for quite some time in this industry to make your business stand head and shoulders above the crowd outweighing your competitors.</p><p>Approach our SEO Consultant today to know your Google ranking.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Fabricate your business with social media optimization.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Developing Social Media Profiles to Match Your Business Needs'}
        imageUrl={section3Image}
        isReverse={true}
        description={'<p>When you collaborate with our leading digital marketing agency, you will only experience excellence and satisfaction. Our well-versed team of experts helps you to create your social media profiles and manage the account, by maintaining the good image of your brand/company.</p><p>We believe in providing the best results, so our specialists like to work in partnership with clients that help them to achieve the preeminent results, whether that is increased ROI or followers.</p> <p>Social media optimization is significant to customer discernment and conversion. The customers connect with different brands on social media, as this helps them to stay updated with the latest sales.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Let’s craft an effective strategy for your business.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        title={'Partner with us to Setup Social Media Accounts'}
        imageUrl={section4Image}
        description={'<p>Social media is a method that helps your company to grow and expand its online presence. Our agency has a team of talented social media experts, who knows their way to draw out an effective strategy and content for your social media campaigns.</p><p>When you create an account on channels like Facebook, Twitter, Instagram, and LinkedIn, social media optimization is strategically creating, structuring, and increasing your plan to engage with your target customers.</p><p>It allows you to fortify your brand, generate leads, gain visibility, and connect with your customers. Most of the companies are neglecting social media optimization and as a result, it is a roadblock to success.</p><p>Our team is an expert in managing branded profiles and creating social media campaigns on different social networking channels, but our focus is always on top-most channels like Facebook, Twitter, Instagram, and LinkedIn.</p>'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'FAQs'}
            title={'FAQs for Search Engine Optimization'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
    </div>
  )
}

export default SocialMediaOpt