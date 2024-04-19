import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { scrollTop } from './common/utils'
import { useDispatch, useSelector } from 'react-redux';
import { fetchInsights } from '../redux/actions/insightsAction';

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
                    <div className={`row`}>
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
                            <ul className='news_tabs'>
                                {newsTabs.map((item, index) => (
                                    <li className="news_btn" key={index}>
                                        <Link to={"#"} className='text-18 fw-medium d-flex align-items-center justify-content-center' onClick={scrollTop}>
                                            {item.tab}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default InsightsDetailPage;
