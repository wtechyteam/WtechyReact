import React from "react"

const seoServices = [
    {
        title: 'SEO Audit Report',
        description: "SEO Audit Report for your online content and monthly reports of website visits."
    },
    {
        title: 'Custom Keyword Strategy',
        description: "Custom Keyword Strategy is an important step to help your website and business align to what potential clients are searching for. We have a good understanding of user behaviors in a variety of businesses."
    },
    {
        title: 'On-page SEO',
        description: "On-page SEO involves optimizing the content already published and the use of engaging images and page layout."
    },
    {
        title: 'Competitor SEO Analysis',
        description: "Competitor SEO Analysis will show you how your competitors are faring in the game and help you be placed ahead of them."
    },
    {
        title: 'Off-page SEO',
        description: "Off-page SEO covers all factors outside the website that may still affect page ranking such as the number of page backlinks, page reputation, review site and others."
    },
    {
        title: 'Reporting',
        description: "Reporting helps you understand the impact of your efforts in SEO optimization for your page. Technical SEO covers best practices on web development, increased page loading speed, and Meta-data optimizations. Good user experience includes a mobile-friendly website, fast page speed, no pop-up messages, fewer ads, and Seamless navigation."
    }

]

const LocationsPage4 = () => {

    const path = window.location.pathname; // Get the current path
    const title = extractTitleFromPath(path); // Extract title from path

    return (
        <>
            <section className='sectionPadding text-center'>
                <div className="container ">
                    <div className="col-md-7 mx-auto " data-aos="fade-up" data-aos-duration="1500">
                        <h1 className='title-xxl fw-bold'>Are you Ready to Take Your {title} Business National and International?
                            Here’s How It Is Done!
                        </h1>
                        <a target='_blank' rel="noreferrer" className='mt-2 dBtn btnSecondary hasShadow'>Proposal Button</a>
                        <p className='sectionPadding'>As of now, Facebook and Twitter have gone into a joint partnership with Google to optimize the use of search engines. As we head into the future, evergreen content, voice search, mobile-friendly web pages, user experience (UX), and artificial intelligence will be a topmost priority for 2023 and beyond. The online space is projected to grow and become more competitive in the years to come. That is why the best SEO Company in {title} is there to walk you through your journey to success.
                        </p>
                    </div>
                </div>
            </section>

            <section className="sectionPadding bg-gray">
                <div className="container">
                    <div className="col-md-7 mx-auto" data-aos="fade-up" data-aos-duration="1500">
                        <h1 className="title-xxl fw-bold">SEO Services {title}</h1>
                        <p>Traffic, Sales and Growth Is All What We Seek for Your Business</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        {seoServices.map((service, index) => (
                            <div className='col-lg-4 col-md-4 mb-4 ' key={index} >
                                <div className="cardWrap px-4 py-4 type1 bg-white hasShadow h-100">
                                    {/* <div className="cardIcon cardIcon-Type1">
                                        <img src={service.icon} alt={service.title} />
                                    </div> */}
                                    <div className="cardInfo">
                                        <h2 className="cardTitle title-md fw-bold">{service.title}</h2>
                                        <p className='cardDescription text-sm mb-0'>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="sectionPadding">
                <div className="container">
                    <div className="col-md-7 mx-auto" data-aos="fade-up" data-aos-duration="1500">
                        <h1 className="title-xxl fw-bold">Reasons Why Pick Us As Your SEO Agency in {title}</h1>
                        <p>You should frequently revisit the progress of your website traffic every quarter. You should also make relevant changes to keep the traffic soaring higher. Our SEO services are customized based on your business needs and current trends to achieve the desired results.
                            <br></br></p>
                        <p> We will also help you reorganize the google ranking algorithm to ensure your website loads faster. This will improve user experience leading to better satisfaction and a good company reputation. As {title} top SEO Company, WTechy has a dedicated team of experienced SEO specialists and digital marketing strategists.  The team ensures your SEO campaigns are top-notch.
                            <br /></p>
                        <p>One of the major challenges in the SEO services industry is that SEO ranking cannot be easily automated as it is a labor-intensive exercise. It needs to experience SEO experts who understand the dynamics of the field and businesses.
                        <br /></p>
                        <p>With the knowledge of the current trends of businesses and the needs of online businesses, SEO businesses in {title} have come to understand what works and what does not for the needs of {title} customers.
                            <br /></p>
                        <p>At WTechy, we are pleased to see your website rank higher on Google and that is what our experts enjoy doing. It will not be a waste of money by making WTechy SEO your company of choice.
                        </p>
                        
                    </div>
                </div>
            </section>
            <section className="sectionPadding">
                <div className="container">
                    <div className="col-md-7 mx-auto" data-aos="fade-up" data-aos-duration="1500">
                        <h1 className="title-xxl fw-bold">Local SEO Services For {title} Businesses – GMB Listing Services</h1>
                        <p>Does your business heavily rely on word-of-mouth referrals? If yes, then your business website would require the power of Local SEO. Local SEO campaigns focus on boosting the visibility of the website when someone inputs local search terms on Google.
                            <br></br></p>
                        <p> Suppose you have a dental clinic in {title}. A successful SEO campaign will place your website on top of Google Search, Google My Business, and Google Maps when someone searches for a “dental clinic in {title}.”
                            <br /></p>
                        <p>Whether you have a small business, medium-sized business, or large-sized business in {title}, you cannot afford to ignore the power of local SEO. An utterly optimized website for local search terms attracts vast amounts of local leads (in this case, from {title} city).
                        <br /></p>
                        <p>WTechy makes it simple for businesses who want their websites to rank for local search terms in {title}. We make it possible for websites to rank on Google for searches that involve the phrases “near me.”
                            <br /></p>
                    </div>
                </div>
            </section>
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

export default LocationsPage4;