import InnerBanner from '../../../common/InnerBanner';
import ImageInfoWrap from '../../../common/ImageInfoWrap';
import section1Image from './../../../../assets/Images/services/SEO.webp';
import section2Image from './../../../../assets/Images/services/what-we-do-service.png';

import serviceIcon1 from './../../../../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../../../../assets/Images/homepage/MarketingStrategies.png'

import SectionTopInfo from '../../../common/SectionTopInfo';
import FullWidthCTASection from '../../../common/FullWidthCTASection';
import FAQs from '../../../common/FAQs';

const AmazonStore = () => {

  const amazonData = [
    {
      icon: serviceIcon1,
      title: 'Amazon Store Creation',
      description: 'If you are new to the world of Amazon, our team of professionals will help you to design and create a custom Amazon storefront that will display all the products and will represent your business. We proffer to craft the designs that propose the best customer experience and displays the best of your brand’s products. Our objective is to succeed, so we set up your Amazon storefront for victory.'
    },
    {
      icon: serviceIcon2,
      title: 'Product Optimization',
      description: 'In order to increase sales, it is crucial for your products to stay in front of your customers. Our agency will help you to improve the online visibility of your products on Amazon Store, by productively optimizing your listings. If you’re new to the Amazon business, our experts will help you to set up your storefront. Our optimization strategy involves creating keywords based titles, compelling product descriptions, and edifying EBC (Enhanced Brand Description).'
    },
    {
      icon: serviceIcon1,
      title: 'Amazon Store Optimization',
      description: 'If you have an already established business on Amazon and are finding ways to propel it, then we can be your best and reliable solution. Our well-versed experts will audit your Amazon store and optimizes it in order to drive sales and increase brand awareness. With help of customized optimization strategies, you can witness a series of changes, which will help in effectively cultivating your business, these activities include a complete redesign of your storefront in order to showcase your best products.'
    },
    {
      icon: serviceIcon2,
      title: 'Competitor Analysis',
      description: 'Prior to creating or optimizing the Amazon store and marketplace, we assign you a devoted Amazon Marketing Specialist who will conduct profound research to find out your competitors and check what they are offering on Amazon. We evaluate their products, storefronts, and advertisements, in order to build up a design and craft an optimization strategy that will make you stay ahead of your competition, and be the strongest merchant on Amazon.'
    },

  ];

  const faqData = [
    {
      question: 'How does selling work on Amazon?',
      answer: '<p>Selling on Amazon is quite an easy process, the first thing you need to decide is whether you want to opt for FBA or FBM. After you have set your priorities, the next step you need to follow is to list the products you want to sell on the Amazon marketplace.</p><p>You need to add product title and description based on the high search volume keywords so that when the customers will such for the product based on the keyword you have added, your product will be displayed.</p><p>The consumers order the products and you will be shipping the product if you chose FBM, but if you opt for FBA, then Amazon will be handling all the shipping formalities.</p>',
    },
    {
      question: 'What are the steps to register as a seller on Amazon?',
      answer: '<p>There are a bunch of things you need we have listed them below:</p><ul><li>Your business details</li><li>Contact details including email id and mobile number</li><li>Basic information about your business, like the products you proffer to sell on Amazon</li><li>A credit card with a valid billing address</li><li>Your tax identity information</li></ul>',
    },
    {
      question: 'How do I manage my selling account?',
      answer: 'You need to use the Seller Central website in order to manage your selling account. The seller central provides the merchants with all the important traits, as it is a platform where you can manage your selling account, make inventory updates, manage orders, add product information, upload new products, optimize the storefront, and manage payments.',
    },
    // Add more FAQ items as needed
  ];
  return (
    <div>
      <InnerBanner
        title={"Amazon Store Management"}
        info={'Increase Your Sales with Help of the Leading Amazon Marketing Agency'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'Optimize Your Amazon Store for Maximum Sales with Our Professional Management Services'}
        imageUrl={section1Image}
        description={'<p>TEven though the online market has gained immense acknowledgment in recent years, the pursuit of endurance within it has been becoming intense with every passing day. Every organization wants to flourish in such a competitive environment, and for this businesses need to ensure that their products offer the best experience to the consumers.</p><p>Amazon is a budding platform, and it is responsible for more than 40% of sales online, and millions of shoppers visit Amazon whenever they have an urge to search for a new product, especially to stay with the trend.</p><p>Organizations who are planning to start an E-commerce business, can’t disagree with the value of Amazon and this is the reason why Amazon Store management is essential for every merchant.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Let the professionals manage your Amazon account.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        title={'Make the Product Listing an Easy Process with Experts'}
        imageUrl={section2Image}
        description={'<p>Amazon is one of the most popular e-commerce stores in the world. Being praised for its consistency and a great buying experience for every customer, always building a strong relationship with the sellers by collaborating to deliver great quality of products to every buyer.</p><p>When you plan on to start a business on Amazon, you will need to put out a bunch of strategies, you can’t just think and ship the products to Amazon, it requires a lot of work. If you yearn for selling your products, you need to know that you are not alone in the race, you will be competing with several third-party merchants.</p><p>In order to take the burden off your shoulders, we are here to help you with product listing on Amazon that will facilitate you to focus on nurturing your business rather than fretting over managing the products on Amazon.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Looking for an expert to help you sell products on Amazon?'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'Partner with Us and Let Your Business Reach on New Horizons'}
        imageUrl={section1Image}
        description={'<p>As an E-commerce business owner, it is crucial for you to acknowledge that Amazon upholds a huge potential that can help you to nurture your business effectively.</p><p>By collaborating with us, you will be receiving an all-inclusive set of resources that will aid you to increase your success on Amazon, this can maximize your revenue, as well as will help in increasing your online visibility in search results.</p><p>With our satisfied and contented clients throughout the world, we provide trusted Amazon Store setup and management services. We also offer additional Amazon marketing services, like EBC creation, pay-per-click (PPC), storefront handling, and keyword optimization.</p>'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding pt-0 services'>
        <div className="container">
          <div className="row mx-0 justify-content-center">
            {amazonData.map((service, index) => (
              <div className='col-lg-6 col-md-6 px-0 ' key={index} >
                <div className="cardWrap cardType1 h-100 ">
                  <div className="cardIcon cardIcon-Type1">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="cardInfo">
                    <h2 className="cardTitle title-md fw-bold">{service.title}</h2>
                    <p className='cardDescription text-sm mb-0'>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Are you ready to launch your business on Amazon?'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'FAQs'}
            title={'FAQs for Amazon Store Management'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
    </div>
  )
}

export default AmazonStore