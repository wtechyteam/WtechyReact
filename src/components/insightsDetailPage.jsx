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

     // Remove the currently opened post from related posts
    const filteredRelatedPosts = relatedPosts.filter(post => post.slug !== slug);

    return (
        <ul className='news_tabs'>
            {filteredRelatedPosts.map(item => (
                <li key={item.id}>
                    <Link to={`/insights/${item.slug}`} className='text-16' onClick={scrollTop}>
                        {item.acf_fields.FeacherdImage && (
                            <img src={item.acf_fields.FeacherdImage} alt={item.title.rendered} className="thumbnail" />
                        )}
                        <span>
                            {item.title.rendered}
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
