import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SidebarLinkV,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='discover'
            onClick={toggle}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to='services'
            onClick={toggle}
          >
            Services
          </SidebarLink>
          <SidebarLinkV
            to='/portfolio'
            onClick={toggle}
          >
            Portfolio
          </SidebarLinkV>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/contactus'>Contact Us</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
