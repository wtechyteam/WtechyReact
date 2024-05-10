import { FiChevronsRight, FiClock } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { scrollTop } from '../../common/utils'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchInsights } from '../../../redux/actions/insightsAction';



const HomeSection6 = () => {

    const { insights } = useSelector((state) => state.insightsApi);
    const dispatch = useDispatch();
    console.log(insights, "section6")

    useEffect(() => {
        dispatch(fetchInsights());
    }, [dispatch]);

    const featuredPosts = insights;
    const top3FeaturedPosts = featuredPosts.slice(0, 3);

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
        <section className='sectionPadding bg-gray'>
            <div className="container text-center">
                <div className="sectionTopInfo" data-aos="fade-up" data-aos-duration="1500">
                    <h4 className='section-title-sm'>Insights</h4>
                    <h2 className='title-xl fw-bold'>Our Latest Insights</h2>
                    <p className='sectionInfo '>Get the latest tech trends, industry updates, and actionable tips delivered straight to you. From coding hacks to software reviews, Wtechy Insights keeps you ahead of the curve. </p>
                </div>
                <div className="featured-posts row justify-content-center mt-5">
                    {top3FeaturedPosts && top3FeaturedPosts?.map((post, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={post?.id}>
                            <div className="postCard position-relative" data-aos="fade-up" data-aos-duration="1500" data-aos-delay={index * 500} >
                                <Link to={`insights/${post?.slug}`} className="postImageWrap" onClick={scrollTop}>
                                    {post?.acf_fields && post?.acf_fields?.FeacherdImage !== false && (
                                        <img src={post?.acf_fields?.FeacherdImage} alt={post?.title?.rendered} />
                                    )}
                                </Link>
                                <div className="post-details">
                                    <div className='category'>
                                        {post && post.categories?.map((item) => (
                                            <p key={item?.id} className='m-0'>{item?.name}</p>
                                        ))}
                                    </div>
                                    <h3 className='post-title title-md fw-bold'>
                                        <Link to={`insights/${post?.slug}`} onClick={scrollTop}>{post?.title?.rendered}</Link>
                                    </h3>
                                    <p className='post-date d-flex align-items-center mb-1'><FiClock className='me-2' />{formatDate(post?.date)}</p>
                                    {post?.acf_fields && (
                                        <p className='post-info'>{post?.acf_fields?.shortDiscription}</p>
                                    )}
                                    <Link className='dBtn btnText' to={`insights/${post?.slug}`} onClick={scrollTop} >Read More<FiChevronsRight /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/insights" className='dBtn btnPrimary mt-4' onClick={scrollTop}>Go To Insights</Link>
            </div>
        </section>

    );
};

export default HomeSection6;

