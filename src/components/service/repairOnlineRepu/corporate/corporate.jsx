import React from 'react'
import InnerBanner from '../../../common/InnerBanner'
import ImageInfoWrap from '../../../common/ImageInfoWrap'
import section1Image from './../../../../assets/Images/services/Online-Repair-Service.jpg';
import section2Image from './../../../../assets/Images/services/Manage-the-Way.webp';
import section3Image from './../../../../assets/Images/services/Bury-the-Negativity.webp';



import FullWidthCTASection from '../../../common/FullWidthCTASection';
import SectionTopInfo from '../../../common/SectionTopInfo';
import FAQs from '../../../common/FAQs';
import { Helmet } from 'react-helmet';

const RepairCorporate = () => {

  const faqData = [
    {
      question: 'Why is having a good online reputation important?',
      answer: '<p>Any bad review online can drop your chance to build a new and strong network of customers, and you all are here to make it big in the world of brands, so you can’t risk your chances of failing online because of some negative content.</p><p>This is an internet empowered world, and we all are practically living 24*7 with cell phones in our hands. For any small query, it’s Google with turn our eyes to, so for any corporate sector that is up there to sell or showcase their products or services, it’s crucial to have a positive image online, otherwise, no one will buy your products or will rely on your company.</p><p>Anything negative out on the web can easily damage your hard-earned reputation and business quickly, and having no reputation online will by far drive your potential clients to competitors.',
    },
    {
      question: 'How my reputation can be damaged?',
      answer: '<p>There are several ways that can damage your repute easily, some of them are:</p><ul><li>Your nemesis can project something bad about your brand to keep you away from the competition.</li><li>A number of websites let the users post complaints about the brand or company, so any unhappy client can be responsible to degrade your reputation.</li><li>Bad rating on Google is one of the easiest ways to downgrade your reputation in the market, your customers can post anything bad about you online and this will instantly create havoc to your business.</li></ul>',
    },
    {
      question: 'How much time does it take?',
      answer: '<p>Online reputation management is quite a long process, depending on how bad is your image online our team creates a customized program that is adapted to drag down the negative content from various platforms and upload new and positive content and manage it to rank on the first page of SERP.</p><p>However, Google frequently updates its algorithms, so repairing your tarnished reputation will take a different approach to match up the level you want. In addition to this, you can see the viable changes within 3 months of the campaign.</p>      ',
    }
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <Helmet>
        <meta
          name="title"
          content="Repair Online Reputation Management | Corporate ORM Service

"
        />
        <meta
          name="description"
          content="Restore your corporate digital identity with top online reputation repair service. Remove negative content and rebuild trust in your brand. Get assistance now!

"
        />
      </Helmet>
      <InnerBanner
        title={"Repair Online Reputation Corporate"}
        info={'Repair Your Disparaged Image Online by Reputation Repair and Management Services'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Revamp your Digital Identity with the Best Online Reputation Repair Service'}
        imageUrl={section1Image}
        description={'<p>Internet is the thrust that is influencing billions of people, and somehow this becomes a reason that your online presence on over the web can create or rupture your identity. A constructive reputation online states the largest part about your business and is the most fundamental thing in the world today.</p><p>A majority of the clientele rely on the internet whenever it comes to obtain certain services like shopping, vacation planning, booking up a hotel, and many more. However, businesses with any bad reviews are all in the zone of falling down.</p><p>You have spent years in building your esteemed organization and certainly, an unhappy client or your rival is making it worse for you to survive. This is one of the major reasons their online reputation has been tainted because of the negative content in the search results.</p><p>Your prospects can share their point of view explicitly on different social platforms, which can make your reputation, but sometimes it can also hinder your reputation with one negative comment. Our experts assist you in reforming your stippled digital reputation, by helping you to remove the negative links online and reinstating them with good information that reflects the positive approach of your brand.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Let our experts fix your tarnished reputation.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Manage the Way Your Name Appears on the Search Engine with Online Reputation Repair'}
        imageUrl={section2Image}
        isReverse={true}
        description={'<p>Setting up your online image can make a gigantic difference in the opportunities that flies your way. Sounds unbelievable, well, here is a case when people see positive reviews about your business they surely want to check out what you offer, this is how you can get new opportunities to expand your business as well as get traffic to your website.</p><p>Managing online reputation has always is crucial for several brands because in many cases a negative search result on the initial page of a search engine can drop the sales of the business regardless of the credibility of the information.</p><p>Good and positive reviews on the web can boost the credibility of your company as well as will increases your market value. Positive reviews direct a good reputation that helps your prospects to trust you more, helping in increasing the revenue.</p><p>However, the internet serves as a vast environment to potential customers, as they can know easily what you offer them and how good are your products and services. With different channels to maneuver, our agency is well versed with all online reputation protection services, and we can help you to restructure your negative image</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Get rid of the deceptive and malevolent content.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Bury the Negativity with Online Reputation Repair Services'}
        imageUrl={section3Image}
        description={'<p>We smooth the progress of managing your online reputation by building your positive digital presence on different social media channels, social networking outlets, writing excellent content that encourages the readers to collaborate with you and publishing press releases and news about your latest ventures.</p><p>Most corporate sectors provide precision, and now the content befalls as a fundamental part of any marketing efforts, we can see organization resisting to maintain a good image in front of their audience. With the deceptive and fallacious content floating over the internet, it certainly becomes complex for any business to sustain a vigorous image online.</p><p>Our agency aims to repair and retain a positive reputation about you and your brand in the search engine result pages, on top of that, we channel to maintain your constructive presence over different digital marketing channels, intending to condense and purge the negative content from the search results.</p><p>Online reputation repair is one of the most preferred services by several organizations in today’s internet-empowered world, instead of self-managing the repute, most of the organizations are calling our experts to handle and repair their reputation online.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Take charge of your online reputation with the help of experts.'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'FAQs'}
            title={'FAQs for Repair Online Reputation – Corporate'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
      {/* ======New Section Start ====== */}
    </div>
  )
}

export default RepairCorporate