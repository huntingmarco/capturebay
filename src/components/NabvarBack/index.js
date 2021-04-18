import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import {Nav, NavbarContainer, NavLogo, MobileIcon,NavMenu,NavItem,NavLinks,NavLinksPage, NavBtn,NavBtnLink} from './NavbarElementsBack';
import logo from '../../images/logo.png';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
          setScrollNav(true);
        } else {
          setScrollNav(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', changeNav);
      }, []);
    
      const toggleHome = () => {
        scroll.scrollToTop();
      };

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome} to="/"><img src={logo} width="60" height="50" />capturebay</NavLogo>
                    
                    {/* <NavBtn>
                        <NavBtnLink to="/contactus" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Contact Us</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
};

export default Navbar
