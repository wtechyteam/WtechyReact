import InnerBanner from '../components/common/InnerBanner'
import portImage1 from '../assets/Images/portfolio/clipboard-image-1-1.webp';
import portImage2 from '../assets/Images/portfolio/clipboard-image-1-2.webp';
import portImage3 from '../assets/Images/portfolio/clipboard-image-1-3.webp';

import portImage21 from '../assets/Images/portfolio/clipboard-image-2-1.webp';
import portImage22 from '../assets/Images/portfolio/clipboard-image-2-2.webp';
import portImage23 from '../assets/Images/portfolio/clipboard-image-2-3.webp';

import portImage31 from '../assets/Images/portfolio/clipboard-image-3-1.webp';
import portImage32 from '../assets/Images/portfolio/clipboard-image-3-2.webp';
import portImage33 from '../assets/Images/portfolio/clipboard-image-3-3.webp';

import portImage41 from '../assets/Images/portfolio/clipboard-image-4-1.webp';
import portImage42 from '../assets/Images/portfolio/clipboard-image-4-2.webp';
import portImage43 from '../assets/Images/portfolio/clipboard-image-4-3.webp';

import portImage51 from '../assets/Images/portfolio/clipboard-image-5-1.webp';
import portImage52 from '../assets/Images/portfolio/clipboard-image-5-2.webp';
import portImage53 from '../assets/Images/portfolio/clipboard-image-5-3.webp';

import portImage61 from '../assets/Images/portfolio/clipboard-image-6-1.webp';
import portImage62 from '../assets/Images/portfolio/clipboard-image-6-2.webp';
import portImage63 from '../assets/Images/portfolio/clipboard-image-6-3.webp';

import portImage71 from '../assets/Images/portfolio/clipboard-image-7-1.webp';
import portImage72 from '../assets/Images/portfolio/clipboard-image-7-2.webp';
import portImage73 from '../assets/Images/portfolio/clipboard-image-7-3.webp';

import portImage81 from '../assets/Images/portfolio/clipboard-image-8-1.webp';
import portImage82 from '../assets/Images/portfolio/clipboard-image-8-2.webp';
import portImage83 from '../assets/Images/portfolio/clipboard-image-8-3.webp';

import portImage91 from '../assets/Images/portfolio/clipboard-image-9-1.webp';
import portImage92 from '../assets/Images/portfolio/clipboard-image-9-2.webp';
import portImage93 from '../assets/Images/portfolio/clipboard-image-9-3.webp';

import portImage101 from '../assets/Images/portfolio/clipboard-image-10-1.webp';
import portImage102 from '../assets/Images/portfolio/clipboard-image-10-2.webp';
import portImage103 from '../assets/Images/portfolio/clipboard-image-10-3.webp';

import portImage111 from '../assets/Images/portfolio/clipboard-image-11-1.webp';
import portImage112 from '../assets/Images/portfolio/clipboard-image-11-2.webp';
import portImage113 from '../assets/Images/portfolio/clipboard-image-11-3.webp';

import portImage121 from '../assets/Images/portfolio/clipboard-image-12-1.webp';
import portImage122 from '../assets/Images/portfolio/clipboard-image-12-2.webp';
import portImage123 from '../assets/Images/portfolio/clipboard-image-12-3.webp';

import portImage131 from '../assets/Images/portfolio/clipboard-image-13-1.webp';
import portImage132 from '../assets/Images/portfolio/clipboard-image-13-2.webp';
import portImage133 from '../assets/Images/portfolio/clipboard-image-13-3.webp';

import portImage141 from '../assets/Images/portfolio/clipboard-image-14-1.webp';
import portImage142 from '../assets/Images/portfolio/clipboard-image-14-2.webp';
import portImage143 from '../assets/Images/portfolio/clipboard-image-14-3.webp';

