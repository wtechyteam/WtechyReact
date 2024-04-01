import Slider from 'react-slick';
import testimonialImage from './../../../assets/Images/homepage/testi-2.png'



const HomeSection7 = () => {


    const testimonialData = [
        {

            authorName: 'Ivor Herbert',
            authorDesignation: 'Manager, Airlines',
            authorRating: 4,
            image: testimonialImage,
            description: 'We proffer an incredible array of services to our clients, we make sure that your customers can easily locate your business website online. From crafting a strategy to its execution, we are going to assist you to strive for brilliance, by helping you to improve your website performance and online campaigns.'
        },
        {
            authorName: 'PPC Advertising',
            authorDesignation: 'Manager, Airlines',
            authorRating: 5,
            image: testimonialImage,
            description: 'Boost your website instantaneously, by diverting relevant traffic with the help of PPC advertising. Google ad campaigns are one of the best sources of digital marketing, and you can immediately gain more traffic and generate leads.'
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
        autoplaySpeed: 5000 // Set the autoplay speed in milliseconds
    };

    return (
        <section className='sectionPadding'>
            <div className="container text-center">
                <h4 className='section-title-sm'>Testimonial</h4>
                <h2 className='title-xl '>Words From Our Customers</h2>
                <p className='sectionInfo '>Our tailored digital marketing strategies are designed to deliver significant results, ensuring your business stands out and achieves success in the digital landscape.</p>
                <Slider className='testimonialSlider' {...bannerSliderSettings}>
                    {testimonialData.map((item, index) => (
                        <div className='sliderWrap' key={index} >
                            <div className="testimonialWrap">
                                <p className='description'> {item.description}</p>
                                <span className="icon-quote"></span>
                                <div className="authorInfo">
                                    <div className="authorImage">
                                        <img src={item.image} alt={item.name} ></img>
                                    </div>
                                    <h2 className='title-md mb-0'>{item.authorName}</h2>
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