import InnerBanner from '../../../common/InnerBanner';
import ImageInfoWrap from '../../../common/ImageInfoWrap';
import section1Image from './../../../../assets/Images/services/SEO.webp';
import section2Image from './../../../../assets/Images/services/what-we-do-service.png';

import SectionTopInfo from '../../../common/SectionTopInfo';
import FullWidthCTASection from '../../../common/FullWidthCTASection';
import FAQs from '../../../common/FAQs';

const WordpressDevelopment = () => {

  const faqData = [
    {
      question: 'Can I use WordPress to develop an E-commerce website?',
      answer: '<p>SWordPress offers a complete web solution to you, it is creating either a website or blogging, and it is an ideal solution for you. It is a static website, and it gives you enhanced results; a static WordPress website helps you attain better SEO and improved search engine rankings. There are several benefits of creating a website on WordPress; some of them are:</p><ul><li>It has an open-source platform, which means you can quickly revolutionize WordPress software by changing plug-in, themes, content, and so on.</li><li>WordPress is a secure web development tool, and it persistently updates the platform with the latest safety policies.</li><li>It is accessible to code, so the business owners have a significant advantage of handling their website once it is created.</li></ul>',
    },
    {
      question: 'Are WordPress websites mobile-responsive?',
      answer: '<p>WordPress is a dynamic platform, allowing users to create mobile-friendly websites. It offers you a wide array of options; from adding themes to set up the contrasts, you can design a template on your own.</p><p>Our team of high-end WordPress developers makes sure to provide you with nothing but the best mobile-responsive websites, which will productively help you attract traffic to your website. In addition to this, it will also help you to rank on the top of the search engine result pages.</p>',
    },
    {
      question: 'How much time does it consume to develop a WordPress website?',
      answer: '<p>To create a website on WordPress, you need first to design a custom theme, which will take 1 or 2 weeks. The next step involves the development of the website, which might take 3 to 4 weeks to code, and the last step requires content, which includes the creation of content adding images that will undoubtedly lead up to 2 weeks.</p><p>The time entirely depends upon the project’s demand, and it will consume from 10 to 12 weeks to develop a website on WordPress.</p>',
    },
    // Add more FAQ items as needed
  ];
  return (
    <div>
      <InnerBanner
        title={"WordPress Development"}
        info={'Construct a Personalized SEO Friendly Website with Help of WordPress Development'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'WordPress Development that Aids in Building User-Friendly Websites'}
        imageUrl={section1Image}
        description={'<p>The internet attracts millions of people every single day, so it has become essential for businesses to construct a solid online presence. The first and foremost step a business owner can take to achieve a strong presence is creating a unique and notable website, which can easily attract potential customers.</p> <p>WordPress empowers almost one-third of the business websites; in addition, it entails blogs, start-ups, e-commerce websites, and even government websites. WordPress is a popular web development tool precisely used by millions of marketers.</p><p>It is known as the leading (CMS) content management system, as it gives the business owners a right to be liable for their website. It gives them the power to categorize their content without any assistance from a backend developer.</p><p>Our developers ensure to create the best designs that will make your website eloquent and more beautiful. We pride ourselves in delivering our clients extensive growth and increasing revenue by helping them to create a user-friendly and modified website.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Get in touch with us for the best WordPress website development options'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        title={'Dynamic B2B WordPress Website Development'}
        imageUrl={section2Image}
        description={'<p>To propel your business and take it to new heights, it is crucial to have a positive online presence; this is why many business owners are making their business websites. Having a website has become the primary and utmost need of any business owner, so having an eloquent website that crafts the products and services is prominent.</p><p>However, it is fundamental to build a comprehensible website with the intention that it can effortlessly catch the attention of your customers. We aim to help our clients so that they can get the best possible outcomes and provide them with a dynamic and resourceful website.</p><p>Our mission is to provide all our clients nationally and internationally with uninterrupted and end-to-end opportunities. Our company offers a diverse range of services and solutions to businesses, which is why we set no prejudice to provide our clients with top-notch services.</p><p>To make your customers stay on your website, you require a unique approach, and we are known to provide our clients with a customized plan to help them reach their clients efficiently. We plan for a long heave, so we ensure that your website stays updated and all development strategies work in your favor.</p>'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'Innovative WordPress Website Development for Businesses'}
        imageUrl={section1Image}
        description={'<p>When the users get the desired information on the website, they intend to stick to the landing page, which becomes crucial for the business owners to create a website that will give eloquent information, be user-friendly, and be flexible.</p><p>WordPress is one of the most popular website development platforms, and it has managed to present the users with a dynamic, swift, supple, easy-to-use website, which directly helps to adhere to the visitors’ attention. It is user-friendly for the visitors and the business owners, as without any support from the development team, they can maintain their website on their own.</p><p>WordPress is an exceptional web development podium to manage websites of any size and kind with substantial assistance and a dynamic platform. Having a business website makes it supple for any company to accomplish its business objectives, which is why our WordPress development services are adapted to the precise requirements. For that reason, we make sure to create a unique website that connects with your customers and generates conversions.</p><p>Our developers construct a contemporary and eye-catching website that imitates your product and its significance. In addition to this, we make sure to offer you an informed website that will catch the attention of your potential spectators and will aid in engendering the leads.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Let us help you create a functional WordPress website'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'FAQs'}
            title={'FAQs for WordPress Development'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
    </div>
  )
}

export default WordpressDevelopment