const Portfolio = () => {
    const portfolioData = [
        {
            id: 1,
            title: "Atlanta Exotic and Luxury Car Rentals",
            description: "Atlanta Exotic and Luxury Car Rentals offer an assortment of luxury cars of different segments from manufacturers such as Lamborghini, Rolls Royce, Aston Martin, Bentley, Mercedes, Ferrari, Maserati, and Land Rover.",
            image1: `${portImage1}`,
            image2: `${portImage2}`,
            image3: `${portImage3}`,
        },
        {
            id: 2,
            title: "Laughing Hyena",
            description: "Laughing Hyena Records is one of the first Comedy Clubs in New York City. It is an independent record label/brand licensing company. They have sold millions of albums serving millions of people. It is a global brand that sells comedy albums. You can buy entertainment comedy albums and enjoy the comedy.",
            image1: `${portImage21}`,
            image2: `${portImage22}`,
            image3: `${portImage23}`,
        },
        {
            id: 3,
            title: "Velvex",
            description: "Velvex, formed by the Nandan group of companies, is the fastest-growing company that provides lubricants, petroleum derivatives, and food products catering to multi-disciplinary industries. The group works with a vision to become leaders in manufacturing genuine oils, greases, and specialty oils with a significant presence in the industry.",
            image1: `${portImage31}`,
            image2: `${portImage32}`,
            image3: `${portImage33}`,
        },
        {
            id: 4,
            title: "Lucent Graphic Solutions",
            description: "Lucent Graphic Solutions specializes in Graphic Services, Wall Wraps, Window Wraps, Floor Graphics, Trade Show Displays, Signs / Banners, Lobby Sings, Pop-Up Displays, and much more.",
            image1: `${portImage41}`,
            image2: `${portImage42}`,
            image3: `${portImage43}`,
        },
        {
            id: 5,
            title: "Microthermics",
            description: "MicroThermics is a world leader proffering its services in UHT/HTST sterilization and aseptic processing systems. We produce, develop and design small-scale equipment for high-value/low volume products with increased product quality.",
            image1: `${portImage51}`,
            image2: `${portImage52}`,
            image3: `${portImage53}`,
        },
        {
            id: 6,
            title: "Joint Replacement Hawaii",
            description: "Dr. Paul Norio Morton is a board-certified orthopedic surgeon who practices on Oahu and the Big Island. He treats a broad range of orthopedic conditions, including arthritis, sports injuries, hip and knee replacements, trauma, and robotic joint arthroplasty.",
            image1: `${portImage61}`,
            image2: `${portImage62}`,
            image3: `${portImage63}`,
        },
        {
            id: 7,
            title: "Test Champs",
            description: "Test Champs offers extra practice to assist the students with Selective School Exams and NAPLAN. Every state organizes individual exams with different questions and a different time limit for the test. Most of the Selective Schools practice tests available online are mainly for tests in New South Wales.",
            image1: `${portImage71}`,
            image2: `${portImage72}`,
            image3: `${portImage73}`,
        },
        {
            id: 8,
            title: "Black Light Candles",
            description: "Black Light Candles are made with 100% genuine soy wax obtained from pure soybeans. All candles are poured and signed perfectly with the fabulous fragrance by hand.",
            image1: `${portImage81}`,
            image2: `${portImage82}`,
            image3: `${portImage83}`,
        },
        {
            id: 9,
            title: "Healthy MKE",
            description: "HealthyMKE was launched as part of the COVID response in Milwaukee County in January 2021 to provide timely and accurate health information and navigation for COVID testing, vaccines, and other pandemic resources.",
            image1: `${portImage91}`,
            image2: `${portImage92}`,
            image3: `${portImage93}`,
        },
        {
            id: 10,
            title: "Oregon Pediatrics",
            description: "Oregon Pediatrics is a full-service pediatric practice to extend the care of infants, children, and adults. The goal is to bring a healthy start to a healthy life.",
            image1: `${portImage101}`,
            image2: `${portImage102}`,
            image3: `${portImage103}`,
        },
        {
            id: 11,
            title: "Outreach Community Health Centers",
            description: "Outreach Community Health Centers provide people with excellent accommodation in different medical services and facilities.",
            image1: `${portImage111}`,
            image2: `${portImage112}`,
            image3: `${portImage113}`,
        },
        {
            id: 12,
            title: "Italian Concept",
            description: "Italian Concept was founded in 1976 in a small factory off Venice, Italy. Italian Concept is one of the biggest wholesalers and an online retailer of the enormous lightning market with over 30 years of experience.",
            image1: `${portImage121}`,
            image2: `${portImage122}`,
            image3: `${portImage123}`,
        },
        {
            id: 13,
            title: "The Unknown",
            description: "The Unknown provides the best products related to the skincare of men which includes, face wash, moisturizer, serum, and others. Products are chemical-free and tested by dermatologists for healthy skin. Their products will nourish and make your skin glow.",
            image1: `${portImage131}`,
            image2: `${portImage132}`,
            image3: `${portImage133}`,
        },
        {
            id: 14,
            title: "Center for U.S. Immigration Services",
            description: "Center for U.S. Immigration Services is a private law firm dedicated to providing immigration solutions to families and businesses. Established in 2014 by immigration lawyers with a combined experience of over 40 years in immigration law, our practice is exclusively focused on immigration and relocation services.",
            image1: `${portImage141}`,
            image2: `${portImage142}`,
            image3: `${portImage143}`,
        },
    ]
    return (
        <>
            <InnerBanner
                title={'Portfolio'}
                info={"Check out WTechy's portfolio! Explore our best work to see how we can help you achieve your marketing goals by showcasing real marketing results for clients."}
            />
            <div className="portfolioWrapper">
                {portfolioData && portfolioData.map((item, index) => {
                    return (
                        <section className={`sectionPadding`} key={item.id}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2 className='title-xl fw-bold'>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <img className='portfolio_img_1 mt-4 w-100' src={item.image1} alt='side-img' title='portfolio-1' />
                                    </div>
                                    <div className="col-md-6 mb-5 mb-md-0 text-center">
                                        <img className='portfolio_img_1 mb-4 w-100' src={item.image2} alt='side-img' title='portfolio-2' />
                                        <img className='portfolio_img_1 w-100' src={item.image3} alt='side-img' title='portfolio-3' />
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

export default Portfolio;
