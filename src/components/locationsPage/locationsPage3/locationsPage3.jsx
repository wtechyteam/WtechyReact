import './locationspage3.css'

const LocationsPage3 = () => {

    const path = window.location.pathname; // Get the current path
    const title = extractTitleFromPath(path); // Extract title from path

    return (
        <>
            <div className="portfolioWrapper">
                <section className="sectionPadding locationPage bg-gray">
                    <div className="container">
                        <div className={`row align-items-center`}>

                            <p>This has put a new strain on search engines and new dynamics in the SEO services in {title}. Therefore, {title} SEO experts need to help businesses climb the success ladder.<br></br>

                                <br></br>WTechy is an award-winning agency with a full range of SEO services within {title} and beyond. The {title}-based SEO agency will help your business in the new business era to feature your products and services on the first page of search engine results.<br></br>

                                <br></br>With many websites competing for online customers, The {title} SEO will help you maneuver through the search engines. This will help you to get noticed by the target clients.<br></br>

                                <br></br>Your website experience and SEO strategy experience for your online materials can be improved by an SEO agency. This agency offers SEO consultancy and advice within Anaheim and throughout California.<br></br>

                                <br></br>At WTechy, we will help you fine-tune your content to load quickly and optimize for your potential clients. This will help you increase sales and close deals with your target clients.<br></br>
                            </p>
                            {/* <h2 className='title-xl fw-bold mt-0'>See How Our Garden Grove SEO Clients Get Results</h2> */}

                        </div>
                    </div>
                </section>
            </div>
        </>

    )
    function extractTitleFromPath(path) {
        const parts = path.split('/');
        const lastPart = parts[parts.length - 1];
        // Remove "SEO services" and replace dashes with spaces
        const formattedTitle = lastPart.replace(/SEO-services-/i, '').replace(/-/g, ' ');
        return formattedTitle;
    }
}

export default LocationsPage3;