
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
import { Helmet } from 'react-helmet';


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
            <>
             <Helmet>
                <meta name="title" content="We're hiring - Exciting Career Opportunities at WTechy" />
                <meta name="description" content="Career Opportunities - Join our innovative team of dedicated professionals. Apply online now for open digital marketing & Web design and development positions." />
            </Helmet>
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
        </>
    );
}


const LifeAtWTechy = () => {
    const feathers = [
        {
            title: "Large Beautiful Office",
            info: "Work in a spacious and modern office that'll inspire your creativity."
        },
        {
            title: "Great Co-Workers",
            info: "Join a team of friendly and supportive colleagues who are always ready to lend a hand. "
        },
        {
            title: "Easy Location",
            info: "Our office is in a spot that makes commuting easy and stress-free. "
        },
        {
            title: "Education Opportunities",
            info: "We believe in helping you grow and learn with various programs to boost your skills. "
        },
        {
            title: "Fun Activities",
            info: "Enjoy regular team-building events and activities to keep things lively. "
        },
        {
            title: "Performance Award",
            info: "Your hard work doesn't go unnoticed! Get rewarded for your performance-based rewards. "
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
                info={"Join our fun, collaborative team! WTechy is seeking talented individuals for open positions. We offer a great work environment, growth opportunities, and competitive pay. Apply now or submit your resume for future openings!"}
            />
            <section className='sectionPadding'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pe-lg-4">
                            <h2 className="title-xl fw-bold">Looking For Job?</h2>
                            <p><strong><i>Excited about tech?</i></strong> So are we! At WTechy, we're on the look-out for bright minds like yours to join our team. Whether you're a content expert, a creative designer, or a marketing maestro, we've got a spot for you! </p>
                            <p><strong><i>Why WTechy?</i></strong>  We're all about fostering a fun and collaborative atmosphere. Your creative ideas will be extensively valued here.  Wtechy offers fantastic growth opportunities in the growing Digital market with a competitive pay.  </p>
                            <p>Ready to grow together/take over the digital market Checkout our current openings and hit that apply button. Don't see your dream job listed? No worries! Send us your resume anyway, and we'll keep you in mind for future opportunities. Let's build something awesome together! </p>
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
                            <p> At Wtechy, we're not just another tech company, we’re a team of creative minds shaping the digital world. We prioritize more than just employment; we're dedicated to building careers. Our dedicated team pushes the boundaries within the digital domain. </p>
                            <p>We believe in work-life balance, offering flexible work arrangements. Connection is key to our ethos. From team meet-ups to virtual hangouts, collaboration is at the heart of what we do. We value your professional development as much as we value our clients, promoting an environment helpful to career advancement. </p>
                            <p>We're invested in your growth journey from mentorship initiatives to continuous training opportunities. Ready to join the Wtechy family? Check out our current openings and take the first step towards an exciting career with us! </p>
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
