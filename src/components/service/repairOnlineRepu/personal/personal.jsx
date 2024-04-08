import React from 'react'
import InnerBanner from '../../../common/InnerBanner'
import ImageInfoWrap from '../../../common/ImageInfoWrap'
import section1Image from './../../../../assets/Images/services/online-reputation.webp';
import section2Image from './../../../../assets/Images/services/repair-online-reputation.webp';
import section3Image from './../../../../assets/Images/services/Choose-strategic-approach.webp';



import FullWidthCTASection from '../../../common/FullWidthCTASection';
import SectionTopInfo from '../../../common/SectionTopInfo';
import FAQs from '../../../common/FAQs';

const RepairPersonal = () => {

  const faqData = [
    {
      question: 'Why is having a good online reputation important?',
      answer: 'The success of your business website is primarily dependent on textual content. Google algorithms make search results on the basis of the textual content, a small percentage over images. Still, content wins over the wallet of your customers. Invest time and effort while writing the quality content for your website, it is highly rewarding.',
    },
    {
      question: 'How my reputation can be damaged?',
      answer: 'Search engines like Google consider the backlinks as votes in favor of your website. It shows the credibility of your website. Google treat your website’s backlinks as your site’s ability to satisfy search wishes of browser.',
    },
    {
      question: 'How much time does it take?',
      answer: 'Yes. Google AdWords is a short time and expensive solution whereas SEO is long. Search Engine Optimization (SEO) requires more time and effort to achieve results but is permanent than ads. Once you stop paying for Google advertising, your project ends, but when you stop paying for SEO your campaign still stands. Web searches trust SEO listing more than advertisement listings.',
    }
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <InnerBanner
        title={"Repair Online Reputation Personal"}
        info={'Shed defamation and fix your Internet image with our best Online Reputation Repair Services'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Restore your online reputation and enhance the opportunities coming your way'}
        imageUrl={section1Image}
        description={'<p>Nowadays, everybody is searching for everybody else on the Internet. Your reputation is determined by your digital identity. You can be searched on the internet at any moment, by anybody and for any reason.</p><p>Bad stuff can happen to anybody at any time. It takes years to build a reputation and a single negative press article, an angry neurotic ex-lover, jealous colleague or simply put just bad luck to ruin it overnight. Even simple social media mistakes can invoke an explosion of negative comments from angry followers.</p><p>Regardless of the story about you is true or not, you will be judged by the search results. No one cares whether they are old and how much you have accomplished since then, the damage is done.</p><p>It has become important more than ever to take care of your presence on Google, and across all social networks. Like professional brands, your ‘personal’ brand can raise positive and negative reactions for which you have to deal with the consequences.</p><p>Don’t let negative content damage your search results and your image. Repair your online reputation with our agency. We provide the best online reputation services which can help you with fixing the negative image of yours.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Struggling with negative search results?'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Repair your online reputation with the best solutions'}
        imageUrl={section2Image}
        isReverse={true}
        description={'<p>The internet is an ocean of free-for-all resources. Irrespective of what you one can always search to learn more about you. Of course negative content is not even the least you would like them to see.</p><p>Employers, Landlords, Consumers, colleagues your children, significant others are all searching you online. Negative or defamatory posts referring to you can cause damage to your future prospects. It only takes a few negative reviews to blow your personal reputation.</p><p>As an industry-leading team of reputation repair and management experts, we are the most trusted source for the removal of online negative defamatory posts. We commit our clients with a fast and efficient solution for fixing their reputation.</p><p>We have years of experience in reputation repair and management. Our team has helped Doctors, Filmmakers, Attorneys, Architects, Executives, Tax Consultants, Accountants, Celebrities, and Realtors in repairing their online negative reputation. Many of our clients have even availed of our social media reputation repair services.</p><p>It takes proper techniques and tools with a personalized strategy for a particular client for online reputation repair and management. So it’s not an easy task which can be done by anybody. Any carelessness in this matter will lead to more negative coverage and your reputation can be ruined even further.</p><p>Our trusted and strategic ORM solutions will repair your reputation and help you regain control of your name online helping you brand yourself.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Consult our experts and start improving your online reputation today.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Choose a strategic approach to defend yourself online'}
        imageUrl={section3Image}
        description={'<p>Google is the first place people go to learn about you. Whatever is written online about you matters, as most of the people will believe it. Negative stuff can affect your whole life and can be devastating.</p><p>In this case, what you really need is professional and strategic help that can restore your online reputation. Our team of experts offers you the best online reputation repair services. We can assist you with:</p><ul><li style="font-weight: 400;" aria-level="1"> Project your right image</span></li><li style="font-weight: 400;" aria-level="1"> Get rid of negative links from the Internet&nbsp;</span></li><li style="font-weight: 400;" aria-level="1"> Create and optimize positive content</span></li><li style="font-weight: 400;" aria-level="1"> Bury off misleading information</span></li><li style="font-weight: 400;" aria-level="1"> Establish your credibility&nbsp;</span></li></ul> <p>Our experts have full knowledge and understanding of the ever-changing Google algorithms. We employ various Google reputation repair strategies and techniques to get rid of negative links.&nbsp;</p><p>Most of the companies claim that they can remove bad links from Google, remove negative press release or remove negative online content. Let us aware you that these claims are all false and misleading as it is not even possible to delete all the content.</p><p>Only a little fraction of content is under your control and only that can be deleted. We use the techniques and strategies with which can suppress all the negative links about you online by publishing positive content frequently. This will result in pushing back of the negative content from page one of Google Search results to quite further pages.&nbsp;</p><p>For online reputation repair, we focus on creating positively strong profiles by following the best SEO practices that will have a huge shot at getting ranked well over time, automatically suppressing the negative links.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Is the negative information ranking highly in the Google search results against your name? Don’t panic!'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'FAQs'}
            title={'FAQ’s for Repair Online Reputation-Personal'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
      {/* ======New Section Start ====== */}
    </div>
  )
}

export default RepairPersonal