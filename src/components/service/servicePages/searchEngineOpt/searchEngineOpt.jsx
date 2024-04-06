// import React, { useState, useEffect } from 'react';
import InnerBanner from '../../../common/InnerBanner';
import ImageInfoWrap from '../../../common/ImageInfoWrap';
import section1Image from './../../../../assets/Images/services/SEO.webp';
import section2Image from './../../../../assets/Images/services/what-we-do-service.png';

import serviceIcon1 from './../../../../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../../../../assets/Images/homepage/MarketingStrategies.png'

import SectionTopInfo from '../../../common/SectionTopInfo';
import FullWidthCTASection from '../../../common/FullWidthCTASection';
import FAQs from '../../../common/FAQs';



// const WordPressComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://wordpress-1079908-3850878.cloudwaysapps.com/wp-json/wp/v2/banner');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures useEffect runs only once after the component mounts

//   return (
//     <div>
//       {/* Loop through the fetched data */}
//       {data.map((item) => (
//         <div key={item.id}>
//           <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
//           <p >{item.acf_fields.leftContent}</p>
//           <img src={item.acf_fields.section1Image} alt='sd' />
//         </div>
//       ))}
//     </div>
//   );
// };


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

  const whyChoose = [
    {
      icon: serviceIcon1,
      title: 'Dedicated SEO Support Team',
      description: 'Our SEO Support Team works to solve the complex business tasks of our customers.'
    },
    {
      icon: serviceIcon2,
      title: 'Innovative & Creative Approach for Google Ranking',
      description: 'We bring a lateral approach to all our services, thinking innovatively and creatively.'
    },
    {
      icon: serviceIcon1,
      title: 'More Than 15 Years of Experience in Digital Marketing',
      description: 'We help you drive more customers to your website, products, and services.'
    },
    {
      icon: serviceIcon1,
      title: 'Client Focus & Trust in Business Affairs',
      description: 'We put our clients’ needs first and meet their needs when dealing with business issues.'
    },
    {
      icon: serviceIcon1,
      title: 'Reputation',
      description: 'Our reputation is founded on exceeding the expectation of our clients.'
    },
    {
      icon: serviceIcon1,
      title: 'Project Delivering Success',
      description: 'We give confidence and reassurance to our clients as we drive their projects forward.'
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
        title={"Search Engine Optimization"}
        info={'Help Potential Customers Find Your Business and Skyrocket Sales with Our Best SEO Services'}
      />
      {/* <WordPressComponent/> */}
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Dominate the Search Engine with Tailored SEO Approach'}
        imageUrl={section1Image}
        description={'<p>Today, more and more people are turning towards the Internet for making their purchasing decisions. So, it is more important than ever to make an influential digital presence online.</p><p>Search engine optimization is the best way for your business to impact and get traffic on your website organically. Whether it is a fresh start-up or well-established, small or large scale, an effective SEO strategy is essential to growing your revenue.</p><p>You may be providing the best quality products and services, but they all go in vain if potential customers cannot reach you. To help people find you when they are searching online for products and services that you offer, an effective SEO strategy is critical.</p><p>The higher your business appears in the search result, the more likely it is that your potential customers will find and visit your website instead of your competitor. Our agency provides the best professional SEO services to help you unlock your potential prospects.</p><p class="text-20 fw-bold"><i>Want to give your business a boost with SEO?</i></p>'}
        showContactBtn={true}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        isReverse={true}
        title={'Improve Your Google Rankings with Professional SEO Services'}
        imageUrl={section2Image}
        description={'<p>With millions of searches being made every minute, it is complicated to appear on the first search engines like Google, Bing, and Yahoo. People neither have time nor patience to go further to the second page of the search results.</p><p>SSo, if your business does not appear on the first page, you are as good as invisible. The sites which appear amongst the first few results are more likely to get traffic.</p><p>Our SEO Agency can make your business appear more in front of scrolling eyes. A practical formulaic approach is kept by our SEO experts who have been working for quite some time in this industry to make your business stand head and shoulders above the crowd outweighing your competitors.</p><p>Approach our SEO Consultant today to know your Google ranking.</p>'}
        showContactBtn={true}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding services '>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'Collaborate with our best SEO Company'}
            title={'Collaborate with the Best SEO Company & Take Your Business to Another Level'}
            text={'With thousands of websites being created every day, you can make yours stand out online with an effective Search Engine Optimization strategy. You can take your business to a new height and generate more revenue than ever with the help of our SEO professionals. Being an experienced and well-reputed SEO Agency, we understand the changing algorithm of Google and design methodologies accordingly. Our SEO services are up to date, and unparalleled that can improve your business website rankings increase the traffic and revenue over a short period. Our advanced SEO services include:'}
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
        title={'Get a quote for your business SEO?'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Enhance Your Business Revenue with our SEO Agency'}
        imageUrl={section1Image}
        description={'<p>Whether your business is small scale or large, an expert SEO Agency is essential to keep afloat in the market. Your website must flash amongst top searches to flourish.</p><p>Managing the online presence of large scale companies requires a more robust and strategic approach for performing advanced SEO practices as compared to SEO for small businesses. Therefore, the help of experts is required for enterprise SEO.</p><p>Our Agency has years of experience in enterprise SEO services with clients all over the world who have seen their business grow exponentially with our strategies.</p><p><i>Do you want advanced SEO strategies for your enterprise?</i></p>'}
        showContactBtn={true}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        isReverse={true}
        title={'Rule the eCommerce World With Best SEO Services'}
        imageUrl={section2Image}
        description={'<p>Best products and services, well-designed website, easy ordering and still no clients? You must have missed getting search engine optimization for your site.</p><p>You need to appear on top to receive organic traffic for your website. To thrive in the eCommerce market, you need a strong SEO service since the competition is getting higher with more and more businesses joining the online platform.</p><p>With the expertise of our eCommerce team, we assure you an increased number of customers on your website. Our focus is on trust-building with our clients. We customize strategies according to the business and needs of our clients.</p><p>Our Ecommerce SEO service provider team is highly experienced and believes in delivering results.</p><p><i>Do you want SEO for your eCommerce site?</i></p>'}
        showContactBtn={true}
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
      {/* ======New Section Start ====== */}
      <section className='sectionPadding bg-gray2'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'Why Choose?'}
            title={'WTechy as your SEO Expert'}
          />
          <div className="row mt-5 justify-content-center">
            {whyChoose.map((item, index) => (
              <div className='col-lg-4 col-md-4 mb-4 ' key={index} >
                <div className="cardWrap my-3 px-2 text-center">
                  <div className="cardIcon cardIcon-Type2">
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

    </div>
  )
}

export default SearchEngineOpt;