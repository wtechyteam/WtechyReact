
import InnerBanner from '../common/InnerBanner';
// import JobForm from './career/JobForm';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCareers } from '../../redux/actions/careersActions';
import { Link } from 'react-router-dom';
import { scrollTop } from '../common/utils'

const JobList = () => {
    const dispatch = useDispatch();
    const { careers, loading, error } = useSelector((state) => state.api);

    useEffect(() => {
        dispatch(fetchCareers());
    }, [dispatch]);

    if (loading) {
        return <div className='loadingWrap'>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <ul className='jobList'>
            {careers.map((item) => (
                <li className="jobWrap" key={item.id}>
                    <Link to={item.slug} className='text-18 fw-medium d-flex align-items-center justify-content-center' onClick={scrollTop}>
                        {item.acf_fields.basic_Info.job_title}
                    </Link>
                </li>
            ))}
        </ul>

    );
}



const Careers = () => {

    return (
        <>
            <InnerBanner
                title={'Careers'}
                info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu. Mauris quis ultricies odio, at lacinia libero. '}
            />
            <section className='sectionPadding'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pe-lg-4">
                            <h2 className="title-xl fw-bold">Looking For Job?</h2>
                            <p>WTechy is constantly looking to build and extend a professional team of innovative, creative, dedicated, and self-motivated people that want to make difference in what they do.</p>
                            <p>We are currently seeking experienced individuals for a variety of open positions that we are actively trying to fill. We also encourage you to submit your resume for any positions that may become available in the future.</p>
                            <p>Candidates should possess good interpersonal skills, good leadership skills, and should be fluent in English. Excellent communication skills are a must since the jobs require interaction with US employees and customers. Salary is negotiable and will be commensurate with experience. All applications will be treated in strict confidence.</p>
                        </div>
                        <div className="col-lg-6">
                            <JobList />
                        </div>
                    </div>
                </div>
            </section>

            {/* <JobForm/> */}

        </>
    );
};


export default Careers;
