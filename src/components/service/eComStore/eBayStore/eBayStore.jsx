import InnerBanner from '../../../common/InnerBanner';
import ImageInfoWrap from '../../../common/ImageInfoWrap';
import section1Image from './../../../../assets/Images/services/SEO.webp';
import section2Image from './../../../../assets/Images/services/what-we-do-service.png';

import serviceIcon1 from './../../../../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../../../../assets/Images/homepage/MarketingStrategies.png'

import SectionTopInfo from '../../../common/SectionTopInfo';
import FullWidthCTASection from '../../../common/FullWidthCTASection';

const EbayStore = () => {
  
  const ebayStoreData = [
    {
      icon: serviceIcon1,
      title: 'EBay product data entry',
      description: 'We provide effective eBay product listings Services in order to catch the visitors of eBay. We expert team carefully Include products on a business eBay account or productively enter product details such as Title, description, SKU, image URL into CSV spreadsheet to make the facts easier to understand for clients.'
    },
    {
      icon: serviceIcon2,
      title: 'EBay Product Listing Services',
      description: '<p>We firmly understand the requirements of a business and can proceed a bulk of eBay products Listings at time. We are equally skilled in listing products under the fixed price listing category or auction category.</p><p>Our eBay expert team carefully assigns a subcategory or category to your products that help the prospective customers to easily search on your products.</p>'
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

  return (
    <div>
      <InnerBanner
        title={"Ebay Store Management"}
        info={'Establish a strong presence on web stores with a leading Ebay Store Management company.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'Cultivate your web store with the experts of Ebay Store Management'}
        imageUrl={section1Image}
        description={'<p>Online marketing is getting competitive day by day, the requirement to develop a strong presence in every market place has become an essential demand of every business. You can flourish your business with the help of the eBay store management expert and can easily build firm relations with your potential customers.</p><p>As a professional services provider, we simplify the online internal process and make every possible effort to grow your online market store by offering a broad range of services that suits your business requirements.</p><p>Online eBay stores offer their sellers the opportunity to sell multiple items around the globe. However, managing this remarkable resource requires good management and decision making skills. We carry an attentive approach to reducing the constraints on time and boost-up the profitability online.</p><p class="green_text">As a leading eBay store management company we are glad to help our clients with:</p><ul><li>Market research to identify current opportunities</li><li>Pricing recommendations and competitor insights</li><li>Creating a bespoke eBay listing template</li><li>Robust listing creation, optimization, and management</li><li>Business consultancy</li></ul><p>We take the total responsibility of managing and promoting your eBay online store. We will effectively guide and suggest the proven methods of promotion that is required to create an online store or update the existing one.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Boost your online store with effective eBay store management company.'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding services' style={{paddingBottom:"50px"}}>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={"<p>As a leading store management service provider, we believe in offering customized services according to business needs. We are known to offer end to end solutions for eBay product management services that increase the sales rate of a business.</p><p>Here is the list of eBay store management services that are designed to suit your business type:</p>"}
            title={'Ebay Store Management Services'}
            smallTitle={'our services'}
          />
        </div>
      </section>
      {/* ======New Section Start ====== */}
      <section className='sectionPadding pt-0 services'>
        <div className="container">
          <div className="row mx-0 justify-content-center">
            {ebayStoreData.map((service, index) => (
              <div className='col-lg-6 col-md-6 px-0 ' key={index} >
                <div className="cardWrap cardType1 h-100" >
                  <div className="cardIcon cardIcon-Type1" >
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="cardInfo">
                    <h2 className="cardTitle title-md fw-bold">{service.title}</h2>
                    <div className='cardDescription text-sm mb-0' dangerouslySetInnerHTML={{ __html: service.description }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        showContactBtn={true}
        customClass={'bg-gray'}
        title={'Collaborate with the best Ebay Store Management services and achieve your web store desired goals'}
        imageUrl={section2Image}
        description={'<p>There is no denying fact that the surviving in this online marketing world is a challenging task. in order to move ahead in this competitive environment, the business has to ensure that the online store always stays updated and offer an amazing experience to their potential customers.</p><p>EBay is the most popular online store with wide connections in the marketplace. It simply reflects that it is the finest store where an e-commerce seller can have an immense opportunity to cultivate their business on a large scale.</p><p>There are millions of items are listed in around 50k categories, which clearly make marketing of products a highly competitive task. For a successful start, businesses need professional support in order to create high-impact listings of products on eBay.</p><p class="green_text">Our expert team of eBay store management can able to handle a wide variety of eBay product data entry task that includes:</p><ul><li>eBay bulk product upload</li><li>eBay product listing</li><li>eBay image editing and uploading</li><li>eBay inventory management</li></ul><p>Our professional team of eBay store management strictly follows all the instructions for eBay product and image upload guidelines in order to ensure our clients a high-profile eBay product listing.</p><p class="text-20 fw-bold"><i>Boost your online store with effective eBay store management company.</i></p>'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'Why you should Hire us?'}
        imageUrl={section2Image}
        description={'<p>Our team has vast experience in eBay product listing services that allows us to offer a customized solution for their specific business requirements. Our eBay product listing experts offer a quick turn around time and offer guaranteed services to our customers. We maintain effective database services for future references.</p>'}
      />
    </div>
  )
}

export default EbayStore