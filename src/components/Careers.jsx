
import InnerBanner from '../components/common/InnerBanner';
import TestAPI from './TestAPI';
import JobForm from './career/JobForm';

const Careers = () => {

    return (
        <>
            <InnerBanner title={'Careers'} info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim sapien at fringilla malesuada. Donec fringilla varius feugiat. Morbi et congue arcu. Mauris quis ultricies odio, at lacinia libero. '} />
            <TestAPI />
            
            
            <JobForm/>
     
        </>
    );
};


export default Careers;
