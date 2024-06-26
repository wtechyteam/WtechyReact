import InnerBanner from '../../../common/InnerBanner';
import ImageInfoWrap from '../../../common/ImageInfoWrap';
import section1Image from './../../../../assets/Images/services/SEO.webp';
import section2Image from './../../../../assets/Images/services/what-we-do-service.png';

import serviceIcon1 from './../../../../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../../../../assets/Images/homepage/MarketingStrategies.png'

import SectionTopInfo from '../../../common/SectionTopInfo';
import FullWidthCTASection from '../../../common/FullWidthCTASection';
import FAQs from '../../../common/FAQs';

import { Helmet } from 'react-helmet';

const ShopifyDevelopment = () => {

  const shopifyDevCardData = [
    {
      icon: serviceIcon1,
      title: 'Website Development',
      description: 'We establish, configure and customize your online store along with these developments, adding your products, shopping carts, payment gateways, and web design services that suit your business and customer requirements.'
    },
    {
      icon: serviceIcon2,
      title: 'Website designing',
      description: 'Web design experts at our agency help create an attractive website powered by Shopify along with your product categories, business workflow and whatever is in trend in the market.'
    },
    {
      icon: serviceIcon1,
      title: 'Store Customization',
      description: 'Ecommerce solutions are crafted as per your business need. We focus on offering you a unique online store according to your products and target markets.'
    },
    {
      icon: serviceIcon2,
      title: 'Market Shopify Solutions',
      description: 'Our expert Shopify developers are capable of building elements from scratch and integrate third-party plug-ins for quick set up of the store. Payment gateways, social media links, and many other such features will be added to your store.'
    },
    {
      icon: serviceIcon1,
      title: 'Store Migration',
      description: 'Migrate your existing store, regardless of its parent platform to Shopify without any glitches with our Company experts. We provide smooth integration, data security and prevent any information leaks during the process.'
    },
    {
      icon: serviceIcon2,
      title: 'Shopify Store Optimization',
      description: 'Our company is well experienced and holds extensive knowledge of SEO and Shopify’s features to get your store rank higher in search engines and fetching you more potential customers thus increasing your sales.'
    },
    {
      icon: serviceIcon1,
      title: 'Upgrade, Maintenance, and Support',
      description: 'We promise to take of your eCommerce store which is our creation only throughout its lifetime. We will take care of any bugs, upgrades, and render support as and when required for the smooth running of the website online.'
    },
  ];

  const faqData = [
    {
      question: 'How can Shopify help you grow your Online Store?',
      answer: '<p>As Shopify provides an extensive marketing suite, businesses are easily scaled and mark their digital presence online. Moreover, the SaaS platform offers SEO features such as Meta tags, titles, descriptions so that it can rank higher on SERPs. Customers can post reviews which can be SEO friendly and helps in building the credibility of the business.</p>',
    },
    {
      question: 'Is Shopify exclusively for eCommerce sites only?',
      answer: '<p>Not really. You can use this platform to create a content-based website as well. However, for simply content-based sites, people prefer WordPress.</p>',
    },
    {
      question: 'What companies can use Shopify?',
      answer: 'Almost all companies can use Shopify. There companies of all shapes and sizes ranging from small pop-up establishments to large global MNCs that being empowered by Shopify. Companies prefer Shopify because it is user-friendly and an effective tool to sell the products online.',
    },
    // Add more FAQ items as needed
  ];
  return (
    <div>
       <Helmet>
                <meta name="title" content="Shopify Website Development Services |  Build Ecommerce Store" />
                <meta name="description" content="Grow your online store with our Shopify Development Services. We build high-converting Shopify stores with tailored strategies and advanced optimization." />
            </Helmet>
      <InnerBanner
        title={"Shopify Development"}
        info={'Create a High-End Website with Shopify and Add More Value to Your Business'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'Increase your sales with our Shopify Development Services'}
        imageUrl={section1Image}
        description={'<p>If you walk into a smelly unorganized store with poor lighting, you will likely come out of there as quickly as possible without buying anything. The same concept applies to the feel and design of a website.</p><p>If your website is unattractive and difficult to navigate, your potential customers are more likely to leave without purchasing anything. Websites should be user-friendly, providing a smooth and enjoyable experience to the customers.</p><p>Your website is your business store. It represents your business to the whole world, so you need to present yourself in the best way possible to earn profits.</p>'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        title={'Shopify is a flexible platform'}
        imageUrl={section2Image}
        description={'<p>Your products deserve to be showcased on the best online store. Exhibit your products and enhance your brand image with World’s No. 1 eCommerce platform, Shopify. It is a perfect website solution for all businesses.</p><p>Shopify is a flexible platform. To maximize what it all offers, it is essential to engage an experienced team. Our team of experts knows Shopify inside and out as a Web Development service provider. We know how to make the best use of this solution to help you create unique and attractive websites.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Want an attractive Shopify website for your business?'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'Complete Shopify Website Development Solution'}
        imageUrl={section1Image}
        description={'<p>With the advancement in technology, more and more people are turning to the Internet for services. The fast-paced life has kept everybody short on time, so they turn to the web even to shop.</p><p>Today, eCommerce has become an augmenting business trend. As the demand increases, most sellers are offering their products online. Building an eCommerce store has become essential to capitalize on the rising demand.</p><p>In eCommerce, you need to have the right partners and the right tools to conquer today’s competitive marketplace. This is where you need Shopify as your web development solution.</p>'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        title={'As a Web Development Agency'}
        imageUrl={section2Image}
        description={'<p>Powering many online stores, Shopify has become the preferred SaaS (Software as a Service) platform for brands of all shapes and sizes, from small establishments to fortune 500 businesses. Over the years, Shopify has emerged as one most sought-after and acclaimed eCommerce platforms because of its rich features.</p><p>As a Web Development Agency, our technical experts offer you a complete range of Shopify services. We blend our expertise with our experience in eCommerce to develop, design, and optimize the appealing and robust Shopify-driven eCommerce stores.</p><p>Seasoned developers at our Agency are technologically updated and understand the needs of clients, their target markets, and challenges to create tailored Shopify solutions.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Get your eCommerce store build just the way you want.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'Boost Your Sales with Shopify Store'}
        imageUrl={section1Image}
        description={'<p>All retailers and wholesalers want to draw the potential online customers to their business. It has become a very competitive niche for both the sellers as well as developers. Shopify, a SaaS (Software as a Service) platform has come a long way that has helped numerous businesses to establish and run an online store instantly. It is enriched with all the essential features that comply with the online market needs of modern SMEs and large enterprises.</p><ul><li>Completely customizable appealing templates and themes with standard compliance, giving professional look to eCommerce site set up with Shopify.</li><li>Easy to manage, list and organize products with Shopify’s streamlined CMS interface.</li><li>User-friendly, streamlined admin panel and interactive real-time statistics let the merchant manage the store easily.</li><li>As it is designed under the guidance of our company’s SEO experts, eCommerce marketing it easy with automated XML sitemap generation.</li><li>Customer data security is ensured by PCI compliance, backed by the speed of MySQL database and compatible with other numerous payment gateways.</li></ul><p>Creative developers at our company build websites integrated with dynamic features of eCommerce platform and offer clients an easy to sell their products without any technical issues. Besides this Shopify is the preferred platform because of the following:</p><ul><li>Fast creation of landing pages</li><li>Well-organized templates and themes</li><li>Flexible online store builder</li><li>Multi-language store</li><li>Provides blogging platform</li></ul><p>Our Company offers a full package of creative state-of-the-art strategic services for your eCommerce businesses. We help brands scale up and thrive using the Internet. We will build a sales channel for your business that will attract and motivate customers.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Get your eCommerce store build just the way you want.'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding services'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'Get satisfactory and effective eCommerce solutions'}
            title={'Transform Your Online Business into a Revenue-Generating Machine'}
            text={'<p>Get satisfactory and effective eCommerce solutions for your needs with our Shopify Development Agency. Our Shopify eCommerce service providers design the policies to provide you with easy management of content, products, orders, cancellation allowing you to have full control of your eCommerce store. </p><p>Although Shopify has a lot of flexibility and options, no website can create itself. It is quite challenging on how to begin the task and build the features.</p><p>Experts at our Agency offer the best Shopify eCommerce development services and are committed to delivering high-quality results. Our developers have immense experience in creating hundreds of websites using the Shopify platform that SEO friendly and are able to rapidly increase the traffic. A comprehensive range of services is offered by our Shopify Development Company.</p>'}
          />
          <div className="row mt-5 justify-content-center">
            {shopifyDevCardData.map((item, index) => (
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
        title={'Get a quote for your Shopify powered eCommerce store today!'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'FAQs'}
            title={'FAQs for Shopify Developement'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
    </div>
  )
}

export default ShopifyDevelopment