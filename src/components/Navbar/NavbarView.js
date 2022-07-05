import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  MobileIcon,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
const scrollUp = () => {
scroll.scrollToTop();
}
const NavbarView = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"
          onClick={scrollUp}>ivanczar2013@gmail.com | @ivanczar</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home"
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="work"
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}>Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="hireme"
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}>Hire Me</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/IvanCzar_Resume.pdf" target="_blank" download>Resume</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarView;
