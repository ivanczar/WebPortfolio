import React from 'react';
import { FaBars } from 'react-icons/fa';
import Dropdown from './Dropdown';
import {
  Nav,
  NavbarContainer,
  // NavLogo,
  NavMenu,
  MobileIcon,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  DriveIcon,
} from './NavbarElements';
// import { animateScroll as scroll } from "react-scroll";
// const scrollUp = () => {
// scroll.scrollToTop();
// }
const NavbarView = ({ toggle, toggleTheme, isDark }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Dropdown toggleTheme={toggleTheme} isDark={isDark}/>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='home'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to='work'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Work
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                Contact
              </NavLinks>
            </NavItem> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              href='https://drive.google.com/file/d/1MmZOX9T7ng9cm21bnEWueOiHbnN7da80/view?usp=sharing'
              target='_blank'
            >
              Resume (PDF)
              <DriveIcon />
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarView;
