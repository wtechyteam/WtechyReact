import React from 'react';
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
import './App.scss';





function App() {

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
        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;