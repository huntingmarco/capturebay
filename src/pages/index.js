import React, {useState, useEffect } from  'react';
import Navbar from '../components/Nabvar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree
  } from '../components/InfoSection/Data';
import Services from '../components/Services';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        document.title = "capturebay"
     }, []);
    
      

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <Footer />
        </>
    );
};

export default Home;

