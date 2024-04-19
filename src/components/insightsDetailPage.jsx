import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { scrollTop } from './common/utils'
import { useDispatch, useSelector } from 'react-redux';
import { fetchInsights } from '../redux/actions/insightsAction';

const RelatedPosts = () => {
    const { slug } = useParams();
    const { insights } = useSelector((state) => state.insightsApi);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInsights());
    }, [dispatch]);

    const selectedCareer = insights.find(insight => insight.slug === slug);

    // Filter insights by matching category IDs with the currently opened post
    const relatedPosts = selectedCareer ? insights.filter(insight =>
        insight.categories.some(category => selectedCareer.categories.some(selectedCategory => selectedCategory.id === category.id))
    ) : [];

    return (
        <ul className='news_tabs'>
            {relatedPosts.map(post => (
                <li key={post.id}>
                    
                    <Link to={`/insights/${post.slug}`} className='text-16'>
                        {post.acf_fields.FeacherdImage && (
                            <img src={post.acf_fields.FeacherdImage} alt={post.title.rendered} className="thumbnail" />
                        )}
                        <span>
                            {post.title.rendered}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};


const InsightsDetailPage = () => {
    const { slug } = useParams();
    const { insights } = useSelector((state) => state.insightsApi);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInsights());
    }, [dispatch]);

    const selectedCareer = insights.find(insight => insight.slug === slug);

    const newsTabs = [
        { tab: "Tab-1" },
        { tab: "Tab-2" },
        { tab: "Tab-3" },
        { tab: "Tab-4" },
        { tab: "Tab-5" },
    ];

    return (
        <div>
            {/* ---------innerBanner------------- */}

            <section className='innerBanner text-center'>
                <div className="container position-relative">
                    <div className="col-lg-7 mx-auto ">
                        {selectedCareer && (
                            <>
                                <h1 className='title-xl fw-bold'>{selectedCareer.title.rendered}</h1>
                                <p className=''>{selectedCareer.acf_fields.shortDiscription}</p>
                            </>
                        )}
                    </div>
                </div>
            </section>
            {/* ------------------------------------------ */}


            <section className={`sectionPadding`}>
                <div className='container'>
                    <div className={`row g-5`}>
                        <div className='col-lg-8'>
                            {selectedCareer && (
                                <>
                                    <h2 className='title-xl fw-bold'>{selectedCareer.title.rendered}</h2>
                                    {selectedCareer.acf_fields.FeacherdImage && (
                                        <img src={selectedCareer.acf_fields.FeacherdImage} title={selectedCareer.title.rendered} alt={selectedCareer.title.rendered} />
                                    )}
                                    <div className='py-4' dangerouslySetInnerHTML={{ __html: selectedCareer.acf_fields.blog_content }} />
                                </>
                            )}
                        </div>
                        <div className='col-lg-4 '>
                            <div className="sideBarWrapper">
                                <div className="wrap">
                                    <h2 className='title-md fw-bold'>Related Posts</h2>
                                    <RelatedPosts />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default InsightsDetailPage;
