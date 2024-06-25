import HubspotForm from 'react-hubspot-form'
import Locations from '../../locations';

const LocationsPage1 = () => {

    const path = window.location.pathname; // Get the current path
    const title = extractTitleFromPath(path); // Extract title from path

    return (
        <section className="sectionPadding locationPage">
            <div className="container">
                <div className={`row `}>
                    <div className="col-md-5">
                        <h2 className='title-xl fw-bold mt-0' >SEO Services Company {title}</h2>
                        <p>In this 21st century, most clients source services online. It is important to ensure your online web page is correctly tailored for your target market.

                            93% of all online traffic occurs on search engines.

                            75% of internet searchers won’t go beyond the first page of the search engine.

                            60% of Google searches are done on mobile devices, in the US alone the figure is higher indicating a 95% market potential.</p>
                    </div>
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header">
                                <h3>Free SEO Consultation and Audit Report</h3>
                            </div>
                            <div className="card-body">
                                <div className="col-md-7">
                                    <HubspotForm
                                        portalId='46372694'
                                        formId='0483a821-1e2e-4e60-bc1e-c681a3e75adf'
                                        onSubmit={() => console.log('Submit!')}
                                        onReady={(form) => console.log('Form ready!')}
                                        loading={<div>Loading...</div>}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
    function extractTitleFromPath(path) {
        const parts = path.split('/');
        const lastPart = parts[parts.length - 1];
        // Remove "SEO services" and replace dashes with spaces
        const formattedTitle = lastPart.replace(/SEO-services-/i, '').replace(/-/g, ' ');
        return formattedTitle;
    }
};

export default LocationsPage1;