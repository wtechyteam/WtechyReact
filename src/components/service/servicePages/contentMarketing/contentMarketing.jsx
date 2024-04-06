import InnerBanner from '../../../common/InnerBanner';
import ImageInfoWrap from '../../../common/ImageInfoWrap';
import section1Image from './../../../../assets/Images/services/SEO.webp';
import section2Image from './../../../../assets/Images/services/what-we-do-service.png';

import serviceIcon1 from './../../../../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from './../../../../assets/Images/homepage/MarketingStrategies.png'

import SectionTopInfo from '../../../common/SectionTopInfo';
import FullWidthCTASection from '../../../common/FullWidthCTASection';
import FAQs from '../../../common/FAQs';

const ContentMarketing = () => {
  
  const serviceData = [
    {
      icon: serviceIcon1,
      title: 'Blog Posts and Articles',
      description: 'Generates awareness about your brand, makes people trust you, and attracts lead.'
    },
    {
      icon: serviceIcon2,
      title: 'Infographics',
      description: 'Information about your business provided in an appealing graphic way.'
    },
    {
      icon: serviceIcon1,
      title: 'Custom illustrations',
      description: 'Customized and personalized illustrations of your brands giving it a unique feel.'
    },
    {
      icon: serviceIcon2,
      title: 'Product Description',
      description: 'Describes the product’s value to potential customers with details about the features of your product, the problem it solves and benefits to generate sales.'
    },
    {
      icon: serviceIcon1,
      title: 'Case Studies',
      description: 'Showcase how your product and services have been implemented, executed and delivered successfully to customers.'
    },
    {
      icon: serviceIcon2,
      title: 'Press Releases',
      description: 'This makes your audience aware of your new products and services or any event happening in your business.'
    },
    {
      icon: serviceIcon1,
      title: 'News Letter',
      description: 'Regular updates to remain connected with your readers and potential customers.'
    },
    {
      icon: serviceIcon2,
      title: 'Social Media Posts',
      description: 'Providing information through text or image about your brand on social media platforms.'
    },
    {
      icon: serviceIcon1,
      title: 'Website Content',
      description: 'High-quality content for your website to get organic traffic and boost your business.'
    },
    {
      icon: serviceIcon2,
      title: 'Slide Share',
      description: 'Get your brand information and message through images.'
    },
    {
      icon: serviceIcon1,
      title: 'Reviews',
      description: 'Testimonials and advocacy supportive content are powerful converts of the audience into prospect customers.'
    },
  ];

  const faqData = [
    {
      question: 'Why would I provide information about my business openly and help competitors?',
      answer: 'With competition at its peaks, customers are oversaturated with the same businesses providing the same products and services. By educating your audience, you will help them in making an informed decision and look to you as an expert in the subject matter. This will lead to building customer loyalty and a long term trust relationship with your clientele.',
    },
    {
      question: 'How can Content Marketing benefit my business?',
      answer: 'Content marketing can boost your business in several ways. Firstly, it will increase your brand awareness. As the audience will get to know your brand and its value through high-quality content, this will build their trust in your business. As your brand’s base will grow, it will lead to generating website traffic and hence increased sales.',
    },
    {
      question: 'Do I have to keep creating content?',
      answer: 'Yes! You constantly need to publish content on different platforms to keep achieving results. As the content is being created at a large scale, your content may be pushed down by the new ones and your business becomes invisible. Moreover, content marketing is an ongoing process to boost your business sales.',
    },
    {
      question: 'How can I measure the results of Content Marketing?',
      answer: 'Determine your return on investment (ROI) and track the results once you invest in the content marketing strategy. Generally, your goals define the metrics you will track as you assess the results. You can see the results by tracking website traffic, bounce rate, social share or you can set up Google Analytics goals on your website. Also, you can track the number of leads, conversion rates in case you want to generate leads.',
    },
    // Add more FAQ items as needed
  ];
  return (
    <div>
      <InnerBanner
        title={"Content Marketing"}
        info={'Reach Out to Your Audience and Raise Brand Awareness with Our Content Marketing Services'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Improve brand reputation and build trust with valuable content'}
        imageUrl={section1Image}
        description={'<p>People have become fully dependent on the Internet to make any decision in their life. The shift to online media and more recently to smartphones, the audience is consuming content in new savvy ways.</p>      <p>This has made all the small and large businesses to develop comprehensive content strategies. Every perception related to your brand holds importance to you whether true or false. In the digitized world, it is your responsibility to maximize user experience in a positive way and reduce the pain points online.</p>'}
        isReverse={true}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        title={'Content is the solution for doing that.'}
        imageUrl={section2Image}
        description={'<p>Through authentic, genuine and informative blogs, articles, press releases, infographics or website content you can touch multiple platforms of a buyer’s journey. You can tell your story, narratives and attract the interest of clients in your products and services.Content marketing serves as an effective way of building brand awareness for your prospects and customers. As a Content Marketing Agency, we can do wonders by improving relevant organic traffic on your website and making your brand visible.</p><p class="text-20 fw-bold"><i>Request a quote for your business today!</i></p>'}
        showContactBtn={true}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding services '>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'Engage your audience'}
            title={'Attract customers and influence behavior with high-quality content'}
            description={'<p>There is nothing to market in your business without the content. Creating a high-value content involves how you execute to portray your ideas about the business and bring them into the lives of your audience.</p><p>Deploying multidimensional and repurposable assets is the key to great content marketing. A long content today may serve as a series of thematic blog post tomorrow.</p><p>The information about business services and products is needed to be provided. As a content creating agency, we have the aptitude to redeploy and repackage the information for a new strategic goal.</p><p>Content is ongoing and ever-changing which comes in all shapes and sizes. Our Content Creation Agency provides the following to customize your business strategy:</p>'}
          />
          <div className="row mt-5 justify-content-center">
            {serviceData.map((item, index) => (
              <div className='col-lg-4 col-md-4 mb-4 ' key={index} >
                <div className="cardWrap px-4 py-4 type1 card_shadow bg-gray">
                  <div className="cardIcon">
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
        title={'Consult our experts and work out a strategy for your business.'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Grow your business with effective Content Marketing Strategy'}
        imageUrl={section1Image}
        description={'<p>Content plays an important role in search engine scoring, attracting links and buzz, and social sharing. Thus, content is the backbone of our SEO services and link building strategies. SEO and content marketing go hand-in-hand.</p>      <p>Our experts dictate the tactical steps in your campaigns. We evaluate and update each strategy to scale the needs of your business, as the only thing more dangerous than no strategy is an outdated strategy.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Build your company’s content marketing strategy now!'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        isReverse={true}
        title={'Reach out to target audience with Content Optimization'}
        imageUrl={section2Image}
        description={'<p>Today’s consumers, make online searches before purchasing any product or services. Your business content should reach your potential customers to enhance sales.</p>      <p>Creating content is just half the job done. In order to be effective, the content must be reaching out to and consumed by the target audience. The addition of Meta titles, Meta description, relevant links, and keywords involves the optimization of content.</p>'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        title={'Our experts in content optimization'}
        imageUrl={section2Image}
        description={'<p>Optimizing the headlines leads to increased CTRs (click-through rate) and the images lead to increased user engagement.</p><p>However, if the content is not relevant to the target audience it could hardly be known as optimized. Besides, the main concept of content optimization involves how frequently your content is published.</p><p>Our experts in content optimization will help you achieve increased visibility of your business and conversions. We use keyword research, SEO practices, user behavior, and competitive insights to build the optimization strategy for the content.</p>'}
      />
      {/* ======New Section Start ====== */}
      <ImageInfoWrap
        customClass={'bg-gray'}
        isReverse={true}
        title={'Our Content Marketing Agency delivers Content that gets results'}
        imageUrl={section2Image}
        description={'<p>Today, content is being created at such a large scale even the great content can be lost in the ocean on the web. Therefore, the content needs to be unique, convincing, SEO-friendly with a relevant purpose.</p><p>Our Content Marketing Agency specializes in working with businesses creating exceptional content that can get the target audience to talk about the brand. With our professional experts and years of experience, we have delivered content marketing solutions to the world’s biggest brands.</p>'}
      />
      {/* ======New Section Start ====== */}
      <FullWidthCTASection
        title={'Uncertain about which strategy will be best for your business challenge? Let us help you'}
      />
      {/* ======New Section Start ====== */}
      <section className='sectionPadding'>
        <div className="container">
          <SectionTopInfo
            isCenter={true}
            isFullWidth={true}
            smallTitle={'FAQs'}
            title={'FAQs for Content Marketing'}
          />
          <FAQs faqList={faqData} />
        </div>
      </section>
    </div>
  )
}

export default ContentMarketing