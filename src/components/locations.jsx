import { useParams } from 'react-router-dom';
import InnerBanner from './common/InnerBanner';
import LocationsPage1 from './locationsPage/locationsPage1/LocationsPage1';
import LocationsPage2 from './locationsPage/locationsPage2/LocationsPage2';
import LocationsPage3 from './locationsPage/locationsPage3/locationsPage3';
import LocationsPage4 from './locationsPage/locationsPage4/LocationsPage4';
import LocationsPage5 from './locationsPage/locationsPage 5/LocationsPage5';
import { sitemapDataUSA } from './data/sitemapData';
import React, { useEffect, useState } from 'react';


const Locations = () => {

    const [city, setCity] = useState(""); // State to hold the city name

    // let { state } = useParams();
    // const title = `${state} Page`;
    // const { state } = useParams(); // Assuming 'state' is the parameter containing the title
    // const title = state ? `SEO Services Company ${state}` : "Default Title"; // Default title or use 'state' parameter if available
    useEffect(() => {
        const path = window.location.pathname; // Get the current path
        const title = extractTitleFromPath(path); // Extract title from path
        setCity(title);
    }, []);

    // Function to get pincodes for a given city
    function getPincodesForCity(city) {
        const cityData = sitemapDataUSA.find(item => item.title.toLowerCase() === city.toLowerCase());
        if (cityData && cityData.sublinks) {
            const pincodes = cityData.sublinks
                .filter(sublink => sublink.pincodes)
                .map(sublink => sublink.pincodes.split(',').filter(pin => pin.trim() !== ''));
            return pincodes.flat(); // Flatten the array of pincodes
        }
        return [];
    }



    return (<>


        <InnerBanner
            title={`SEO Services Company, ${city}`}
            info={"We Help Your Business Soar to Greater Heights"}
        />
        <LocationsPage1 />
        <LocationsPage2 pincodes={getPincodesForCity(city)} /> {/* Pass pincodes as props */}
        <LocationsPage3 />
        <LocationsPage4 />
        <LocationsPage5 />

    </>
    );
    function extractTitleFromPath(path) {
        const parts = path.split('/');
        const lastPart = parts[parts.length - 1];
        // Remove "SEO services" and replace dashes with spaces
        const formattedTitle = lastPart.replace(/SEO-services-/i, '').replace(/-/g, ' ');
        return formattedTitle;
    }
};

export default Locations;
