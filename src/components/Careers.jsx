
import InnerBanner from '../components/common/InnerBanner';
// import JobForm from './career/JobForm';
import React, { useState, useEffect } from 'react';

const TestAPI = () => {

    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://wordpress-1079908-3850878.cloudwaysapps.com/wp-json/wp/v2/career')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCareers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <ul>
            {careers.map((item, index) => (
                <li key={item.id}>
                    <img src={item.thumbnail}></img>
                    <p >{item.acf_fields.job_title}</p>
                    <p dangerouslySetInnerHTML={{ __html: item.acf_fields.basicInfo.jobDescription }}></p>
                    <div dangerouslySetInnerHTML={{ __html: item.acf_fields.basicInfo.jobResponsibilities }}></div>
                    <p >{item.acf_fields.jobDescription}</p>
                </li>
            ))}
        </ul>

    );
};




const Careers = () => {

    return (
        <>
            <InnerBanner
                title={'Careers'}
                info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu. Mauris quis ultricies odio, at lacinia libero. '}
            />
            <section className='sectionPadding'>
                <div className="container">
                    <TestAPI />
                </div>

            </section>

            {/* <JobForm/> */}

        </>
    );
};


export default Careers;
