import { Link } from 'react-router-dom';
import insightData from '../components/data/insightsData.json';
import InnerBanner from '../components/common/InnerBanner'
import { FiChevronsRight } from "react-icons/fi";
import { Container } from 'react-bootstrap';

const Insights = () => {
    const featuredPosts = insightData.posts.filter(post => post.isFeatured);
    // const top3FeaturedPosts = featuredPosts.slice(0, 9);
    return (
        <>
            <InnerBanner title={'Insights'} info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu. Mauris quis ultricies odio, at lacinia libero. '} />
            <section className='sectionPadding'>
                <Container>
                <div className="sectionTopInfo" data-aos="fade-up" data-aos-duration="1500">
                    <h2 className='title-xl fw-bold'>Our Latest Insights</h2>
                    <p className=' '>Our tailored digital marketing strategies are designed to deliver significant results, ensuring your business stands out and achieves success in the digital landscape.</p>
                </div>
                    <div className="featured-posts row justify-content-center mt-5">
                        {featuredPosts.map((post, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
                                <div className="postCard card_shadow" data-aos="fade-up" data-aos-duration="1500" data-aos-delay={index * 500} >
                                    <Link to={post.link} className="postImageWrap">
                                        {post.imageUrl !== '' && (
                                            <img src={post.imageUrl} alt={post.title} />
                                        )}
                                    </Link>
                                    <div className="post-details">
                                        <h3 className='post-title title-md fw-bold'>
                                            <Link to={post.link}>{post.title}</Link>
                                        </h3>
                                        <p className='post-date'>{post.publishedAt}</p>
                                        <p className='post-info'>{post.shortInfo}</p>
                                        <Link className='dBtn btnText' to={post.link} >Read More<FiChevronsRight /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Insights;
