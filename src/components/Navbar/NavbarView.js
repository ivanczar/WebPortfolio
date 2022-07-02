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

const NavbarView = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> Auckland, New Zealand</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="work">Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="hireme">Hire Me</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/resume">Resume</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarView;
