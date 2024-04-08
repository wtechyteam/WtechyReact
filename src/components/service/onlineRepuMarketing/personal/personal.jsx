import React from 'react'
import InnerBanner from '../../../common/InnerBanner'
import ImageInfoWrap from '../../../common/ImageInfoWrap'
import section1Image from './../../../../assets/Images/services/Online-Repair-Service.jpg';
import section2Image from './../../../../assets/Images/services/Manage-the-Way.webp';
import section3Image from './../../../../assets/Images/services/Bury-the-Negativity.webp';



import FullWidthCTASection from '../../../common/FullWidthCTASection';
import SectionTopInfo from '../../../common/SectionTopInfo';
import FAQs from '../../../common/FAQs';

const Personal = () => {

  const faqData = [
    {
      question: 'What to do if my reputation is previously negative?',
      answer: '<p>If your repute is tainted with false content, then it immediately requires your reaction. Ignoring and staying acquainted with the situation will only hinder your reputation more. Prior to start taking a step yourself, you need an online reputation provide, who will help you to sort out the issue that has been bolting out your online reputation.</p>      ',
    },
    {
      question: 'What’s the major mistake people make while managing their online reputation by themselves?',
      answer: '<p>Creating social media profiles, running several campaigns online, posting blogs every now and then can build up their tainted image. However, this is the fair approach, but it will only work well when used with correct tools and guidelines.</p><p></p>It is good that people create their different social profiles and post positive content, but writing and posting is not the only step that will help them to reinstate their lost repute, you need search engine optimization and social media optimization to drag down the negative content.<p>This is one of the major reasons for a fallback for many people who are trying to manage their reputation by themselves. Therefore, a reputation management agency is the best rescue and your one-stop solution to get rid of the negative image online.</p>',
    },
    {
      question: 'How much time will it take to fix a tarnished reputation?',
      answer: '<p>Everyone has a different situation and it entails its own approach. The most important thing to check is the cycle of negative comments. You have to see for how long the negative content is floating, and see has it run its course.</p><p>The second step to do is create high-quality content with valid keywords backing up the SEO strategy so that the technique used can counteract any unwanted content finding its way to rank up to the top 3 pages of search engines.</p>',
    }
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <InnerBanner
        title={"Online Reputation Marketing Personal"}
        info={'Crafting a Positive Image over the Internet with Online Personal Reputation Management'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Create a Constructive Online Repute with Personal Online Reputation Management '}
        imageUrl={section1Image}
        isReverse={true}
        description={'<p>Having a positive image online has become one of the major concerns for many businesses. Not only this, but the liberty internet gave us has made a number of individuals suffer, especially, the celebrities and VIPs, so managing their repute online has become a necessity.</p><p>With the inclination of the internet, we all are bound to search almost everything on it, whether it is to amble in the restaurant or knowing what our favorite celebrity likes, we all Google up things seek information about everything and everyone.</p><p>This is the reason it has become prominent to maintain a good reputation over the web. As long as you are a public figure, it is crucial for you to have fine repute online, as billions of people follow you and your one wrong content can create a major riot over the internet.</p><p>A major population believes in the information they acquire from the internet, though it’s just the data floating, keeping it subtle and refine is should be the major priority. Therefore, it is important for every individual who has a presence on the internet or is looking forward to making a visible presence to keep your online image clean in front of your prospects.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Are you looking to build your online reputation?'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Develop a Good Presence Online with the Best Personal Reputation Services '}
        imageUrl={section2Image}
        isReverse={true}
        description={'<p>The world has become a slave of the internet, all encumbered with the online information which can be sometimes hard to believe. Falling in the era of the internet, you need to ensure that information you are bugging in is relevant and reliable.</p><p>It is vital for you to have a positive and significant online presence when someone types your name in the search engine, it should display the positive content adhering to your good digital presence. Any negative content about you floating over the web can easily damage your reputation.</p><p>No one goes well with a bad repute, and having a bad reputation on the web can possibly drive harm to you in the long haul. Personal reputation matters more than you think, as the internet is the easiest way to know about a person in today’s world, so people always approach the search engines to find out about you.</p><p>Moreover, the impact of negative repute can become prevailing of you render or are planning to deliver products and services online. Our agency has developed customized personal reputation management and repair services for every individual that abide by the laws in order to assure you that your reputation is in good hands.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Construct a strong and positive digital charisma.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Take command of Your Personal Image with Online Reputation Management'}
        imageUrl={section3Image}
        description={'<p>The information, or to be precise the data available on the internet is escalating quickly, and there is the probability that your distinctiveness might be mistaken for some other persons, having the same name, but with appalling reputation.</p><p>Therefore, it becomes important for you to immediately unearth such kind of information that is destroying your image publically and reinstate it with true information. Moreover, you might have some nemesis that can post content about you on the internet that might hinder your reputation and cause a ruthless waft to your professional as well as personal life.</p><p>Thus, this becomes your immediate responsibility to look for such counterfeit information and try to eliminate it as soon as possible. As one of the most reliable and leading online reputation management companies, we have tailored techniques that can help you to remove the malicious content from the web, and repair your negative reputation online while improving your personal reputation over the internet.</p><p>Our team is experienced with all the facets of online reputation management and employs feasible techniques to ensure that you surpass on the digital platform. We help you to remove negative and bad links from Google, get rid of the negative press releases and comments, remove negative stories and bad images from Google search results.</p><p>Moreover, we assure our clients that any negative information about them circulating over the internet will be stamped out from the initial search engine result pages.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Establish a positive repute with our personal reputation management services'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'FAQs'}
            title={'FAQs about Online Reputation Marketing (Personal)'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
      {/* ======New Section Start ====== */}
    </div>
  )
}

export default Personal