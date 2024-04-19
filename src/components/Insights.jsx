import React, { useEffect, useState } from 'react';
import SectionTopInfo from './common/SectionTopInfo'
import InnerBanner from '../components/common/InnerBanner'
import { FiChevronsRight } from "react-icons/fi";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchInsights } from '../redux/actions/insightsAction';
import { useDispatch, useSelector } from 'react-redux';
import { scrollTop } from './common/utils';
import { FiClock } from "react-icons/fi";
import LoadingSection from './common/loadingSection';



const Insights = () => {
    const dispatch = useDispatch();
    const { insights, loading } = useSelector((state) => state.insightsApi);

    useEffect(() => {
        dispatch(fetchInsights());
    }, [dispatch]);

    //   ********************loading-card***********************
    const postsPerPage = 6;
    const [displayedPosts, setDisplayedPosts] = useState(postsPerPage);
    const [loadings, setLoadings] = useState(false); // State to track loadings status

    const handleLoadMore = () => {
        setLoadings(true); // Set loadings to true when button is clicked
        setTimeout(() => {
            setDisplayedPosts(prevCount => prevCount + postsPerPage);
            setLoadings(false); // Set loadings to false after 1 second delay
        }, 1000);
    };
    // *******************************************************

    // Function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        // Extract date components
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        // Format the date
        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
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
                    {loading ? <LoadingSection /> :
                        (
                            <>
                                <div className="featured-posts row justify-content-center mt-5">
                                    {insights.slice(0, displayedPosts)?.map((post, index) => (
                                        <div className="col-lg-4 col-md-6 mb-4" key={post?.id}>
                                            <div className="postCard hasShadow">
                                                <Link to={post?.slug} className="postImageWrap" onClick={scrollTop}>
                                                    {post?.acf_fields && post?.acf_fields?.FeacherdImage !== false && (
                                                        <img src={post?.acf_fields?.FeacherdImage} alt={post?.title?.rendered} />
                                                    )}
                                                </Link>
                                                <div className="post-details">
                                                    <h3 className='post-title title-md fw-bold'>
                                                        <Link to={post?.slug} onClick={scrollTop}>{post?.title?.rendered}</Link>
                                                    </h3>
                                                    <p className='post-date d-flex align-items-center'><FiClock className='me-2' />{formatDate(post.date)}</p>
                                                    {post?.acf_fields && (
                                                        <p className='post-info'>{post?.acf_fields?.shortDiscription}</p>
                                                    )}
                                                    <Link className='dBtn btnText' to={post?.slug} onClick={scrollTop} >Read More<FiChevronsRight /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {displayedPosts < insights.length && (
                                    <button className={`d-block mt-4 dBtn btnBorder mx-auto ${loadings && 'disabled'}`} onClick={handleLoadMore}>{loadings ? 'Loadings...' : 'Load More'}</button>
                                )}
                            </>
                        )
                    }

                </Container>
            </section>
        </>
    );
};

export default Insights;
