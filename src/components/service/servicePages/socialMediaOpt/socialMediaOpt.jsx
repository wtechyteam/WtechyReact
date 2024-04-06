import React from 'react'
import InnerBanner from '../../../common/InnerBanner'
import ImageInfoWrap from '../../../common/ImageInfoWrap';
import section1Image from './../../../../assets/Images/services/SEO.webp';
import section2Image from './../../../../assets/Images/services/what-we-do-service.png';


import SectionTopInfo from '../../../common/SectionTopInfo';
import FullWidthCTASection from '../../../common/FullWidthCTASection';
import FAQs from '../../../common/FAQs';


const SocialMediaOpt = () => {

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
      <InnerBanner title={"Social Media Optimization"}
        info={"Let’s Get Together to Make your Brand Reach More Customers by Using Social Media Optimization"}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Nurturing Unique Business Possibilities with Social Media Optimization'}
        imageUrl={section1Image}
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
        imageUrl={section2Image}
        description={'<p>With millions of searches being made every minute, it is complicated to appear on the first search engines like Google, Bing, and Yahoo. People neither have time nor patience to go further to the second page of the search results.</p><p>SSo, if your business does not appear on the first page, you are as good as invisible. The sites which appear amongst the first few results are more likely to get traffic.</p><p>Our SEO Agency can make your business appear more in front of scrolling eyes. A practical formulaic approach is kept by our SEO experts who have been working for quite some time in this industry to make your business stand head and shoulders above the crowd outweighing your competitors.</p><p>Approach our SEO Consultant today to know your Google ranking.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Fabricate your business with social media optimization.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Developing Social Media Profiles to Match Your Business Needs'}
        imageUrl={section1Image}
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
        imageUrl={section2Image}
        description={'<p>Social media is a method that helps your company to grow and expand its online presence. Our agency has a team of talented social media experts, who knows their way to draw out an effective strategy and content for your social media campaigns.</p><p>When you create an account on channels like Facebook, Twitter, Instagram, and LinkedIn, social media optimization is strategically creating, structuring, and increasing your plan to engage with your target customers.</p><p>It allows you to fortify your brand, generate leads, gain visibility, and connect with your customers. Most of the companies are neglecting social media optimization and as a result, it is a roadblock to success.</p><p>Our team is an expert in managing branded profiles and creating social media campaigns on different social networking channels, but our focus is always on top-most channels like Facebook, Twitter, Instagram, and LinkedIn.</p>'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'FAQ'}
            title={'FAQs for Search Engine Optimization'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>

    </div>
  )
}

export default SocialMediaOpt