import serviceIcon1 from '../../../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from '../../../assets/Images/homepage/MarketingStrategies.png'
import { useNavigate } from 'react-router-dom'


const HomeSection5 = () => {
    const navigate = useNavigate()
    
    const handleCardPath = (service) => {
        navigate(`${service.path}`)
        window.scroll(0, 0)
    }

    const serviceData = [
        {
            icon: serviceIcon1,
            title: 'Search Engine Optimization',
            path: 'service/search-engine-optimization',
            description: 'We proffer an incredible array of services to our clients, we make sure that your customers can easily locate your business website online. From crafting a strategy to its execution, we are going to assist you to strive for brilliance, by helping you to improve your website performance and online campaigns.'
        },
        {
            icon: serviceIcon2,
            title: 'PPC Advertising',
            // path:'service/search-engine-optimization',
            description: 'Boost your website instantaneously, by diverting relevant traffic with the help of PPC advertising. Google ad campaigns are one of the best sources of digital marketing, and you can immediately gain more traffic and generate leads.'
        },
        {
            icon: serviceIcon1,
            title: 'Content Creation',
            // path:'service/search-engine-optimization',
            description: 'For any website to catch the attention of the audience, it is vital to create content that fascinates the readers. Our team ensures to present you with well-expressed content from blogging to articles, newsletters to emails, we present you with the best.'
        },
        {
            icon: serviceIcon2,
            title: 'Social Media Marketing',
            path: 'service/social-media-optimization',
            description: 'We proffer an incredible array of services to our clients, we make sure that your customers can easily locate your business website online.'
        },
        // Add more service sections as needed
    ];




    return (
        <section className='sectionPadding pt-0'>
            <div className="container text-center">
                <div className="sectionTopInfo" data-aos="fade-up" data-aos-duration="1500">
                    <h4 className='section-title-sm '>Our Services</h4>
                    <h2 className='title-xl fw-bold'>Data-Driven Digital Marketing Services<br></br>To Nurture Your Business</h2>
                    <p className='mb-4 '>The Digital Marketing world is highly competitive, and many would feel overwhelmed with uncertain metrics, skeptical strategies, and technical terminologies. We focus on helping you to grow and getting the results that advance their businesses. Our mission is to increase and improve the connection between the companies and their potential prospects. And our results speak volume about our success with our clients.</p>
                    <p className=''>Using impeccable digital marketing tools, we provide our clients with creative ideas and customized strategies that help them grow their business globally.</p>
                </div>
                <div className='listWrapper services text-start mt-5'>
                    {serviceData.map((service, index) => (
                        <div onClick={() => handleCardPath(service)} className='innerWrap cardType2 cardHoverEffect' key={index} style={{ marginTop: `${index * 50}px` }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay={index * 400} >
                            <span className='cardIndexNumber'>{(index + 1).toString().padStart(2, '0')}</span>
                            <div className="icon cardIcon-Type1">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <h2 className="title-md fw-bold">{service.title}</h2>
                            <p className='mb-0'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default HomeSection5;