import insightData from './../../data/insightsData.json';
import { FiChevronsRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const HomeSection6 = () => {

    const featuredPosts = insightData.posts.filter(post => post.isFeatured);
    const top3FeaturedPosts = featuredPosts.slice(0, 3);
    return (
        <section className='sectionPadding bg-gray'>
            <div className="container text-center">
                <div className="sectionTopInfo" data-aos="fade-up" data-aos-duration="1500">
                    <h4 className='section-title-sm'>Insights</h4>
                    <h2 className='title-xl fw-bold'>Our Latest Insights</h2>
                    <p className='sectionInfo '>Our tailored digital marketing strategies are designed to deliver significant results, ensuring your business stands out and achieves success in the digital landscape.</p>
                </div>
                <div className="featured-posts row justify-content-center mt-5">
                    {top3FeaturedPosts.map((post,index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
                            <div className="postCard" data-aos="fade-up" data-aos-duration="1500" data-aos-delay={index * 500} >
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
                <button className='dBtn btnPrimary mt-4'>Go To Insights</button>
            </div>
        </section>

    );
};

export default HomeSection6;

