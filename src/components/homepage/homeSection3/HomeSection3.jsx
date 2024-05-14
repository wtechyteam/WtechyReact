import serviceIcon1 from '../../../assets/Images/homepage/Digitalmarketing.svg'
import serviceIcon2 from '../../../assets/Images/homepage/MarketingStrategies.svg'
import serviceIcon3 from '../../../assets/Images/homepage/StrongRelations.svg'
import serviceIcon4 from '../../../assets/Images/homepage/SustainandGrow.svg'

const HomeSection2 = () => {

    const serviceData = [
        {
            icon: serviceIcon1,
            title: 'Digital Marketing',
            description: 'Digital channels allow businesses to expand their reach and connect with their potential customers worldwide. And digital marketing is that component that lets you promote your product and services to the right audience. '
        },
        {
            icon: serviceIcon2,
            title: 'Marketing Strategies',
            description: 'By utilizing many prominent digital marketing strategies like Email Marketing, Search Engine Optimization (SEO), Content Marketing, Social Media Marketing, and Search Engine Marketing, you can tap into a vast network of potential customers and advertise your website. '
        },
        {
            icon: serviceIcon3,
            title: 'Strong Relations',
            description: 'While many businesses face several challenges in this competitive online marketplace, digital channels provide abundant opportunities to create expressive, quality content that builds up strong relations with their prospects. '
        },
        {
            icon: serviceIcon4,
            title: 'Sustain and Grow',
            description: 'It’s almost impossible to sustain and grow a business without going digital and we can help you in devising strategies and creating content that will promote your brand in the best possible way to all your potential customers around the world. '
        },
        // Add more service sections as needed
    ];

    return (
        <section className='sectionPadding bg-gray'>
            <div className="container text-center">
                <div className="sectionTopInfo" data-aos="fade-up" data-aos-duration="1500">
                    <h4 className='section-title-sm'>Big Results</h4>
                    <h2 className='title-xl fw-bold'>Focusing on Delivering Big Results<br></br>with Customized Digital Marketing Strategies</h2>
                    <p className='sectionInfo '>Our customized digital marketing strategies are designed to deliver significant results, making sure your business stands out and achieves success in the digital landscape. </p>
                </div>
                <div className='listWrapper fetchers mt-5'>
                    {serviceData.map((service, index) => (
                        <div className='innerWrap cardType1 text-start' key={index} data-aos="fade-up"  data-aos-delay="600" data-aos-duration="1500">
                            <div className="icon cardIcon-Type1">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <h2 className="title-md fw-bold text-black">{service.title}</h2>
                            <p className=''>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default HomeSection2;