import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  DriveIcon
} from './SidebarElements';
const SidebarView = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='home' onClick={toggle}>
              Home
            </SidebarLink>
            <SidebarLink to='about' onClick={toggle}>
              {' '}
              About
            </SidebarLink>
            {/* <SidebarLink to="work" onClick={toggle}>Work</SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink> */}
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute
              href='https://drive.google.com/file/d/1MmZOX9T7ng9cm21bnEWueOiHbnN7da80/view?usp=sharing'
              target='_blank'
            >
              Resume (PDF)
              <DriveIcon />
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SidebarView;
