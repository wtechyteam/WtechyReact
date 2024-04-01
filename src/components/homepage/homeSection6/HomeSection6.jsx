import insightData from './../../data/insightsData.json';

const HomeSection6 = () => {

    const featuredPosts = insightData.posts.filter(post => post.isFeatured);
    const top3FeaturedPosts = featuredPosts.slice(0, 3);
    return (
        <section className='sectionPadding bg-gray'>
            <div className="container text-center">
                <h4 className='section-title-sm'>Insights</h4>
                <h2 className='title-xl '>Our Latest Insights</h2>
                <p className='sectionInfo '>Our tailored digital marketing strategies are designed to deliver significant results, ensuring your business stands out and achieves success in the digital landscape.</p>
                <div className="featured-posts my-5">
                    {top3FeaturedPosts.map(post => (
                        <div className="featured-post" key={post.id}>
                            <div className="postImageWrap">
                                {post.thumbnailUrl !== '' && (
                                    <img src={post.thumbnailUrl} alt={post.title} />
                                )}
                            </div>
                            <div className="post-details">
                                <h3 className='title-sm fw-bold'>{post.title}</h3>
                                <p className='date'>{post.publishedAt}</p>
                                <p className='info'>{post.shortInfo}</p>                                   
                            </div>
                        </div>
                    ))}
                </div>
                <button className='dBtn btnPrimary'>Go To Insights</button>
            </div>
        </section>

    );
};

export default HomeSection6;

