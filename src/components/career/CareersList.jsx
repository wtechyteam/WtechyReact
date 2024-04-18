
import InnerBanner from '../common/InnerBanner';
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCareers } from '../../redux/actions/careersActions';
import { Link } from 'react-router-dom';
import { scrollTop } from '../common/utils'
import section1Image from '../../assets/Images/career/carrerSection1.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { PiBagSimple } from "react-icons/pi";
import { GoClock } from "react-icons/go";


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
                    <Link onClick={scrollTop} to={item.slug} className='content'>
                        <h2 className='title-md' > {item.acf_fields.basic_Info.job_title}</h2>
                        <p><IoLocationOutline/>{item.acf_fields.basic_Info.jobLocation}</p>
                        <ul>
                            <li><PiBagSimple />{item.acf_fields.basic_Info.jobType}</li>
                            <li><GoClock />{item.acf_fields.basic_Info.jobShift}</li>
                        </ul>
                        {/* <button className='dBtn btnSmall btnSecondary mt-3'>See Details</button> */}
                    </Link>
                </li>
            ))}
        </ul>

    );
}


const LifeAtWTechy = () => {
    const feathers = [
        {
            title: "Large Beautiful Office",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            title: "Great Co-Workers",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            title: "Easy Location",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            title: "Education Opportunities",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            title: "Fun Activities",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            title: "Performance Award",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        }
    ]
    return (
        <>
            <div className="row ">
                {feathers.map((item, index) => (
                    <div className="col-sm-6 " key={index}>
                        <div class="cardWrap my-3 px-2 py-3">
                            <div class="cardIcon cardIcon-Type2">
                                <img src="https://live.templately.com/wp-content/uploads/2023/01/81b895a0-careerly-icon-1.png" alt={item.title} />
                            </div>
                            <div class="cardInfo">
                                <h2 class="cardTitle title-sm fw-bold">{item.title}</h2>
                                <p class="cardDescription text-sm mb-0">{item.info}</p>
                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </>

    );
}



const Careers = () => {

    const jobListSectionRef = useRef(null);

    const scrollToJobList = () => {
        if (jobListSectionRef.current) {
            jobListSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
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
                            <button className='dBtn btnSecondary' onClick={scrollToJobList}>Find Jobs</button>
                        </div>
                        <div className="col-lg-6">
                            <img src={section1Image} alt='Looking For Job?' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='sectionPadding bg-gray2'>
                <div className="container">
                    <div className="row align-items-center flex-md-row-reverse">

                        <div className="col-lg-6 ps-lg-4">
                            <h2 className="title-xl fw-bold">Your Life At WTechy</h2>
                            <p>WTechy is constantly looking to build and extend a professional team of innovative, creative, dedicated, and self-motivated people that want to make difference in what they do.</p>
                            <p>We are currently seeking experienced individuals for a variety of open positions that we are actively trying to fill. We also encourage you to submit your resume for any positions that may become available in the future.</p>
                            <p>Candidates should possess good interpersonal skills, good leadership skills, and should be fluent in English. Excellent communication skills are a must since the jobs require interaction with US employees and customers. Salary is negotiable and will be commensurate with experience. All applications will be treated in strict confidence.</p>
                        </div>
                        <div className="col-lg-6">
                            <LifeAtWTechy />
                        </div>
                    </div>
                </div>
            </section>
            <section className='sectionPadding' ref={jobListSectionRef}>
                <div className="container">
                    <h2 className="title-xl fw-bold mb-5 text-center">Are you ready to <span className='color-secondary'>Join Our Team ?</span></h2>
                    <JobList />
                </div>
            </section>
            {/* <JobForm/> */}

        </>
    );
};


export default Careers;
