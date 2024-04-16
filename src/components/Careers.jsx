
import InnerBanner from '../components/common/InnerBanner';
// import JobForm from './career/JobForm';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCareers } from '../redux/actions/careersActions';
import { Link } from 'react-router-dom';
import {scrollTop} from './common/utils'

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
            {careers.map((career, index) => (
                <li className="jobWrap" key={career.id}>
                    <a href={`#career${index + 1}`} className='text-18 fw-medium d-flex align-items-center justify-content-center'>{career.acf_fields.basic_Info.job_title}</a>
                </li>
            ))}
        </ul>

    );
}

const JobDetails = () => {
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
        <>
                            {careers.map((career, index) => (
                        <div className='jobInfoWrap' key={career.id} id={`career${index + 1}`}>
                            <div class="job-experience text-center">
                                <h5 className='mb-0'>{career.acf_fields.basic_Info.jobExperience}</h5>
                                <p className='mb-0'>Experience</p>
                            </div>
                            <h2 className='job-title paddingLeft'>{career.acf_fields.basic_Info.job_title}</h2>
                            <div className="job-content paddingLeft">
                                {career.acf_fields.basic_Info.jobDescription !== "" && (
                                    <>
                                        <h4>Job Description:</h4>
                                        <div className='job-description' dangerouslySetInnerHTML={{ __html: career.acf_fields.basic_Info.jobDescription }}></div>
                                    </>
                                )}
                                {career.acf_fields.basic_Info.jobResponsibilities !== "" && (
                                    <>
                                        <h4>Job Responsibilities:</h4>
                                        <div className='job-responsibilities' dangerouslySetInnerHTML={{ __html: career.acf_fields.basic_Info.jobResponsibilities }}></div>
                                    </>
                                )}
                                {career.acf_fields.basic_Info.jobType !== "" && (
                                    <>
                                        <p className='job-type'><strong>Job Type: </strong>{career.acf_fields.basic_Info.jobType}</p>
                                    </>
                                )}
                                {career.acf_fields.basic_Info.jobType !== "" && (
                                    <>
                                        <p className='job-type'><strong>Salary: </strong>{career.acf_fields.basic_Info.jobSalary}</p>
                                    </>
                                )}
                                <Link to="/apply-form" className='dBtn btnSecondary mt-4 hasShadow' onClick={scrollTop} >Apply Now</Link>
                            </div>

                        </div>
                    ))}
        </>

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
                            {/* <h4 class="section-title-sm ">Join Us</h4> */}
                            <h2 class="title-xl fw-bold">Looking For Job?</h2>
                            <p>WTechy is constantly looking to build and extend a professional team of innovative, creative, dedicated, and self-motivated people that want to make difference in what they do.</p>
                            <p>We are currently seeking experienced individuals for a variety of open positions that we are actively trying to fill. We also encourage you to submit your resume for any positions that may become available in the future.</p>
                            <p>Candidates should possess good interpersonal skills, good leadership skills, and should be fluent in English. Excellent communication skills are a must since the jobs require interaction with US employees and customers. Salary is negotiable and will be commensurate with experience. All applications will be treated in strict confidence.</p>
                        </div>
                        <div className="col-lg-6">
                                <JobList/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sectionPadding bg-gray2'>
                <div className="container">
                    <h2 class="title-xl fw-bold text-center">Jobs With Us</h2>
                    <JobDetails/>
                </div>
            </section>

            {/* <JobForm/> */}

        </>
    );
};


export default Careers;
