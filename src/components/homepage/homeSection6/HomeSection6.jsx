import { FiChevronsRight } from "react-icons/fi";
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
    return (
        <section className='sectionPadding bg-gray'>
            <div className="container text-center">
                <div className="sectionTopInfo" data-aos="fade-up" data-aos-duration="1500">
                    <h4 className='section-title-sm'>Insights</h4>
                    <h2 className='title-xl fw-bold'>Our Latest Insights</h2>
                    <p className='sectionInfo '>Our tailored digital marketing strategies are designed to deliver significant results, ensuring your business stands out and achieves success in the digital landscape.</p>
                </div>
                <div className="featured-posts row justify-content-center mt-5">
                    {top3FeaturedPosts && top3FeaturedPosts?.map((post, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={post?.id}>
                            <div className="postCard" data-aos="fade-up" data-aos-duration="1500" data-aos-delay={index * 500} >
                                <Link to={`insights/${post?.slug}`} className="postImageWrap" onClick={scrollTop}>
                                    {post?.acf_fields && post?.acf_fields?.FeacherdImage !== false && (
                                        <img src={post?.acf_fields?.FeacherdImage} alt={post?.title?.rendered} />
                                    )}
                                </Link>
                                <div className="post-details">
                                    <h3 className='post-title title-md fw-bold'>
                                        <Link to={`insights/${post?.slug}`} onClick={scrollTop}>{post?.title?.rendered}</Link>
                                    </h3>
                                    <p className='post-date'>{post?.date}</p>
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

