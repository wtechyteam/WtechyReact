import InnerBanner from '../components/common/InnerBanner'
import portImage1 from '../assets/Images/portfolio/image-1.webp';
import logoImg from '../assets/Images/upwork.png';
import logoImg2 from '../assets/Images/clutch.png';
import logoImg3 from '../assets/Images/PeoplePerHour.webp';
import logoImg4 from '../assets/Images/fiverr.png';
import logoImg5 from '../assets/Images/guru.png';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';

const TopWorkMarketplaces = () => {
    const topWorkMarketPlacesData = [
        {
            logoTitle: `${logoImg}`,
            title: "UpWork",
            hireLink: "https://www.upwork.com/agencies/wtechy/",
            description: "Upwork is the world’s leading work center that interfaces organizations with top companies, agencies, freelancers, and global talent to get connected. Wtechy, a leading IT solutions provider, has been winning hearts for years. Our high-appraised profile and positive testimonials on Upwork ensure our respected clients of value and on-time project delivery. Right from Digital Marketing to Web Development, we have been serving our clients with pretty much every technology.",
            image1: `${portImage1}`,
            images: [
                { img1: `${portImage1}` },
                { img1: `${portImage1}` },
                { img1: `${portImage1}` }
            ]
        }, {
            logoTitle: `${logoImg2}`,
            title: "Clutch",
            hireLink: "https://clutch.co/profile/wtechy-private#_summary",
            description: "Clutch permits clients to find and pursue their business partners internationally. Countless clients use this platform with the trust to get the genuineness in work provided to them. The transparency offered by Clutch assists clients to employ the talent with the right ability. Wtechy has been effectively enlisted on Clutch with high appraising and likely feedback from the clients. We have conveyed a few ideal projects of Digital Marketing, Online Reputation Management, Web Development, Ecommerce Management, Content Writing, Search Engine Optimization, and Web Design that are appropriate for our clients’ requirements.",
            image1: `${portImage1}`,
        },

        {
            logoTitle: `${logoImg3}`,
            title: "PeoplePerHour",
            hireLink: "*",
            description: "PeoplePerHour is a virtual organization that plays as a bridge between clients and experts to continue with the project deals. This brilliant platform hosts a worldwide community that guarantees a beneficial work transition. Wtechy is a verified agency on PeoplePerHour platform and we have been serving creative solutions for organizations that seek growth in the digital world.",
            image1: `${portImage1}`,

        }, {
            logoTitle: `${logoImg4}`,
            title: "Fiverr",
            hireLink: "https://www.fiverr.com/seemasingh5020",
            description: "Fiverr is counted as one of the most reliable marketplaces that offer a typical platform to clients to work with experts, and organizations to bind and connect. It expands the talent pool and assists clients with recruiting the right experts for their business. Wtechy is a registered and dynamic firm on Fiverr. The deliverables that we offer to our clients on Fiverr are profoundly valued by our partners. Here, our top capacities are evaluated distinctly according to the result our clients prospered.",
            image1: `${portImage1}`,
            images: [
                { img1: `${portImage1}` },
                { img1: `${portImage1}` },
                { img1: `${portImage1}` }
            ]

        },
        {
            logoTitle: `${logoImg5}`,
            title: "Guru",
            hireLink: "https://www.guru.com/freelancers/wtechy-private-limited",
            description: "Guru offers organizations a tool to team up and finish work by hiring specialists according to the necessities. It is a safe, adaptable, and cost-effective platform for both clients and work experts to proceed. We are registered on this safe and secure online marketplace and have been providing all Digital Marketing services with the help of the latest technologies. Check us out to see why you need to hire us for your marketing needs.",
            image1: `${portImage1}`,
            images: [
                { img1: `${portImage1}` },
                { img1: `${portImage1}` },
                { img1: `${portImage1}` }
            ]
        },
    ]

    const bannerSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'ease-in-out',
        autoplaySpeed: 5000 // Set the autoplay speed in milliseconds
    };
    return (
        <>
            <InnerBanner title={'Top Work Marketplaces'} info={'Wtechy has enrolled on the biggest as well as the most famous platforms worldwide. We assist their clients with prospering results. '} />
            <div className="portfolioWrapper">
                {topWorkMarketPlacesData && topWorkMarketPlacesData.map((item, index) => {
                    return (
                        <section className={`sectionPadding`}>
                            <div key={index} className="container">
                                <div className="row">
                                    <div className="col-md-6 mb-5 mb-md-0 text-center">
                                        {item.images ?
                                            <Slider className='' {...bannerSliderSettings}>
                                                {item.images && item.images.map((slidImg, index) => (
                                                    <div key={index} className=''>
                                                        <img className='portfolio_img_1 box_shadow_none  w-100' title={item.title} src={slidImg.img1} alt={item.title} />
                                                    </div>
                                                ))}

                                            </Slider>
                                            :
                                            <img className='portfolio_img_1 box_shadow_none  w-100' title={item.title} src={item.image1} alt={item.title} />
                                        }


                                    </div>
                                    <div className="col-md-6">
                                        <Image className='logo_title' title={item.title} src={item.logoTitle} alt={item.title} />
                                        <p>{item.description}</p>
                                        <a target='_blank' rel="noreferrer" href={item.hireLink} className='mt-2 dBtn btnSecondary hasShadow'>Hire Us Now</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        </>
    );
};

export default TopWorkMarketplaces;
