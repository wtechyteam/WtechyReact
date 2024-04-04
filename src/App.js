// import React, { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/header/header';
// import Footer from './components/footer/footer';

// import HomePage from './components/HomePage';
// import AboutUs from './components/AboutUs.jsx';
// import Insights from './components/Insights.jsx';
// import Portfolio from './components/Portfolio.jsx';
// import TopWorkMarketplaces from './components/TopWorkMarketplaces.jsx';
// import Careers from './components/Careers.jsx';
// import ContactUS from './components/ContactUS.jsx';


// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './assets/styles/customStyle.scss';
// import './App.scss';

// // This is for Added Animations Start
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// // This is for Added Animations End

// function App() {


//   useEffect(() => {
//     AOS.init({
//       // Global settings:
//       disable: window.innerWidth < 1024, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//       startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
//       initClassName: "aos-init", // class applied after initialization
//       animatedClassName: "aos-animate", // class applied on animation
//       useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//       disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//       debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//       throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
//       // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//       offset: 150, // offset (in px) from the original trigger point
//       delay: 0, // values from 0 to 3000, with step 50ms
//       duration: 400, // values from 0 to 3000, with step 50ms
//       easing: "ease", // default easing for AOS animations
//       once: true, // whether animation should happen only once - while scrolling down
//       mirror: false, // whether elements should animate out while scrolling past them
//       anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
//     });
//   }, []);

//   return (
//     <div className="App">
//       <Header />
//       <main  >
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about-agency" element={<AboutUs />} />
//           <Route path="/insights" element={<Insights />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/top-work-marketplaces" element={<TopWorkMarketplaces />} />
//           <Route path="/careers" element={<Careers />} />
//           <Route path="/contact" element={<ContactUS />} />
//         </Routes>
//       </main>
//       <Footer />

//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs.jsx';
import Insights from './components/Insights.jsx';
import Portfolio from './components/Portfolio.jsx';
import TopWorkMarketplaces from './components/TopWorkMarketplaces.jsx';
import Careers from './components/Careers.jsx';
import ContactUS from './components/ContactUS.jsx';


import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/customStyle.scss';
import './App.scss';

// This is for Added Animations Start
import AOS from 'aos';
import 'aos/dist/aos.css';
import GoogleAds from './components/service/servicePages/googleAds/googleAds.jsx'
import SearchEngineOpt from './components/service/servicePages/searchEngineOpt/searchEngineOpt.jsx'
import ContentMarketing from './components/service/servicePages/contentMarketing/contentMarketing.jsx';
import SocialMediaOpt from './components/service/servicePages/socialMediaOpt/socialMediaOpt.jsx';
import ShopifyDevelopment from './components/service/websiteDevelopment/shopifyDevelopment/shopifyDevelopment.jsx';
import WordpressDevelopment from './components/service/websiteDevelopment/wordPressDevelopment/wordpressDevelopment.jsx';
import Corporate from './components/service/onlineRepuMarketing/corporate/corporate.jsx';
import Personal from './components/service/onlineRepuMarketing/personal/personal.jsx';
import RepairCorporate from './components/service/repairOnlineRepu/corporate/corporate.jsx';
import RepairPersonal from './components/service/repairOnlineRepu/personal/personal.jsx';
import AmazonStore from './components/service/eComStore/amazonStore/amazonStore.jsx';
import CustomEcom from './components/service/eComStore/customEcom/customEcom.jsx';
import EbayStore from './components/service/eComStore/eBayStore/eBayStore.jsx';
import ShopifyStore from './components/service/eComStore/shopifyStore/shopifyStore.jsx';
// This is for Added Animations End

function App() {


  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: window.innerWidth < 1024, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main  >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-agency" element={<AboutUs />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/top-work-marketplaces" element={<TopWorkMarketplaces />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/contentMarket" element={<ContentMarketing />} />
          <Route path="/googleAds" element={<GoogleAds />} />
          <Route path="/searchEngine" element={<SearchEngineOpt />} />
          <Route path="/socialMedia" element={<SocialMediaOpt />} />
          <Route path="/shopifyDev" element={<ShopifyDevelopment />} />
          <Route path="/wordpressDev" element={<WordpressDevelopment />} />
          <Route path="/onlineCorporate" element={<Corporate />} />
          <Route path="/onlinePersonal" element={<Personal />} />
          <Route path="/repairCorporate" element={<RepairCorporate />} />
          <Route path="/repairPersonal" element={<RepairPersonal />} />
          <Route path="/amazonStore" element={<AmazonStore />} />
          <Route path="/customECom" element={<CustomEcom />} />
          <Route path="/ebayStore" element={<EbayStore />} />
          <Route path="/shopifyStore" element={<ShopifyStore />} />

        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;