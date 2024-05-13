import Slider from 'react-slick';
import testimonialImage from './../../../assets/Images/homepage/testi-2.png'



const HomeSection7 = () => {


    const testimonialData = [
        {

            authorName: 'Jorge De Los Santos',
            authorDesignation: 'UK',
            authorRating: 4,
            image: testimonialImage,
            description: "From the start, they were professional, responsive SEO experts. Their top-notch content engaged audiences and improved search engine rankings. Their ability to transform ideas into compelling pieces and provide valuable insights improved my website's performance."
        },
        {
            authorName: 'Farrah Motley',
            authorDesignation: 'United states',
            authorRating: 5,
            image: testimonialImage,
            description: 'Randeep was very responsive and offered excellent service. I highly recommend him and his team to anyone in need of an SEO expert. '
        },
        {
            authorName: 'Erst',
            authorDesignation: 'Germany',
            authorRating: 5,
            image: testimonialImage,
            description: 'The collaboration with Seema has been highly professional. She has provided excellent service, which resulted in improved visibility of our service on the Internet. Thank you very much for your support so far. We eagerly look forward to continuing our co-operation. '
        },
        {
            authorName: 'Yaiza Martin',
            authorDesignation: 'UAE',
            authorRating: 5,
            image: testimonialImage,
            description: "Randeep's SEO work is commendable. He showed a deep understanding of search engine optimization principles and applied them effectively to our website. We observed noticeable improvements in our search rankings and organic traffic. His approach was methodical, and he kept us informed throughout the process."
        },
        {
            authorName: 'Anderson',
            authorDesignation: 'US',
            authorRating: 5,
            image: testimonialImage,
            description: "Seema's willingness to get the job done on time and in the best possible way is always open to input, and politeness, and just an awesome freelancer to work with. We will continue using Seema for our on-page SEO needs, both now and in the future."
        },
        {
            authorName: 'Anonymous ',
            authorDesignation: 'Australia',
            authorRating: 5,
            image: testimonialImage,
            description: 'Very happy with the outcome. They were patient with us and accommodated all the design tweaks and updated accordingly. It was a very experience.'
        },
    ];


    const bannerSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'ease-in-out',
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <section className='sectionPadding'>
            <div className="container text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                <div className="sectionTopInfo" >
                    <h4 className='section-title-sm'>Testimonial</h4>
                    <h2 className='title-xl fw-bold'>Words From Our Customers</h2>
                    <p className='sectionInfo '>Check out what our satisfied customers have to say! See how Wtechy has helped them achieve their goals and overcome challenges. </p>
                </div>
                <Slider className='testimonialSlider' {...bannerSliderSettings}>
                    {testimonialData.map((item, index) => (
                        <div className='sliderWrap' key={index} >
                            <div className="testimonialWrap">
                                <p className='description'> {item.description}</p>
                                <span className="icon-quote"></span>
                                <div className="authorInfo">
                                    <div className="authorImage">
                                        <img src={item.image} alt={item.name} title={item.name} ></img>
                                    </div>
                                    <h2 className='title-md mb-0 fw-bold'>{item.authorName}</h2>
                                    <h6 className='title-sm'>{item.authorDesignation}</h6>

                                    <div className="rating">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <i key={i} className={`fa fa-star ${i < item.authorRating ? 'filled' : 'empty'}`}></i>

                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>

    );
};

export default HomeSection7;