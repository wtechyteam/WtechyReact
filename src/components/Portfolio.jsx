import InnerBanner from '../components/common/InnerBanner'
import { portfolioData } from './data/portfolioData';
import { Helmet } from 'react-helmet';

const Portfolio = () => {

    return (
        <>
        <Helmet>
    <meta name="title" content="Full-Stack Digital Marketing Agency: Scale Your Business" />
    <meta name="description" content="Explore proven digital marketing strategies! See our award-winning portfolio & how we provide performance marketing services to clients as per their needs." />
    </Helmet>
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
