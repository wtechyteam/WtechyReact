import InnerBanner from '../common/InnerBanner';
// import JobForm from './career/JobForm';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCareers } from '../../redux/actions/careersActions';
import { Link, useParams } from 'react-router-dom';
import { scrollTop } from '../common/utils';


const JobDetail = () => {
    const { slug } = useParams();
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

    const selectedCareer = careers.find(career => career.slug === slug);

    if (!selectedCareer) {
        return <div>Career not found</div>;
    }

    return (

        <div className='jobInfoWrap' >
            <div class="job-experience text-center">
                <h5 className='mb-0 f'>{selectedCareer.acf_fields.basic_Info.jobExperience}</h5>
                <p className='mb-0'>Experience</p>
            </div>
            <h2 className='job-title paddingLeft fw-bold' >{selectedCareer.acf_fields.basic_Info.job_title}</h2>
            <div className="job-content paddingLeft">
                {selectedCareer.acf_fields.basic_Info.jobDescription !== "" && (
                    <>
                        <h4>Job Description:</h4>
                        <div className='job-description' dangerouslySetInnerHTML={{ __html: selectedCareer.acf_fields.basic_Info.jobDescription }}></div>
                    </>
                )}
                {selectedCareer.acf_fields.basic_Info.jobResponsibilities !== "" && (
                    <>
                        <h4>Job Responsibilities:</h4>
                        <div className='job-responsibilities' dangerouslySetInnerHTML={{ __html: selectedCareer.acf_fields.basic_Info.jobResponsibilities }}></div>
                    </>
                )}
                {selectedCareer.acf_fields.basic_Info.jobType !== "" && (
                    <>
                        <p className='job-type'><strong>Job Type: </strong>{selectedCareer.acf_fields.basic_Info.jobType}</p>
                    </>
                )}
                {selectedCareer.acf_fields.basic_Info.jobType !== "" && (
                    <>
                        <p className='job-type'><strong>Salary: </strong>{selectedCareer.acf_fields.basic_Info.jobSalary}</p>
                    </>
                )}
                <Link to="/apply-form" className='dBtn btnSecondary mt-4 hasShadow' onClick={scrollTop} >Apply Now</Link>
            </div>

        </div>
    );
};






const CareersDetail = () => {

    return (
        <>
            <InnerBanner
                title={'Job Details'}
            />
            <section className='sectionPadding'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <JobDetail />
                        </div>
                        <div className="col-md-4">
                            dfgdfg
                        </div>
                    </div>

                </div>
            </section>


        </>
    );
};


export default CareersDetail;