import React, { useEffect, useState } from "react";
import aboutSectionImage from "./../../../assets/Images/portfolio/clipboard-image-1-1.webp";
import aboutSectionImage2 from "./../../../assets/Images/portfolio/clipboard-image-2-3.webp";
import { cityToStateMap } from "../../data/cityToStateMap";
import { stateToCitiesMap } from "../../data/cityToStateMap";

const services = [
  {
    title: "Search Engine Optimization",
    link: "service/search-engine-optimization",
    description:
      "The higher your business appears in the search result, the more likely it is that your potential customers will find and visit your website instead of your competitor.",
  },
  {
    title: "Google Ads Management",
    link: "service/google-ads-management",
    description:
      "The most effective feature of Google ads is that has become a highly preferred internet advertisement method, as is it is booming in the land of advertisement vastly.",
  },
  {
    title: "Repair Online Reputation ",
    link: "service/repair-online-reputation-corporate",
    description:
      "Our experts assist you in reforming your stippled digital reputation, by helping you to remove the negative links online and reinstating them with good information that reflects the positive approach of your brand or about you.",
  },
  {
    title: "Amazon Store Management",
    link: "service/amazon-store-management",
    description:
      "In order to take the burden off your shoulders, we are here to help you with product listing on Amazon that will facilitate you to focus on nurturing your business rather than fretting over managing the products on Amazon.",
  },
  {
    title: "Shopify Store Management",
    link: "service/shopify-store-management",
    description:
      "Our experts can assist you with your web store and you will get your store running in no time, which will help you to cater to all your business requirements.",
  },
  {
    title: "Online Reputation Marketing",
    link: "service/online-reputation-marketing-corporate",
    description:
      "Removing negative reviews and creating a positive image of you, your company, and anything associated with your Business, despite the source, is the top priority of our online Business reputation management plan.",
  },
  {
    title: "Website development",
    link: "service/wordpress-development",
    description:
      "Our developers ensure to create the best designs that will make your website eloquent and more beautiful.",
  },
  {
    title: "Shopify Development",
    link: "service/shopify-development",
    description:
      "Our Company offers a full package of creative state-of-the-art strategic services for your eCommerce businesses.",
  },
];


// const cityToStateMap = {
//     lancaster: "California",
//     // Add other city-to-state mappings as needed
//   };

const extractStateFromCity = (city) => {
  // Normalize the city name to handle variations
  const normalizedCity = city.toLowerCase().replace(/\s+/g, "");
  return cityToStateMap[normalizedCity] || city;
};

const getCitiesForState = (state) => {
  const normalizedState = state.replace(/\s+/g, "");
  return stateToCitiesMap[normalizedState] || [];
};

// const extractTitleFromPath = (path) => {
//   const parts = path.split("/");
//   return parts[parts.length - 1].replace(/-/g, " "); // Extract the last part and replace dashes with spaces
// };

