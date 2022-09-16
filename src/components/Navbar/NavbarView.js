import React from 'react';
import { FaBars } from 'react-icons/fa';
// import Dropdown from './Dropdown';
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
  DownloadIcon,
} from './NavbarElements';
// import { animateScroll as scroll } from "react-scroll";
// const scrollUp = () => {
// scroll.scrollToTop();
// }
const NavbarView = ({ toggle }) => {
  return (
    <>

      <Nav>
        <NavbarContainer>
          {/* <Dropdown/> */}
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
            <NavItem>
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
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='IvanCzar_Resume.pdf' target='_blank' download>
              Resume (PDF)
              <DownloadIcon />
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarView;
