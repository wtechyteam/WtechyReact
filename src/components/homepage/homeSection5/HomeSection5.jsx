import serviceIcon1 from '../../../assets/Images/homepage/digitalMarketing.png'
import serviceIcon2 from '../../../assets/Images/homepage/MarketingStrategies.png'


const HomeSection5 = () => {


    const serviceData = [
        {
            icon: serviceIcon1,
            title: 'Search Engine Optimization',
            description: 'We proffer an incredible array of services to our clients, we make sure that your customers can easily locate your business website online. From crafting a strategy to its execution, we are going to assist you to strive for brilliance, by helping you to improve your website performance and online campaigns.'
        },
        {
            icon: serviceIcon2,
            title: 'PPC Advertising',
            description: 'Boost your website instantaneously, by diverting relevant traffic with the help of PPC advertising. Google ad campaigns are one of the best sources of digital marketing, and you can immediately gain more traffic and generate leads.'
        },
        {
            icon: serviceIcon1,
            title: 'Content Creation',
            description: 'For any website to catch the attention of the audience, it is vital to create content that fascinates the readers. Our team ensures to present you with well-expressed content from blogging to articles, newsletters to emails, we present you with the best.'
        },
        {
            icon: serviceIcon2,
            title: 'Social Media Marketing',
            description: 'We proffer an incredible array of services to our clients, we make sure that your customers can easily locate your business website online.'
        },
        // Add more service sections as needed
    ];




    return (
        <section className='sectionPadding pt-0'>
            <div className="container text-center">
                <h4 className='section-title-sm '>Our Services</h4>
                <h2 className='title-xl '>Data-Driven Digital Marketing Services<br></br>To Nurture Your Business</h2>
                <p className='mb-4 '>The Digital Marketing world is highly competitive, and many would feel overwhelmed with uncertain metrics, skeptical strategies, and technical terminologies. We focus on helping you to grow and getting the results that advance their businesses. Our mission is to increase and improve the connection between the companies and their potential prospects. And our results speak volume about our success with our clients.</p>
                <p className=''>Using impeccable digital marketing tools, we provide our clients with creative ideas and customized strategies that help them grow their business globally.</p>
                <div className='listWrapper services text-start mt-5'>
                    {serviceData.map((service, index) => (
                        <div className='innerWrap' key={index} style={{ marginTop: `${index * 50}px` }}>
                            <span className='indexNumber'>{(index + 1).toString().padStart(2, '0')}</span>
                            <div className="icon">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <h2 className="title-md">{service.title}</h2>
                            <p className='mb-0'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default HomeSection5;