const LocationsPage5 = () => {
  const [city, setCity] = useState(""); // State to hold the city name
  const [location, setLocation] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const path = window.location.pathname; // Get the current path
    const title = extractTitleFromPath(path); // Extract title from path
    const stateName = extractStateFromCity(title); // Determine state name based on city or state
    setLocation(stateName);
    const stateCities = getCitiesForState(stateName); // Get cities for the state
    setCities(stateCities);
  }, []);

  return (
    <>
      <section className="sectionPadding locationPage bg-gray">
        <div className="container">
          <div className={`row align-items-center`}>
            <div className="col-md-5">
              <h2 className="title-xl fw-bold mt-0">
                What Local SEO Ranking Factors Do {location} Businesses Need to
                Cover?
              </h2>
              <p>
                When it comes to local SEO, Google looks at various
                <br /> factors before ranking business websites locally. Here
                are
                <br /> some of the factors that businesses should cover if they
                <br /> want to rank locally:
              </p>
              <ul>
                <li>Google My Business Listing (GMB)</li>
                <li>Domain Authority of the Website</li>
                <li>Name, Address, & Phone Number or NAP Citations</li>
                <li>High Local Click-through Rate</li>
                <li>Local Keywords in the Website</li>
                <li>High-quality Local Search Citations</li>
                <li>UI/UX of the Website</li>
                <li>Link Signals</li>
              </ul>
            </div>
            <div className="col-md-5">
              <h2 className="title-xl fw-bold mt-0">
                What Local SEO Ranking Factors Do {location} Businesses Need to
                Cover?
              </h2>
              <p>
                When it comes to local SEO, Google looks at various
                <br /> factors before ranking business websites locally. Here
                are
                <br /> some of the factors that businesses should cover if they
                <br /> want to rank locally:
              </p>
              <ul>
                <li>We Target Local Business Keywords</li>
                <li>We Optimize Google My Business Listing</li>
                <li>We Do High-Quality Local Search Citations</li>
                <li>We Do Optimum On-Page SEO</li>
                <li>We Do Niche-Relevant Link-Building</li>
                <li>We Do Local Content Marketing</li>
                <li>We Create Location-Based Landing Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionPadding">
        <div className="container">
          <div
            className="col-md-7 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="title-xxl fw-bold">
              Why Do {location} Businesses Need an SEO Services Company?
            </h1>
            <p>
              If your business is based in {location}, you shouldn’t be wasting any
              time and immediately take action towards strengthening your
              business’ online presence. Having a solid online presence is very
              necessary if you want to gain a competitive edge over competitors.
              <br></br>
            </p>
            <p>
              {" "}
              And, there’s no other better way to have a solid online presence
              than having an official website that reflects the services that
              your business offers. However, what if you have a website that’s
              built pretty nicely but still is not able to attract your
              customers.”
              <br />
            </p>
            <p>
              That’s when an SEO services company in {location} comes into action.
              A {location} SEO company will optimize your website in terms of all
              SEO parameters and make sure that your customers are able to find
              it online.
              <br />
            </p>
            <p>
              Here’s how you can benefit from hiring us as your {location} SEO
              company:”
              <br />
            </p>
          </div>
        </div>
      </section>
      <section className="sectionPadding locationPage">
        <div className="container">
          <div className={`row `}>
            <div className="col-md-5">
              <h2 className="title-xl fw-bold mt-0">We Help Build Integrity</h2>
              <p>
                For your {location} business to cement its place as a market leader
                in the online realm, it needs to build integrity and gain
                customers’ trust.
              </p>
              <p>
                First impressions matter – that’s why your website should
                provide your customers with the best user experience and provide
                up-to-date information regarding your business.
              </p>
              <p>
                We make sure that your website is built to address every issue
                of your customers and looks more appealing, functional, and easy
                to find to your customers.
              </p>
            </div>
            <div className="col-md-7">
              <img
                className="portfolio_img_1 mt-4 w-100"
                src={aboutSectionImage}
                alt="side-img"
                title="clipboard-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sectionPadding locationPage bg-gray">
        <div className="container">
          <div className={`row `}>
            <div className="col-md-7">
              <img
                className="portfolio_img_1 mt-4 w-100"
                src={aboutSectionImage2}
                alt="side-img"
                title="clipboard-image"
              />
            </div>
            <div className="col-md-5">
              <h2 className="title-xl fw-bold mt-0">
                We Smartly Target Your Customers
              </h2>
              <p>
                Another most significant benefit of hiring us for doing local
                SEO for your business is that we know how to attract customers
                for any business. We know what your customers’ intent is and
                what they think.
              </p>
              <p>
                Understanding the customers’ preferences is crucial. It helps a
                business generate more revenue in the long run.
              </p>
              <p>
                Therefore, by doing SEO of your business website in accordance
                with your target customers’ intent, we make sure that your
                business has solid online visibility.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionPadding locationPage">
        <div className="container">
          <div className={`row align-items-center`}>
            <div className="col-md-5">
              <h2 className="title-xl fw-bold mt-0">Industries:-</h2>
              <ul>
                <li>SEO for Lawyers</li>
                <li>SEO for Local Business</li>
                <li>SEO for Local Small Business</li>
                <li>SEO for E-commerce</li>
                <li>SEO for Hotels and restaurants</li>
                <li>SEO for Auto Industries</li>
                <li>SEO for Doctors</li>
                <li>SEO for Dentists</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionPadding bg-gray">
        <div className="container">
          <div
            className="col-md-7 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="title-xxl fw-bold ">Services</h1>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            {services.map((services, index) => (
              <div className="col-lg-4 col-md-4 mb-4 " key={index}>
                <div className="cardWrap px-4 py-4 type1 bg-white hasShadow h-100">
                  {/* <div className="cardIcon cardIcon-Type1">
                                        <img src={service.icon} alt={service.title} />
                                    </div> */}
                  <div className="cardInfo">
                    <a href={services.link} className="title-md fw-bold">
                      <h2 className="cardTitle title-md fw-bold">
                        {services.title}
                      </h2>
                    </a>
                    <p className="cardDescription text-sm mb-0">
                      {services.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sectionPadding locationPage bg-gray">
        <div className="container">
          <div className={`row align-items-center`}>
            <h2 className="title-xl fw-bold mt-0">
              Areas we covered in {location}:-
            </h2>
            <div className="col-md-4">
              <ul>
                {cities.map((city, index) => (
                  <li key={index}>{city}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  function extractTitleFromPath(path) {
    const parts = path.split("/");
    const lastPart = parts[parts.length - 1];
    // Remove "SEO services" and replace dashes with spaces
    const formattedTitle = lastPart
      .replace(/SEO-services-/i, "")
      .replace(/-/g, " ");
    return formattedTitle;
  }
};

export default LocationsPage5;
