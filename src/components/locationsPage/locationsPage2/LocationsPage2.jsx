// import Locations from '../../locations';

// const LocationsPage2 = () => {

//     const path = window.location.pathname; // Get the current path
//     const title = extractTitleFromPath(path); // Extract title from path

//     return (
//         <section className=" sectionPadding locationPage">
//             <div className="container">

//                 {/* <div className="col-md-5"></div> */}
//                 <div className="sectionTopInfo text-center" data-aos="fade-up" data-aos-duration="1500">
//                     <h2 className='title-xl fw-bold'>Local SEO Services in {title}</h2>

//                 </div>
//                 <div className={`row align-items-center`}>
//                 </div>
//             </div>
//             <div className="rowPic">
//                 <div className='container'>
//                     <div className={`row `}>
//                         <div className="col-md-5">
//                             <section className='mapSection' margin="25px">
//                                 <iframe src="https://www.google.com/maps/d/u/0/embed?mid=10PGqyXec9v0O-7Kn4b0RU4kEgtNLI8E&ehbc=2E312F&noprof=1" width="520" height="480" ></iframe>
//                             </section>
//                         </div>
//                         <div className="col-md-7">
//                             <h3 className=''>Area We Cover in {title}</h3>
//                             <table class="table table-bordered" margin="20px">
//                                 <tr height="35px" padding="10px" margin-top="10px">
//                                     <td>pincode</td>
//                                     <td>pincode</td>
//                                     <td>pincode</td>
//                                     <td>pincode</td>
//                                     <td>pincode</td>
//                                 </tr>
//                             </table>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
//     function extractTitleFromPath(path) {
//         const parts = path.split('/');
//         const lastPart = parts[parts.length - 1];
//         // Remove "SEO services" and replace dashes with spaces
//         const formattedTitle = lastPart.replace(/SEO-services-/i, '').replace(/-/g, ' ');
//         return formattedTitle;
//     }
// }

// export default LocationsPage2;

import React,  { useEffect, useState }  from 'react';




const LocationsPage2 = ({ pincodes }) => {

    const [city, setCity] = useState(""); // State to hold the city name

    useEffect(() => {
        const path = window.location.pathname; // Get the current path
        const title = extractTitleFromPath(path); // Extract title from path
        setCity(title);
    }, []);

    // Function to extract title from path
    function extractTitleFromPath(path) {
        const parts = path.split('/');
        const lastPart = parts[parts.length - 1];
        // Remove "SEO services" and replace dashes with spaces
        const formattedTitle = lastPart.replace(/SEO-services-/i, '').replace(/-/g, ' ');
        return formattedTitle;
    }

  


    return (
        <section className="sectionPadding locationPage">
            <div className="container">
                <div className="sectionTopInfo text-center" data-aos="fade-up" data-aos-duration="1500">
                    <h2 className='title-xl fw-bold'>Local SEO Services in {city}</h2>
                </div>
                <div className={`row align-items-center`}>
                </div>
            </div>
            <div className="rowPic">
                <div className='container'>
                    <div className={`row `}>
                        <div className="col-md-5">
                            <section className='mapSection' margin="25px">
                                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=10PGqyXec9v0O-7Kn4b0RU4kEgtNLI8E&ehbc=2E312F&noprof=1" width="520" height="480"></iframe>
                            </section>
                        </div>
                        <div className="col-md-7">
                            <h3 className=''>Area We Cover in {city}</h3>
                            <table className="table table-bordered" margin="20px">
                                <thead>
                                    <tr>
                                        <th>Pincode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pincodes.map((pincode, index) => (
                                        <tr key={index}>
                                            <td>{pincode}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationsPage2;
