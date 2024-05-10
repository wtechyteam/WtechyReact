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
            description: 'We offer our clients many services and assure that your customers can easily find your business website online. From helping you plan and carry out strategies, we are going to assist you to do your best, by helping you to improve your website performance and online ads. '
        },
        {
            icon: serviceIcon2,
            title: 'PPC Advertising',
            // path:'service/search-engine-optimization',
            description: 'Quickly increase the number of visitors to your website by using PPC advertising. These ads help attract the right visitors.  Google ads are a great way to do this. They can bring you more visitors right away and help you find potential customers. '
        },
        {
            icon: serviceIcon1,
            title: 'Content Creation',
            // path:'service/search-engine-optimization',
            description: "To get people interested in a website, it's super important to have content that fascinates the readers and grabs their attention. Our team makes sure to present you with well-expressed content, whether it's for blogs, articles, newsletters, or emails. We aim to impress you with our writing skills!"
        },
        {
            icon: serviceIcon2,
            title: 'Social Media Marketing',
            path: 'service/social-media-optimization',
            description: 'We offer services to help clients boost their online presence through social media marketing, ensuring their website is easily found by customers. We use various social media platforms to promote your website, attract more visitors, and increase your online visibility and customer reach. '
        },
        // Add more service sections as needed
    ];




    return (
        <section className='sectionPadding pt-0'>
            <div className="container text-center">
                <div className="sectionTopInfo" data-aos="fade-up" data-aos-duration="1500">
                    <h4 className='section-title-sm '>Our Services</h4>
                    <h2 className='title-xl fw-bold'>Data-Driven Digital Marketing Services<br></br>To Nurture Your Business</h2>
                    <p className='mb-4 '>The Digital Marketing world is highly competitive, and many would feel overwhelmed with uncertain metrics, skeptical strategies, and technical terminologies. We focus on helping you to grow and getting the results that advance their businesses. Our mission is to increase and improve the connection between the companies and their potential prospects. And our results speak volume about our success with our clients. </p>
                    <p className=''>Using impeccable digital marketing tools, we provide our clients with creative ideas and customized strategies that help them grow their business globally. </p>
                </div>
                <div className='listWrapper services text-start mt-5'>
                    {serviceData.map((service, index) => (
                        <div onClick={() => handleCardPath(service)} className='innerWrap cardType2 cardHoverEffect' key={index} style={{ marginTop: `${index * 25}px` }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay={index * 400} >
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