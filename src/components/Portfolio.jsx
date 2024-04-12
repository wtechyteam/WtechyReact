import InnerBanner from '../components/common/InnerBanner'
import portImage1 from '../assets/Images/portfolio/image-1.webp';
import portImage2 from '../assets/Images/portfolio/image-2.webp';
import portImage3 from '../assets/Images/portfolio/image-3.webp';

const Portfolio = () => {
    const portfolioData = [
        {
            title: "Atlanta Exotic and Luxury Car Rentals",
            description: "Atlanta Exotic and Luxury Car Rentals offer an assortment of luxury cars of different segments from manufacturers such as Lamborghini, Rolls Royce, Aston Martin, Bentley, Mercedes, Ferrari, Maserati, and Land Rover.",
            image1: `${portImage1}`,
            image2: `${portImage2}`,
            image3: `${portImage3}`,
        }, {
            title: "Atlanta Exotic and Luxury Car Rentals",
            description: "Atlanta Exotic and Luxury Car Rentals offer an assortment of luxury cars of different segments from manufacturers such as Lamborghini, Rolls Royce, Aston Martin, Bentley, Mercedes, Ferrari, Maserati, and Land Rover.",
            image1: `${portImage1}`,
            image2: `${portImage2}`,
            image3: `${portImage3}`,
        },
        {
            title: "Atlanta Exotic and Luxury Car Rentals",
            description: "Atlanta Exotic and Luxury Car Rentals offer an assortment of luxury cars of different segments from manufacturers such as Lamborghini, Rolls Royce, Aston Martin, Bentley, Mercedes, Ferrari, Maserati, and Land Rover.",
            image1: `${portImage1}`,
            image2: `${portImage2}`,
            image3: `${portImage3}`,
        }, {
            title: "Atlanta Exotic and Luxury Car Rentals",
            description: "Atlanta Exotic and Luxury Car Rentals offer an assortment of luxury cars of different segments from manufacturers such as Lamborghini, Rolls Royce, Aston Martin, Bentley, Mercedes, Ferrari, Maserati, and Land Rover.",
            image1: `${portImage1}`,
            image2: `${portImage2}`,
            image3: `${portImage3}`,
        },
    ]
    return (
        <>
            <InnerBanner
                title={'Portfolio'}
                info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu. Mauris quis ultricies odio, at lacinia libero. '}
            />
            <div className="portfolioWrapper">
                {portfolioData && portfolioData.map((item, index) => {
                    return (
                        <section className={`sectionPadding`}>
                            <div key={index} className="container">
                                <div className="row">
                                    <div className="col-md-6 mb-5 mb-md-0 text-center">
                                        <img className='portfolio_img_1 mb-5 w-100' src={item.image2} alt='side-img' />
                                        <img className='portfolio_img_1  w-100' src={item.image3} alt='side-img' />
                                    </div>
                                    <div className="col-md-6">
                                        <h2 className='title-xl fw-bold'>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <img className='portfolio_img_1 mt-4  w-100' src={item.image1} alt='side-img' />
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
