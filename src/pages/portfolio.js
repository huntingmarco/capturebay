import React, {useState} from 'react';
import Portfolio from '../components/Portfolio';
import PortfolioVideo from '../components/PortfolioVideo';
import Footer from '../components/Footer';
import Navbar from '../components/NabvarBack';

function PortfolioPage() {
 

  return (
    <>
      <Navbar />
      <Portfolio />
      <PortfolioVideo />
      <Footer/>
    </>
  );
}

export default PortfolioPage;