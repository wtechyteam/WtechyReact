import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { sitemapDataUSA } from './data/sitemapData.jsx';
import { Helmet } from 'react-helmet'; // Import Helmet


// Main Site Pages Start
import HomePage from './HomePage';
import AboutUs from './AboutUs.jsx';
import Insights from './Insights.jsx';
import InsightsDetailPage from './insightsDetailPage.jsx';
import Portfolio from './Portfolio.jsx';
import TopWorkMarketplaces from './TopWorkMarketplaces.jsx';
import Careers from './career/CareersList.jsx';
import ApplyForm from './career/JobForm.jsx';
import Services from './Services.jsx';
import ContactUS from './ContactUS.jsx';
import ErrorPage from './ErrorPage.jsx';
import LocationsFront from './locationsFront.jsx';
// This is for Main Pages End

// This is for Services Pages Start
import GoogleAds from './service/servicePages/googleAds/googleAds.jsx'
import SearchEngineOpt from './service/servicePages/searchEngineOpt/searchEngineOpt.jsx'
import ContentMarketing from './service/servicePages/contentMarketing/contentMarketing.jsx';
import SocialMediaOpt from './service/servicePages/socialMediaOpt/socialMediaOpt.jsx';
import ShopifyDevelopment from './service/websiteDevelopment/shopifyDevelopment/shopifyDevelopment.jsx';
import WordpressDevelopment from './service/websiteDevelopment/wordPressDevelopment/wordpressDevelopment.jsx';
import Corporate from './service/onlineRepuMarketing/corporate/corporate.jsx';
import Personal from './service/onlineRepuMarketing/personal/personal.jsx';
import RepairCorporate from './service/repairOnlineRepu/corporate/corporate.jsx';
import RepairPersonal from './service/repairOnlineRepu/personal/personal.jsx';
import AmazonStore from './service/eComStore/amazonStore/amazonStore.jsx';
import CustomEcom from './service/eComStore/customEcom/customEcom.jsx';
import EbayStore from './service/eComStore/eBayStore/eBayStore.jsx';
import ShopifyStore from './service/eComStore/shopifyStore/shopifyStore.jsx';
// This is for Services Pages End

import CareersDetail from './career/CareerDetail.jsx';
import LinkedInAdvertising from './service/serviceCardPages/linkedInAdvertising.jsx';
import TwitterAdvertising from './service/serviceCardPages/twitterAdvertising.jsx';
import YouTubeAdvertising from './service/serviceCardPages/youTubeAdvertising.jsx';
import Locations from './locations.jsx';



const SiteRoutes = () => {


    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-agency" element={<AboutUs />} />
                <Route path="/service" element={<Services />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<InsightsDetailPage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/top-work-marketplaces" element={<TopWorkMarketplaces />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/:slug" element={<CareersDetail />} />
                <Route path="/contact" element={<ContactUS />} />
                <Route path="/service/content-marketing" element={<ContentMarketing />} />
                <Route path="/service/google-ads-management" element={<GoogleAds />} />
                <Route path="/service/search-engine-optimization" element={<SearchEngineOpt />} />
                <Route path="/service/social-media-optimization" element={<SocialMediaOpt />} />
                <Route path="/service/shopify-development" element={<ShopifyDevelopment />} />
                <Route path="/service/wordpress-development" element={<WordpressDevelopment />} />
                <Route path="/service/online-reputation-marketing-corporate" element={<Corporate />} />
                <Route path="/service/online-reputation-marketing-personal" element={<Personal />} />
                <Route path="/service/repair-online-reputation-corporate" element={<RepairCorporate />} />
                <Route path="/service/repair-online-reputation-personal" element={<RepairPersonal />} />
                <Route path="/service/amazon-store-management" element={<AmazonStore />} />
                <Route path="/service/custom-e-commerce-store-management-2" element={<CustomEcom />} />
                <Route path="/service/ebay-store-management" element={<EbayStore />} />
                <Route path="/service/shopify-store-management" element={<ShopifyStore />} />
                <Route path="/service/linkedIn-advertising" element={<LinkedInAdvertising />} />
                <Route path="/service/twitter-advertising" element={<TwitterAdvertising />} />
                <Route path="/service/youTube-advertising" element={<YouTubeAdvertising />} />
                <Route path="/apply-form" element={<ApplyForm />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/locations" element={<LocationsFront/>} />
                <Route path="/seo-services-california" element={<Locations/>} />
                



            </Routes>
            
        </>

    )
}

export default SiteRoutes;