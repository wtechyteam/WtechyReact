import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import insightData from '../components/data/insightsData.json';
import SectionTopInfo from './common/SectionTopInfo'
import InnerBanner from '../components/common/InnerBanner'
import { FiChevronsRight } from "react-icons/fi";
import { Container } from 'react-bootstrap';

const Insights = () => {

    const postsPerPage = 6;
    const [displayedPosts, setDisplayedPosts] = useState(postsPerPage);
    const [loading, setLoading] = useState(false); // State to track loading status

    const posts = insightData.posts;

    const handleLoadMore = () => {
        setLoading(true); // Set loading to true when button is clicked
        setTimeout(() => {
            setDisplayedPosts(prevCount => prevCount + postsPerPage);
            setLoading(false); // Set loading to false after 1 second delay
        }, 1000);
    };


    return (
        <>
            <InnerBanner title={'Insights'} info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat.'} />
            <section className='sectionPadding'>
                <Container>
                    <SectionTopInfo
                        isCenter={true}
                        smallTitle={'Insights'}
                        title={'Our Latest Insights'}
                        text={'Our tailored digital marketing strategies are designed to deliver significant results, ensuring your business stands out and achieves success in the digital landscape.'}
                    />
                    <div className="featured-posts row justify-content-center mt-5">
                        {posts.slice(0, displayedPosts).map((post, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
                                <div className="postCard card_shadow">
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
                    {displayedPosts < posts.length && (
                        <button className={`d-block mt-4 dBtn btnBorder mx-auto  + ${loading && 'disabled'}`} onClick={handleLoadMore}>{ loading ? 'Loading...' : 'Load More'} </button>
                    )}
                </Container>
            </section>
        </>
    );
};

export default Insights;