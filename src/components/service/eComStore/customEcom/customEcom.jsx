import InnerBanner from '../../../common/InnerBanner';
import ImageInfoWrap from '../../../common/ImageInfoWrap';
import section1Image from './../../../../assets/Images/services/SEO.webp';
import section2Image from './../../../../assets/Images/services/what-we-do-service.png';

import serviceIcon1 from './../../../../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../../../../assets/Images/homepage/MarketingStrategies.png'

import SectionTopInfo from '../../../common/SectionTopInfo';
import FullWidthCTASection from '../../../common/FullWidthCTASection';


const CustomEcom = () => {

  const customEComData = [
    {
      icon: serviceIcon1,
      title: 'Product data entry:',
      description: 'As a leading service provider, we focus to offer you professional product listing services that capture the attention of visitors on your e-commerce store. Our team carefully adds products on your e-commerce store as well as efficiently includes entire product details including Title, SKU, image URL, description, into CSV spreadsheet in order to make the results clear enough to understand for our clients.'
    },
    {
      icon: serviceIcon2,
      title: 'Editing and uploading product images:',
      description: '<p>High-quality and crystal clear images can grab the attention of the audience and increase the sale of a product. Our web designing professionals effectively crop, resize, retouch, and increase the quality of images that catches the attention of the visitors. We firmly focus on guidelines while uploading product images on a website.</p>'
    },
    {
      icon: serviceIcon1,
      title: 'Product Listing Services:',
      description: '<p>Businesses carry a multi-functional approach to grow in a productive manner that is why we firmly understand their requirements and can able to proceed with a bulk of product Listings at one time. We are also skilled in listing your products in a fixed price listing or auction category.</p><p>In addition to this our professional team carefully assigns a category or subcategory to your products that can help the customers to make a search on your products easily.</p>'
    },
    {
      icon: serviceIcon2,
      title: 'Processing and inventory management:',
      description: '<p>As an expert in the field, we help you to functions each and every order rapidly in order to deliver the product on accurate time that will create a positive impression on your customers. Moreover, our team is able to manage your inventory for avoiding the excess and shortage of products in the store.</p><p>In addition to this, we conduct productive pricing research, which can help your business to market the products at a competitive pricing of the marketplace.</p>'
    },

  ];
  return (
    <div>
      <InnerBanner
        title={"Custom E-Commerce Store Management"}
        info={'Maintain a well-functional E-commerce store with Custom E-commerce store management Experts'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'Cultivate your online store with certified E-commerce store management services'}
        imageUrl={section1Image}
        description={'<p>In this competitive marketing world, E-commerce is known as the major growth driver in the worldwide marketplace. As a result, E-commerce store enables a business to sell products online and create a strong presence in the digital platform.</p><p> E-commerce stores contribute to the growth of business and generate an effective result. It requires accurate in-house management in order to offer great services to potential customers. Managing an online store seems a tricky task but with expert store management services, you can easily fulfill all the additional requirements of your business.</p><p>As a reliable E-commerce store management company, we are glad to help you to manage your online store and achieve a unique presence in retail space. We can help you with quality strategy planning and its implementation and our primary goals are to effectively manage all the back functions like inventory management, order management, customer services, etc.</p><p>In order to create a comprehensive e-commerce business platform, you need frequent maintenance that effectively handles all the functions of the online store that contribute to the growth of a business.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Know your E-commerce store requirements.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        title={'Collaborate with the best Custom E-commerce Store Management Company'}
        imageUrl={section1Image}
        description={'<p>At present, the online stores are inspiring the e-commerce online selling operations for a number of businesses, and start-up businesses are considering several web development tools to impel their web store. One of the major reasons for the pervasive recognition of an e-commerce store is that it allocates organizations to grow and develop their business globally.Every business has different requirements and there is no one-fit to all. As a result, every platform demands, our team of experts leave no stone unturned when it comes to offering high-quality service that makes a business a leading one in the e-commerce world.</p><p>We develop high-end E-commerce solutions that attract prospects and facilitate customers’ engagement in order to generate high-profit rates. We firmly believe in keeping our process simple and aim to provide quick and hassle-free experience to our users.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Lead in the e-commerce world?'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        isReverse={true}
        title={'Create a revolution in online marketing with the best custom E-commerce store management services'}
        imageUrl={section1Image}
        description={'<p>Surviving in the digital marketing world is a challenging task. In order to move ahead in this competitive atmosphere, businesses need to make sure that their online stores always stay updated and provide a good experience to their customers. Besides building online stores, we also take every responsibility to increase online traffic Increase conversion rate as well as increase their functionality to flourish business in all means possible.</p><p>E-commerce stores are the finest way to reach your target customers and provide accurate services that make wider connections in the market place. It is an accurate strategy for a business by listing products on an online store, where an e-commerce seller can attract multiple opportunities to flourish their business on a large scale.</p><p>As there are a plethora of items listed in multiple categories that eventually make marketing a tough task. This is a major reason why businesses need professional support to create a high-quality listing of products on various E-commerce stores</p><p class="green_text">Our team of expert can able to manage a wide variety of product data entry task on online stores that includes:</p><ul><li>Online bulk product upload</li><li>Online product listing</li><li>Online Image editing and uploading</li><li>Online Inventory management</li></ul><p>Our in- house team strictly follows all the instructions for online product and image upload guidelines and ensures our clients a high-profile product listing on online store management.</p>'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding services bg-gray' style={{ paddingBottom: "50px" }}>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            description={"<p>As a leading custom E-commerce store management service provider, we firmly believe in offering high-end services according to a business requirement. We are known to offer end to end solutions of online product management services that amplify the sales rate of a business.</p><p>Here is the list of E-commerce store management services that are specially designed to suit all type of business needs:</p>"}
            title={'E-commerce store management services:'}
            smallTitle={'E-commerce store'}
          />
        </div>
      </section>
      {/* ======New Section Start ====== */}
      <section className='sectionPadding pt-0 services bg-gray'>
        <div className="container">
          <div className="row mx-0 justify-content-center">
            {customEComData.map((service, index) => (
              <div className='col-lg-6 col-md-6 px-0 ' key={index} >
                <div className="cardWrap cardType1 h-100 " >
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
        title={'Why you should Hire us?'}
        imageUrl={section2Image}
        description={'<p>As a leading E-commerce store management company, we have a vast experience in the product listing that allows us to provide a productive and customized solution to our clients, which meets their expectation level. Also, we maintain professional database services for future references.</p>'}
      />
    </div>
  )
}

export default CustomEcom;