import React from 'react';
import Portfolio from '../components/Portfolio';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import Navbar from '../components/Nabvar';

function PortfolioPage() {
  return (
    <>
      <ScrollToTop />
      <Navbar/>
      <Portfolio />
      <Footer/>
    </>
  );
}

export default PortfolioPage;